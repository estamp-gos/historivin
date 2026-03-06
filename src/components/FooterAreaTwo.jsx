import React from "react";
import Link from "next/link";

const FooterAreaTwo = () => {
  return (
    <>
      <footer className="glass-footer scroll-section" data-scroll="fade-up">
        <div className="footer-gradient-bg">
          <div className="footer-orb footer-orb-1"></div>
          <div className="footer-orb footer-orb-2"></div>
        </div>
        
        <div className="footer-cta-section">
          <div className="container">
            <div className="glass-cta-card">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <span className="cta-badge">Get Started Today</span>
                  <h2 className="footer-cta-title">Save Thousands of Dollars</h2>
                  <p className="footer-cta-subtitle">
                    Learn everything there is to know about your next car
                  </p>
                </div>
                <div className="col-lg-5">
                  <div className="footer-vin-input">
                    <div className="tab-selector-footer">
                      <button className="tab-btn-footer active">by VIN</button>
                      <button className="tab-btn-footer">by License Plate</button>
                    </div>
                    <form className="vin-input-form-footer">
                      <input 
                        type="text"
                        placeholder="17-character VIN/License Plate Num"
                        className="vin-input-footer"
                      />
                      <button type="submit" className="check-btn-footer">
                        <i className="fas fa-search"></i>
                        Check Now
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="footer-badges">
              <div className="badge-item">
                <img src="https://epicvin.com/img2/security/png/niada-logo.png" alt="NIADA" />
              </div>
              <div className="badge-item">
                <img src="https://epicvin.com/img2/security/svg/blockchain-icon.svg" alt="Blockchain" />
              </div>
              <div className="badge-item">
                <img src="https://epicvin.com/img2/security/png/nmvtis-logo@2x.png" alt="NMVTIS" />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="footer-main-section">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget-glass">
                  <h4 className="footer-widget-title">
                    <i className="fas fa-headset"></i>
                    Customer Service
                  </h4>
                  <div className="footer-contact-info">
                    <p className="contact-time">
                      <i className="fas fa-clock"></i>
                      7 am - 6 pm EST Monday - Friday
                    </p>
                    <p className="contact-address">
                      <i className="fas fa-map-marker-alt"></i>
                      2980 NE 207th St, Suite 300-189<br />
                      Aventura, FL 33180 USA
                    </p>
                  </div>
                  <div className="footer-social-links">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-2 col-md-6">
                <div className="footer-widget-glass">
                  <h4 className="footer-widget-title">Company</h4>
                  <ul className="footer-links-glass">
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#affiliate">Affiliate Program</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="col-lg-2 col-md-6">
                <div className="footer-widget-glass">
                  <h4 className="footer-widget-title">Legal</h4>
                  <ul className="footer-links-glass">
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#refund">Refund Policy</a></li>
                    <li><a href="#privacy">Privacy Policy</a></li>
                    <li><a href="#terms">Terms & Conditions</a></li>
                    <li><a href="#sitemap">Sitemap</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="col-lg-2 col-md-6">
                <div className="footer-widget-glass">
                  <h4 className="footer-widget-title">Services</h4>
                  <ul className="footer-links-glass">
                    <li><a href="#dmv">DMV VIN Check</a></li>
                    <li><a href="#motorcycle">Motorcycle VIN Check</a></li>
                    <li><a href="#rv">RV VIN Lookup</a></li>
                    <li><a href="#plate">License Plate Lookup</a></li>
                    <li><a href="#sample">Sample Report</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget-glass">
                  <h4 className="footer-widget-title">Subscribe to Newsletter</h4>
                  <form className="newsletter-form-glass">
                    <div className="newsletter-input-wrapper">
                      <i className="fas fa-envelope"></i>
                      <input 
                        type="email" 
                        placeholder="Enter your email"
                        className="newsletter-input-glass"
                      />
                    </div>
                    <button type="submit" className="newsletter-btn-glass">
                      Subscribe
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </form>
                  <div className="footer-app-download">
                    <p className="app-text">Download our app</p>
                    <a href="#" className="app-link">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 text-center">
                <p className="copyright-text-glass">
                  © 2012 - 2025 Histori vin Store Vehicle History Reports. All Rights Reserved. 
                  Use of this Website constitutes acceptance of our{' '}
                  <a href="#terms">Terms & Conditions</a>,{' '}
                  <a href="#privacy">Privacy Policy</a>,{' '}
                  <a href="#refund">Refund Policy</a>.{' '}
                  This site is owned and operated by Histori vin Store - an approved NMVTIS data provider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .glass-footer {
          background: linear-gradient(180deg, #1a1a2e 0%, #16162a 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .footer-gradient-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .footer-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
        }

        .footer-orb-1 {
          width: 500px;
          height: 500px;
          background: #BE79DF;
          top: -200px;
          right: -100px;
        }

        .footer-orb-2 {
          width: 400px;
          height: 400px;
          background: #FBCFFC;
          bottom: -100px;
          left: -100px;
        }

        .footer-cta-section {
          padding: 80px 0 60px;
          position: relative;
        }

        .glass-cta-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 28px;
          padding: 50px;
          margin-bottom: 50px;
        }

        .cta-badge {
          display: inline-block;
          background: linear-gradient(135deg, rgba(190, 121, 223, 0.3) 0%, rgba(251, 207, 252, 0.3) 100%);
          color: #FBCFFC;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 16px;
          border: 1px solid rgba(251, 207, 252, 0.3);
        }

        .footer-cta-title {
          font-family: 'Poppins', sans-serif;
          font-size: 38px;
          font-weight: 700;
          color: white;
          margin-bottom: 12px;
        }

        .footer-cta-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 0;
        }

        .footer-vin-input {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          padding: 24px;
        }

        .tab-selector-footer {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          padding: 4px;
        }

        .tab-btn-footer {
          flex: 1;
          background: transparent;
          border: none;
          padding: 10px 16px;
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 8px;
        }

        .tab-btn-footer.active {
          background: linear-gradient(135deg, #BE79DF 0%, #FBCFFC 100%);
          color: white;
        }

        .vin-input-form-footer {
          display: flex;
          gap: 12px;
        }

        .vin-input-footer {
          flex: 1;
          padding: 14px 18px;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          font-size: 15px;
          background: rgba(255, 255, 255, 0.05);
          color: white;
          transition: all 0.3s ease;
        }

        .vin-input-footer::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .vin-input-footer:focus {
          outline: none;
          border-color: #BE79DF;
          background: rgba(255, 255, 255, 0.08);
        }

        .check-btn-footer {
          background: linear-gradient(135deg, #BE79DF 0%, #FBCFFC 100%);
          color: white;
          border: none;
          padding: 14px 28px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(190, 121, 223, 0.3);
        }

        .check-btn-footer:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(190, 121, 223, 0.4);
        }

        .footer-badges {
          display: flex;
          gap: 40px;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }

        .badge-item {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 16px 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .badge-item img {
          height: 36px;
          opacity: 0.8;
          filter: brightness(0) invert(1);
          transition: opacity 0.3s ease;
        }

        .badge-item:hover img {
          opacity: 1;
        }

        .footer-main-section {
          padding: 70px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-widget-glass {
          margin-bottom: 35px;
        }

        .footer-widget-title {
          font-family: 'Poppins', sans-serif;
          font-size: 17px;
          font-weight: 600;
          color: white;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-widget-title i {
          color: #BE79DF;
        }

        .footer-contact-info {
          margin-bottom: 24px;
        }

        .contact-time, .contact-address {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 12px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          line-height: 1.6;
        }

        .contact-time i, .contact-address i {
          color: #BE79DF;
          margin-top: 3px;
        }

        .footer-social-links {
          display: flex;
          gap: 12px;
        }

        .footer-social-links a {
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
        }

        .footer-social-links a:hover {
          background: linear-gradient(135deg, #BE79DF 0%, #FBCFFC 100%);
          border-color: transparent;
          transform: translateY(-3px);
        }

        .footer-links-glass {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links-glass li {
          margin-bottom: 12px;
        }

        .footer-links-glass a {
          font-family: 'Inter', sans-serif;
          color: rgba(255, 255, 255, 0.65);
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .footer-links-glass a:hover {
          color: #FBCFFC;
          padding-left: 8px;
        }

        .newsletter-form-glass {
          margin-bottom: 24px;
        }

        .newsletter-input-wrapper {
          position: relative;
          margin-bottom: 12px;
        }

        .newsletter-input-wrapper i {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255, 255, 255, 0.4);
        }

        .newsletter-input-glass {
          width: 100%;
          padding: 14px 16px 14px 44px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          color: white;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .newsletter-input-glass::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .newsletter-input-glass:focus {
          outline: none;
          border-color: #BE79DF;
          background: rgba(255, 255, 255, 0.08);
        }

        .newsletter-btn-glass {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #BE79DF 0%, #FBCFFC 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .newsletter-btn-glass:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(190, 121, 223, 0.35);
        }

        .app-text {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 10px;
        }

        .app-link img {
          height: 40px;
          width: auto;
          opacity: 0.9;
          transition: opacity 0.3s ease;
        }

        .app-link:hover img {
          opacity: 1;
        }

        .footer-bottom {
          background: rgba(0, 0, 0, 0.3);
          padding: 28px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .copyright-text-glass {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.8;
          margin: 0;
        }

        .copyright-text-glass a {
          color: #BE79DF;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .copyright-text-glass a:hover {
          color: #FBCFFC;
          text-decoration: underline;
        }

        @media (max-width: 991px) {
          .glass-cta-card {
            padding: 35px;
          }

          .footer-cta-title {
            font-size: 30px;
            text-align: center;
          }

          .footer-cta-subtitle {
            text-align: center;
            margin-bottom: 30px;
          }

          .cta-badge {
            display: block;
            text-align: center;
          }

          .footer-badges {
            gap: 20px;
          }

          .footer-main-section {
            padding: 50px 0;
          }
        }

        @media (max-width: 768px) {
          .footer-cta-section {
            padding: 50px 0 40px;
          }

          .glass-cta-card {
            padding: 25px;
          }

          .footer-cta-title {
            font-size: 26px;
          }

          .vin-input-form-footer {
            flex-direction: column;
          }

          .check-btn-footer {
            width: 100%;
            justify-content: center;
          }

          .footer-vin-input {
            padding: 20px;
          }

          .badge-item {
            padding: 12px 18px;
          }

          .badge-item img {
            height: 28px;
          }
        }
      `}</style>
    </>
  );
};

export default FooterAreaTwo;
