import React, { useState, useEffect, useRef } from 'react';
import { Github, Instagram, Menu, X, ArrowRight } from 'lucide-react';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  const { isTheme1 } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoTilt, setLogoTilt] = useState({ x: 0, y: 0 });
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  const navRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#works' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const whatsappUrl =
    'https://wa.me/918516064332?text=Hello%20Pushpendra%2C%20I%20have%20a%20project%20in%20mind';

  const handleItemEnter = (idx) => {
    const el = itemRefs.current[idx];
    if (!el || !navRef.current) return;
    const parentRect = navRef.current.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    setIndicator({ left: rect.left - parentRect.left, width: rect.width, opacity: 1 });
  };

  const handleNavLeave = () => setIndicator((prev) => ({ ...prev, opacity: 0 }));

  const handleLogoMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setLogoTilt({ x: py * -6, y: px * 6 });
  };
  const handleLogoLeave = () => setLogoTilt({ x: 0, y: 0 });

  const pillShadow = isTheme1
    ? isScrolled
      ? '0 1px 0 0 rgba(255,255,255,0.06) inset, 0 24px 48px -12px rgba(0,0,0,0.55), 0 10px 20px -6px rgba(0,0,0,0.45)'
      : '0 1px 0 0 rgba(255,255,255,0.05) inset, 0 16px 32px -12px rgba(0,0,0,0.4), 0 6px 12px -4px rgba(0,0,0,0.3)'
    : isScrolled
      ? '0 1px 0 0 rgba(255,255,255,0.7) inset, 0 24px 48px -12px rgba(38,37,34,0.16), 0 10px 20px -6px rgba(38,37,34,0.1)'
      : '0 1px 0 0 rgba(255,255,255,0.6) inset, 0 16px 32px -12px rgba(38,37,34,0.1), 0 6px 12px -4px rgba(38,37,34,0.06)';

  return (
    <>
      <div
        className={`fixed inset-x-0 z-50 flex justify-center px-3 sm:px-6 transition-all duration-500 ease-out ${
          isScrolled ? 'top-3' : 'top-4 sm:top-6'
        }`}
      >
        <header
          style={{ boxShadow: pillShadow }}
          className={`relative w-full max-w-7xl rounded-[28px] transition-all duration-500 ease-out ${
            isTheme1
              ? 'bg-[#0A241E]/80 border border-[#C5AA68]/15'
              : 'bg-white/75 border border-[#E4DFD6]'
          } backdrop-blur-xl`}
        >
          <div
            className={`flex items-center justify-between flex-nowrap gap-2 px-4 sm:px-5 lg:px-7 transition-all duration-500 ${
              isScrolled ? 'h-14' : 'h-16 sm:h-[4.5rem]'
            }`}
          >
            {/* ============ LOGO ============ */}
            <a
              href="#"
              onMouseMove={handleLogoMove}
              onMouseLeave={handleLogoLeave}
              style={{
                transform: `perspective(400px) rotateX(${logoTilt.x}deg) rotateY(${logoTilt.y}deg)`,
                transition: 'transform 0.2s ease-out',
              }}
              className="flex shrink-0 items-center focus:outline-none min-w-0"
            >
              <span
                className={`font-serif tracking-wide whitespace-nowrap transition-colors duration-300 ${
                  isTheme1
                    ? 'text-[#E9E1CC] text-base sm:text-lg font-medium'
                    : 'text-[#262522] text-lg sm:text-xl font-semibold'
                }`}
              >
                One9{' '}
                <span className={isTheme1 ? 'text-[#C5AA68]' : 'text-[#8B8175]'}>
                  {isTheme1 ? 'Tech' : 'Tech.'}
                </span>
              </span>
            </a>

            {/* ============ CENTER NAV (Desktop, lg+) ============ */}
            <nav
              ref={navRef}
              onMouseLeave={handleNavLeave}
              className="hidden lg:flex relative items-center gap-0.5 xl:gap-1 shrink-0"
            >
              <div
                className={`absolute top-1/2 h-8 -translate-y-1/2 rounded-full pointer-events-none ${
                  isTheme1 ? 'bg-[#C5AA68]/10' : 'bg-[#262522]/5'
                }`}
                style={{
                  left: indicator.left,
                  width: indicator.width,
                  opacity: indicator.opacity,
                  transition:
                    'left 0.28s cubic-bezier(0.22,1,0.36,1), width 0.28s cubic-bezier(0.22,1,0.36,1), opacity 0.2s ease',
                }}
              />
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  ref={(el) => (itemRefs.current[idx] = el)}
                  href={link.href}
                  onMouseEnter={() => handleItemEnter(idx)}
                  className={`relative px-2.5 xl:px-4 py-2 font-sans text-[10px] xl:text-[11px] tracking-[0.1em] xl:tracking-[0.14em] uppercase whitespace-nowrap rounded-full transition-all duration-200 hover:-translate-y-px ${
                    isTheme1
                      ? 'text-[#AFAF9D] hover:text-[#E9E1CC]'
                      : 'text-[#77736D] hover:text-[#262522]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* ============ RIGHT: Socials + Switcher + CTA (lg+) ============ */}
            <div className="hidden lg:flex shrink-0 items-center gap-2 xl:gap-4">
              <div className="hidden xl:flex items-center gap-1">
                <a
                  href="https://github.com/pushpendraCodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className={`p-2 rounded-full transition-all duration-200 hover:-translate-y-px ${
                    isTheme1
                      ? 'text-[#AFAF9D] hover:text-[#C5AA68] hover:bg-[#C5AA68]/10'
                      : 'text-[#77736D] hover:text-[#262522] hover:bg-[#262522]/5'
                  }`}
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/1pushpendrapatel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className={`p-2 rounded-full transition-all duration-200 hover:-translate-y-px ${
                    isTheme1
                      ? 'text-[#AFAF9D] hover:text-[#C5AA68] hover:bg-[#C5AA68]/10'
                      : 'text-[#77736D] hover:text-[#262522] hover:bg-[#262522]/5'
                  }`}
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Contact"
                  className={`p-2 rounded-full transition-all duration-200 hover:-translate-y-px ${
                    isTheme1
                      ? 'text-[#AFAF9D] hover:text-[#C5AA68] hover:bg-[#C5AA68]/10'
                      : 'text-[#77736D] hover:text-[#262522] hover:bg-[#262522]/5'
                  }`}
                >
                  <FaWhatsapp className="w-4 h-4" />
                </a>
              </div>

              <div
                className={`hidden xl:block w-px h-5 ${
                  isTheme1 ? 'bg-[#C5AA68]/15' : 'bg-[#E4DFD6]'
                }`}
              />

              <ThemeSwitcher />

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative inline-flex items-center gap-1.5 px-3.5 xl:px-5 py-2 xl:py-2.5 rounded-full text-[10px] xl:text-[11px] font-sans uppercase tracking-widest font-semibold whitespace-nowrap overflow-hidden transition-all duration-200 active:translate-y-px hover:-translate-y-px ${
                  isTheme1
                    ? 'bg-[#C5AA68] text-[#071D18] hover:bg-[#D8BD7B]'
                    : 'bg-[#262522] text-[#F4F1EC] hover:bg-[#3D3A34]'
                }`}
                style={{
                  boxShadow: isTheme1
                    ? '0 1px 0 0 rgba(255,255,255,0.35) inset, 0 6px 16px -4px rgba(197,170,104,0.5)'
                    : '0 1px 0 0 rgba(255,255,255,0.15) inset, 0 6px 16px -4px rgba(38,37,34,0.35)',
                }}
              >
                <span>Start Project</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* ============ MOBILE/TABLET: Switcher + Hamburger (below lg) ============ */}
            <div className="flex lg:hidden shrink-0 items-center gap-2">
              <ThemeSwitcher compact={true} />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                className={`p-2 rounded-full transition-all duration-200 active:translate-y-px ${
                  isTheme1
                    ? 'text-[#E9E1CC] hover:bg-[#C5AA68]/10'
                    : 'text-[#262522] hover:bg-[#262522]/5'
                }`}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </header>
      </div>

      <div className={isScrolled ? 'h-20' : 'h-24 sm:h-28'} aria-hidden="true" />

      {/* ============ MOBILE/TABLET MENU DRAWER (below lg) ============ */}
      <div
        className={`fixed inset-x-3 z-40 lg:hidden transition-all duration-400 ease-out ${
          isScrolled ? 'top-[4.5rem]' : 'top-[5.25rem] sm:top-[6.5rem]'
        } ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 -translate-y-2 scale-[0.98] pointer-events-none'
        }`}
      >
        <div
          style={{ boxShadow: pillShadow }}
          className={`rounded-3xl backdrop-blur-xl border ${
            isTheme1
              ? 'bg-[#0A241E]/95 border-[#C5AA68]/15'
              : 'bg-white/95 border-[#E4DFD6]'
          }`}
        >
          <div className="px-5 py-5 space-y-1">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${idx * 40}ms` : '0ms',
                }}
                className={`block px-3 py-2.5 rounded-xl text-sm font-sans tracking-wide transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                } ${
                  isTheme1
                    ? 'text-[#E9E1CC] hover:text-[#C5AA68] hover:bg-[#C5AA68]/10'
                    : 'text-[#262522] hover:text-[#8B8175] hover:bg-[#262522]/5'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div
              className={`pt-4 mt-3 border-t flex items-center justify-between ${
                isTheme1 ? 'border-[#C5AA68]/10' : 'border-[#E4DFD6]'
              }`}
            >
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/pushpendraCodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className={isTheme1 ? 'text-[#C5AA68]' : 'text-[#262522]'}
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/1pushpendrapatel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className={isTheme1 ? 'text-[#C5AA68]' : 'text-[#262522]'}
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/one9.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className={isTheme1 ? 'text-[#C5AA68]' : 'text-[#262522]'}
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Contact"
                  className={isTheme1 ? 'text-[#C5AA68]' : 'text-[#262522]'}
                >
                  <FaWhatsapp className="w-4 h-4" />
                </a>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] font-sans uppercase tracking-widest font-semibold active:translate-y-px transition-transform ${
                  isTheme1 ? 'bg-[#C5AA68] text-[#071D18]' : 'bg-[#262522] text-[#F4F1EC]'
                }`}
              >
                Start Project
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
