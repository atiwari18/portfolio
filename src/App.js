// src/App.js
import React from 'react';
import TVABackground from './Components/TVABackground';
import './App.css'

function App() {
  return (
    <div className="App">
      <TVABackground>
        <h1 className="tva-title">My Portfolio</h1>
        <h2 className="tva-title">About</h2>
        <h2 className="tva-title">Experience</h2>
        {/* Other content */}
      </TVABackground>
    </div>
  );
}

export default App;
