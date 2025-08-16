// Main Application Class
class Nexus3DApp {
  constructor() {
    // Initialize all components
    this.initLoader();
    this.initCursor();
    this.initNavbar();
    this.initMobileMenu();
    this.initScrollToTop();
    this.initHeroSection();
    this.initAboutSection();
    this.initServicesSection();
    this.initShowcaseSection();
    this.initPortfolioSection();
    this.initTestimonialsSection();
    this.initAchievementsSection();
    this.initContactForm();
    this.initNewsletterForm();
    this.initScrollAnimations();
    this.init3DModels();
    this.initParticles();
    this.initAnimations();

    // Event Listeners
    this.addEventListeners();

    // Start the application
    this.start();
  }

  // Initialize Loader
  initLoader() {
    this.loader = document.querySelector('.loader');
    this.loaderCube = document.querySelector('.loader-cube');
    this.loaderText = document.querySelector('.loader-text');
  }

  // Initialize Custom Cursor
  initCursor() {
    this.cursor = document.querySelector('.cursor');
    this.cursorFollower = document.querySelector('.cursor-follower');
    this.cursorLinks = document.querySelectorAll('a, button, .nav-link, .service-card, .portfolio-item, .team-member, .testimonial-dot, .showcase-arrow');
  }

  // Initialize Navbar
  initNavbar() {
    this.navbar = document.querySelector('.navbar');
    this.navLinks = document.querySelectorAll('.nav-link');
    this.hamburger = document.querySelector('.navbar-hamburger');
  }

  // Initialize Mobile Menu
  initMobileMenu() {
    this.mobileMenu = document.querySelector('.mobile-menu');
    this.mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  }

  // Initialize Scroll To Top Button
  initScrollToTop() {
    this.scrollToTopBtn = document.querySelector('.scroll-to-top');
  }

  // Initialize Hero Section
  initHeroSection() {
    this.heroSection = document.querySelector('.hero-section');
    this.heroTitleLines = document.querySelectorAll('.title-line');
    this.heroTitleWords = document.querySelectorAll('.title-word');
    this.heroScrollIndicator = document.querySelector('.hero-scroll-indicator');
  }

  // Initialize About Section
  initAboutSection() {
    this.aboutSection = document.querySelector('.about-section');
    this.statNumbers = document.querySelectorAll('.stat-number');
    this.skillBars = document.querySelectorAll('.skill-progress');
  }

  // Initialize Services Section
  initServicesSection() {
    this.servicesSection = document.querySelector('.services-section');
    this.serviceCards = document.querySelectorAll('.service-card');
  }

  // Initialize Showcase Section
  initShowcaseSection() {
    this.showcaseSection = document.querySelector('.showcase-section');
    this.showcaseSlides = document.querySelectorAll('.showcase-slide');
    this.showcaseDots = document.querySelectorAll('.showcase-dot');
    this.showcasePrevBtn = document.querySelector('.showcase-arrow.prev');
    this.showcaseNextBtn = document.querySelector('.showcase-arrow.next');
    this.currentShowcaseSlide = 0;
  }

  // Initialize Portfolio Section
  initPortfolioSection() {
    this.portfolioSection = document.querySelector('.portfolio-section');
    this.portfolioItems = document.querySelectorAll('.portfolio-item');
  }

  // Initialize Testimonials Section
  initTestimonialsSection() {
    this.testimonialsSection = document.querySelector('.testimonials-section');
    this.testimonialCards = document.querySelectorAll('.testimonial-card');
    this.testimonialDots = document.querySelectorAll('.testimonial-dot');
    this.currentTestimonial = 0;
  }

  // Initialize Achievements Section
  initAchievementsSection() {
    this.achievementsSection = document.querySelector('.achievements-section');
    this.achievementNumbers = document.querySelectorAll('.achievement-number');
  }

  // Initialize Contact Form
  initContactForm() {
    this.contactForm = document.getElementById('contactForm');
    this.formGroups = document.querySelectorAll('.form-group');
  }

  // Initialize Newsletter Form
  initNewsletterForm() {
    this.newsletterForm = document.getElementById('newsletterForm');
  }

  // Initialize Scroll Animations
  initScrollAnimations() {
    this.sections = document.querySelectorAll('section');
    this.scrollTriggers = [];
  }

  // Initialize 3D Models
  init3DModels() {
    this.hero3DObject = document.getElementById('hero-3d-object');
    this.about3DObject = document.getElementById('about-3d-object');
    this.serviceIcons = [
      document.getElementById('service-icon-1'),
      document.getElementById('service-icon-2'),
      document.getElementById('service-icon-3'),
      document.getElementById('service-icon-4'),
      document.getElementById('service-icon-5'),
      document.getElementById('service-icon-6')
    ];
    this.showcase3DObjects = [
      document.getElementById('showcase-3d-1'),
      document.getElementById('showcase-3d-2'),
      document.getElementById('showcase-3d-3')
    ];
    this.portfolio3DObjects = [
      document.getElementById('portfolio-3d-1'),
      document.getElementById('portfolio-3d-2'),
      document.getElementById('portfolio-3d-3'),
      document.getElementById('portfolio-3d-4'),
      document.getElementById('portfolio-3d-5'),
      document.getElementById('portfolio-3d-6')
    ];
    this.testimonialAvatars = [
      document.getElementById('testimonial-3d-1'),
      document.getElementById('testimonial-3d-2'),
      document.getElementById('testimonial-3d-3')
    ];
    this.teamAvatars = [
      document.getElementById('team-3d-1'),
      document.getElementById('team-3d-2'),
      document.getElementById('team-3d-3'),
      document.getElementById('team-3d-4')
    ];
  }

  // Initialize Particles
  initParticles() {
    this.heroParticles = document.getElementById('hero-particles');
  }

  // Initialize GSAP Animations
  initAnimations() {
    this.tl = gsap.timeline();
    this.scrollTween = null;
  }

  // Add Event Listeners
  addEventListeners() {
    // Window Load Event
    window.addEventListener('load', () => this.handleLoad());

    // Scroll Event
    window.addEventListener('scroll', () => this.handleScroll());

    // Mouse Move Event for Cursor
    document.addEventListener('mousemove', (e) => this.moveCursor(e));

    // Nav Link Clicks
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => this.handleNavLinkClick(e));
    });

    // Mobile Menu Toggle
    this.hamburger.addEventListener('click', () => this.toggleMobileMenu());

    // Mobile Nav Link Clicks
    this.mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMobileMenu());
    });

    // Cursor Hover Effects
    this.cursorLinks.forEach(link => {
      link.addEventListener('mouseenter', () => this.handleLinkHoverStart());
      link.addEventListener('mouseleave', () => this.handleLinkHoverEnd());
    });

    // Showcase Navigation
    this.showcasePrevBtn.addEventListener('click', () => this.prevShowcaseSlide());
    this.showcaseNextBtn.addEventListener('click', () => this.nextShowcaseSlide());
    this.showcaseDots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goToShowcaseSlide(index));
    });

    // Testimonial Navigation
    this.testimonialDots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goToTestimonial(index));
    });

    // Scroll To Top Button
    this.scrollToTopBtn.addEventListener('click', () => this.scrollToTop());

    // Form Submissions
    if (this.contactForm) {
      this.contactForm.addEventListener('submit', (e) => this.handleContactSubmit(e));
    }

    if (this.newsletterForm) {
      this.newsletterForm.addEventListener('submit', (e) => this.handleNewsletterSubmit(e));
    }

    // Window Resize Event
    window.addEventListener('resize', () => this.handleResize());
  }

  // Start the Application
  start() {
    // Preload assets and initialize 3D models
    this.preloadAssets().then(() => {
      // Hide loader when everything is loaded
      this.hideLoader();

      // Animate hero section
      this.animateHeroSection();

      // Initialize Three.js scenes
      this.initThreeJS();

      // Initialize scroll animations
      this.setupScrollAnimations();
    });
  }

  // Preload Assets
  preloadAssets() {
    return new Promise((resolve) => {
      // Simulate asset loading (in a real app, you would load actual assets)
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  // Hide Loader
  hideLoader() {
    gsap.to(this.loaderCube, {
      duration: 0.5,
      scale: 0,
      ease: 'power2.inOut'
    });

    gsap.to(this.loaderText, {
      duration: 0.5,
      opacity: 0,
      y: 20,
      ease: 'power2.inOut'
    });

    gsap.to(this.loader, {
      duration: 0.8,
      opacity: 0,
      display: 'none',
      ease: 'power2.inOut',
      delay: 0.5,
      onComplete: () => {
        document.body.style.overflow = 'auto';
      }
    });
  }

  // Handle Window Load
  handleLoad() {
    // Update any elements that depend on window size
    this.handleResize();
  }

  // Handle Scroll Event
  handleScroll() {
    // Navbar scroll effect
    if (window.scrollY > 100) {
      this.navbar.classList.add('scrolled');
    } else {
      this.navbar.classList.remove('scrolled');
    }

    // Scroll to top button visibility
    if (window.scrollY > 500) {
      this.scrollToTopBtn.classList.add('active');
    } else {
      this.scrollToTopBtn.classList.remove('active');
    }

    // Update active nav link based on scroll position
    this.updateActiveNavLink();
  }

  // Move Custom Cursor
  moveCursor(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    gsap.to(this.cursor, {
      x: mouseX,
      y: mouseY,
      duration: 0.1,
      ease: 'power2.out'
    });

    gsap.to(this.cursorFollower, {
      x: mouseX,
      y: mouseY,
      duration: 0.3,
      ease: 'power2.out'
    });
  }

  // Handle Link Hover Start
  handleLinkHoverStart() {
    gsap.to(this.cursor, {
      scale: 0.5,
      backgroundColor: 'var(--accent-color)',
      duration: 0.3
    });

    gsap.to(this.cursorFollower, {
      scale: 1.5,
      borderColor: 'var(--accent-color)',
      duration: 0.3
    });
  }

  // Handle Link Hover End
  handleLinkHoverEnd() {
    gsap.to(this.cursor, {
      scale: 1,
      backgroundColor: 'var(--primary-color)',
      duration: 0.3
    });

    gsap.to(this.cursorFollower, {
      scale: 1,
      borderColor: 'var(--primary-color)',
      duration: 0.3
    });
  }

  // Handle Nav Link Click
  handleNavLinkClick(e) {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const targetElement = document.querySelector(target);

    // Remove active class from all nav links
    this.navLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Add active class to clicked nav link
    e.target.classList.add('active');

    // Scroll to target section
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: targetElement,
        offsetY: 80
      },
      ease: 'power2.inOut'
    });
  }

  // Toggle Mobile Menu
  toggleMobileMenu() {
    this.hamburger.classList.toggle('active');
    this.mobileMenu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  }

  // Close Mobile Menu
  closeMobileMenu() {
    this.hamburger.classList.remove('active');
    this.mobileMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }

  // Update Active Nav Link
  updateActiveNavLink() {
    const scrollPosition = window.scrollY + 100;

    this.sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        this.navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });

        this.mobileNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // Animate Hero Section
  animateHeroSection() {
    // Animate title words
    this.tl.from(this.heroTitleWords, {
      duration: 1,
      y: '100%',
      opacity: 0,
      stagger: 0.1,
      ease: 'power3.out'
    });

    // Animate subtitle
    this.tl.from(this.heroSubtitle, {
      duration: 0.8,
      opacity: 0,
      y: 20,
      ease: 'power2.out'
    }, '-=0.5');

    // Animate buttons
    this.tl.from(this.heroButtons, {
      duration: 0.8,
      opacity: 0,
      y: 20,
      ease: 'power2.out'
    }, '-=0.3');

    // Animate scroll indicator
    this.tl.from(this.heroScrollIndicator, {
      duration: 0.8,
      opacity: 0,
      y: 20,
      ease: 'power2.out'
    }, '-=0.3');
  }

  // Initialize Three.js
  initThreeJS() {
    // Only initialize if Three.js is available
    if (typeof THREE !== 'undefined') {
      this.initHero3DScene();
      this.initAbout3DScene();
      this.initServiceIcons();
      this.initShowcase3DScenes();
      this.initPortfolio3DScenes();
      this.initTestimonialAvatars();
      this.initTeamAvatars();
      this.initParticleSystem();
    }
  }

  // Initialize Hero 3D Scene
  initHero3DScene() {
    // Set up scene
    this.heroScene = new THREE.Scene();
    this.heroCamera = new THREE.PerspectiveCamera(75, this.hero3DObject.clientWidth / this.hero3DObject.clientHeight, 0.1, 1000);
    this.heroRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.heroRenderer.setSize(this.hero3DObject.clientWidth, this.hero3DObject.clientHeight);
    this.hero3DObject.appendChild(this.heroRenderer.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.heroScene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    this.heroScene.add(directionalLight);

    // Create geometry
    const geometry = new THREE.IcosahedronGeometry(2, 1);
    const material = new THREE.MeshPhongMaterial({
      color: 0x6c5ce7,
      emissive: 0x000000,
      specular: 0xffffff,
      shininess: 30,
      wireframe: false,
      transparent: true,
      opacity: 0.9,
      flatShading: true
    });

    this.heroMesh = new THREE.Mesh(geometry, material);
    this.heroScene.add(this.heroMesh);

    // Position camera
    this.heroCamera.position.z = 5;

    // Animation variables
    this.heroMouseX = 0;
    this.heroMouseY = 0;
    this.heroTargetX = 0;
    this.heroTargetY = 0;
    this.heroWindowHalfX = window.innerWidth / 2;
    this.heroWindowHalfY = window.innerHeight / 2;

    // Handle mouse move
    document.addEventListener('mousemove', (e) => {
      this.heroMouseX = (e.clientX - this.heroWindowHalfX) / 100;
      this.heroMouseY = (e.clientY - this.heroWindowHalfY) / 100;
    });

    // Start animation
    this.animateHero3D();
  }

  // Animate Hero 3D Scene
  animateHero3D() {
    requestAnimationFrame(() => this.animateHero3D());

    this.heroTargetX = this.heroMouseX * 0.05;
    this.heroTargetY = this.heroMouseY * 0.05;

    this.heroMesh.rotation.x += 0.01;
    this.heroMesh.rotation.y += 0.01;
    this.heroMesh.rotation.x += (this.heroTargetY - this.heroMesh.rotation.x) * 0.1;
    this.heroMesh.rotation.y += (this.heroTargetX - this.heroMesh.rotation.y) * 0.1;

    this.heroRenderer.render(this.heroScene, this.heroCamera);
  }

  // Initialize About 3D Scene
  initAbout3DScene() {
    // Similar setup to hero scene but with different geometry
    // Implementation would follow the same pattern as initHero3DScene()
    // with different models and animations
  }

  // Initialize Service Icons
  initServiceIcons() {
    // Create 3D icons for each service
    // Implementation would create small 3D scenes for each service icon
  }

  // Initialize Showcase 3D Scenes
  initShowcase3DScenes() {
    // Create 3D scenes for each showcase slide
    // Implementation would create different 3D scenes for each showcase item
  }

  // Initialize Portfolio 3D Scenes
  initPortfolio3DScenes() {
    // Create 3D previews for each portfolio item
    // Implementation would create different 3D scenes for each portfolio item
  }

  // Initialize Testimonial Avatars
  initTestimonialAvatars() {
    // Create 3D avatars for testimonials
    // Implementation would create stylized 3D heads for testimonial authors
  }

  // Initialize Team Avatars
  initTeamAvatars() {
    // Create 3D avatars for team members
    // Implementation would create stylized 3D heads for team members
  }

  // Initialize Particle System
  initParticleSystem() {
    // Create particle system for hero section background
    // Implementation would create a dynamic particle system
  }

  // Setup Scroll Animations
  setupScrollAnimations() {
    // Animate about section stats
    this.statNumbers.forEach(stat => {
      const target = +stat.getAttribute('data-count');
      const duration = 2;
      const start = 0;
      
      const animate = () => {
        let current = start;
        const increment = target / (duration * 60); // 60fps
        
        const updateCounter = () => {
          current += increment;
          if (current < target) {
            stat.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
          } else {
            stat.textContent = target;
          }
        };
        
        updateCounter();
      };
      
      // Create scroll trigger
      ScrollTrigger.create({
        trigger: stat,
        start: 'top 80%',
        onEnter: animate,
        once: true
      });
    });

    // Animate skill bars
    this.skillBars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      
      ScrollTrigger.create({
        trigger: bar,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(bar, {
            width: width,
            duration: 1.5,
            ease: 'power2.out'
          });
        },
        once: true
      });
    });

    // Animate achievement numbers
    this.achievementNumbers.forEach(number => {
      const target = +number.getAttribute('data-count');
      const duration = 2;
      const start = 0;
      
      const animate = () => {
        let current = start;
        const increment = target / (duration * 60); // 60fps
        
        const updateCounter = () => {
          current += increment;
          if (current < target) {
            number.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
          } else {
            number.textContent = target;
          }
        };
        
        updateCounter();
      };
      
      // Create scroll trigger
      ScrollTrigger.create({
        trigger: number,
        start: 'top 80%',
        onEnter: animate,
        once: true
      });
    });

    // Section entrance animations
    this.sections.forEach(section => {
      const elements = section.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power2.out'
        });
      });
    });
  }

  // Showcase Slide Navigation
  prevShowcaseSlide() {
    this.currentShowcaseSlide = (this.currentShowcaseSlide - 1 + this.showcaseSlides.length) % this.showcaseSlides.length;
    this.updateShowcaseSlide();
  }

  nextShowcaseSlide() {
    this.currentShowcaseSlide = (this.currentShowcaseSlide + 1) % this.showcaseSlides.length;
    this.updateShowcaseSlide();
  }

  goToShowcaseSlide(index) {
    this.currentShowcaseSlide = index;
    this.updateShowcaseSlide();
  }

  updateShowcaseSlide() {
    // Hide all slides
    this.showcaseSlides.forEach(slide => {
      slide.classList.remove('active');
    });

    // Deactivate all dots
    this.showcaseDots.forEach(dot => {
      dot.classList.remove('active');
    });

    // Show current slide
    this.showcaseSlides[this.currentShowcaseSlide].classList.add('active');

    // Activate current dot
    this.showcaseDots[this.currentShowcaseSlide].classList.add('active');

    // Animate transition
    gsap.from(this.showcaseSlides[this.currentShowcaseSlide], {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power2.out'
    });
  }

  // Testimonial Navigation
  goToTestimonial(index) {
    this.currentTestimonial = index;
    this.updateTestimonial();
  }

  updateTestimonial() {
    // Hide all testimonials
    this.testimonialCards.forEach(card => {
      card.classList.remove('active');
    });

    // Deactivate all dots
    this.testimonialDots.forEach(dot => {
      dot.classList.remove('active');
    });

    // Show current testimonial
    this.testimonialCards[this.currentTestimonial].classList.add('active');

    // Activate current dot
    this.testimonialDots[this.currentTestimonial].classList.add('active');

    // Animate transition
    gsap.from(this.testimonialCards[this.currentTestimonial], {
      opacity: 0,
      x: 50,
      duration: 0.8,
      ease: 'power2.out'
    });
  }

  // Scroll To Top
  scrollToTop() {
    gsap.to(window, {
      duration: 1,
      scrollTo: 0,
      ease: 'power2.inOut'
    });
  }

  // Handle Contact Form Submission
  handleContactSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this.contactForm);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.name || !data.email || !data.message) {
      alert('Please fill in all required fields');
      return;
    }
    
    // In a real app, you would send this data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    this.contactForm.reset();
    
    // Reset form labels
    this.formGroups.forEach(group => {
      const input = group.querySelector('input, textarea');
      const label = group.querySelector('label');
      
      if (input.value === '') {
        gsap.to(label, {
          top: '15px',
          left: '20px',
          fontSize: '1rem',
          backgroundColor: 'transparent',
          color: 'var(--gray-color)',
          duration: 0.3
        });
      }
    });
  }

  // Handle Newsletter Form Submission
  handleNewsletterSubmit(e) {
    e.preventDefault();
    
    // Get email value
    const email = this.newsletterForm.querySelector('input').value;
    
    // Simple validation
    if (!email) {
      alert('Please enter your email address');
      return;
    }
    
    // In a real app, you would send this to a server
    console.log('Newsletter subscription:', email);
    
    // Show success message
    alert('Thank you for subscribing to our newsletter!');
    
    // Reset form
    this.newsletterForm.reset();
  }

  // Handle Window Resize
  handleResize() {
    // Update Three.js scenes on resize
    if (this.heroRenderer) {
      this.heroCamera.aspect = this.hero3DObject.clientWidth / this.hero3DObject.clientHeight;
      this.heroCamera.updateProjectionMatrix();
      this.heroRenderer.setSize(this.hero3DObject.clientWidth, this.hero3DObject.clientHeight);
    }
    
    // Update other responsive elements as needed
  }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const app = new Nexus3DApp();
});

// Helper function to check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

// Helper function to debounce resize events
function debounce(func, wait = 100, immediate = false) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Helper function for smooth scrolling
function smoothScrollTo(target, duration = 1000) {
  const targetElement = document.querySelector(target);
  if (!targetElement) return;

  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Export for modules (if needed)
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    Nexus3DApp,
    isInViewport,
    debounce,
    smoothScrollTo
  };
}
