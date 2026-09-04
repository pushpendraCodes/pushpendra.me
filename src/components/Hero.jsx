import React, { useRef, useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const CtaPanel = ({ isTheme1, whatsappUrl, stacked = false }) => {
  const panelRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

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
    <div
      ref={panelRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className={`flex items-center gap-4 sm:gap-6 rounded-3xl px-6 py-8 sm:px-10 sm:py-10 backdrop-blur-xl shadow-2xl ${
        stacked ? 'flex-col w-full max-w-lg' : 'flex-row'
      } ${
        isTheme1
          ? stacked
            ? 'bg-[#09251F]/80 border border-[#C5AA68]/25'
            : 'bg-[#09251F]/50 border border-[#C5AA68]/25'
          : stacked
            ? 'bg-white/80 border border-[#D8D2C9]'
            : 'bg-white/60 border border-[#D8D2C9]'
      }`}
    >
      <a
        href="#works"
        data-cursor="EXPLORE"
        className={`group relative inline-flex items-center justify-center gap-2.5 ${
          stacked ? 'w-full' : ''
        } px-8 py-4 rounded-full text-sm font-sans tracking-widest uppercase font-semibold transition-all duration-300 overflow-hidden ${
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
        className={`group inline-flex items-center justify-center gap-2.5 ${
          stacked ? 'w-full' : ''
        } px-8 py-4 rounded-full text-sm font-sans tracking-widest uppercase font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
          isTheme1
            ? 'border border-[#C5AA68]/40 text-[#E9E1CC] hover:border-[#C5AA68] hover:bg-[#10332A]/60'
            : 'border border-[#8B8175]/40 text-[#262522] bg-white/70 hover:bg-white hover:border-[#8B8175]'
        }`}
      >
        <MessageCircle className="w-4 h-4" />
        <span>Start a Project</span>
      </a>
    </div>
  );
};

const Hero = () => {
  const { isTheme1 } = useTheme();

  const whatsappUrl =
    'https://wa.me/918516064332?text=Hello%20Pushpendra%2C%20I%20have%20a%20project%20idea';

  return (
    <>
      {/* Mobile: video on top, CTAs below */}
      <section
        className={`md:hidden flex flex-col ${
          isTheme1 ? 'bg-[#071D18]' : 'bg-[#F4F1EC]'
        }`}
      >
        <div className="w-full">
          <video
            className="w-full h-auto block"
            src="/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
        </div>
        <div className="flex flex-col items-center px-4 py-8">
          <CtaPanel isTheme1={isTheme1} whatsappUrl={whatsappUrl} stacked />
        </div>
      </section>

      {/* Desktop: full-bleed video background */}
      <section
        className={`relative hidden md:flex overflow-hidden min-h-[100svh] items-center justify-center ${
          isTheme1 ? 'bg-[#071D18]' : 'bg-[#F4F1EC]'
        }`}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col items-center px-4">
          <CtaPanel isTheme1={isTheme1} whatsappUrl={whatsappUrl} />
        </div>
      </section>
    </>
  );
};

export default Hero;
