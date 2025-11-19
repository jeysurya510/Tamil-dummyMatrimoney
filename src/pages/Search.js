import React, { useState } from 'react';
import ProfileCard3D from '../components/ProfileCard3D';

const Search = () => {
  const [filters, setFilters] = useState({
    gender: '',
    ageFrom: '',
    ageTo: '',
    religion: '',
    caste: '',
    education: '',
    location: '',
    salary: ''
  });

  const [searchResults] = useState([
    {
      id: 1,
      name: "Dr. Priya Lakshmi",
      age: 28,
      profession: "Cardiologist",
      education: "MBBS, MD - AIIMS",
      location: "Chennai",
      religion: "Hindu",
      caste: "Iyer",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200",
      verified: true,
      premium: true
    }
  ]);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Search logic would go here
    console.log('Searching with filters:', filters);
  };

  return (
    <div className="search-page py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mb-4">
            <div className="filter-sidebar animate-slide-in-left">
              <h4 className="filter-title">Refine Search</h4>
              <form onSubmit={handleSearch}>
                <div className="mb-3">
                  <label className="form-label">I'm looking for</label>
                  <select name="gender" className="form-select" onChange={handleFilterChange}>
                    <option value="">Select Gender</option>
                    <option value="male">Bridegroom</option>
                    <option value="female">Bride</option>
                  </select>
                </div>

                <div className="row mb-3">
                  <div className="col-6">
                    <label className="form-label">Age From</label>
                    <input type="number" name="ageFrom" className="form-control" onChange={handleFilterChange} />
                  </div>
                  <div className="col-6">
                    <label className="form-label">Age To</label>
                    <input type="number" name="ageTo" className="form-control" onChange={handleFilterChange} />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Religion</label>
                  <select name="religion" className="form-select" onChange={handleFilterChange}>
                    <option value="">Any Religion</option>
                    <option value="hindu">Hindu</option>
                    <option value="christian">Christian</option>
                    <option value="muslim">Muslim</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Education</label>
                  <select name="education" className="form-select" onChange={handleFilterChange}>
                    <option value="">Any Education</option>
                    <option value="btech">B.Tech</option>
                    <option value="mbbs">MBBS</option>
                    <option value="mba">MBA</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary w-100 search-btn">
                  Search Profiles
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="search-results">
              <div className="results-header mb-4">
                <h3 className="results-title">Search Results</h3>
                <p className="results-count">{searchResults.length} profiles found</p>
              </div>

              <div className="row g-4">
                {searchResults.map(profile => (
                  <div key={profile.id} className="col-xl-4 col-lg-6">
                    <ProfileCard3D profile={profile} />
                  </div>
                ))}
              </div>

              {searchResults.length === 0 && (
                <div className="no-results text-center py-5">
                  <div className="no-results-icon">🔍</div>
                  <h4>No profiles found</h4>
                  <p>Try adjusting your search filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;