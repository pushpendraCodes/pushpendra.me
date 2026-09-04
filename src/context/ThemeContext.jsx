import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const THEMES = {
  THEME1: 'theme1', // Dark Forest-Green Luxury Editorial
  THEME2: 'theme2', // Editorial Luxury / Minimal Warm Beige
};

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio-theme');
      if (savedTheme === THEMES.THEME1 || savedTheme === THEMES.THEME2) {
        return savedTheme;
      }
    }
    return THEMES.THEME1;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch (e) {
      console.warn('Unable to persist theme to localStorage', e);
    }
  }, [theme]);

  const setTheme = (newTheme) => {
    if (newTheme === THEMES.THEME1 || newTheme === THEMES.THEME2) {
      setThemeState(newTheme);
    }
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === THEMES.THEME1 ? THEMES.THEME2 : THEMES.THEME1));
  };

  const isTheme1 = theme === THEMES.THEME1;
  const isTheme2 = theme === THEMES.THEME2;

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, isTheme1, isTheme2 }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
