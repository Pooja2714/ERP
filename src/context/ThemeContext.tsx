import React, { createContext, useState, useCallback, useEffect } from 'react';
import { ThemeContextType } from '../types';

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const stored = localStorage.getItem('theme-mode');
    return stored ? JSON.parse(stored) : false;
  });

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prev: boolean) => {
      const newValue = !prev;
      localStorage.setItem('theme-mode', JSON.stringify(newValue));
      return newValue;
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('theme-mode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
