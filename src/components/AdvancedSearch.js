import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdvancedSearch = () => {
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
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/profiles', { state: { filters } });
  };

  return (
    <div className="search-filter-section py-5">
      <div className="container">
        <div className="filter-card animate-slide-up">
          <h4 className="text-center mb-4">Find Your Perfect Match</h4>
          <form onSubmit={handleSearch}>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label className="form-label">I'm looking for</label>
                <select className="form-select" name="gender" onChange={handleInputChange}>
                  <option value="">Select Gender</option>
                  <option value="male">Bridegroom</option>
                  <option value="female">Bride</option>
                </select>
              </div>
              
              <div className="col-md-3 mb-3">
                <label className="form-label">Age From</label>
                <input type="number" className="form-control" name="ageFrom" onChange={handleInputChange} />
              </div>
              
              <div className="col-md-3 mb-3">
                <label className="form-label">Age To</label>
                <input type="number" className="form-control" name="ageTo" onChange={handleInputChange} />
              </div>
              
              <div className="col-md-3 mb-3">
                <label className="form-label">Religion</label>
                <select className="form-select" name="religion" onChange={handleInputChange}>
                  <option value="">Any Religion</option>
                  <option value="hindu">Hindu</option>
                  <option value="christian">Christian</option>
                  <option value="muslim">Muslim</option>
                </select>
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-3 mb-3">
                <label className="form-label">Caste</label>
                <select className="form-select" name="caste" onChange={handleInputChange}>
                  <option value="">Any Caste</option>
                  <option value="iyer">Iyer</option>
                  <option value="iyengar">Iyengar</option>
                  <option value="naidu">Naidu</option>
                  <option value="chettiar">Chettiar</option>
                </select>
              </div>
              
              <div className="col-md-3 mb-3">
                <label className="form-label">Education</label>
                <select className="form-select" name="education" onChange={handleInputChange}>
                  <option value="">Any Education</option>
                  <option value="btech">B.Tech</option>
                  <option value="mbbs">MBBS</option>
                  <option value="mba">MBA</option>
                  <option value="ca">CA</option>
                </select>
              </div>
              
              <div className="col-md-3 mb-3">
                <label className="form-label">Location</label>
                <select className="form-select" name="location" onChange={handleInputChange}>
                  <option value="">Any Location</option>
                  <option value="chennai">Chennai</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="coimbatore">Coimbatore</option>
                  <option value="madurai">Madurai</option>
                </select>
              </div>
              
              <div className="col-md-3 mb-3">
                <label className="form-label">Salary</label>
                <select className="form-select" name="salary" onChange={handleInputChange}>
                  <option value="">Any Salary</option>
                  <option value="5-10">5-10 LPA</option>
                  <option value="10-20">10-20 LPA</option>
                  <option value="20+">20+ LPA</option>
                </select>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <button type="submit" className="btn btn-primary btn-lg search-btn">
                Search Profiles
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearch;