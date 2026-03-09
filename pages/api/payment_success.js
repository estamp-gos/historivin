import nodemailer from 'nodemailer';
import { Paddle, Environment } from '@paddle/paddle-node-sdk';

const paddle = new Paddle(process.env.PADDLE_API_KEY, {
  environment: Environment.production,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper function to get raw body from stream
function getRawBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      resolve(body);
    });
    req.on('error', reject);
  });
}

// Fetch customer details from Paddle API
async function getCustomerDetails(customerId) {
  try {
    if (!customerId) return null;
    const customer = await paddle.customers.get(customerId);
    return customer;
  } catch (error) {
    console.error('Failed to fetch customer details:', error);
    return null;
  }
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(req, res) {
  // Add CORS headers for webhook
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, paddle-signature');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Read raw body from stream since bodyParser is disabled
    const rawBody = await getRawBody(req);
    const payload = JSON.parse(rawBody);
    const eventType = payload.event_type;

    if (eventType === 'transaction.created' || eventType === 'transaction.completed') {
      const data = payload.data;
      const transactionId = data?.id || 'N/A';
      const customData = data?.custom_data || {};
      const productName = customData.product_name
        || data?.details?.line_items?.[0]?.product?.name
        || 'N/A';
      const totalRaw = data?.details?.totals?.total;
      const currency = data?.details?.totals?.currency_code || data?.currency_code || 'USD';
      const amount = totalRaw ? `${currency} ${(parseInt(totalRaw, 10) / 100).toFixed(2)}` : 'N/A';
      const vinOrPlate = customData.license_plate || customData.vin || 'N/A';
      const searchType = customData.search_type || 'N/A';

      // Fetch customer email & name from Paddle
      let customerEmail = 'N/A';
      let customerName = 'N/A';
      const customerId = data?.customer_id;
      if (customerId) {
        const customer = await getCustomerDetails(customerId);
        if (customer) {
          customerEmail = customer.email || 'N/A';
          customerName = customer.name || 'N/A';
        }
      }

      const subject = eventType === 'transaction.completed'
        ? '💰 Payment Successful! 🎉'
        : '🆕 New Transaction Created';

      const html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #2e7d32;">Payment Successful! 🎉</h2>
          <p>Hello Admin,</p>
          <p>A new payment has been received for a vehicle history report.</p>
          
          <h3 style="border-bottom: 2px solid #e0e0e0; padding-bottom: 8px;">Payment Details:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold;">Transaction ID:</td><td style="padding: 8px 0;">${transactionId}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Product:</td><td style="padding: 8px 0;">${productName}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Amount:</td><td style="padding: 8px 0;">${amount}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Customer Email:</td><td style="padding: 8px 0;">${customerEmail}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Customer Name:</td><td style="padding: 8px 0;">${customerName}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">${searchType === 'plate' ? 'License Plate' : 'VIN'}:</td><td style="padding: 8px 0;">${vinOrPlate}</td></tr>
          </table>
        </div>
      `;

      const text = `Payment Successful! 🎉\n\nHello Admin,\n\nA new payment has been received for a vehicle history report.\n\nPayment Details:\nTransaction ID: ${transactionId}\nProduct: ${productName}\nAmount: ${amount}\nCustomer Email: ${customerEmail}\nCustomer Name: ${customerName}\n${searchType === 'plate' ? 'License Plate' : 'VIN'}: ${vinOrPlate}`;

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'car.check.store@gmail.com',
        subject,
        text,
        html,
      });
    }

    res.status(200).json({ ok: true, event: eventType });
  } catch (error) {
    console.error('❌ Error handling webhook:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}

