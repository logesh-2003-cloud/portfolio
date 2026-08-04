import React, { useState, useEffect, useRef } from 'react';

function AnimatedCounter({ target, suffix = "+" }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let startTimestamp = null;
            const end = parseInt(target, 10);
            const duration = 1200; // Animation duration in milliseconds

            const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              // Quadratic ease-out progression
              const ease = progress * (2 - progress);
              setCount(Math.floor(ease * end));
              if (progress < 1) {
                window.requestAnimationFrame(step);
              } else {
                setCount(end);
              }
            };
            window.requestAnimationFrame(step);
          } else {
            // Reset to 0 when scrolled out of view to enable re-triggering next time
            setCount(0);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

export default function About() {
  return (
    <section className="vision-section" id="about">
      <div className="section-container vision-grid">
        <div className="vision-content reveal slide-left">
          <h2 className="section-title">Building responsive web solutions with clean code</h2>
          <p className="vision-desc">
            I design and develop high performance, user friendly web interfaces. My focus is on delivering clean, responsive and modern front-end solutions that function flawlessly across all devices.
          </p>
          
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number"><AnimatedCounter target={25} /></span>
              <span className="stat-label">Static Projects</span>
            </div>
            <div className="stat-card">
              <span className="stat-number"><AnimatedCounter target={10} /></span>
              <span className="stat-label">Dynamic Projects</span>
            </div>
            <div className="stat-card">
              <span className="stat-number"><AnimatedCounter target={3} /></span>
              <span className="stat-label">React Projects</span>
            </div>
          </div>
        </div>
        
        <div className="vision-stats-showcase reveal slide-right">
          <div className="experience-badge-wrapper">
            <div className="experience-badge">
              <span className="badge-num"><AnimatedCounter target={1} /></span>
              <span className="badge-text">Years of experience</span>
            </div>
          </div>
          
          <a href="#contact" className="email-contact-card">
            <span className="card-subtitle">Get In Touch</span>
            <span className="card-title">logeshfreelance@gmail.com</span>
            <span className="card-arrow-circle">
              <i className="ri-arrow-right-up-line"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
