import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { HeroSection, ProjectsSection, SkillsSection } from './pages/userpage/Home';
import About from './pages/userpage/About';
import Contact from './pages/userpage/Contact';
import Footer from './components/Footer';

export default function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Scroll Reveal Observer (Applied globally to all elements with '.reveal' class)
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const revealOptions = {
      threshold: 0.05, // Trigger earlier
      rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          obs.unobserve(entry.target); // Keep visible once revealed
        }
      });
    }, revealOptions);

    revealElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Preloader Timeout
  useEffect(() => {
    const handleLoad = () => {
      setIsFadingOut(true);
      setTimeout(() => setShowLoader(false), 600); // Match CSS fade-out transition duration
    };

    // Keep loader for 2.2 seconds to display the complete Coding -> Loading loop nicely
    const loaderTimer = setTimeout(handleLoad, 2200);

    return () => clearTimeout(loaderTimer);
  }, []);

  return (
    <>
      {showLoader && (
        <div className={`loader-overlay ${isFadingOut ? 'fade-out' : ''}`}>
          <div className="loader-container">
            <div className="loader">&lt;/&gt;&nbsp;</div>
          </div>
        </div>
      )}
      <Navbar />
      <main className="user-main">
        <HeroSection />
        <About />
        <SkillsSection />
        <ProjectsSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
