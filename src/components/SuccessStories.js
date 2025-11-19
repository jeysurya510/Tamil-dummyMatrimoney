// src/components/SuccessStories.js
import React from 'react';
import { Link } from 'react-router-dom';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      couple: "Arjun & Priya",
      date: "Married: Jan 2023",
      story: "We found our perfect match through TamilSangamam. The process was smooth and secure.",
      image: "https://i.pinimg.com/736x/a5/4c/14/a54c14db0cdadc4fe97ec3e6d26a020b.jpg"
    },
    {
      id: 2,
      couple: "Karthik & Meena", 
      date: "Married: Mar 2023",
      story: "As professionals, we appreciated the verified profiles and modern approach.",
      image: "https://i.pinimg.com/736x/59/4c/b6/594cb63e46650f114445f66eb94879a8.jpg"
    }
  ];

  return (
    <section className="success-stories-section py-5 bg-light">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="premium-title mb-3">Success Stories</h2>
          <p className="premium-subtitle">Real couples, real happiness</p>
        </div>
        
        <div className="row g-4 justify-content-center">
          {stories.map((story, index) => (
            <div key={story.id} className="col-lg-6 col-md-10">
              <div className={`success-story-card animate-fade-in-up h-100`} 
                   style={{animationDelay: `${index * 0.2}s`}}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="row g-0 h-100">
                    {/* Image Column */}
                    <div className="col-md-4">
                      <div className="story-image h-100">
                        <img 
                          src={story.image} 
                          alt={story.couple}
                          className="img-fluid h-100 w-100"
                          style={{objectFit: 'cover'}}
                        />
                      </div>
                    </div>
                    
                    {/* Content Column */}
                    <div className="col-md-8">
                      <div className="card-body d-flex flex-column h-100 p-4">
                        <h5 className="card-title text-primary mb-3">{story.couple}</h5>
                        <p className="card-text flex-grow-1 text-muted mb-3">
                          {story.story}
                        </p>
                        <div className="story-meta mt-auto">
                          <small className="text-muted">
                            <i className="fas fa-heart text-danger me-2"></i>
                            {story.date}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <Link to="/success-stories" className="btn btn-primary btn-lg">
            View All Success Stories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;