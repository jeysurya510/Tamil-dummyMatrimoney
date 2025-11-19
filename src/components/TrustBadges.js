import React from 'react';

const TrustBadges = () => {
  const badges = [
    { icon: "🔒", text: "100% Secure & Verified" },
    { icon: "💖", text: "5,000+ Success Stories" },
    { icon: "🌍", text: "Serving Tamils Worldwide" },
    { icon: "⭐", text: "4.9/5 Customer Rating" }
  ];

  return (
    <section className="trust-badges py-4">
      <div className="container">
        <div className="row">
          {badges.map((badge, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-3">
              <div className="trust-badge text-center animate-bounce">
                <div className="badge-icon mb-2">{badge.icon}</div>
                <p className="badge-text mb-0">{badge.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;