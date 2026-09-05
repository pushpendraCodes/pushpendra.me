import React from 'react';
import { useTheme, THEMES } from '../context/ThemeContext';

const ThemeSwitcher = ({ compact = false }) => {
  const { setTheme, isTheme1 } = useTheme();

  return (
    <div
      role="group"
      aria-label="Theme selector"
      className={`relative inline-flex items-center p-1 rounded-full border transition-all duration-300 ${
        isTheme1
          ? 'bg-[#0B2A23]/70 border-[#C5AA68]/30 shadow-[0_2px_12px_rgba(0,0,0,0.3)]'
          : 'bg-[#EAE5DE]/80 border-[#D8D2C9] shadow-sm'
      }`}
    >
      <button
        type="button"
        onClick={() => setTheme(THEMES.THEME1)}
        aria-pressed={isTheme1}
        aria-label="Theme 1"
        className={`relative z-10 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-300 rounded-full ${
          compact ? 'px-2' : ''
        } ${
          isTheme1
            ? 'text-[#071D18] bg-[#C5AA68] font-semibold shadow-sm'
            : 'text-[#77736D] hover:text-[#262522]'
        }`}
      >
        Theme 1
      </button>

      <button
        type="button"
        onClick={() => setTheme(THEMES.THEME2)}
        aria-pressed={!isTheme1}
        aria-label="Theme 2"
        className={`relative z-10 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-300 rounded-full ${
          compact ? 'px-2' : ''
        } ${
          !isTheme1
            ? 'text-[#F4F1EC] bg-[#262522] font-semibold shadow-sm'
            : 'text-[#AFAF9D] hover:text-[#E9E1CC]'
        }`}
      >
        Theme 2
      </button>
    </div>
  );
};

export default ThemeSwitcher;
