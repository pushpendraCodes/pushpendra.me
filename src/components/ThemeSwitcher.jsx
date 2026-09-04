import React from 'react';
import { useTheme, THEMES } from '../context/ThemeContext';

const ThemeSwitcher = ({ compact = false }) => {
  const { theme, setTheme, isTheme1 } = useTheme();

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
      {/* Theme 1 Button */}
      <button
        type="button"
        onClick={() => setTheme(THEMES.THEME1)}
        aria-pressed={isTheme1}
        className={`relative z-10 flex items-center gap-1.5 px-3 py-1 text-xs font-medium tracking-wider uppercase transition-all duration-300 rounded-full ${
          isTheme1
            ? 'text-[#071D18] bg-[#C5AA68] font-semibold shadow-sm'
            : isTheme1 === false
            ? 'text-[#77736D] hover:text-[#262522]'
            : 'text-[#AFAF9D]'
        }`}
      >
        <span className="text-[11px] leading-none">✦</span>
        <span>{compact ? 'T1' : 'Theme 1'}</span>
        {!compact && (
          <span className={`text-[10px] hidden sm:inline ${isTheme1 ? 'opacity-80' : 'opacity-60'}`}>
            Forest
          </span>
        )}
      </button>

      {/* Theme 2 Button */}
      <button
        type="button"
        onClick={() => setTheme(THEMES.THEME2)}
        aria-pressed={!isTheme1}
        className={`relative z-10 flex items-center gap-1.5 px-3 py-1 text-xs font-medium tracking-wider uppercase transition-all duration-300 rounded-full ${
          !isTheme1
            ? 'text-[#F4F1EC] bg-[#262522] font-semibold shadow-sm'
            : 'text-[#AFAF9D] hover:text-[#E9E1CC]'
        }`}
      >
        <span className="text-[11px] leading-none">✧</span>
        <span>{compact ? 'T2' : 'Theme 2'}</span>
        {!compact && (
          <span className={`text-[10px] hidden sm:inline ${!isTheme1 ? 'opacity-80' : 'opacity-60'}`}>
            Stone
          </span>
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
