// LandingPage.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const LandingPage = () => {
  const { darkTheme } = useTheme();

  return (
    <div style={{ 
      background: darkTheme ? '#222' : '#fff', 
      color: darkTheme ? '#fff' : '#333',
      minHeight: '100vh', // Set minimum height to full viewport height
      display: 'flex', // Use flexbox to center content vertically
      flexDirection: 'column', // Stack content vertically
      justifyContent: 'center', // Center content vertically
      alignItems: 'center' // Center content horizontally
    }}>
      <h2>Welcome to My App</h2>
      <p>This is the landing page content.</p>
    </div>
  );
};

export default LandingPage;
