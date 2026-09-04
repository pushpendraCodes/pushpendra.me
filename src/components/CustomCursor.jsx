import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const CustomCursor = () => {
  const { isTheme1 } = useTheme();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Watch for hoverable elements
    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setIsHovered(true);
        setHoverText(target.getAttribute('data-cursor') || 'VIEW');
      } else {
        const link = e.target.closest('a, button');
        if (link) {
          setIsHovered(true);
          setHoverText('');
        } else {
          setIsHovered(false);
          setHoverText('');
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-100 ease-out will-change-transform"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-300 font-sans tracking-widest text-[9px] uppercase font-bold ${
          isHovered
            ? hoverText
              ? isTheme1
                ? 'w-16 h-16 bg-[#C5AA68] text-[#071D18] shadow-[0_0_20px_rgba(197,170,104,0.4)]'
                : 'w-16 h-16 bg-[#262522] text-[#F4F1EC] shadow-md'
              : isTheme1
              ? 'w-8 h-8 bg-transparent border-2 border-[#C5AA68]/80'
              : 'w-8 h-8 bg-transparent border-2 border-[#262522]/80'
            : isTheme1
            ? 'w-3 h-3 bg-[#C5AA68]/90'
            : 'w-3 h-3 bg-[#262522]/90'
        }`}
      >
        {hoverText && <span className="animate-fade-in">{hoverText}</span>}
      </div>
    </div>
  );
};

export default CustomCursor;
