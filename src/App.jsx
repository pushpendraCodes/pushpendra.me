import React, { useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Home from './components/Home';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';

const roles = [
  'Full Stack Developer',
  'SaaS Architect',
  'UI/UX Engineering',
  'Next.js & React Expert',
  'Custom Software',
];

function MainLayout() {
  const { isTheme1 } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-500 overflow-x-hidden ${
        isTheme1 ? 'bg-[#071D18] text-[#E9E1CC]' : 'bg-[#F4F1EC] text-[#262522]'
      }`}
    >
      <CustomCursor />
      <Navbar />
      <Home />
    </div>
  );
}

function App() {
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      document.title = `Pushpendra Patel — ${roles[index]}`;
      index = (index + 1) % roles.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;