import React from 'react';

export default function Footer() {
  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-section" style={{ paddingTop: 0, borderTop: 'none' }}>
      <div className="section-container">
        <div className="footer-bottom-row" style={{ marginTop: 0, paddingTop: '30px' }}>
          <p className="copyright-text">© 2026 Logesh. All rights reserved.</p>
          <a href="#" className="back-to-top-btn" id="backToTop" onClick={handleBackToTop}>
            <span>Back to top</span>
            <i className="ri-arrow-up-line"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
