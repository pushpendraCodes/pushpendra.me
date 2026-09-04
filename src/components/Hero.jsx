import React, { useRef, useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { isTheme1 } = useTheme();
  const panelRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const whatsappUrl =
    'https://wa.me/918516064332?text=Hello%20Pushpendra%2C%20I%20have%20a%20project%20idea';

  const handleMouseMove = (e) => {
    const el = panelRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -8, y: px * 8 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Dark overlay for readability + depth */}
      {/* <div  
        className="absolute inset-0"
        style={{
          background: isTheme1
            ? 'radial-gradient(ellipse at center, rgba(7,29,24,0.35) 0%, rgba(7,29,24,0.85) 100%)'
            : 'radial-gradient(ellipse at center, rgba(244,241,236,0.25) 0%, rgba(244,241,236,0.75) 100%)',
        }}
      /> */}

      {/* Floating gradient orbs for 3D depth */}
     

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4">
        <div
          ref={panelRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: 'transform 0.15s ease-out',
          }}
          className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-6 rounded-3xl px-6 py-8 sm:px-10 sm:py-10 backdrop-blur-xl shadow-2xl ${
            isTheme1
              ? 'bg-[#09251F]/50 border border-[#C5AA68]/25'
              : 'bg-white/60 border border-[#D8D2C9]'
          }`}
        >
          <a
            href="#works"
            data-cursor="EXPLORE"
            className={`group relative inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-full text-sm font-sans tracking-widest uppercase font-semibold transition-all duration-300 overflow-hidden ${
              isTheme1
                ? 'bg-[#C5AA68] text-[#071D18] hover:bg-[#D8BD7B] shadow-[0_8px_24px_rgba(197,170,104,0.4)] hover:shadow-[0_12px_32px_rgba(197,170,104,0.55)]'
                : 'bg-[#262522] text-[#F4F1EC] hover:bg-[#3D3A34] shadow-[0_8px_24px_rgba(38,37,34,0.3)] hover:shadow-[0_12px_32px_rgba(38,37,34,0.4)]'
            } hover:-translate-y-0.5`}
          >
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="CONTACT"
            className={`group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-full text-sm font-sans tracking-widest uppercase font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
              isTheme1
                ? 'border border-[#C5AA68]/40 text-[#E9E1CC] hover:border-[#C5AA68] hover:bg-[#10332A]/60'
                : 'border border-[#8B8175]/40 text-[#262522] bg-white/70 hover:bg-white hover:border-[#8B8175]'
            }`}
          >
            <MessageCircle className="w-4 h-4" />
            <span>Start a Project</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;