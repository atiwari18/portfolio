import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
import TVABackground from './Components/TVABackground';
import ExperiencePage from './Components/ExperiencePage';
import LoadingScreen from './Components/LoadingScreen'; // Import the LoadingScreen component
import './App.css';

function App() {
  // Get the current location
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [showLoading, setShowLoading] = useState(true);
  const navigate = useNavigate();

  // Simulate loading time and then transition to the homepage or other page
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 15000); // Adjust the duration based on how long you want the loading screen to be displayed

    return () => clearTimeout(timer);
  }, []);

  const handleProceed = () => {
    setShowLoading(false);
    navigate('/'); // Navigate to homepage or any other page
  };

  return (
    <div className={`App ${isHomePage ? 'full-height' : ''}`}>
      {showLoading ? (
        <LoadingScreen onProceed={handleProceed} /> // Pass the handleProceed function to the LoadingScreen
      ) : (
        <>
          {/* Conditionally render TVABackground only on the homepage */}
          {isHomePage ? (
            <TVABackground>
              <div className="tva-container">
                <h1 className="tva-title">My Portfolio</h1>
                <h2 className="tva-title">About</h2>
                <Link to="/experience">
                  <h2 className="tva-title">Experience</h2>
                </Link>
                {/* Other content */}
              </div>
            </TVABackground>
          ) : (
            <Routes>
              <Route path="/experience" element={<ExperiencePage />} />
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
