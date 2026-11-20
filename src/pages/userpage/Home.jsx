import React, { useState, useEffect, useRef } from 'react';

// Project List Data
const projectsData = [
  {
    title: 'Voxel Eye',
    category: 'Static',
    image: '/assets/img/projects/static/voxel-eye.webp',
    tech: ['HTML', 'CSS', 'JS'],
    link: 'https://voxeleye.com/',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    title: 'Sorna Mahal',
    category: 'Dynamic',
    image: '/assets/img/projects/dynamic/sorna-mahal.webp',
    tech: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
    link: 'https://www.sornamahal.com/',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    title: 'Puthiya Bharatham',
    category: 'Dynamic',
    image: '/assets/img/projects/dynamic/puthiya-bharatham.webp',
    tech: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
    link: 'https://www.pudhiyabharatham.com/',
    gradient: 'linear-gradient(135deg, #ff9933 0%, #138808 100%)'
  },
  {
    title: 'Dumzar Biryani',
    category: 'Dynamic',
    image: '/assets/img/projects/dynamic/dumzar.webp',
    tech: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
    link: 'https://dumzar.com/',
    gradient: 'linear-gradient(135deg, #e65c00 0%, #F9D423 100%)'
  },
  {
    title: 'Cross Group',
    category: 'Dynamic',
    image: '/assets/img/projects/dynamic/cross-group.webp',
    tech: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
    link: 'https://www.crossgroup.in/',
    gradient: 'linear-gradient(135deg, #2b5876 0%, #4e4376 100%)'
  },
  {
    title: 'Aetrix Ventures',
    category: 'Dynamic',
    image: '/assets/img/projects/dynamic/aetrix-ventures.webp',
    tech: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
    link: 'https://www.aetrixventures.com/',
    gradient: 'linear-gradient(135deg, #0ba360 0%, #3cba92 100%)'
  },
  {
    title: 'Espure',
    category: 'Dynamic',
    image: '/assets/img/projects/dynamic/espure.webp',
    tech: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
    link: 'https://www.espure.in/',
    gradient: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)'
  },
  {
    title: 'J3 Apexion',
    category: 'Static',
    image: '/assets/img/projects/static/j3-apexion.webp',
    tech: ['HTML', 'CSS', 'JS'],
    link: 'https://www.j3apexion.com/',
    gradient: 'linear-gradient(135deg, #141e30 0%, #243b55 100%)'
  },
  {
    title: 'Tribangun UP',
    category: 'Dynamic',
    image: '/assets/img/projects/dynamic/tribangun-up.webp',
    tech: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
    link: 'https://www.tribangun-up.com/',
    gradient: 'linear-gradient(135deg, #ff512f 0%, #dd2476 100%)'
  },
  {
    title: 'Cooper Elevators',
    category: 'Dynamic',
    image: '/assets/img/projects/dynamic/cooper.webp',
    tech: ['HTML', 'CSS', 'JS', 'PHP'],
    link: 'https://www.cooperelevators.com/',
    gradient: 'linear-gradient(135deg, #11998E 0%, #38EF7D 100%)'
  },
  {
    title: 'Green Flyers Club',
    category: 'React',
    image: '/assets/img/projects/react/Green-Flyers-Club-–-Making-Air-Travel-Climate-Responsible.webp',
    tech: ['React', 'JS', 'Tailwind CSS'],
    link: 'https://greenflyers.club/',
    gradient: 'linear-gradient(135deg, #4E54C8 0%, #8F94FB 100%)'
  },
  {
    title: 'Nishyoga',
    category: 'Static',
    image: '/assets/img/projects/static/Bio-Septic-Tank-Manufacturer.webp',
    tech: ['HTML', 'CSS', 'JS'],
    link: 'https://www.nishyoga.in/',
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)'
  },
  {
    title: 'Joy Gift House',
    category: 'React',
    image: '/assets/img/projects/react/Premium-Gifts-Floral-Arrangements-—-Order-Online-Joy-Gift-House.webp',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://www.joygifthouse.com/',
    gradient: 'linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)'
  },
  {
    title: 'E2S Facility Services',
    category: 'Static',
    image: '/assets/img/projects/static/E2S-Facility-Services-.webp',
    tech: ['HTML', 'CSS', 'JS'],
    link: 'https://e2sfacility.com/',
    gradient: 'linear-gradient(135deg, #F2994A 0%, #F2C94C 100%)'
  },
  {
    title: 'Thiruppugazh Biotech',
    category: 'Dynamic',
    image: '/assets/img/projects/dynamic/Thiruppugazh-Biotech-Pvt-Ltd.webp',
    tech: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
    link: 'https://www.thiruppugazhbiotech.com/',
    gradient: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)'
  },
  {
    title: 'Heaven Holidays',
    category: 'Static',
    image: '/assets/img/projects/static/Heaven-Holidays-Madurai.webp',
    tech: ['HTML', 'CSS', 'jQuery'],
    link: 'https://heavenholidaystourism.com/',
    gradient: 'linear-gradient(135deg, #B3FFAB 0%, #12FFF7 100%)'
  },
  {
    title: 'Jointcore Health',
    category: 'Dynamic',
    image: '/assets/img/projects/dynamic/Jointcore-Advanced-Joint-Health.webp',
    tech: ['PHP', 'JS', 'SQL', 'CSS'],
    link: 'https://www.jointcore.us/',
    gradient: 'linear-gradient(135deg, #1A2A6C 0%, #B21F1F 50%, #FDBB2D 100%)'
  },
  {
    title: 'Infi Path Solutions',
    category: 'Static',
    image: '/assets/img/projects/static/Home-Infi-Path-Solutions.webp',
    tech: ['HTML', 'CSS', 'JS'],
    link: 'https://www.infipath.in/',
    gradient: 'linear-gradient(135deg, #2b5876 0%, #4e4376 100%)'
  },
  {
    title: 'Circuit Brilliance',
    category: 'Dynamic',
    image: '/assets/img/projects/dynamic/Circuit-Brilliance-—-Specialist-Power-Electronics-PCB-Design-Services-EV-BMS-Renewable-Energy-Power-Converters.webp',
    tech: ['HTML', 'CSS', 'JS', 'PHP'],
    link: 'https://circuitbrilliance.com/',
    gradient: 'linear-gradient(135deg, #f953c6 0%, #b91d73 100%)'
  },
  {
    title: 'Jeny Hydraulics',
    category: 'Static',
    image: '/assets/img/projects/static/Hydraulic-Pump-Repair-and-Control-Valve-Block-Service-Jeny-Hydraulics-.webp',
    tech: ['HTML', 'CSS', 'JS'],
    link: 'https://www.jenyhydraulics.com/',
    gradient: 'linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)'
  },
  {
    title: 'Aastra AI & Cloud',
    category: 'Dynamic',
    image: '/assets/img/projects/dynamic/North-America-s-Top-AI-and-Cloud-Consultants-aastra.webp',
    tech: ['React', 'Tailwind', 'PHP'],
    link: 'https://www.aastraa.net/',
    gradient: 'linear-gradient(135deg, #3a7bd5 0%, #3a6073 100%)'
  },
  {
    title: 'Pipes India',
    category: 'Static',
    image: '/assets/img/projects/static/PIPES-INDIA-Engineering-Excellence-in-PVC-Manufacturing.webp',
    tech: ['HTML', 'CSS', 'JS'],
    link: 'https://pipesindia.in/',
    gradient: 'linear-gradient(135deg, #d3cbb8 0%, #6d6027 100%)'
  },
  {
    title: 'Microcore',
    category: 'Dynamic',
    image: '/assets/img/projects/dynamic/Specialty-Nutraceutical-Manufacturer.webp',
    tech: ['HTML', 'CSS', 'JS', 'PHP'],
    link: 'https://www.microcoreresearch.com/',
    gradient: 'linear-gradient(135deg, #83a4d4 0%, #b6fbff 100%)'
  },
  {
    title: 'Varunavi India Foams',
    category: 'Static',
    image: '/assets/img/projects/static/Polyurethane-Foam-Manufacturers-in-Chennai-Varunavi-India-Foams.webp',
    tech: ['HTML', 'CSS', 'JS'],
    link: 'https://www.varunaviindiafoams.com/',
    gradient: 'linear-gradient(135deg, #ddd6f3 0%, #faaca8 100%)'
  },
  {
    title: 'Travel Needs Agency',
    category: 'Dynamic',
    image: '/assets/img/projects/dynamic/Best-Travel-Agency-in-Triplicane-Chennai-Air-Tickets-Visa-Tour-Packages-–-Travel-Needs-.webp',
    tech: ['PHP', 'MySQL', 'CSS', 'JS'],
    link: 'https://www.travelneedschennai.com/',
    gradient: 'linear-gradient(135deg, #4568dc 0%, #b06ab3 100%)'
  },
  {
    title: 'Joy Power Tools Services',
    category: 'Static',
    image: '/assets/img/projects/static/Power-Tools-Rental-in-Chennai-Joy-Power-Tools-Services.webp',
    tech: ['HTML', 'CSS', 'JS'],
    link: 'https://joypowertoolrental.com/',
    gradient: 'linear-gradient(135deg, #ef32d9 0%, #89fffd 100%)'
  },
  {
    title: 'Joy Painting Services',
    category: 'Dynamic',
    image: '/assets/img/projects/dynamic/joypaintingservices-com.webp',
    tech: ['HTML', 'CSS', 'JS', 'PHP'],
    link: 'https://joypaintingservices.com/',
    gradient: 'linear-gradient(135deg, #0575e6 0%, #00f260 100%)'
  },
  {
    title: 'Trisula India',
    category: 'Dynamic',
    image: '/assets/img/projects/dynamic/trisulaindia-com.webp',
    tech: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
    link: 'https://trisulaindia.com/',
    gradient: 'linear-gradient(135deg, #f12711 0%, #f5af19 100%)'
  }
];

// Reusable Project Card
function ProjectCard({ project }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const link = project.link || '#';
  const targetAttr = project.link ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a href={link} {...targetAttr} className="project-card">
      <div className="project-img-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-img-scroller"
          onLoad={() => setImageLoaded(true)}
          style={{ display: imageLoaded ? 'block' : 'none' }}
        />
        {!imageLoaded && (
          <div
            className="project-img-scroller tall-placeholder"
            style={{ background: project.gradient, height: '400px' }}
          >
            <div className="placeholder-overlay">
              <span className="placeholder-text">Hover to Scroll Page</span>
            </div>
          </div>
        )}
        <div className="project-view-overlay">
          <span className="view-btn-slide">
            View Website <i className="ri-arrow-right-up-line"></i>
          </span>
        </div>
      </div>
      <div className="project-info">
        <span className="project-tag-text">{project.category}</span>
        <h4 className="project-card-title">{project.title}</h4>
        <div className="project-tech-list">
          {project.tech.map((tech, i) => (
            <span key={i} className="project-tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

// Reusable Project Marquee Slider
function ProjectMarquee({ projectsList }) {
  const containerRef = useRef(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const isHoveredRef = useRef(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 991);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDragRelease = () => {
    isDownRef.current = false;
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
  };

  const onMouseDown = (e) => {
    isDownRef.current = true;
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grabbing';
      startXRef.current = e.pageX - containerRef.current.offsetLeft;
      scrollLeftRef.current = containerRef.current.scrollLeft;
    }
  };

  const onMouseMove = (e) => {
    if (!isDownRef.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    let newScrollLeft = scrollLeftRef.current - walk;

    const halfWidth = containerRef.current.scrollWidth / 2;
    if (newScrollLeft >= halfWidth) {
      newScrollLeft -= halfWidth;
      startXRef.current = e.pageX - containerRef.current.offsetLeft - (scrollLeftRef.current - newScrollLeft) / 1.5;
      scrollLeftRef.current = newScrollLeft;
    } else if (newScrollLeft < 0) {
      newScrollLeft += halfWidth;
      startXRef.current = e.pageX - containerRef.current.offsetLeft - (scrollLeftRef.current - newScrollLeft) / 1.5;
      scrollLeftRef.current = newScrollLeft;
    }
    containerRef.current.scrollLeft = newScrollLeft;
  };

  const onTouchStart = (e) => {
    isDownRef.current = true;
    if (containerRef.current) {
      startXRef.current = e.touches[0].pageX - containerRef.current.offsetLeft;
      scrollLeftRef.current = containerRef.current.scrollLeft;
    }
  };

  const onTouchMove = (e) => {
    if (!isDownRef.current || !containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    let newScrollLeft = scrollLeftRef.current - walk;

    const halfWidth = containerRef.current.scrollWidth / 2;
    if (newScrollLeft >= halfWidth) {
      newScrollLeft -= halfWidth;
      startXRef.current = e.touches[0].pageX - containerRef.current.offsetLeft - (scrollLeftRef.current - newScrollLeft) / 1.5;
      scrollLeftRef.current = newScrollLeft;
    } else if (newScrollLeft < 0) {
      newScrollLeft += halfWidth;
      startXRef.current = e.touches[0].pageX - containerRef.current.offsetLeft - (scrollLeftRef.current - newScrollLeft) / 1.5;
      scrollLeftRef.current = newScrollLeft;
    }
    containerRef.current.scrollLeft = newScrollLeft;
  };

  useEffect(() => {
    if (!isMobileOrTablet) return; // Only auto-scroll on mobile/tablet

    let animationFrameId;
    const speed = 0.8; // px per frame (adjust for speed)

    const updateAutoScroll = () => {
      if (containerRef.current && !isDownRef.current && !isHoveredRef.current) {
        containerRef.current.scrollLeft += speed;

        const halfWidth = containerRef.current.scrollWidth / 2;
        if (containerRef.current.scrollLeft >= halfWidth) {
          containerRef.current.scrollLeft -= halfWidth;
        }
      }
      animationFrameId = requestAnimationFrame(updateAutoScroll);
    };

    animationFrameId = requestAnimationFrame(updateAutoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [projectsList, isMobileOrTablet]);

  // If on desktop, render a static centered flex-grid instead of infinite marquee
  if (!isMobileOrTablet) {
    return (
      <div className="projects-static-grid">
        {projectsList.map((project, index) => (
          <ProjectCard key={project.title + index} project={project} />
        ))}
      </div>
    );
  }

  return (
    <div
      className="sliding-container js-active"
      ref={containerRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={handleDragRelease}
      onMouseLeave={() => {
        isHoveredRef.current = false;
        if (isDownRef.current) handleDragRelease();
      }}
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={handleDragRelease}
      style={{ cursor: 'grab' }}
    >
      <div className="sliding-track">
        {projectsList.map((project, index) => (
          <ProjectCard key={project.title + '-1-' + index} project={project} />
        ))}
        {projectsList.map((project, index) => (
          <ProjectCard key={project.title + '-2-' + index} project={project} />
        ))}
      </div>
    </div>
  );
}

// Folder tab lists
const folderSkills = {
  frontend: [
    { name: 'HTML5', icon: 'ri-html5-fill' },
    { name: 'CSS3', icon: 'ri-css3-fill' },
    { name: 'JavaScript', icon: 'ri-javascript-fill' },
    { name: 'jQuery', icon: 'ri-braces-fill' }
  ],
  backend: [
    { name: 'PHP', icon: 'ri-code-box-line' },
    { name: 'MongoDB', icon: 'ri-database-2-fill' }
  ],
  frameworks: [
    { name: 'React', icon: 'ri-reactjs-fill' },
    { name: 'Next.js', icon: 'ri-nextjs-fill' },
    { name: 'Node.js', icon: 'ri-nodejs-fill' }
  ]
};

// Hero Creative Workspace Component
function HeroCreativeWorkspace() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const words = ["Design", "Code", "Develop"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let timer;
    const handleType = () => {
      const fullWord = words[currentWordIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(150);

        if (currentText === fullWord) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(75);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(150);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    <div className="hero-creative-workspace reveal slide-right">
      {/* Background decorative elements matching the architecture aesthetic */}
      <div className="workspace-glow-backdrop"></div>

      {/* Cinematic Architectural Workspace Image */}
      <div className="vector-art-wrapper">
        <img
          src="/assets/img/cinematic_workspace.webp"
          alt="Cinematic Modern Workspace"
          className="vector-art-img"
          width="1024"
          height="1024"
          fetchPriority="high"
        />
        <div className="vector-art-overlay"></div>
      </div>

      {/* Parallax Scroll Text Overlay - Centered Typewriter */}
      <div className="hero-scroll-text-container">
        <div
          className="hero-scroll-text-row typewriter-row"
          style={{ transform: `translate3d(${-scrollOffset * 0.4}px, 0, 0)` }}
        >
          <span className="hero-scroll-text">
            {currentText}
            <span className="typewriter-cursor">|</span>
          </span>
        </div>
      </div>

      {/* Overlapping Bottom-Right Card taking design directly from the reference image */}
      <a href="#projects" className="explore-work-card">
        <span className="explore-text">
          Explore Work
          <span className="explore-arrow">→</span>
        </span>
      </a>

      {/* Dotted grid decorative elements */}
      <div className="dots-grid-decor decor-top"></div>
      <div className="dots-grid-decor decor-bottom"></div>
    </div>
  );
}

// Hero Banner Section Component
export function HeroSection() {
  const heroTitleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Disable parallax completely on mobile & tablet viewports to prevent layout shifts and hidden text
      if (window.innerWidth <= 991) {
        if (heroTitleRef.current) {
          heroTitleRef.current.style.transform = '';
          heroTitleRef.current.style.opacity = '';
        }
        return;
      }

      const scrollValue = window.scrollY;
      if (heroTitleRef.current) {
        if (scrollValue < 500) {
          heroTitleRef.current.style.transform = `translate3d(${scrollValue * 0.15}px, ${scrollValue * 0.25}px, 0)`;
          heroTitleRef.current.style.opacity = (1 - scrollValue / 400).toFixed(2);
        } else {
          heroTitleRef.current.style.opacity = '0';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount to establish correct responsive state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="section-container hero-grid">
        <div className="hero-content reveal slide-left">
          <span className="section-tag">About Me</span>
          <div className="hero-title-wrapper">
            <h1 className="hero-title" ref={heroTitleRef}>Logesh</h1>
          </div>
          <h2 className="hero-subtitle">Front End Developer</h2>

          <div className="hero-social-row">
            <a href="https://www.linkedin.com/in/lokezsh/" target="_blank" rel="noopener noreferrer" className="hero-social-link-item">
              <i className="ri-linkedin-box-fill"></i>
              <span>Connect on LinkedIn</span>
            </a>
          </div>

          <p className="hero-desc-highlight">
            A Front End Developer based in the digital space for over 1+ years. I am proud of my works and ready to face the next challenge.
          </p>
          <p className="hero-desc-sub">
            This is where I write. A blend of design and development for modern websites, apps, and interfaces. Crafting digital products that feel right.
          </p>

          {/* Location Info Block */}
          <div className="hero-spec-container">
            <div className="hero-spec-item">
              <div className="hero-spec-icon-box">
                <i className="ri-map-pin-5-line"></i>
              </div>
              <div className="hero-spec-info">
                <span className="hero-spec-label">Location</span>
                <span className="hero-spec-value">Chennai, India</span>
              </div>
            </div>
          </div>
        </div>
        <HeroCreativeWorkspace />
      </div>
    </section>
  );
}

// Projects Section Component
export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('all-projects-tab');
  const [showTab, setShowTab] = useState('all-projects-tab');
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 991);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTab(activeTab);
    }, 30);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section className="resume-section" id="projects">
      <div className="section-container">
        <div className="resume-header reveal fade-in">
          <span className="section-tag text-center">Projects</span>
          <h2 className="section-title text-center">
            Showcasing my featured best work
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="tabs-container reveal fade-in">
          <button
            className={`tab-btn ${activeTab === 'all-projects-tab' ? 'active' : ''}`}
            onClick={() => setActiveTab('all-projects-tab')}
            id="btnAllProjects"
          >
            <span>All Projects</span>
            <i className="ri-arrow-right-up-line"></i>
          </button>
          <button
            className={`tab-btn ${activeTab === 'static-projects-tab' ? 'active' : ''}`}
            onClick={() => setActiveTab('static-projects-tab')}
            id="btnStaticProjects"
          >
            <span>Static Projects</span>
            <i className="ri-arrow-right-up-line"></i>
          </button>
          <button
            className={`tab-btn ${activeTab === 'dynamic-projects-tab' ? 'active' : ''}`}
            onClick={() => setActiveTab('dynamic-projects-tab')}
            id="btnDynamicProjects"
          >
            <span>Dynamic Projects</span>
            <i className="ri-arrow-right-up-line"></i>
          </button>
          <button
            className={`tab-btn ${activeTab === 'react-projects-tab' ? 'active' : ''}`}
            onClick={() => setActiveTab('react-projects-tab')}
            id="btnReactProjects"
          >
            <span>React Projects</span>
            <i className="ri-arrow-right-up-line"></i>
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="tab-content-wrapper reveal fade-in">
          <div className={`tab-pane ${activeTab === 'all-projects-tab' ? 'active' : ''} ${showTab === 'all-projects-tab' ? 'show' : ''}`} id="all-projects-tab">
            {isMobileOrTablet ? (
              <ProjectMarquee projectsList={projectsData} />
            ) : (
              <div className="projects-all-grid">
                {projectsData.map((project, index) => (
                  <ProjectCard key={project.title + index} project={project} />
                ))}
              </div>
            )}
          </div>
          <div className={`tab-pane ${activeTab === 'static-projects-tab' ? 'active' : ''} ${showTab === 'static-projects-tab' ? 'show' : ''}`} id="static-projects-tab">
            <ProjectMarquee projectsList={projectsData.filter(p => p.category === 'Static')} />
          </div>
          <div className={`tab-pane ${activeTab === 'dynamic-projects-tab' ? 'active' : ''} ${showTab === 'dynamic-projects-tab' ? 'show' : ''}`} id="dynamic-projects-tab">
            <ProjectMarquee projectsList={projectsData.filter(p => p.category === 'Dynamic')} />
          </div>
          <div className={`tab-pane ${activeTab === 'react-projects-tab' ? 'active' : ''} ${showTab === 'react-projects-tab' ? 'show' : ''}`} id="react-projects-tab">
            <ProjectMarquee projectsList={projectsData.filter(p => p.category === 'React')} />
          </div>
        </div>
      </div>
    </section>
  );
}

// Skills Bento Section Component
export function SkillsSection() {
  const [activeFolder, setActiveFolder] = useState('frontend');
  const [terminalInputValue, setTerminalInputValue] = useState('');
  const [terminalLines, setTerminalLines] = useState([
    { type: 'command', text: 'systemctl status skills.service' },
    { type: 'response success', text: "● skills.service - Logesh's Skills Engine active (running)" },
    { type: 'command', text: 'cat welcome.txt' },
    { type: 'response', text: 'Welcome to my interactive skills board! Click a button below or type a command to explore my technology stack.' }
  ]);

  const terminalBodyRef = useRef(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [terminalLines]);

  const handleCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setTerminalLines([]);
      return;
    }

    let response = '';
    let success = false;

    switch (cleanCmd) {
      case 'help':
        response = `Available commands:
        - core: View HTML, CSS, JavaScript & jQuery
        - frameworks: View React, Next.js, Node.js
        - backend: View PHP & MongoDB
        - design: View Canva & Figma
        - clear: Clear the screen`;
        break;
      case 'core':
      case '--core-stack':
        response = `● Core stack skills loaded successfully:
        - HTML5 (Advanced page structure)
        - CSS3 (Responsive styling & animation)
        - JavaScript (ES6+ dynamic features)
        - jQuery (DOM interaction)`;
        success = true;
        break;
      case 'frameworks':
      case '--frameworks':
        response = `● Modern framework stack:
        - React (Component architecture)
        - Next.js (Server-side rendering & SEO optimization)
        - Node.js (Scalable servers & API routes)`;
        success = true;
        break;
      case 'backend':
      case '--backend':
        response = `● Database and backend stack:
        - PHP (Dynamic script rendering)
        - MongoDB (Flexible JSON document modeling)`;
        success = true;
        break;
      case 'design':
      case 'creative':
      case '--creative':
        response = `● Creative design & layout tools:
        - Figma (Wireframing, UI Mockups & prototypes)
        - Canva (Graphic assets & visual styling)`;
        success = true;
        break;
      default:
        response = `Command not found: "${cmd}". Type "help" for a list of valid commands.`;
    }

    setTerminalLines((prev) => [
      ...prev,
      { type: 'command', text: cmd },
      { type: `response${success ? ' success' : ''}`, text: response }
    ]);
  };

  const handleTerminalSubmit = (e) => {
    if (e.key === 'Enter') {
      handleCommand(terminalInputValue);
      setTerminalInputValue('');
    }
  };

  return (
    <section className="skills-section" id="skills">
      <div className="section-container">
        <div className="resume-header reveal fade-in" style={{ textAlign: 'center' }}>
          <span className="section-tag text-center">Skills</span>
          <h2 className="section-title text-center">
            My creative toolbox & stack
          </h2>
        </div>

        <div className="skills-bento-grid">
          <div className="bento-card terminal-card reveal slide-left">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="terminal-title">logesh@developer:~/skills</span>
            </div>
            <div className="terminal-body" id="skillsTerminal">
              <div className="terminal-output" ref={terminalBodyRef}>
                {terminalLines.map((line, idx) => (
                  <div key={idx}>
                    {line.type === 'command' ? (
                      <p className="terminal-line">
                        <span className="prompt"><span className="prompt-host">logesh@portfolio:</span>~$</span> {line.text}
                      </p>
                    ) : (
                      <p className={`terminal-response ${line.type.includes('success') ? 'success' : ''}`}>
                        {line.text}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <div className="terminal-input-container">
                <span className="prompt"><span className="prompt-host">logesh@portfolio:</span>~$</span>
                <input
                  type="text"
                  className="terminal-input"
                  id="terminalInput"
                  placeholder="type help, core, frameworks, backend..."
                  autoComplete="off"
                  value={terminalInputValue}
                  onChange={(e) => setTerminalInputValue(e.target.value)}
                  onKeyDown={handleTerminalSubmit}
                />
              </div>
              <div className="terminal-controls">
                <button className="terminal-btn" onClick={() => handleCommand('core')}>--core-stack</button>
                <button className="terminal-btn" onClick={() => handleCommand('frameworks')}>--frameworks</button>
                <button className="terminal-btn" onClick={() => handleCommand('backend')}>--backend</button>
                <button className="terminal-btn" onClick={() => handleCommand('design')}>--creative</button>
                <button className="terminal-btn" onClick={() => handleCommand('clear')}>--clear</button>
              </div>
            </div>
          </div>

          <div className="bento-card stack-folder-card reveal fade-in">
            <div className="folder-header-tabs">
              <button
                className={`folder-tab ${activeFolder === 'frontend' ? 'active' : ''}`}
                onClick={() => setActiveFolder('frontend')}
              >
                Frontend
              </button>
              <button
                className={`folder-tab ${activeFolder === 'backend' ? 'active' : ''}`}
                onClick={() => setActiveFolder('backend')}
              >
                Backend
              </button>
              <button
                className={`folder-tab ${activeFolder === 'frameworks' ? 'active' : ''}`}
                onClick={() => setActiveFolder('frameworks')}
              >
                Frameworks
              </button>
            </div>
            <div className="folder-body">
              <div className="folder-content active">
                <div className="skills-flex-list">
                  {folderSkills[activeFolder].map((skill, index) => (
                    <div key={index} className="skill-pill">
                      <i className={skill.icon}></i> {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bento-card design-tools-card reveal slide-right">
            <div className="design-header">
              <h3>Creative & Design</h3>
              <span className="design-sub">Ui/Ux & Prototyping</span>
            </div>
            <div className="design-tools-body">
              <div className="tool-item">
                <div className="tool-icon figma">
                  <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="36">
                    <path d="M19 0H9.5C4.253 0 0 4.253 0 9.5C0 14.747 4.253 19 9.5 19H19V0Z" fill="#F24E1E" />
                    <path d="M38 9.5C38 4.253 33.747 0 28.5 0H19V19H28.5C33.747 19 38 14.747 38 9.5Z" fill="#FF7262" />
                    <path d="M19 19H9.5C4.253 19 0 23.253 0 28.5C0 33.747 4.253 38 9.5 38H19V19Z" fill="#A259FF" />
                    <path d="M19 38H28.5C33.747 38 38 33.747 38 28.5C38 23.253 33.747 19 28.5 19H19V38Z" fill="#1ABCFE" />
                    <path d="M9.5 57C14.747 57 19 52.747 19 47.5V38H9.5C4.253 38 0 42.253 0 47.5C0 52.747 4.253 57 9.5 57Z" fill="#0ACF83" />
                  </svg>
                </div>
                <div className="tool-info">
                  <div className="tool-meta">
                    <span className="tool-name">Figma</span>
                    <span className="tool-level">Basic Prototyping</span>
                  </div>
                  <div className="tool-progress-track">
                    <div className="tool-progress" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
              <div className="tool-item">
                <div className="tool-icon canva">
                  <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                    <circle cx="256" cy="256" r="256" fill="url(#canvaGradient)" />
                    <path d="M256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128c40.3 0 76-18.7 99-47.8l-30-20c-16.1 20.3-41 33.3-69 33.3-48.6 0-88-39.4-88-88s39.4-88 88-88c28 0 52.9 13 69 33.3l30-20c-23-29.1-58.7-47.8-99-47.8z" fill="#FFFFFF" />
                    <defs>
                      <linearGradient id="canvaGradient" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00C4CC" stopOpacity="1" />
                        <stop offset="0.5" stopColor="#7D2AE8" stopOpacity="1" />
                        <stop offset="1" stopColor="#FF4B91" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="tool-info">
                  <div className="tool-meta">
                    <span className="tool-name">Canva</span>
                    <span className="tool-level">Graphic Design</span>
                  </div>
                  <div className="tool-progress-track">
                    <div className="tool-progress" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Page Component Exports
export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
    </>
  );
}
