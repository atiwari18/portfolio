import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
import TVABackground from './Components/TVABackground';
import About from './Components/About.js'
import ExperiencePage from './Components/ExperiencePage';
import LoadingScreen from './Components/LoadingScreen'; // Import the LoadingScreen component
import MyJourney from './Components/MyJourney.js';
import './App.css';

function App() {
  // Get the current location
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [showLoading, setShowLoading] = useState(isHomePage);
  const navigate = useNavigate();

  // Simulate loading time and then transition to the homepage
  useEffect(() => {
    if (isHomePage) {
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 15000); // Adjust the duration based on how long you want the loading screen to be displayed

      return () => clearTimeout(timer);
    } else {
      setShowLoading(false); // Disable loading screen for other pages
    }
  }, [isHomePage]);

  const handleProceed = () => {
    setShowLoading(false);
    navigate('/'); // Navigate to homepage
  };

  return (
    <div className={`App ${isHomePage ? 'full-height' : ''}`}>
      {showLoading && isHomePage ? (
        <LoadingScreen onProceed={handleProceed} /> // Pass the handleProceed function to the LoadingScreen
      ) : (
        <>
          {/* Conditionally render TVABackground only on the homepage */}
          {isHomePage ? (
            <TVABackground>
              <div className="tva-container">
                <h1 className="tva-title">My Portfolio</h1>
                <Link to="/about">
                  <h2 className="tva-title">About</h2>
                </Link>
                <Link to="/my-journey">
                  <h2 className="tva-title">My Journey</h2>
                </Link>
                <Link to="/project-experience">
                  <h2 className="tva-title">Project Experience</h2>
                </Link>
                {/* Other content */}
              </div>
            </TVABackground>
          ) : (
            <Routes>
              <Route path="/project-experience" element={<ExperiencePage />} />
              <Route path="/about" element={<About/>}/>
              <Route path="/my-journey" element={<MyJourney/>}/>
              {/* Add more routes here if needed */}
            </Routes>
          )}
        </>
      )}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
