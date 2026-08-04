import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sticky Navbar Scroll style
  useEffect(() => {
    const handleNavbarScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleNavbarScroll);
  }, []);

  // Escape key menu overlay closer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is active
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Navigation Bar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`} id="navbar">
        <div className="nav-container">
          <a href="#home" className="nav-logo" id="navLogo">
            <img src="/assets/img/logo.png" alt="Perez Logo" className="logo-img" />
          </a>
          <div className="nav-menu" id="navMenu">
            <ul className="nav-links-list">
              <li><a href="#home" className="nav-link">Home</a></li>
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#skills" className="nav-link">Skills</a></li>
              <li><a href="#projects" className="nav-link">Projects</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </div>

          <div className="nav-actions">
            <a href="#contact" className="nav-cta-btn" id="navCta">
              <span>Let's Talk</span>
              <i className="ri-arrow-right-up-line"></i>
            </a>
            <button
              className={`menu-toggle-btn ${isMenuOpen ? 'open' : ''}`}
              id="menuToggle"
              aria-label="Toggle Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="menu-line"></span>
              <span className="menu-line"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Navigation Menu Overlay */}
      <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`} id="menuOverlay">
        <div className="menu-overlay-content">
          <ul className="menu-links">
            <li><a href="#home" className="menu-link-item" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className="menu-link-item" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#skills" className="menu-link-item" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" className="menu-link-item" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" className="menu-link-item" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
          <div className="menu-overlay-footer">
            <p className="menu-footer-label">Connect & Write</p>
            <div className="menu-socials">
              <a href="https://www.linkedin.com/in/lokezsh/" target="_blank" rel="noopener noreferrer" className="menu-social-link" aria-label="LinkedIn"><i className="ri-linkedin-fill"></i></a>
              <a href="mailto:logeshfreelance@gmail.com" className="menu-social-link" aria-label="Email"><i className="ri-mail-fill"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
