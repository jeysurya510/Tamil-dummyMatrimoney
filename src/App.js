import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/App.css';

// Components
import PremiumHeader from './components/PremiumHeader';
import PremiumFooter from './components/PremiumFooter';

// Pages
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Search from './pages/Search';
import Profiles from './pages/Profiles';
import Login from './pages/Login';
import Register from './pages/Register';
import SuccessStories from './pages/SuccessStories';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App premium-theme">
        <PremiumHeader />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profiles" element={<Profiles />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <PremiumFooter />
      </div>
    </Router>
  );
}

export default App;