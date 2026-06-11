import React from 'react';
import './TVABackground.css';

function TVABackground({ children }) {
  return (
    <div className="tva-background">
      {children}
    </div>
  );
}

export default TVABackground;
