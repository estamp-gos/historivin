import { useEffect, useState } from "react";
import Link from "next/link";

const HeaderTwo = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.pageYOffset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mobileMenu = () => {
    setActive(!active);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (active) setActive(false);
  };

  return (
    <>
      <header className="glass-header">
        <div className={`header-wrapper ${scroll ? 'scrolled' : ''}`}>
          <div className="container">
            <div className="header-inner">
              {/* Logo */}
              <div className="logo-wrapper">
                <Link href="/">
                  <img src="./logo2.png" alt="Car Check Store" className="logo-img" />
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="desktop-nav">
                <ul className="nav-list">
                  <li>
                    <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="nav-link-glass">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="nav-link-glass">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="nav-link-glass">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" onClick={(e) => scrollToSection(e, '#pricing')} className="nav-link-glass">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#faq" onClick={(e) => scrollToSection(e, '#faq')} className="nav-link-glass">
                      FAQ
                    </a>
                  </li>
                </ul>
              </nav>
              
              {/* Actions */}
              <div className="header-actions">
                <a href="#pricing" onClick={(e) => scrollToSection(e, '#pricing')} className="cta-btn">
                  <span>Get Report</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <button
                  type="button"
                  className="mobile-toggle"
                  onClick={mobileMenu}
                  aria-label="Toggle menu"
                >
                  <span className={`hamburger ${active ? 'active' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${active ? 'active' : ''}`}>
          <div className="mobile-overlay" onClick={mobileMenu}></div>
          <div className="mobile-panel">
            <div className="mobile-header">
              <Link href="/">
                <img src="/logo2.png" alt="Car Check Store" />
              </Link>
              <button className="close-btn" onClick={mobileMenu}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <nav className="mobile-nav-glass">
              <ul>
                <li>
                  <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')}>
                    <i className="fas fa-home"></i>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>
                    <i className="fas fa-info-circle"></i>
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => scrollToSection(e, '#services')}>
                    <i className="fas fa-cogs"></i>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#pricing" onClick={(e) => scrollToSection(e, '#pricing')}>
                    <i className="fas fa-tags"></i>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faq" onClick={(e) => scrollToSection(e, '#faq')}>
                    <i className="fas fa-question-circle"></i>
                    FAQ
                  </a>
                </li>
              </ul>
            </nav>
            <div className="mobile-footer">
              <a href="#pricing" onClick={(e) => scrollToSection(e, '#pricing')} className="mobile-cta">
                Get Vehicle Report
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
        .glass-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
        }

        .header-wrapper {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(190, 121, 223, 0.1);
          transition: all 0.3s ease;
        }

        .header-wrapper.scrolled {
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 4px 30px rgba(190, 121, 223, 0.15);
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 0;
          transition: padding 0.3s ease;
        }

        .header-wrapper.scrolled .header-inner {
          padding: 12px 0;
        }

        .logo-wrapper {
          flex-shrink: 0;
        }

        .logo-img {
          height: 70px;
          width: auto;
          max-width: 200px;
          transition: all 0.3s ease;
        }

        .header-wrapper.scrolled .logo-img {
          height: 55px;
        }

        /* Desktop Navigation */
        .desktop-nav {
          display: none;
        }

        @media (min-width: 992px) {
          .desktop-nav {
            display: flex;
            flex: 1;
            justify-content: center;
          }
        }

        .nav-list {
          display: flex;
          align-items: center;
          gap: 8px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link-glass {
          display: block;
          padding: 10px 20px;
          color: #1a1a2e;
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          border-radius: 12px;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link-glass:hover {
          color: #BE79DF;
          background: rgba(190, 121, 223, 0.08);
        }

        .nav-link-glass::after {
          content: '';
          position: absolute;
          bottom: 6px;
          left: 20px;
          right: 20px;
          height: 2px;
          background: linear-gradient(90deg, #BE79DF, #FBCFFC);
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .nav-link-glass:hover::after {
          transform: scaleX(1);
        }

        /* Header Actions */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .cta-btn {
          display: none;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: linear-gradient(135deg, #BE79DF 0%, #FBCFFC 100%);
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(190, 121, 223, 0.3);
        }

        @media (min-width: 768px) {
          .cta-btn {
            display: inline-flex;
          }
        }

        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(190, 121, 223, 0.4);
          color: white;
        }

        .cta-btn:active {
          transform: translateY(0);
        }

        .cta-btn svg {
          transition: transform 0.3s ease;
        }

        .cta-btn:hover svg {
          transform: translateX(4px);
        }

        /* Mobile Toggle */
        .mobile-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: rgba(190, 121, 223, 0.1);
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        @media (min-width: 992px) {
          .mobile-toggle {
            display: none;
          }
        }

        .mobile-toggle:hover {
          background: rgba(190, 121, 223, 0.15);
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 20px;
        }

        .hamburger span {
          display: block;
          height: 2px;
          background: #BE79DF;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hamburger span:nth-child(1) { width: 100%; }
        .hamburger span:nth-child(2) { width: 75%; }
        .hamburger span:nth-child(3) { width: 50%; }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
          transform: translateX(-10px);
        }

        .hamburger.active span:nth-child(3) {
          width: 100%;
          transform: rotate(-45deg) translate(5px, -5px);
        }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 9999;
          visibility: hidden;
          pointer-events: none;
        }

        .mobile-menu.active {
          visibility: visible;
          pointer-events: auto;
        }

        .mobile-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .mobile-menu.active .mobile-overlay {
          opacity: 1;
        }

        .mobile-panel {
          position: absolute;
          top: 0;
          right: 0;
          width: min(320px, 85vw);
          height: 100%;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: -10px 0 40px rgba(190, 121, 223, 0.2);
        }

        .mobile-menu.active .mobile-panel {
          transform: translateX(0);
        }

        .mobile-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          border-bottom: 1px solid rgba(190, 121, 223, 0.1);
        }

        .mobile-header img {
          height: 36px;
        }

        .close-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(190, 121, 223, 0.1);
          border: none;
          border-radius: 10px;
          color: #BE79DF;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .close-btn:hover {
          background: rgba(190, 121, 223, 0.2);
          transform: rotate(90deg);
        }

        .mobile-nav-glass {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
        }

        .mobile-nav-glass ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .mobile-nav-glass li {
          margin-bottom: 8px;
          opacity: 0;
          transform: translateX(20px);
          animation: slideIn 0.4s ease forwards;
        }

        .mobile-menu.active .mobile-nav-glass li:nth-child(1) { animation-delay: 0.1s; }
        .mobile-menu.active .mobile-nav-glass li:nth-child(2) { animation-delay: 0.15s; }
        .mobile-menu.active .mobile-nav-glass li:nth-child(3) { animation-delay: 0.2s; }
        .mobile-menu.active .mobile-nav-glass li:nth-child(4) { animation-delay: 0.25s; }
        .mobile-menu.active .mobile-nav-glass li:nth-child(5) { animation-delay: 0.3s; }

        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .mobile-nav-glass a {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 20px;
          color: #1a1a2e;
          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
          border-radius: 14px;
          transition: all 0.3s ease;
        }

        .mobile-nav-glass a i {
          color: #BE79DF;
          width: 20px;
          text-align: center;
        }

        .mobile-nav-glass a:hover {
          background: linear-gradient(135deg, rgba(190, 121, 223, 0.1) 0%, rgba(251, 207, 252, 0.1) 100%);
          color: #BE79DF;
          transform: translateX(8px);
        }

        .mobile-footer {
          padding: 20px;
          border-top: 1px solid rgba(190, 121, 223, 0.1);
        }

        .mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #BE79DF 0%, #FBCFFC 100%);
          color: white;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          border-radius: 14px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(190, 121, 223, 0.3);
        }

        .mobile-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(190, 121, 223, 0.4);
          color: white;
        }
      `}</style>
    </>
  );
};

export default HeaderTwo;
