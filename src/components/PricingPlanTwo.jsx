import React, { useState, useEffect, useCallback } from "react";

const PricingPlanTwo = () => {
  const [userCountry, setUserCountry] = useState('US');
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    vin: ''
  });
  const [loading, setLoading] = useState(false);

  // Paddle Configuration
  const CONFIG = {
    clientToken: "live_57a7704d22d689a024bdfcbfa1c",
    prices: {
      silver: "pri_01k34bw78gwcmqk98s3jjda6k4",
      gold: "pri_01kcvwfzy6kffsgz4v9s3d8fx9",
      platinum: "pri_01kcvwnemp9042xv448gefr5ct"
    }
  };

  // Base prices in USD
  const BASE_PRICES = {
    silver: 40.99,
    gold: 60.99,
    platinum: 90.99
  };

  // Exchange rates
  const EXCHANGE_RATES = {
    US: 1, GB: 0.78, CA: 1.35, AU: 1.45, DE: 0.92, FR: 0.92,
    JP: 145, IN: 83.5, MY: 4.45
  };

  // Currency formats
  const CURRENCY_FORMATS = {
    US: { symbol: '$', position: 'before', code: 'USD' },
    GB: { symbol: '£', position: 'before', code: 'GBP' },
    CA: { symbol: 'CA$', position: 'before', code: 'CAD' },
    AU: { symbol: 'A$', position: 'before', code: 'AUD' },
    DE: { symbol: '€', position: 'after', code: 'EUR' },
    FR: { symbol: '€', position: 'after', code: 'EUR' },
    JP: { symbol: '¥', position: 'before', code: 'JPY' },
    IN: { symbol: '₹', position: 'before', code: 'INR' },
    MY: { symbol: 'RM', position: 'before', code: 'MYR' }
  };

  // Detect user's country
  const detectUserCountry = useCallback(async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      if (data && data.country_code) {
        setUserCountry(data.country_code);
      }
    } catch (error) {
      setUserCountry('US');
    }
  }, []);

  // Initialize Paddle
  useEffect(() => {
    let isMounted = true;

    const initializePaddle = () => {
      if (window.Paddle && isMounted) {
        try {
          window.Paddle.Environment.set("production");
          window.Paddle.Setup({
            token: CONFIG.clientToken,
            eventCallback: function (event) {
              if (event.name === "checkout.completed") {
                setShowModal(false);
              }
            }
          });
        } catch (error) {
          console.error("Paddle initialization error:", error);
        }
      }
    };

    if (!window.Paddle) {
      const script = document.createElement('script');
      script.src = 'https://cdn.paddle.com/paddle/v2/paddle.js';
      script.onload = initializePaddle;
      document.head.appendChild(script);
    } else {
      initializePaddle();
    }

    detectUserCountry();

    return () => {
      isMounted = false;
    };
  }, [CONFIG.clientToken, detectUserCountry]);

  // Format price based on country
  const formatPrice = (price, countryCode) => {
    const format = CURRENCY_FORMATS[countryCode] || CURRENCY_FORMATS.US;
    const exchangeRate = EXCHANGE_RATES[countryCode] || 1;

    let convertedPrice = price * exchangeRate;

    if (countryCode === 'JP') {
      convertedPrice = Math.round(convertedPrice);
    } else {
      convertedPrice = convertedPrice.toFixed(2);
    }

    if (format.position === 'before') {
      return `${format.symbol}${convertedPrice}`;
    } else {
      return `${convertedPrice} ${format.symbol}`;
    }
  };

  const openModal = (planType) => {
    setSelectedPlan(planType);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPlan(null);
    setFormData({ name: '', email: '', vin: '' });
    setLoading(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendMail = async (data) => {
    try {
      await fetch('https://restless-haze-c6a3.mohamedalzafar.workers.dev/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const openPaddleCheckout = (planType, customerName, customerEmail, customerVin) => {
    try {
      const priceId = CONFIG.prices[planType.toLowerCase()];
      if (!priceId) {
        setLoading(false);
        return;
      }

      window.Paddle.Checkout.open({
        items: [{ priceId: priceId, quantity: 1 }],
        settings: { displayMode: "overlay", theme: "light", locale: "en" },
        customData: { plan: planType, name: customerName, email: customerEmail, vin: customerVin }
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const submitData = { plan: selectedPlan, name: formData.name, email: formData.email, vin: formData.vin };
    sendMail(submitData);
    openPaddleCheckout(selectedPlan, formData.name, formData.email, formData.vin);
  };

  const plans = [
    {
      id: 'silver',
      name: 'Silver',
      price: BASE_PRICES.silver,
      subtitle: 'Perfect for small vehicles',
      highlight: 'Up to 1000cc',
      features: [
        '1 Vehicle Report',
        'Market Value Range',
        'Title Information',
        'Safety Recall Checks',
        'Vehicle Specifications',
        'Odometer Readings',
        'Service Records'
      ],
      popular: false
    },
    {
      id: 'gold',
      name: 'Gold',
      price: BASE_PRICES.gold,
      subtitle: 'Most popular choice',
      highlight: 'Up to 1500cc',
      features: [
        '1 Vehicle Report',
        'Market Value Range',
        'Title Information',
        'Safety Recall Checks',
        'Vehicle Specifications',
        'Odometer Readings',
        'Service Records',
        'Accident History'
      ],
      popular: true
    },
    {
      id: 'platinum',
      name: 'Platinum',
      price: BASE_PRICES.platinum,
      subtitle: 'Complete coverage',
      highlight: '4x4 & 2000cc+',
      features: [
        '1 Vehicle Report',
        'Market Value Range',
        'Title Information',
        'Safety Recall Checks',
        'Vehicle Specifications',
        'Odometer Readings',
        'Service Records',
        'Accident History',
        'Warranty Information'
      ],
      popular: false
    }
  ];

  return (
    <>
      <section className="pricing-glass scroll-section" data-scroll="fade-up" id="pricing">
        <div className="container">
          {/* Section Header */}
          <div className="pricing-header">
            <span className="pricing-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
                <line x1="7" y1="7" x2="7.01" y2="7" />
              </svg>
              Pricing Plans
            </span>
            <h2 className="pricing-title">
              Choose Your <span className="text-gradient">Perfect Plan</span>
            </h2>
            <p className="pricing-subtitle">
              Get instant access to comprehensive vehicle history reports
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className={`pricing-card-glass ${plan.popular ? 'popular' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="popular-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    Most Popular
                  </div>
                )}

                <div className="plan-header">
                  <div className="plan-icon">
                    {plan.id === 'silver' && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="8" r="5" />
                        <path d="M3 21v-2a7 7 0 0114 0v2" />
                      </svg>
                    )}
                    {plan.id === 'gold' && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    )}
                    {plan.id === 'platinum' && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 15l-3 4.5 1.5-5L6 12l5 .5L12 7l1 5.5 5-.5-4.5 2.5 1.5 5L12 15z" />
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    )}
                  </div>
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-subtitle">{plan.subtitle}</p>
                </div>

                <div className="plan-price">
                  <span className="price-amount">{formatPrice(plan.price, userCountry)}</span>
                  <span className="price-period">one-time</span>
                </div>

                <div className="plan-highlight">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                  <span dangerouslySetInnerHTML={{
                    __html: plan.highlight.replace(/(\d+cc\+?)/g, '<strong>$1</strong>')
                  }} />
                </div>

                <ul className="feature-list-glass">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check-icon">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`plan-btn ${plan.popular ? 'primary' : 'secondary'}`}
                  onClick={() => openModal(plan.id)}
                >
                  <span>Get {plan.name} Plan</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Trust Section */}
          <div className="trust-section">
            <div className="trust-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>Secure Payment</span>
            </div>
            <div className="trust-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Instant Delivery</span>
            </div>
            <div className="trust-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>NMVTIS Verified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-glass" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="modal-header">
              <div className="modal-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 17H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-4" />
                  <path d="M12 15l5 6H7l5-6z" />
                </svg>
              </div>
              <h3 className="modal-title">{selectedPlan?.charAt(0).toUpperCase() + selectedPlan?.slice(1)} Plan</h3>
              <p className="modal-subtitle">Enter your details to continue</p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
              <div className="form-group">
                <label>Vehicle VIN Number</label>
                <input
                  type="text"
                  name="vin"
                  value={formData.vin}
                  onChange={handleInputChange}
                  required
                  placeholder="17-character VIN/License Plate Num"
                />
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? (
                  <span className="loading-spinner"></span>
                ) : (
                  <>
                    <span>Proceed to Payment</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .pricing-glass {
          padding: 100px 0;
          background: linear-gradient(180deg, #FFFFFF 0%, #faf8fc 30%, #faf8fc 70%, #FFFFFF 100%);
          position: relative;
          overflow: hidden;
        }

        .pricing-glass::before {
          content: '';
          position: absolute;
          top: 20%;
          left: -200px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(190, 121, 223, 0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .pricing-glass::after {
          content: '';
          position: absolute;
          bottom: 10%;
          right: -200px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(251, 207, 252, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Header */
        .pricing-header {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
          z-index: 2;
        }

        .pricing-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(190, 121, 223, 0.2);
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          color: #BE79DF;
          margin-bottom: 20px;
        }

        .pricing-title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 16px;
        }

        .text-gradient {
          background: linear-gradient(135deg, #BE79DF 0%, #9a5cbf 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .pricing-subtitle {
          font-size: 1.125rem;
          color: #7a7a96;
        }

        /* Pricing Grid */
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* Pricing Card */
        .pricing-card-glass {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 24px;
          padding: 36px 28px;
          position: relative;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pricing-card-glass:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 50px rgba(190, 121, 223, 0.2);
        }

        .pricing-card-glass.popular {
          background: linear-gradient(135deg, #BE79DF 0%, #d4a3e8 50%, #FBCFFC 100%);
          border: none;
          transform: scale(1.05);
          z-index: 1;
        }

        .pricing-card-glass.popular:hover {
          transform: scale(1.08) translateY(-8px);
        }

        .pricing-card-glass.popular .plan-name,
        .pricing-card-glass.popular .plan-subtitle,
        .pricing-card-glass.popular .price-amount,
        .pricing-card-glass.popular .price-period,
        .pricing-card-glass.popular .plan-highlight,
        .pricing-card-glass.popular .feature-list-glass li {
          color: white;
        }

        .pricing-card-glass.popular .plan-icon {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }

        .pricing-card-glass.popular .plan-highlight {
          background: rgba(255, 255, 255, 0.2);
        }

        .pricing-card-glass.popular .check-icon {
          background: rgba(255, 255, 255, 0.25);
          color: white;
        }

        /* Popular Badge */
        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 18px;
          background: white;
          color: #BE79DF;
          font-size: 13px;
          font-weight: 700;
          border-radius: 50px;
          box-shadow: 0 4px 15px rgba(190, 121, 223, 0.3);
        }

        /* Plan Header */
        .plan-header {
          text-align: center;
          margin-bottom: 24px;
        }

        .plan-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(190, 121, 223, 0.15) 0%, rgba(251, 207, 252, 0.15) 100%);
          border-radius: 16px;
          color: #BE79DF;
        }

        .plan-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a2e;
          margin: 0 0 4px 0;
        }

        .plan-subtitle {
          font-size: 0.9rem;
          color: #7a7a96;
          margin: 0;
        }

        /* Plan Price */
        .plan-price {
          text-align: center;
          margin-bottom: 20px;
        }

        .price-amount {
          font-size: 2.75rem;
          font-weight: 800;
          color: #1a1a2e;
          line-height: 1;
        }

        .price-period {
          display: block;
          font-size: 0.9rem;
          color: #7a7a96;
          margin-top: 4px;
        }

        /* Plan Highlight */
        .plan-highlight {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 12px;
          background: linear-gradient(135deg, rgba(190, 121, 223, 0.1) 0%, rgba(251, 207, 252, 0.1) 100%);
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #BE79DF;
          margin-bottom: 24px;
        }

        /* Feature List */
        .feature-list-glass {
          list-style: none;
          padding: 0;
          margin: 0 0 28px 0;
        }

        .feature-list-glass li {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
          font-size: 0.95rem;
          color: #4a4a68;
          border-bottom: 1px solid rgba(190, 121, 223, 0.08);
        }

        .feature-list-glass li:last-child {
          border-bottom: none;
        }

        .check-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          background: linear-gradient(135deg, rgba(190, 121, 223, 0.2) 0%, rgba(251, 207, 252, 0.2) 100%);
          border-radius: 50%;
          color: #BE79DF;
          flex-shrink: 0;
        }

        /* Plan Button */
        .plan-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 16px 24px;
          border-radius: 14px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }

        .plan-btn.secondary {
          background: rgba(190, 121, 223, 0.1);
          color: #BE79DF;
          border: 2px solid rgba(190, 121, 223, 0.3);
        }

        .plan-btn.secondary:hover {
          background: linear-gradient(135deg, #BE79DF 0%, #FBCFFC 100%);
          color: white;
          border-color: transparent;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(190, 121, 223, 0.3);
        }

        .plan-btn.primary {
          background: white;
          color: #BE79DF;
        }

        .plan-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(255, 255, 255, 0.3);
        }

        .plan-btn svg {
          transition: transform 0.3s ease;
        }

        .plan-btn:hover svg {
          transform: translateX(4px);
        }

        /* Trust Section */
        .trust-section {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
          margin-top: 60px;
          position: relative;
          z-index: 2;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #7a7a96;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .trust-item svg {
          color: #BE79DF;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-glass {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 30px;
          width: 100%;
          max-width: 440px;
          max-height: 97vh;
          overflow-y: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          position: relative;
          box-shadow: 0 25px 50px rgba(190, 121, 223, 0.25);
          animation: scaleIn 0.3s ease;
        }

        .modal-glass::-webkit-scrollbar {
          display: none;
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .modal-close {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(190, 121, 223, 0.1);
          border: none;
          border-radius: 10px;
          color: #BE79DF;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .modal-close:hover {
          background: rgba(190, 121, 223, 0.2);
          transform: rotate(90deg);
        }

        .modal-header {
          text-align: center;
          margin-bottom: 20px;
        }

        .modal-icon {
          width: 56px;
          height: 56px;
          margin: 0 auto 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #BE79DF 0%, #FBCFFC 100%);
          border-radius: 16px;
          color: white;
        }

        .modal-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #1a1a2e;
          margin: 0 0 6px 0;
        }

        .modal-subtitle {
          font-size: 0.9rem;
          color: #7a7a96;
          margin: 0;
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 0px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #1a1a2e;
        }

        .form-group input {
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.8);
          border: 2px solid rgba(190, 121, 223, 0.15);
          border-radius: 12px;
          font-size: 0.95rem;
          color: #1a1a2e;
          transition: all 0.3s ease;
        }

        .form-group input:focus {
          outline: none;
          border-color: #BE79DF;
          box-shadow: 0 0 0 4px rgba(190, 121, 223, 0.1);
        }

        .form-group input::placeholder {
          color: #a0a0b8;
        }

        .submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 24px;
          background: linear-gradient(135deg, #BE79DF 0%, #FBCFFC 100%);
          border: none;
          border-radius: 14px;
          font-size: 1rem;
          font-weight: 600;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 8px;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(190, 121, 223, 0.4);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .loading-spinner {
          width: 24px;
          height: 24px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Responsive */
        @media (max-width: 991px) {
          .pricing-glass {
            padding: 80px 0;
          }

          .pricing-card-glass.popular {
            transform: scale(1);
          }

          .pricing-card-glass.popular:hover {
            transform: translateY(-12px);
          }
        }

        @media (max-width: 768px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
          }

          .trust-section {
            gap: 20px;
          }

          .trust-item {
            font-size: 0.85rem;
          }

          .modal-glass {
            padding: 24px 20px;
          }
        }
      `}</style>
    </>
  );
};

export default PricingPlanTwo;
