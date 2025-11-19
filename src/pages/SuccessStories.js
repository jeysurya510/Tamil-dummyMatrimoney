// src/pages/SuccessStories.js
import React from 'react';
import { Link } from 'react-router-dom';

const SuccessStories = () => {
  const successStories = [
    {
      id: 1,
      coupleName: "Arjun & Priya",
      marriedDate: "January 15, 2023",
      story: "We found each other through TamilSangamam after years of searching. Our families connected instantly and we knew it was meant to be!",
      image: "https://i.pinimg.com/736x/ae/e6/7e/aee67e75d663302f8ed13bbb9b6d370d.jpg",
      location: "Chennai"
    },
    {
      id: 2,
      coupleName: "Karthik & Meena",
      marriedDate: "March 22, 2023", 
      story: "As busy professionals, we never had time to find the right partner. TamilSangamam made it easy with verified profiles and secure matching.",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=300&fit=crop",
      location: "Bangalore"
    },
    {
      id: 3,
      coupleName: "Suresh & Kavitha",
      marriedDate: "November 8, 2022",
      story: "Traditional values with modern technology - that's what made TamilSangamam perfect for our families. Thank you for bringing us together!",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop",
      location: "Coimbatore"
    }
  ];

  return (
    <div className="success-stories-page py-5 mt-5">
      <div className="container">
        {/* Page Header */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="page-header text-center animate-fade-in-up">
              <h1 className="premium-title mb-3">Success Stories</h1>
              <p className="premium-subtitle lead">
                Real couples who found their perfect match through TamilSangamam
              </p>
            </div>
          </div>
        </div>

        {/* Success Stories Grid */}
        <div className="row g-4 justify-content-center">
          {successStories.map((story, index) => (
            <div key={story.id} className="col-xl-4 col-lg-6 col-md-8">
              <div className={`success-story-card animate-fade-in-up h-100`} 
                   style={{animationDelay: `${index * 0.2}s`}}>
                <div className="card h-100 border-0 shadow-lg">
                  {/* Story Image */}
                  <div className="story-image position-relative">
                    <img 
                      src={story.image} 
                      alt={story.coupleName}
                      className="card-img-top"
                      style={{height: '250px', objectFit: 'cover'}}
                    />
                    <div className="story-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                      <span className="heart-icon display-4 text-white">💖</span>
                    </div>
                  </div>

                  {/* Story Content */}
                  <div className="card-body d-flex flex-column p-4">
                    <h5 className="card-title text-primary mb-2">{story.coupleName}</h5>
                    <p className="story-location text-muted mb-3">
                      <i className="fas fa-map-marker-alt me-2"></i>
                      {story.location}
                    </p>
                    <p className="card-text text-muted flex-grow-1 mb-3">
                      {story.story}
                    </p>
                    <div className="story-meta border-top pt-3">
                      <small className="text-muted">
                        <i className="fas fa-calendar-alt me-2"></i>
                        Married: {story.marriedDate}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="row mt-5 pt-5">
          <div className="col-12">
            <div className="stats-section text-center py-5 px-3 rounded-3">
              <h3 className="text-white mb-5">Our Success in Numbers</h3>
              <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-3 col-md-6 col-6 mb-4">
                  <div className="stat-card">
                    <h2 className="stat-number text-white">5,000+</h2>
                    <p className="stat-label text-light">Successful Matches</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-6 mb-4">
                  <div className="stat-card">
                    <h2 className="stat-number text-white">50,000+</h2>
                    <p className="stat-label text-light">Registered Members</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-6 mb-4">
                  <div className="stat-card">
                    <h2 className="stat-number text-white">100+</h2>
                    <p className="stat-label text-light">Cities Worldwide</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-6 mb-4">
                  <div className="stat-card">
                    <h2 className="stat-number text-white">98%</h2>
                    <p className="stat-label text-light">Satisfaction Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="cta-section text-center py-5 px-3">
              <h3 className="mb-4">Ready to Start Your Story?</h3>
              <p className="mb-4 text-muted lead">
                Join thousands of Tamil families finding their perfect matches
              </p>
              <div className="cta-buttons">
                <Link to="/register" className="btn btn-primary btn-lg me-3 mb-2">
                  Create Your Profile
                </Link>
                <Link to="/profiles" className="btn btn-outline-primary btn-lg mb-2">
                  Browse Profiles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;