// src/components/SplashScreen.js
import React, { useEffect } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onLoadComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadComplete();
    }, 3000);  // Show for 3 seconds

    return () => clearTimeout(timer);  // Cleanup
  }, [onLoadComplete]);

  return (
    <div className="splash-screen">
      <img src="/logo.jpg" alt="App Logo" className="splash-logo" />
      <h1 className="splash-title">Rural LinkedIn</h1>
    </div>
  );
};

export default SplashScreen;
