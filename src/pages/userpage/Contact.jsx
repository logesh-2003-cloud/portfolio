import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const SERVICES = ['Web App Development', 'UI/UX Design', 'Static Website', 'E-commerce', 'Maintenance'];

export default function Contact() {
  const [captcha, setCaptcha] = useState("");
  const [selectedService, setSelectedService] = useState('Web App Development');

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    if (!captcha) {
      alert("Please complete the reCAPTCHA verification.");
      return;
    }

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      subject: e.target.subject.value,
      service: selectedService,
      message: e.target.message.value,
      captcha,
    };

    try {
      const response = await fetch("http://localhost/Loki/portfolio-html/api/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        alert(result.message || 'Message sent successfully!');
        e.target.reset();
        setCaptcha("");
        setSelectedService('Web App Development');
      } else {
        alert(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <section className="footer-section" id="contact" style={{ paddingBottom: 0 }}>
      <div className="section-container">
        <div className="footer-top-grid">
          <div className="footer-cta-col">
            <h2 className="footer-cta-title">
              Let's work together
            </h2>
            <div className="footer-location-socials">
              <span className="footer-location">Based in India</span>
              <div className="footer-social-links">
                <a href="https://www.linkedin.com/in/lokezsh/" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn"><i className="ri-linkedin-fill"></i></a>
              </div>
            </div>
            
            <div className="footer-quick-cards">
              <a href="mailto:logeshfreelance@gmail.com" className="footer-contact-card-link">
                <div className="contact-card-inner">
                  <span className="contact-card-label">Looking for a leading designer?</span>
                  <div className="contact-card-action">
                    <span className="contact-card-val">logeshfreelance@gmail.com</span>
                    <i className="ri-arrow-right-up-line"></i>
                  </div>
                </div>
              </a>
              
              <a href="tel:+919025284548" className="footer-contact-card-link">
                <div className="contact-card-inner">
                  <span className="contact-card-label">Want a more in-depth look?</span>
                  <div className="contact-card-action">
                    <span className="contact-card-val">+91 90252 84548</span>
                    <i className="ri-arrow-right-up-line"></i>
                  </div>
                </div>
              </a>
            </div>
          </div>
          
          <div className="footer-form-col">
            <form className="creative-contact-form" id="contactForm" onSubmit={handleContactSubmit}>
              <div className="form-row-split">
                <div className="floating-group">
                  <input type="text" id="formName" name="name" required placeholder=" " />
                  <label htmlFor="formName">Your Name</label>
                  <span className="highlight-line"></span>
                </div>
                <div className="floating-group">
                  <input type="email" id="formEmail" name="email" required placeholder=" " />
                  <label htmlFor="formEmail">Email Address</label>
                  <span className="highlight-line"></span>
                </div>
              </div>

              <div className="form-row-split">
                <div className="floating-group">
                  <input type="tel" id="formPhone" name="phone" required placeholder=" " />
                  <label htmlFor="formPhone">Phone Number</label>
                  <span className="highlight-line"></span>
                </div>
                <div className="floating-group">
                  <input type="text" id="formSubject" name="subject" required placeholder=" " />
                  <label htmlFor="formSubject">What is this project about?</label>
                  <span className="highlight-line"></span>
                </div>
              </div>

              {/* Service Selection Pills */}
              <div className="selector-group">
                <span className="selector-label">What service do you need?</span>
                <div className="selector-pills">
                  {SERVICES.map((service) => (
                    <button
                      key={service}
                      type="button"
                      className={`selector-pill ${selectedService === service ? 'active' : ''}`}
                      onClick={() => setSelectedService(service)}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div className="floating-group">
                <textarea id="formMessage" name="message" required placeholder=" " rows="2"></textarea>
                <label htmlFor="formMessage">Tell me about the project</label>
                <span className="highlight-line"></span>
              </div>

              <div className="recaptcha-container" style={{ marginBottom: '20px' }}>
                <ReCAPTCHA
                  sitekey="6LdhHCstAAAAAPptWlznNSUruxvqGLdYlfewYI_X"
                  onChange={(token) => setCaptcha(token)}
                  theme="dark"
                />
              </div>

              <button type="submit" className="submit-form-btn">
                <span>Send Message</span>
                <i className="ri-send-plane-fill"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
