import React from 'react';
import AnimatedHero from '../components/AnimatedHero';
import TrustBadges from '../components/TrustBadges';
import AdvancedSearch from '../components/AdvancedSearch';
import ProfileCard3D from '../components/ProfileCard3D';
import SuccessStories from '../components/SuccessStories';

const Home = () => {
  const featuredProfiles = [
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
    }
  ];

  return (
    <div className="home-page">
      <AnimatedHero />
      <TrustBadges />
      <AdvancedSearch />
      
      <section className="featured-profiles py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="premium-title">Featured Profiles</h2>
            <p className="premium-subtitle">Hand-picked matches from respected Tamil families</p>
          </div>
          
          <div className="row g-4">
            {featuredProfiles.map((profile, index) => (
              <div key={profile.id} className="col-lg-6">
                <div className={`animate-fade-in-up`} style={{animationDelay: `${index * 0.2}s`}}>
                  <ProfileCard3D profile={profile} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <SuccessStories />
    </div>
  );
};

export default Home;