import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme} 
      style={{
        cursor: 'pointer',
        background: theme === 'dark' ? 'var(--primary-color)' : 'var(--accent-color)',
        color: theme === 'dark' ? 'white' : 'var(--text-color)',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '20px',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        transition: 'all 0.3s ease'
      }}
    >
      {theme === 'light' ? (
        <>
          <span>🌙</span> Dark
        </>
      ) : (
        <>
          <span>☀️</span> Light
        </>
      )}
    </button>
  );
};

export default ThemeToggle;