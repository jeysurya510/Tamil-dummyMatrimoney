import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const PremiumHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <nav className={`premium-navbar navbar navbar-expand-lg ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand premium-logo" to="/">
          <span className="logo-icon">💍</span>
          <span className="logo-text">
            <span className="logo-main">DummyMatrimoney</span>
            <span className="logo-tagline">Premium Matrimony</span>
          </span>
        </Link>

        <button 
          className="navbar-toggler" 
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className={isActiveLink('/')} to="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={isActiveLink('/search')} to="/search" onClick={() => setIsMobileMenuOpen(false)}>
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link className={isActiveLink('/profiles')} to="/profiles" onClick={() => setIsMobileMenuOpen(false)}>
                Profiles
              </Link>
            </li>
            <li className="nav-item">
              <Link className={isActiveLink('/success-stories')} to="/success-stories" onClick={() => setIsMobileMenuOpen(false)}>
                Success Stories
              </Link>
            </li>
            <li className="nav-item">
              <Link className={isActiveLink('/contact')} to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="nav-actions">
            <Link to="/login" className="btn btn-login shimmer-btn">
              Login
            </Link>
            <Link to="/register" className="btn btn-register glow-btn">
              Register Free
            </Link>
          </div>
        </div>
      </div>
      
      <div className="nav-border-animation"></div>
    </nav>
  );
};

export default PremiumHeader;