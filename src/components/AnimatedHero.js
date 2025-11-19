import React from 'react';
import { Link } from 'react-router-dom';

const AnimatedHero = () => {
  return (
    <section className="premium-hero-section">
      <div className="hero-particles">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }}></div>
        ))}
      </div>
      
      <div className="container">
        <div className="row align-items-center min-vh-80">
          <div className="col-lg-6">
            <h1 className="hero-main-title">
              <span className="typing-text">Find Your Perfect</span>
              <span className="gradient-text"> Tamil Soulmate</span>
            </h1>
            
            <p className="hero-subtitle animate-fade-in-up">
              Where Tradition Meets Technology - Trusted by 10,000+ Tamil Families Worldwide
            </p>
            
            <div className="hero-features">
              <span className="feature-tag verified-tag">✓ Verified Profiles</span>
              <span className="feature-tag secure-tag">🔒 100% Secure</span>
              <span className="feature-tag success-tag">💖 5,000+ Success Stories</span>
            </div>
            
            <div className="hero-actions">
              <Link to="/register" className="btn btn-primary-hero magnetic-btn">
                Start Your Journey
                <span className="btn-sparkle">✨</span>
              </Link>
              <Link to="/success-stories" className="btn btn-secondary-hero hover-glow">
                Watch Success Stories
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-image animate-float">
              <img 
                src="https://i.pinimg.com/736x/83/5c/8c/835c8cd9d61adf60ccc15f695e4927cf.jpg" 
                alt="Happy Tamil Couple" 
                className="img-fluid rounded-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHero;