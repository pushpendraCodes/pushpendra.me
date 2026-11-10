import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/tokens';

const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080808]/90 backdrop-blur-md border-b border-[rgba(244,242,236,0.08)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-[72px] md:px-10">
          {/* Logo */}
          <Link to="/" aria-label="One9 Tech home" className="flex shrink-0 items-center gap-2.5">
            <img
              src="/logo.png"
              alt="One9 Tech"
              className="h-8 w-auto rounded-lg object-contain md:h-9"
            />
          </Link>

          {/* Center links — mono labels */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `font-mono-label transition-colors duration-200 hover:text-[#F4F2EC] ${
                    isActive ? 'text-[var(--accent)]' : 'text-[#8A8A8A]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden items-center gap-6 lg:flex">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-mono-label text-[#F4F2EC] transition-colors duration-200 hover:text-[var(--accent)]"
            >
              Start a Project
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="p-2 text-[#F4F2EC] lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#080808] transition-all duration-300 lg:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex h-full flex-col justify-between px-6 pb-10 pt-28">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: menuOpen ? `${idx * 50}ms` : '0ms' }}
                className={`font-display border-b border-[rgba(244,242,236,0.08)] py-4 text-4xl text-[#F4F2EC] transition-all duration-300 ${
                  menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 bg-[var(--accent)] px-8 py-4 font-mono-label text-[#080808]"
          >
            Start a Project <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
