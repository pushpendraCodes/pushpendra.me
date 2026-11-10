import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FaLinkedin, FaWhatsapp, FaGithub, FaInstagram } from 'react-icons/fa';
import { WHATSAPP_URL, EMAIL, PHONE } from '../lib/tokens';

const navLinks = [
  { name: 'Services', to: '/services' },
  { name: 'Work', to: '/work' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
];

const Footer = () => (
  <footer id="contact" className="border-t border-[rgba(244,242,236,0.08)] bg-[#080808]">
    {/* ============ BIG CTA ============ */}
    <div className="mx-auto max-w-[1400px] px-5 py-28 text-center md:px-10 md:py-40">
      <span className="font-mono-label inline-flex items-center gap-2.5 text-[var(--accent)]">
        <span className="pulse-dot" />
        08 — START HERE
      </span>

      <h2 className="font-display mx-auto mt-10 max-w-[14ch] text-5xl text-[#F4F2EC] md:text-8xl">
        Let&rsquo;s build <span className="text-[#6B6A63]">your product.</span>
      </h2>

      <p className="mx-auto mt-8 max-w-[52ch] font-sans text-base leading-relaxed text-[#8A8A8A] md:text-lg">
        Looking for website, app, ERP, or software development? Tell us the
        problem — we&rsquo;ll bring the architecture, the timeline, and the build.
      </p>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="CHAT"
          className="inline-flex items-center gap-2.5 bg-[var(--accent)] px-9 py-4 font-mono-label text-[#080808] transition-transform duration-200 hover:-translate-y-0.5"
        >
          Start a Project <ArrowRight className="h-3.5 w-3.5" />
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="font-mono-label text-[#8A8A8A] transition-colors hover:text-[#F4F2EC]"
        >
          {EMAIL} →
        </a>
      </div>

      <p className="font-mono-label mt-10 text-[#6B6A63]">
        {PHONE} · AVAILABLE WORLDWIDE
      </p>
    </div>

    {/* ============ BOTTOM BAR ============ */}
    <div className="border-t border-[rgba(244,242,236,0.08)]">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-8 px-5 py-10 md:flex-row md:px-10">
        {/* Brand */}
        <div className="flex flex-col items-center gap-3 md:items-start">
          <img src="/logo.png" alt="One9 Tech" className="h-9 w-auto rounded-lg object-contain" />
          <span className="font-mono-label text-[#6B6A63]">
            DIGITAL PRODUCT STUDIO
          </span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="font-mono-label text-[#8A8A8A] transition-colors hover:text-[#F4F2EC]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/pushpendraCodes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#8A8A8A] transition-colors hover:text-[var(--accent)]"
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/1pushpendrapatel/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#8A8A8A] transition-colors hover:text-[var(--accent)]"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
          <a
            href="https://www.instagram.com/one9.tech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[#8A8A8A] transition-colors hover:text-[var(--accent)]"
          >
            <FaInstagram className="h-4 w-4" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-[#8A8A8A] transition-colors hover:text-[var(--accent)]"
          >
            <FaWhatsapp className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-2 border-t border-[rgba(244,242,236,0.06)] px-5 py-6 text-center sm:flex-row md:px-10">
        <span className="font-mono-label text-[#6B6A63]">
          © 2026 ONE9 TECH · PUSHPENDRA PATEL
        </span>
        <span className="font-mono-label text-[#6B6A63]">
          WEBSITES · APPS · ERP · SOFTWARE
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
