import React, { useState, useEffect } from 'react';
import missMinutesGif from './missminutes.gif'; // replace with your actual path

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    const progressDuration = 14500; // 14.5 seconds for progress bar to complete
    const totalSteps = 100; // Total progress in percentage
    const increment = 100 / (progressDuration / 150); // Calculate increment per interval
    const interval = 150; // Set interval to 150ms
  
    const intervalId = setInterval(() => {
      setProgress((prev) => {
        if (prev < totalSteps) {
          return prev + increment;
        } else {
          clearInterval(intervalId);
          return totalSteps;
        }
      });
    }, interval);
  
    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <div className="tva-background">
      <div style={{ textAlign: 'center', marginTop: '50px', width:'100vw' }}>
        <img src={missMinutesGif} alt="Miss Minutes" style={{ width: '200px' }} />
        <div style={{
          marginTop: '30px',
          width: '80%', // Responsive width within the viewport
          maxWidth: '800px', // Maximum width for larger screens
          minWidth: '100px', // Minimum width for smaller screens
          margin: '0 auto', // Centering the bar
          height: '25px',
          backgroundColor: '#e0e0e0',
          borderRadius: '5px',
          overflow: 'hidden'
        }}>
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              backgroundColor: '#FFA500',
              borderRadius: '5px',
              transition: 'width 0.1s ease-in-out',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingBar;
