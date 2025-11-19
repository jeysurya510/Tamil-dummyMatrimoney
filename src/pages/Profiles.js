// src/pages/Profiles.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfileCard3D from '../components/ProfileCard3D';
import LoadingSpinner from '../components/LoadingSpinner';

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setTimeout(() => {
      const allProfiles = [
        {
          id: 1,
          name: "Dr. Priya Lakshmi",
          age: 28,
          profession: "Cardiologist",
          education: "MBBS, MD - AIIMS",
          salary: "₹25+ LPA",
          location: "Chennai",
          religion: "Hindu",
          caste: "Iyer",
          stars: "Mesham",
          image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200",
          verified: true,
          premium: true,
          online: true,
          horoscope: "Available"
        },
        {
          id: 2,
          name: "Eng. Arjun Kumar",
          age: 30,
          profession: "Tech Lead - Google",
          education: "B.Tech IIT Madras",
          salary: "₹35+ LPA",
          location: "Bangalore",
          religion: "Hindu",
          caste: "Naidu",
          stars: "Simham",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
          verified: true,
          premium: true,
          online: false,
          horoscope: "Available"
        },
        {
          id: 3,
          name: "Adv. Meena Subramanian",
          age: 26,
          profession: "High Court Lawyer",
          education: "LL.M - NLSIU",
          salary: "₹18+ LPA",
          location: "Chennai",
          religion: "Hindu",
          caste: "Iyer",
          stars: "Kadagam",
          image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200",
          verified: true,
          premium: false,
          online: true,
          horoscope: "On Request"
        }
      ];
      setProfiles(allProfiles);
      setFilteredProfiles(allProfiles);
      setLoading(false);
    }, 1500);
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    if (term === '') {
      setFilteredProfiles(profiles);
    } else {
      const filtered = profiles.filter(profile =>
        profile.name.toLowerCase().includes(term) ||
        profile.profession.toLowerCase().includes(term) ||
        profile.location.toLowerCase().includes(term) ||
        profile.caste.toLowerCase().includes(term)
      );
      setFilteredProfiles(filtered);
    }
  };

  if (loading) {
    return <LoadingSpinner message="Loading Premium Profiles..." />;
  }

  return (
    <div className="profiles-page py-5 mt-5">
      <div className="container">
        {/* Page Header */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="page-header text-center animate-fade-in-up">
              <h1 className="premium-title mb-3">Premium Tamil Profiles</h1>
              <p className="premium-subtitle">
                Discover your perfect match from verified Tamil families
              </p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto">
            <div className="search-box animate-slide-in-left">
              <div className="input-group input-group-lg">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by name, profession, location, caste..."
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <span className="input-group-text bg-primary text-white">
                  🔍
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="results-info text-center">
              <h5 className="text-muted mb-0">
                Showing {filteredProfiles.length} of {profiles.length} profiles
              </h5>
            </div>
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="row g-4">
          {filteredProfiles.map((profile, index) => (
            <div key={profile.id} className="col-xl-4 col-lg-6 col-md-6 mb-4">
              <div className={`h-100 animate-fade-in-up`} style={{animationDelay: `${index * 0.1}s`}}>
                <ProfileCard3D profile={profile} />
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProfiles.length === 0 && (
          <div className="row">
            <div className="col-12">
              <div className="no-results text-center py-5">
                <div className="no-results-icon mb-3" style={{fontSize: '4rem'}}>🔍</div>
                <h4 className="mb-3">No profiles found</h4>
                <p className="text-muted mb-4">Try adjusting your search criteria</p>
                <Link to="/search" className="btn btn-primary btn-lg">
                  Advanced Search
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Load More Button */}
        {filteredProfiles.length > 0 && (
          <div className="row mt-5">
            <div className="col-12 text-center">
              <button className="btn btn-outline-primary btn-lg">
                Load More Profiles
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profiles;