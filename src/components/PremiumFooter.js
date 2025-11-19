// src/components/PremiumFooter.js
import React from 'react';
import { Link } from 'react-router-dom';

const PremiumFooter = () => {
  return (
    <footer className="premium-footer">
      <div className="container">
        <div className="row">
          {/* Brand Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-brand">
              <h5 className="mb-3 text-white">TamilSangamam</h5>
              <p className="text-muted mb-3">
                Premium matrimony service trusted by Tamil families worldwide. 
                Where tradition meets technology.
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-lg-2 col-md-3 col-6 mb-4">
            <h6 className="text-white mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-muted text-decoration-none">Home</Link></li>
              <li className="mb-2"><Link to="/search" className="text-muted text-decoration-none">Search</Link></li>
              <li className="mb-2"><Link to="/profiles" className="text-muted text-decoration-none">Profiles</Link></li>
              <li className="mb-2"><Link to="/success-stories" className="text-muted text-decoration-none">Success Stories</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="col-lg-2 col-md-3 col-6 mb-4">
            <h6 className="text-white mb-3">Services</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/premium" className="text-muted text-decoration-none">Premium Membership</Link></li>
              <li className="mb-2"><Link to="/assisted" className="text-muted text-decoration-none">Assisted Service</Link></li>
              <li className="mb-2"><Link to="/horoscope" className="text-muted text-decoration-none">Horoscope Matching</Link></li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="col-lg-2 col-md-3 col-6 mb-4">
            <h6 className="text-white mb-3">Support</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/contact" className="text-muted text-decoration-none">Contact Us</Link></li>
              <li className="mb-2"><Link to="/help" className="text-muted text-decoration-none">Help Center</Link></li>
              <li className="mb-2"><Link to="/privacy" className="text-muted text-decoration-none">Privacy Policy</Link></li>
              <li className="mb-2"><Link to="/terms" className="text-muted text-decoration-none">Terms of Service</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="col-lg-2 col-md-3 col-6 mb-4">
            <h6 className="text-white mb-3">Contact Info</h6>
            <div className="text-muted">
              <p className="mb-2 small">📞 +91 6383271397</p>
              <p className="mb-2 small">✉️ info@dummymatrimoney.com</p>
              <p className="mb-0 small">📍 Chennai, Tamil Nadu</p>
            </div>
          </div>
        </div>
        
        <hr className="my-4 border-secondary" />
        
        {/* Copyright and Social */}
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <p className="mb-0 text-muted small">
              &copy; 2025 DummyMatrimoney. All rights reserved.
            </p>
            <p>developed by Jeysurya </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="social-links">
              <a href="#facebook" className="text-muted text-decoration-none me-3 small">Facebook</a>
              <a href="#instagram" className="text-muted text-decoration-none me-3 small">Instagram</a>
              <a href="#twitter" className="text-muted text-decoration-none small">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;
