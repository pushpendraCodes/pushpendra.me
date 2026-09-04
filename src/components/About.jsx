import React, { useRef, useState } from 'react';
import { MapPin, Github, ArrowRight, Code2, Rocket, Users } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'MongoDB',
  'PostgreSQL',
  'Tailwind CSS',
  'React Native',
  'WhatsApp API',
  'AI Integration',
];

const highlights = [
  { icon: Rocket, value: '10+', label: 'Live Products Delivered' },
  { icon: Users, value: '10+', label: 'Happy Clients' },
  { icon: Code2, value: '4+', label: 'Years Experience' },
];

const About = () => {
  const { isTheme1 } = useTheme();
  const whatsappUrl = 'https://wa.me/918516064332?text=Hello%20Pushpendra%2C%20let%27s%20connect';

  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (py - 0.5) * -10, y: (px - 0.5) * 10 });
    setGlow({ x: px * 100, y: py * 100, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlow((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <section
      id="about"
      className={`py-20 lg:py-28 transition-colors duration-300 ${
        isTheme1
          ? 'border-y border-[#C5AA68]/15 bg-[#09251F]/40'
          : 'border-y border-[#D8D2C9] bg-[#E9E4DD]/40'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mb-14 lg:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span
              className={`text-xs uppercase tracking-[0.25em] font-sans font-medium flex items-center gap-2 ${
                isTheme1 ? 'text-[#C5AA68]' : 'text-[#77736D]'
              }`}
            >
              <span className="text-[10px]">✦</span>
              ABOUT ME &amp; ONE9 TECH
            </span>
          </div>

          <h2
            className={`font-serif text-3xl sm:text-5xl lg:text-6xl tracking-tight max-w-3xl leading-[1.12] ${
              isTheme1 ? 'text-[#E9E1CC]' : 'text-[#262522]'
            }`}
          >
            {isTheme1 ? (
              <>
                TURNING IDEAS INTO <br />
                <span className=" font-normal text-[#C5AA68]">DIGITAL PRODUCTS.</span>
              </>
            ) : (
              <>
                I BUILD DIGITAL PRODUCTS <br />
                <span className=" font-normal text-[#8B8175]">WHERE TECH MEETS DESIGN.</span>
              </>
            )}
          </h2>
        </div>

        {/* ================= MAIN CONTENT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT: Portrait Card — 3D tilt on hover */}
          <div className="lg:col-span-5" style={{ perspective: '1200px' }}>
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.25s cubic-bezier(0.22,1,0.36,1)',
                transformStyle: 'preserve-3d',
              }}
              className={`relative rounded-[28px] overflow-hidden p-3 ${
                isTheme1
                  ? 'bg-[#10332A]/80 border border-[#C5AA68]/25'
                  : 'bg-white border border-[#D8D2C9]'
              }`}
            >
              {/* Layered "floating object" shadow, deepens on hover */}
              <div
                className="absolute -inset-2 rounded-[32px] -z-10 pointer-events-none transition-opacity duration-300"
                style={{
                  opacity: glow.opacity ? 1 : 0.7,
                  boxShadow: isTheme1
                    ? '0 30px 60px -20px rgba(0,0,0,0.6), 0 12px 24px -8px rgba(0,0,0,0.4)'
                    : '0 30px 60px -20px rgba(38,37,34,0.22), 0 12px 24px -8px rgba(38,37,34,0.12)',
                }}
              />

              <div className="relative rounded-[20px] overflow-hidden aspect-[4/5] bg-gray-900">
                <img
                  src="https://github.com/pushpendraCodes.png"
                  alt="Pushpendra Patel — Founder of One9 Tech"
                  className="w-full h-full object-cover"
                  style={{ transform: 'translateZ(0)' }}
                />

                {/* Dynamic light sheen that follows the cursor */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                  style={{
                    opacity: glow.opacity * 0.35,
                    background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(255,255,255,0.5), transparent 55%)`,
                  }}
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background: isTheme1
                      ? 'linear-gradient(to top, rgba(7, 29, 24, 0.92) 0%, transparent 60%)'
                      : 'linear-gradient(to top, rgba(38, 37, 34, 0.82) 0%, transparent 60%)',
                  }}
                />

                <div
                  className="absolute bottom-0 left-0 right-0 p-6 text-white"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  <p className="font-serif text-2xl font-bold tracking-wide">Pushpendra Patel</p>
                  <p className="text-xs uppercase tracking-widest text-[#C5AA68] font-sans mt-0.5">
                    Lead Full-Stack Engineer &amp; Founder
                  </p>
                  <div className="flex items-center gap-1.5 mt-2 text-xs text-white/80 font-sans">
                    <MapPin className="h-3.5 w-3.5 text-[#C5AA68]" />
                    Rewa, Madhya Pradesh, India
                  </div>
                </div>
              </div>

              {/* Badges below image — lift slightly on hover */}
              <div className="p-4 grid grid-cols-3 gap-2 text-center mt-2">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className={`py-2.5 px-1 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 ${
                      isTheme1
                        ? 'bg-[#09251F]/80 border-[#C5AA68]/15 hover:border-[#C5AA68]/40'
                        : 'bg-[#F4F1EC] border-[#D8D2C9] hover:border-[#8B8175]/40'
                    }`}
                    style={{ transform: 'translateZ(15px)' }}
                  >
                    <span
                      className={`block font-serif text-lg font-bold ${
                        isTheme1 ? 'text-[#C5AA68]' : 'text-[#262522]'
                      }`}
                    >
                      {item.value}
                    </span>
                    <span
                      className={`block text-[9px] uppercase tracking-wider font-sans leading-tight mt-0.5 ${
                        isTheme1 ? 'text-[#AFAF9D]' : 'text-[#77736D]'
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Editorial Narrative & Story */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-5 text-base sm:text-lg leading-relaxed font-sans">
              <p className={isTheme1 ? 'text-[#E9E1CC]' : 'text-[#262522]'}>
                I started <span className="font-semibold">One9 Tech</span> with a singular vision:
                to bridge the gap between creative design and robust software engineering —
                delivering production-ready digital products without the usual delays or jargon.
              </p>

              <p className={isTheme1 ? 'text-[#AFAF9D]' : 'text-[#77736D]'}>
                Over the past 4+ years, I have architected and shipped end-to-end web applications,
                SaaS MVPs, B2B e-commerce platforms, and real-time social applications for clients
                across India and abroad. From integrating WhatsApp automation and Agora video SDKs
                to implementing AI-driven workflows and payment gateways, my focus is always on
                business results and engineering resilience.
              </p>

              <p className={isTheme1 ? 'text-[#AFAF9D]' : 'text-[#77736D]'}>
                Whether you're an early-stage startup looking to validate your MVP or an established
                business elevating your digital presence, I collaborate with you directly from initial
                discovery to deployment and continuous scaling.
              </p>
            </div>

            {/* Core Tech Stack Tags */}
            <div className="mt-8 pt-6 border-t border-inherit">
              <p
                className={`text-xs uppercase tracking-[0.2em] font-sans font-semibold mb-4 ${
                  isTheme1 ? 'text-[#C5AA68]' : 'text-[#77736D]'
                }`}
              >
                Core Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-sans tracking-wide transition-all duration-200 hover:-translate-y-0.5 ${
                      isTheme1
                        ? 'bg-[#10332A] border border-[#C5AA68]/20 text-[#E9E1CC] hover:border-[#C5AA68]'
                        : 'bg-white border border-[#D8D2C9] text-[#262522] hover:border-[#8B8175]'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Social & Contact Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-sans uppercase tracking-widest font-semibold transition-all duration-300 active:translate-y-px hover:-translate-y-0.5 ${
                  isTheme1
                    ? 'bg-[#C5AA68] text-[#071D18] hover:bg-[#D8BD7B]'
                    : 'bg-[#262522] text-[#F4F1EC] hover:bg-[#3D3A34]'
                }`}
                style={{
                  boxShadow: isTheme1
                    ? '0 1px 0 0 rgba(255,255,255,0.35) inset, 0 8px 20px -6px rgba(197,170,104,0.45)'
                    : '0 1px 0 0 rgba(255,255,255,0.15) inset, 0 8px 20px -6px rgba(38,37,34,0.3)',
                }}
              >
                <span>More About Me</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="https://github.com/pushpendraCodes"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-sans uppercase tracking-widest font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                  isTheme1
                    ? 'border border-[#C5AA68]/30 text-[#E9E1CC] hover:bg-[#10332A]'
                    : 'border border-[#D8D2C9] text-[#262522] hover:bg-white'
                }`}
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/1pushpendrapatel/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-sans uppercase tracking-widest font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                  isTheme1
                    ? 'border border-[#C5AA68]/30 text-[#E9E1CC] hover:bg-[#10332A]'
                    : 'border border-[#D8D2C9] text-[#262522] hover:bg-white'
                }`}
              >
                <FaLinkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;