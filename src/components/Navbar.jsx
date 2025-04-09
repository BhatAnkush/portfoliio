
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      padding: '0 2rem',
      height: '70px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'var(--transition)',
      backgroundColor: scrolled ? 'rgba(10, 25, 47, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? '0 10px 30px -10px rgba(2, 12, 27, 0.7)' : 'none'
    }}>
      <div className="logo" style={{
        fontFamily: 'var(--font-mono)',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: 'var(--accent-color)'
      }}>
        <a href="#home">JS.</a>
      </div>
      
      <nav style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <ul style={{
          display: mobileMenuOpen ? 'flex' : 'none',
          flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
          position: window.innerWidth <= 768 ? 'absolute' : 'static',
          top: window.innerWidth <= 768 ? '70px' : 'auto',
          right: window.innerWidth <= 768 ? '0' : 'auto',
          backgroundColor: window.innerWidth <= 768 ? 'var(--secondary-color)' : 'transparent',
          width: window.innerWidth <= 768 ? '70%' : 'auto',
          height: window.innerWidth <= 768 ? '100vh' : 'auto',
          alignItems: window.innerWidth <= 768 ? 'center' : 'center',
          justifyContent: window.innerWidth <= 768 ? 'flex-start' : 'center',
          padding: window.innerWidth <= 768 ? '2rem' : '0',
          '@media (min-width: 769px)': { display: 'flex' }
        }} className="nav-links">
          <li style={{ margin: '0 1.5rem', padding: '0.5rem 0', fontSize: '0.9rem' }}>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
              <span style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-mono)' }}>01. </span>About
            </a>
          </li>
          <li style={{ margin: '0 1.5rem', padding: '0.5rem 0', fontSize: '0.9rem' }}>
            <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>
              <span style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-mono)' }}>02. </span>Experience
            </a>
          </li>
          <li style={{ margin: '0 1.5rem', padding: '0.5rem 0', fontSize: '0.9rem' }}>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>
              <span style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-mono)' }}>03. </span>Projects
            </a>
          </li>
          <li style={{ margin: '0 1.5rem', padding: '0.5rem 0', fontSize: '0.9rem' }}>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
              <span style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-mono)' }}>04. </span>Contact
            </a>
          </li>
          <li style={{ marginLeft: '1.5rem' }}>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Resume
            </a>
          </li>
        </ul>
        
        <button 
          className="mobile-menu-btn"
          onClick={toggleMenu}
          style={{
            display: 'none',
            '@media (max-width: 768px)': { display: 'block' },
            fontSize: '1.5rem',
            color: 'var(--accent-color)',
            background: 'none',
            border: 'none'
          }}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
