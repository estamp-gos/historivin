import React, { useState } from "react";

const HeroTwo = () => {
  const [vinNumber, setVinNumber] = useState("");
  const [activeTab, setActiveTab] = useState("vin");

  const handleCheck = (e) => {
    e.preventDefault();
    const pricingSection = document.querySelector('#pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero-glass" id="hero">
      {/* Decorative Elements */}
      <div className="hero-blob blob-1"></div>
      <div className="hero-blob blob-2"></div>
      <div className="hero-blob blob-3"></div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content animate-fade-in-up">
              {/* Badge */}
              <div className="hero-badge">
                <span className="badge-dot"></span>
                <span>Trusted by 1M+ Users Worldwide</span>
              </div>

              {/* Title */}
              <h1 className="hero-title">
                <span className="title-gradient">Historivin</span> Can Save You
                <span className="title-highlight"> Thousands</span>
              </h1>

              <p className="hero-subtitle">
                About 40% of used cars carry documented accident damage, and nearly
                20% sit under an open safety recall. One quick VIN check can flag
                those issues before your money leaves your pocket.
              </p>

              {/* VIN Checker Glass Card */}
              <div className="vin-checker-glass">
                <div className="tab-pills">
                  <button
                    className={`tab-pill ${activeTab === 'vin' ? 'active' : ''}`}
                    onClick={() => setActiveTab('vin')}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 17H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-4" />
                      <path d="M12 15l5 6H7l5-6z" />
                    </svg>
                    by VIN
                  </button>
                  <button
                    className={`tab-pill ${activeTab === 'plate' ? 'active' : ''}`}
                    onClick={() => setActiveTab('plate')}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="6" width="20" height="12" rx="2" />
                      <path d="M6 12h.01M12 12h.01M18 12h.01" />
                    </svg>
                    by License Plate
                  </button>
                </div>

                <form onSubmit={handleCheck} className="vin-form">
                  <div className="input-row">
                    <input
                      type="text"
                      placeholder="17-character VIN/License Plate Num"
                      value={vinNumber}
                      onChange={(e) => setVinNumber(e.target.value)}
                      className="vin-input-glass"
                    />
                    <button type="submit" className="check-btn-glass">
                      <span>Check Now</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <div className="input-hints">
                    <a href="#" className="hint-link">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                        <path d="M12 17h.01" />
                      </svg>
                      Where to find VIN?
                    </a>
                  </div>
                </form>
              </div>

              {/* Stats */}
              <div className="hero-stats-row">
                <div className="stat-glass">
                  <div className="stat-icon-glass">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                    </svg>
                  </div>
                  <div className="stat-info">
                    <span className="stat-number">1M+</span>
                    <span className="stat-label">Users</span>
                  </div>
                </div>
                <div className="stat-glass">
                  <div className="stat-icon-glass">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                  </div>
                  <div className="stat-info">
                    <span className="stat-number">70+</span>
                    <span className="stat-label">Data Sources</span>
                  </div>
                </div>
                <div className="stat-glass">
                  <div className="stat-icon-glass">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                    </svg>
                  </div>
                  <div className="stat-info">
                    <span className="stat-number">150+</span>
                    <span className="stat-label">Countries</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-visual animate-fade-in-right">
              <div className="hero-image-container">
                <img
                  src="/hero.webp"
                  alt="Vehicle History Report"
                  className="hero-main-img"
                />
                {/* Floating Elements */}
                <div className="floating-card floating-1">
                  <div className="fc-icon green">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                  </div>
                  <div className="fc-text">
                    <span className="fc-title">No Accidents</span>
                    <span className="fc-subtitle">Clean History</span>
                  </div>
                </div>
                <div className="floating-card floating-2">
                  <div className="fc-icon purple">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div className="fc-text">
                    <span className="fc-title">NMVTIS Verified</span>
                    <span className="fc-subtitle">Official Source</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-glass {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 40px 0 100px;
          background: linear-gradient(180deg, #FFFFFF 0%, #faf8fc 50%, #FFFFFF 100%);
          overflow: hidden;
        }

        /* Decorative Blobs */
        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.5;
          pointer-events: none;
        }

        .blob-1 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, rgba(190, 121, 223, 0.4) 0%, rgba(251, 207, 252, 0.3) 100%);
          top: -150px;
          right: -100px;
          animation: float 8s ease-in-out infinite;
        }

        .blob-2 {
          width: 400px;
          height: 400px;
          background: rgba(251, 207, 252, 0.5);
          bottom: -100px;
          left: -100px;
          animation: float 10s ease-in-out infinite reverse;
        }

        .blob-3 {
          width: 300px;
          height: 300px;
          background: rgba(190, 121, 223, 0.3);
          top: 40%;
          left: 30%;
          animation: float 12s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        /* Badge */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(190, 121, 223, 0.2);
          border-radius: 50px;
          font-size: 14px;
          font-weight: 500;
          color: #1a1a2e;
          margin-bottom: 24px;
          animation: fadeInDown 0.6s ease;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #BE79DF, #FBCFFC);
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Title */
        .hero-title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 800;
          line-height: 1.15;
          color: #1a1a2e;
          margin-bottom: 24px;
        }

        .title-gradient {
          background: linear-gradient(135deg, #BE79DF 0%, #9a5cbf 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .title-highlight {
          position: relative;
        }

        .title-highlight::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 4px;
          width: 100%;
          height: 12px;
          background: linear-gradient(90deg, rgba(251, 207, 252, 0.6), rgba(190, 121, 223, 0.3));
          z-index: -1;
          border-radius: 4px;
        }

        .hero-subtitle {
          font-size: 1.125rem;
          line-height: 1.7;
          color: #4a4a68;
          margin-bottom: 32px;
          max-width: 540px;
        }

        /* VIN Checker Glass Card */
        .vin-checker-glass {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 24px;
          padding: 28px;
          box-shadow: 0 8px 32px rgba(168, 10, 244, 0.15);
          margin-bottom: 40px;
          margin-left: auto;
          margin-right: auto;
          max-width: 540px;
        }

        .tab-pills {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
        }

        .tab-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: transparent;
          border: 2px solid rgba(190, 121, 223, 0.2);
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          color: #4a4a68;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab-pill:hover {
          border-color: #BE79DF;
          color: #BE79DF;
        }

        .tab-pill.active {
          background: linear-gradient(135deg, #BE79DF 0%, #FBCFFC 100%);
          border-color: transparent;
          color: white;
          box-shadow: 0 4px 15px rgba(190, 121, 223, 0.3);
        }

        .tab-pill svg {
          opacity: 0.8;
        }

        .vin-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .input-row {
          display: flex;
          gap: 12px;
        }

        .vin-input-glass {
          flex: 1;
          padding: 18px 24px;
          background: rgba(255, 255, 255, 0.9);
          border: 2px solid rgba(190, 121, 223, 0.15);
          border-radius: 16px;
          font-size: 16px;
          color: #1a1a2e;
          transition: all 0.3s ease;
        }

        .vin-input-glass:focus {
          outline: none;
          border-color: #BE79DF;
          box-shadow: 0 0 0 4px rgba(190, 121, 223, 0.1);
        }

        .vin-input-glass::placeholder {
          color: #a0a0b8;
        }

        .check-btn-glass {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 18px 32px;
          background: linear-gradient(135deg, #BE79DF 0%, #d4a3e8 100%);
          border: none;
          border-radius: 16px;
          font-size: 16px;
          font-weight: 600;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          box-shadow: 0 4px 15px rgba(190, 121, 223, 0.3);
        }

        .check-btn-glass:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(190, 121, 223, 0.4);
        }

        .check-btn-glass:active {
          transform: translateY(-1px);
        }

        .check-btn-glass svg {
          transition: transform 0.3s ease;
        }

        .check-btn-glass:hover svg {
          transform: translateX(4px);
        }

        .input-hints {
          display: flex;
          gap: 20px;
        }

        .hint-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          color: #7a7a96;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .hint-link:hover {
          color: #BE79DF;
        }

        /* Stats Row */
        .hero-stats-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .stat-glass {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .stat-glass:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(190, 121, 223, 0.15);
        }

        .stat-icon-glass {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #BE79DF 0%, #FBCFFC 100%);
          border-radius: 12px;
          color: white;
        }

        .stat-info {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1a1a2e;
        }

        .stat-label {
          font-size: 0.8rem;
          color: #7a7a96;
        }

        /* Hero Visual */
        .hero-visual {
          position: relative;
          z-index: 2;
        }

        .hero-image-container {
          position: relative;
        }

        .hero-main-img {
          width: 100%;
          max-width: 550px;
          height: auto;
          border-radius: 24px;
          box-shadow: 0 30px 60px rgba(168, 10, 244, 0.2);
          margin-top: -26rem;
        }

        /* Floating Cards */
        .floating-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          animation: float 6s ease-in-out infinite;
        }

        .floating-1 {
          top: 20%;
          left: -30px;
          animation-delay: 0s;
        }

        .floating-2 {
          bottom: 20%;
          right: -20px;
          animation-delay: 2s;
        }

        .fc-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
        }

        .fc-icon.green {
          background: linear-gradient(135deg, #10b981, #34d399);
          color: white;
        }

        .fc-icon.purple {
          background: linear-gradient(135deg, #BE79DF, #FBCFFC);
          color: white;
        }

        .fc-text {
          display: flex;
          flex-direction: column;
        }

        .fc-title {
          font-size: 14px;
          font-weight: 600;
          color: #1a1a2e;
        }

        .fc-subtitle {
          font-size: 12px;
          color: #7a7a96;
        }

        /* Animations */
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        /* Responsive */
        @media (max-width: 991px) {
          .hero-glass {
            padding: 120px 0 80px;
          }

          .hero-title {
            font-size: clamp(2rem, 6vw, 2.75rem);
          }

          .hero-visual {
            margin-top: 60px;
            text-align: center;
          }

          .hero-main-img {
            max-width: 100%;
          }

          .floating-card {
            display: none;
          }

          .input-row {
            flex-direction: column;
          }

          .check-btn-glass {
            width: 100%;
            justify-content: center;
          }

          .hero-stats-row {
            justify-content: center;
          }
        }

        @media (max-width: 576px) {
          .hero-glass {
            padding: 100px 0 60px;
          }

          .vin-checker-glass {
            padding: 20px;
          }

          .tab-pill {
            padding: 10px 16px;
            font-size: 13px;
          }

          .tab-pill svg {
            display: none;
          }

          .stat-glass {
            flex: 1;
            min-width: 140px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroTwo;
