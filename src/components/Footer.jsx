import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, Github, Instagram } from 'lucide-react';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isTheme1 } = useTheme();

  const whatsappUrl = "https://wa.me/918516064332?text=Hello%20Pushpendra%2C%20I%20have%20a%20project%20in%20mind";
  const emailUrl = "mailto:one9tech.bussiness@gmail.com";
  const phoneUrl = "tel:+918516064332";

  return (
    <footer id="contact" className="relative overflow-hidden pt-12 pb-8 border-t border-inherit">
      
      {/* ================= CLOSING EDITORIAL CTA ================= */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20 lg:mb-28">
        <div
          className={`rounded-3xl p-8 sm:p-14 lg:p-20 text-center relative overflow-hidden transition-all duration-300 ${
            isTheme1
              ? 'bg-[#09251F] border border-[#C5AA68]/30 shadow-[0_20px_60px_rgba(0,0,0,0.5)]'
              : 'bg-white border border-[#D8D2C9] shadow-sm'
          }`}
        >
          {/* Subtle gold decoration */}
          {isTheme1 && (
            <>
              <div className="absolute top-6 left-6 text-[#C5AA68]/40 text-sm">✦</div>
              <div className="absolute top-6 right-6 text-[#C5AA68]/40 text-sm">✦</div>
              <div className="absolute bottom-6 left-6 text-[#C5AA68]/40 text-sm">✧</div>
              <div className="absolute bottom-6 right-6 text-[#C5AA68]/40 text-sm">✧</div>
            </>
          )}

          <span
            className={`text-xs uppercase tracking-[0.25em] font-sans font-medium inline-block mb-4 ${
              isTheme1 ? 'text-[#C5AA68]' : 'text-[#8B8175]'
            }`}
          >
            HAVE AN IDEA?
          </span>

          <h2
            className={`font-serif text-3xl sm:text-5xl lg:text-7xl tracking-tight leading-[1.08] mb-6 max-w-3xl mx-auto ${
              isTheme1 ? 'text-[#E9E1CC]' : 'text-[#262522]'
            }`}
          >
            {isTheme1 ? (
              <>
                LET'S BUILD <br />
                <span className=" font-normal text-[#C5AA68]">SOMETHING GREAT.</span>
              </>
            ) : (
              <>
                LET'S BUILD SOMETHING <br />
                <span className=" font-normal text-[#8B8175]">MEANINGFUL.</span>
              </>
            )}
          </h2>

          <p
            className={`font-sans text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10 ${
              isTheme1 ? 'text-[#AFAF9D]' : 'text-[#77736D]'
            }`}
          >
            Looking for website, app, or software development in Rewa? Let&apos;s talk
            architecture, timelines, and how to get your product live.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="CHAT"
              className={`inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs font-sans uppercase tracking-widest font-semibold transition-all duration-300 ${
                isTheme1
                  ? 'bg-[#C5AA68] text-[#071D18] hover:bg-[#D8BD7B] shadow-[0_4px_20px_rgba(197,170,104,0.4)]'
                  : 'bg-[#262522] text-[#F4F1EC] hover:bg-[#3D3A34]'
              }`}
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={emailUrl}
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-sans uppercase tracking-widest font-semibold transition-colors ${
                isTheme1
                  ? 'border border-[#C5AA68]/40 text-[#E9E1CC] hover:bg-[#10332A]'
                  : 'border border-[#D8D2C9] text-[#262522] hover:bg-[#F4F1EC]'
              }`}
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Quick Direct Contacts */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-inherit text-xs font-sans">
            <a
              href={emailUrl}
              className={`flex items-center gap-1.5 transition-colors ${
                isTheme1 ? 'text-[#AFAF9D] hover:text-[#C5AA68]' : 'text-[#77736D] hover:text-[#262522]'
              }`}
            >
              <Mail className="w-3.5 h-3.5 text-[#C5AA68]" />
              one9tech.bussiness@gmail.com
            </a>

            <a
              href={phoneUrl}
              className={`flex items-center gap-1.5 transition-colors ${
                isTheme1 ? 'text-[#AFAF9D] hover:text-[#C5AA68]' : 'text-[#77736D] hover:text-[#262522]'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#C5AA68]" />
              +91 8516064332
            </a>

            <span
              className={`flex items-center gap-1.5 ${
                isTheme1 ? 'text-[#AFAF9D]' : 'text-[#77736D]'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-[#C5AA68]" />
              Rewa, Madhya Pradesh, India
            </span>
          </div>
        </div>
      </div>

      {/* ================= MINIMAL FOOTER ================= */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-8 border-t border-inherit flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Brand Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="/logo.png"
              alt="One9 Tech"
              className="h-10 w-auto object-contain object-left mb-2 rounded-xl"
            />
            <span
              className={`font-serif text-xl tracking-wider font-semibold ${
                isTheme1 ? 'text-[#E9E1CC]' : 'text-[#262522]'
              }`}
            >
              PUSHPENDRA PATEL
            </span>
            <span
              className={`font-sans text-[10px] uppercase tracking-[0.25em] ${
                isTheme1 ? 'text-[#AFAF9D]' : 'text-[#77736D]'
              }`}
            >
              Full Stack Developer &amp; Founder · One9 Tech
            </span>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-sans uppercase tracking-widest">
            {['Work', 'About', 'Services', 'Process'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition-colors ${
                  isTheme1 ? 'text-[#AFAF9D] hover:text-[#C5AA68]' : 'text-[#77736D] hover:text-[#262522]'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/pushpendraCodes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={`p-2 rounded-full border transition-colors ${
                isTheme1
                  ? 'border-[#C5AA68]/20 text-[#AFAF9D] hover:text-[#C5AA68] hover:border-[#C5AA68]'
                  : 'border-[#D8D2C9] text-[#77736D] hover:text-[#262522]'
              }`}
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/1pushpendrapatel/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`p-2 rounded-full border transition-colors ${
                isTheme1
                  ? 'border-[#C5AA68]/20 text-[#AFAF9D] hover:text-[#C5AA68] hover:border-[#C5AA68]'
                  : 'border-[#D8D2C9] text-[#77736D] hover:text-[#262522]'
              }`}
            >
              <FaLinkedin className="w-4 h-4" />
            </a>

            <a
              href="https://www.instagram.com/one9.tech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={`p-2 rounded-full border transition-colors ${
                isTheme1
                  ? 'border-[#C5AA68]/20 text-[#AFAF9D] hover:text-[#C5AA68] hover:border-[#C5AA68]'
                  : 'border-[#D8D2C9] text-[#77736D] hover:text-[#262522]'
              }`}
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={`p-2 rounded-full border transition-colors ${
                isTheme1
                  ? 'border-[#C5AA68]/20 text-[#AFAF9D] hover:text-[#C5AA68] hover:border-[#C5AA68]'
                  : 'border-[#D8D2C9] text-[#77736D] hover:text-[#262522]'
              }`}
            >
              <FaWhatsapp className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-inherit flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-center gap-2">
          <span className={isTheme1 ? 'text-[#AFAF9D]/60' : 'text-[#77736D]/80'}>
            © 2026 Pushpendra Patel. All rights reserved.
          </span>
          <span className={isTheme1 ? 'text-[#C5AA68]/70' : 'text-[#8B8175]'}>
            Crafted with Engineering &amp; Luxury Editorial Design.
          </span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
