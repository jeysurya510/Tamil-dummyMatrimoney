// src/pages/Pricing.js
import React, { useState, useEffect, useRef } from 'react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [isVisible, setIsVisible] = useState(false);
  const pricingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (pricingRef.current) {
      observer.observe(pricingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      id: 1,
      name: "Free",
      price: { monthly: "0", yearly: "0" },
      duration: { monthly: "Lifetime", yearly: "Lifetime" },
      description: "Start your journey absolutely free",
      popular: false,
      features: [
        "Basic Profile Creation",
        "Limited Profile Views (10/day)",
        "Standard Search Filters",
        "Basic Match Suggestions",
        "Email Support",
        "Profile Verification"
      ],
      limitations: [
        "No Photo Views",
        "No Contact Access",
        "Limited Messages"
      ],
      buttonText: "Get Started Free",
      buttonVariant: "outline-primary",
      icon: "🎯"
    },
    {
      id: 2,
      name: "Premium",
      price: { monthly: "499", yearly: "4,999" },
      duration: { monthly: "per month", yearly: "per year" },
      description: "Most popular choice for serious seekers",
      popular: true,
      features: [
        "✨ All Free Features",
        "🚀 Unlimited Profile Views",
        "🔍 Advanced Search Filters",
        "⭐ Priority Customer Support",
        "📞 View Contact Details",
        "💌 Send Unlimited Messages",
        "🖼️ Photo Gallery Access",
        "🔮 Horoscope Matching",
        "🌟 Profile Highlighting",
        "📱 Mobile App Access"
      ],
      savings: "🎁 Save 16% with yearly plan",
      buttonText: "Choose Premium",
      buttonVariant: "primary",
      icon: "👑"
    },
    {
      id: 3,
      name: "VIP",
      price: { monthly: "1,499", yearly: "14,999" },
      duration: { monthly: "per month", yearly: "per year" },
      description: "Ultimate personalized service",
      popular: false,
      features: [
        "💎 All Premium Features",
        "🤵 Dedicated Relationship Manager",
        "💖 Personalized Matchmaking",
        "🔒 Background Verification",
        "👨‍👩‍👧‍👦 Family Meeting Assistance",
        "🚀 Priority Profile Placement",
        "⚡ Express Customer Support",
        "💒 Wedding Planning Guidance",
        "🎉 Exclusive Events Access",
        "✅ Success Guarantee"
      ],
      savings: "🎁 Save 16% with yearly plan",
      buttonText: "Go VIP",
      buttonVariant: "primary",
      icon: "💎"
    }
  ];

  const additionalServices = [
    {
      id: 1,
      name: "Horoscope Matching",
      price: "₹999",
      description: "Detailed horoscope compatibility analysis by expert astrologers",
      features: ["10-Point Matching", "Manglik Analysis", "Remedial Suggestions"],
      icon: "🔮"
    },
    {
      id: 2,
      name: "Profile Highlight",
      price: "₹299/week",
      description: "Make your profile stand out in search results",
      features: ["Top Placement", "Increased Visibility", "Premium Badge"],
      icon: "🌟"
    },
    {
      id: 3,
      name: "Background Verification",
      price: "₹1,999",
      description: "Complete background check and verification",
      features: ["Education Verification", "Employment Check", "Family Verification"],
      icon: "🔒"
    }
  ];

  return (
    <div className="pricing-page py-5 mt-5" ref={pricingRef}>
      <div className="container">
        {/* Animated Header */}
        <div className="row mb-5">
          <div className="col-12">
            <div className={`page-header text-center ${isVisible ? 'animate-typing' : ''}`}>
              <div className="floating-emoji">💍</div>
              <h1 className="premium-title mb-3 gradient-text animate-charcter">
                Plans & Pricing
              </h1>
              <p className="premium-subtitle lead animate-subtitle">
                Choose the perfect plan to find your life partner
              </p>
              <div className="sparkle-container">
                <div className="sparkle">✨</div>
                <div className="sparkle">✨</div>
                <div className="sparkle">✨</div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Billing Toggle */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="billing-toggle text-center animate-bounce-in">
              <div className="toggle-container">
                <div className="btn-group" role="group">
                  <input
                    type="radio"
                    className="btn-check"
                    name="billingCycle"
                    id="monthly"
                    autoComplete="off"
                    checked={billingCycle === 'monthly'}
                    onChange={() => setBillingCycle('monthly')}
                  />
                  <label className="btn btn-outline-primary" htmlFor="monthly">
                    <span className="billing-icon">📅</span>
                    Monthly Billing
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="billingCycle"
                    id="yearly"
                    autoComplete="off"
                    checked={billingCycle === 'yearly'}
                    onChange={() => setBillingCycle('yearly')}
                  />
                  <label className="btn btn-outline-primary" htmlFor="yearly">
                    <span className="billing-icon">📆</span>
                    Yearly Billing
                    <span className="badge bg-success ms-2 pulse">Save 16%</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Pricing Cards */}
        <div className="row g-4 justify-content-center mb-5">
          {plans.map((plan, index) => (
            <div key={plan.id} className="col-xl-4 col-lg-6 col-md-8">
              <div 
                className={`pricing-card h-100 ${plan.popular ? 'popular' : ''} ${isVisible ? 'animate-card-float' : ''}`}
                style={{ 
                  animationDelay: `${index * 0.3}s`,
                  animationDuration: '1s'
                }}
              >
                <div className="card h-100 border-0 shadow-lg position-relative card-hover-3d">
                  {/* Floating Popular Badge */}
                  {plan.popular && (
                    <div className="popular-badge position-absolute top-0 start-50 translate-middle floating-badge">
                      ⭐ Most Popular ⭐
                    </div>
                  )}

                  {/* Plan Icon */}
                  <div className="plan-icon-wrapper">
                    <div className="plan-icon">
                      {plan.icon}
                    </div>
                  </div>

                  <div className="card-body p-4 d-flex flex-column">
                    {/* Plan Header */}
                    <div className="plan-header text-center mb-4">
                      <h3 className="plan-name text-primary mb-2 animate-text-glow">
                        {plan.name}
                      </h3>
                      <p className="plan-description text-muted mb-3">{plan.description}</p>
                      
                      {/* Animated Price */}
                      <div className="price-section mb-3 animate-price-bounce">
                        <span className="price-currency">₹</span>
                        <span className="price-amount display-4 fw-bold">
                          {plan.price[billingCycle]}
                        </span>
                        <div className="price-duration text-muted">
                          {plan.duration[billingCycle]}
                        </div>
                      </div>

                      {/* Savings Badge */}
                      {plan.savings && (
                        <div className="savings-badge text-success small fw-bold animate-pulse-glow">
                          {plan.savings}
                        </div>
                      )}
                    </div>

                    {/* Features with Check Animation */}
                    <div className="plan-features flex-grow-1 mb-4">
                      <h6 className="features-title mb-3">What's included:</h6>
                      <ul className="features-list list-unstyled">
                        {plan.features.map((feature, idx) => (
                          <li 
                            key={idx} 
                            className="feature-item mb-2 animate-feature-slide"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                          >
                            <span className="check-mark">✅</span>
                            <span className="feature-text">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Limitations */}
                      {plan.limitations && (
                        <>
                          <h6 className="limitations-title text-muted mt-3 mb-2">Limitations:</h6>
                          <ul className="limitations-list list-unstyled">
                            {plan.limitations.map((limitation, idx) => (
                              <li 
                                key={idx} 
                                className="limitation-item mb-1 text-muted animate-feature-slide"
                                style={{ animationDelay: `${idx * 0.1 + 0.5}s` }}
                              >
                                <span className="cross-mark">❌</span>
                                {limitation}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>

                    {/* Animated CTA Button */}
                    <div className="plan-actions mt-auto">
                      <button className={`btn btn-${plan.buttonVariant} w-100 btn-lg animate-button-pulse`}>
                        {plan.buttonText}
                        <span className="button-sparkle">✨</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Animated Additional Services */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="section-header text-center mb-5">
              <h2 className="premium-title animate-text-shine">Additional Services</h2>
              <p className="premium-subtitle animate-fade-in-up">Enhance your matchmaking experience</p>
            </div>

            <div className="row g-4">
              {additionalServices.map((service, index) => (
                <div key={service.id} className="col-lg-4 col-md-6">
                  <div 
                    className="service-card card border-0 shadow-sm h-100 animate-service-float"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="service-icon">{service.icon}</div>
                    <div className="card-body p-4 d-flex flex-column">
                      <div className="service-header mb-3">
                        <h5 className="service-name text-primary mb-2">{service.name}</h5>
                        <div className="service-price h4 text-dark mb-2 animate-price-glow">
                          {service.price}
                        </div>
                        <p className="service-description text-muted small">
                          {service.description}
                        </p>
                      </div>

                      <div className="service-features flex-grow-1 mb-3">
                        <ul className="features-list list-unstyled">
                          {service.features.map((feature, idx) => (
                            <li 
                              key={idx} 
                              className="feature-item mb-2 small animate-feature-fade"
                              style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                              <span className="check-mark">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="btn btn-outline-primary btn-sm mt-auto animate-button-hover">
                        Add Service <span className="button-arrow">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated FAQ Section */}
        <div className="row">
          <div className="col-12">
            <div className="faq-section">
              <div className="section-header text-center mb-5">
                <h2 className="premium-title animate-text-wave">Frequently Asked Questions</h2>
                <p className="premium-subtitle animate-fade-in-up">Get answers to common questions</p>
              </div>

              <div className="accordion animate-accordion-slide" id="pricingFAQ">
                {[
                  {
                    id: 1,
                    question: "Can I upgrade or downgrade my plan later?",
                    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated based on your billing cycle."
                  },
                  {
                    id: 2,
                    question: "Is there a refund policy?",
                    answer: "We offer a 7-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team for a full refund."
                  },
                  {
                    id: 3,
                    question: "What payment methods do you accept?",
                    answer: "We accept all major credit cards, debit cards, net banking, UPI, and digital wallets like PayPal, Google Pay, and PhonePe."
                  },
                  {
                    id: 4,
                    question: "Can I cancel my subscription anytime?",
                    answer: "Yes, you can cancel your subscription at any time. Your account will remain active until the end of your billing period."
                  },
                  {
                    id: 5,
                    question: "Do you offer family discounts?",
                    answer: "Yes, we offer special family packages for multiple members. Contact our support team for custom pricing."
                  }
                ].map((faq, index) => (
                  <div 
                    key={faq.id} 
                    className="accordion-item border-0 mb-3 animate-faq-item"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed animate-accordion-hover"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq${faq.id}`}
                      >
                        <span className="question-icon">❓</span>
                        {faq.question}
                      </button>
                    </h3>
                    <div
                      id={`faq${faq.id}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#pricingFAQ"
                    >
                      <div className="accordion-body text-muted animate-answer-reveal">
                        <span className="answer-icon">💡</span>
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Animated CTA Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="cta-section text-center py-5 px-3 bg-light rounded-3 animate-cta-glow">
              <div className="cta-sparkles">
                <div className="sparkle">💫</div>
                <div className="sparkle">💫</div>
                <div className="sparkle">💫</div>
              </div>
              <h3 className="mb-3 animate-text-rainbow">Ready to Find Your Perfect Match?</h3>
              <p className="mb-4 text-muted lead animate-subtitle-bounce">
                Join thousands of successful couples who found love through us! 💖
              </p>
              <div className="cta-buttons">
                <button className="btn btn-primary btn-lg me-3 mb-2 animate-button-magnetic">
                  <span className="button-sparkle">✨</span>
                  Start Free Trial
                  <span className="button-sparkle">✨</span>
                </button>
                <button className="btn btn-outline-primary btn-lg mb-2 animate-button-float">
                  📞 Talk to Expert
                </button>
              </div>
              <div className="success-stats animate-stats-counter">
                <div className="stat-item">
                  <span className="stat-number">5,000+</span>
                  <span className="stat-label">Successful Matches</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;