import nodemailer from 'nodemailer';

export const config = {
  api: {
    bodyParser: false, // Disable Next.js's default bodyParser to handle raw body for signature verification
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
    const total = payload.data?.details?.totals?.total;
    const currency = payload.data?.currency_code;
    const checkoutURL = payload.data?.checkout?.url;

    if (eventType === 'transaction.created' || eventType === 'transaction.completed') {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'car.check.store@gmail.com',
        subject: '💰 Paddle Transaction Created!',
        text: `New transaction for ${total} ${currency}. Checkout at: ${checkoutURL}`,
      });
    }

    res.status(200).send('Webhook received');
  } catch (error) {
    console.error('❌ Error handling webhook:', error);
    res.status(500).send('Internal Server Error');
  }
}

