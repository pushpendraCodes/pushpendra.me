import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
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
      className="pointer-events-none fixed left-0 top-0 z-[60] transition-transform duration-100 ease-out will-change-transform"
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
    >
      <div
        className={`flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full font-mono text-[9px] font-bold uppercase tracking-widest transition-all duration-300 ${
          isHovered
            ? hoverText
              ? 'h-16 w-16 bg-[var(--accent)] text-[#080808] shadow-[0_0_20px_rgba(43,217,232,0.4)]'
              : 'h-8 w-8 border-2 border-[var(--accent)]/80 bg-transparent'
            : 'h-3 w-3 bg-[var(--accent)]/90'
        }`}
      >
        {hoverText && <span>{hoverText}</span>}
      </div>
    </div>
  );
};

export default CustomCursor;
