// Navbar.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { darkTheme, toggleTheme } = useTheme();

  return (
    <nav style={{ background: darkTheme ? '#333' : '#eee', color: darkTheme ? '#fff' : '#333', padding: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{ margin: 0 }}>Navbar</h1>
        <button 
          style={{ 
            background: darkTheme ? 'white' : 'blue', 
            border: 'none', 
            color: darkTheme ? 'black' : 'white', 
            cursor: 'pointer', 
            fontSize: '1rem', 
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            outline: 'none'
          }} 
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
