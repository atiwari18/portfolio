import React, { useState, useEffect } from 'react';
import missMinutesGif from './missminutes.gif'; // replace with your actual path

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 2; // Increment by 2% every 100ms
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 100); // 100ms interval

    return () => clearInterval(interval);
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
