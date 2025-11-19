// src/components/ProfileCard3D.js
import React from 'react';

const ProfileCard3D = ({ profile }) => {
  return (
    <div className="profile-card-3d h-100">
      <div className="profile-card-inner h-100">
        {/* Front Side */}
        <div className="profile-card-front h-100 d-flex flex-column">
          <div className="card-header text-center position-relative">
            <div className="profile-image-container mx-auto mb-3">
              <img src={profile.image} alt={profile.name} className="profile-image" />
              {profile.online && <span className="online-indicator"></span>}
            </div>
            <div className="badge-container">
              {profile.premium && <span className="premium-badge">Premium</span>}
              {profile.verified && <span className="verified-badge">✓ Verified</span>}
            </div>
          </div>
          
          <div className="card-body flex-grow-1">
            <h5 className="profile-name text-center mb-2">{profile.name}</h5>
            <div className="profile-details text-center">
              <p className="profile-age mb-1"><strong>Age:</strong> {profile.age}</p>
              <p className="profile-profession mb-1">{profile.profession}</p>
              <p className="profile-education mb-1 small text-muted">{profile.education}</p>
              <p className="profile-location mb-2">📍 {profile.location}</p>
            </div>
            
            <div className="profile-tags d-flex justify-content-center flex-wrap gap-1 mb-3">
              <span className="tag religion small">{profile.religion}</span>
              <span className="tag caste small">{profile.caste}</span>
              <span className="tag stars small">{profile.stars}</span>
            </div>
          </div>
          
          <div className="card-footer text-center">
            <div className="btn-group w-100" role="group">
              <button className="btn btn-outline-primary btn-sm">View Profile</button>
              <button className="btn btn-primary btn-sm">Connect</button>
            </div>
          </div>
        </div>
        
        {/* Back Side */}
        <div className="profile-card-back h-100 d-flex align-items-center justify-content-center">
          <div className="back-content text-center">
            <h6 className="mb-3">Quick Details</h6>
            <div className="back-details">
              <p className="mb-2"><strong>Salary:</strong> {profile.salary}</p>
              <p className="mb-2"><strong>Horoscope:</strong> {profile.horoscope}</p>
              <p className="mb-3"><strong>Status:</strong> {profile.online ? 'Online Now' : 'Last seen recently'}</p>
            </div>
            <div className="action-buttons">
              <button className="btn btn-light btn-sm me-2">Send Interest</button>
              <button className="btn btn-light btn-sm">Shortlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard3D;