import React, { useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const projects = [
  {
    number: '01',
    title: 'Review QR',
    status: 'Live Production',
    category: 'SaaS Platform / AI Marketing',
    year: '2026',
    role: 'Lead Architect & Full Stack Developer',
    description: 'An AI-powered Google Review QR management platform engineered for businesses to collect, analyze, and boost authenticated 5-star customer reviews at scale.',
    image: '/projectsThumbnails/thumbnail5.png',
    technologies: ['Next.js', 'TailwindCSS', 'Node.js', 'AI Workflows', 'MongoDB'],
    link: 'https://www.getreviewqr.com/',
    featured: true,
  },
  {
    number: '02',
    title: 'Dil Se Dil Tak',
    status: 'Live Production',
    category: 'Social / Real-Time Communication',
    year: '2025',
    role: 'Full Stack Engineer',
    description: 'Interactive real-time communication platform incorporating high-fidelity live video calling, voice channels, and synchronous social gaming modules.',
    image: '/projectsThumbnails/thumbnail7.jpeg',
    technologies: ['React', 'Next.js', 'Agora SDK', 'Node.js', 'TailwindCSS', 'MongoDB'],
    link: 'https://dilsee.com',
    featured: true,
  },
  {
    number: '03',
    title: 'Shri Bagherwal Samaj Sahayata',
    status: 'Live Production',
    category: 'Social Welfare & Community Portal',
    year: '2025',
    role: 'Full Stack Developer',
    description: 'A dedicated community assistance portal with automated WhatsApp messaging APIs, member directory, verification workflows, and donation processing.',
    image: '/projectsThumbnails/thumbnail1.jpg',
    technologies: ['React', 'Node.js', 'WhatsApp API', 'MongoDB', 'Express'],
    link: 'https://bagherwaljaindp.com',
    featured: false,
  },
  {
    number: '04',
    title: 'Icchhapurti',
    status: 'Live Production',
    category: 'E-Commerce Platform',
    year: '2025',
    role: 'Full Stack Developer',
    description: 'Bespoke modern e-commerce storefront for an artisanal product brand, equipped with seamless checkout, payment integration, and dynamic order fulfillment.',
    image: '/projectsThumbnails/thumbnail2.jpg',
    technologies: ['React', 'Node.js', 'Razorpay', 'MongoDB', 'TailwindCSS'],
    link: 'https://icchhapurti.com/',
    featured: false,
  },
  {
    number: '05',
    title: 'FarmHouse Kitchen',
    status: 'Live Production',
    category: 'Food & Hospitality Platform',
    year: '2024',
    role: 'Frontend & Backend Developer',
    description: 'Curated culinary web application showcasing restaurant menus, table reservations, and seamless online food ordering for customers.',
    image: '/projectsThumbnails/thumbnail3.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'TailwindCSS'],
    link: 'https://farmhouse-kitchen-website.vercel.app/',
    featured: false,
  },
  {
    number: '06',
    title: 'Optech Computer Institute',
    status: 'Live Production',
    category: 'Education & Student Portal',
    year: '2024',
    role: 'Frontend Engineer',
    description: 'Clean digital education portal for a regional technical institute, facilitating student curriculum access, admission inquiries, and course catalogs.',
    image: '/projectsThumbnails/thumbnail6.png',
    technologies: ['React', 'TailwindCSS', 'Vite'],
    link: 'https://optech-website.vercel.app/',
    featured: false,
  },
];

// Reusable 3D tilt + light-sheen wrapper, shared across every card variant below.
const TiltCard = ({ children, className = '', maxTilt = 6, style = {} }) => {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (py - 0.5) * -maxTilt, y: (px - 0.5) * maxTilt });
    setGlow({ x: px * 100, y: py * 100, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlow((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div style={{ perspective: '1400px' }}>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.25s cubic-bezier(0.22,1,0.36,1)',
          transformStyle: 'preserve-3d',
          ...style,
        }}
        className={className}
      >
        {children}
        <div
          className="absolute inset-0 pointer-events-none rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: glow.opacity * 0.12,
            background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(255,255,255,0.9), transparent 55%)`,
          }}
        />
      </div>
    </div>
  );
};

const ClientProjects = () => {
  const { isTheme1 } = useTheme();
  const [filter, setFilter] = useState('ALL');

  const filteredProjects =
    filter === 'ALL'
      ? projects
      : filter === 'SAAS'
      ? projects.filter((p) => p.category.includes('SaaS') || p.category.includes('Social'))
      : projects.filter(
          (p) =>
            p.category.includes('E-Commerce') ||
            p.category.includes('Food') ||
            p.category.includes('Education')
        );

  return (
    <section id="works" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= SECTION HEADER ================= */}
        <div className="mb-14 lg:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span
              className={`text-xs uppercase tracking-[0.25em] font-sans font-medium flex items-center gap-2 ${
                isTheme1 ? 'text-[#C5AA68]' : 'text-[#77736D]'
              }`}
            >
              <span className="text-[10px]">✦</span>
              PORTFOLIO ARCHIVE
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2
                className={`font-serif text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] ${
                  isTheme1 ? 'text-[#E9E1CC]' : 'text-[#262522]'
                }`}
              >
                {isTheme1 ? (
                  <>
                    SELECTED <br />
                    <span className=" font-normal text-[#C5AA68]">CASE STUDIES.</span>
                  </>
                ) : (
                  <>
                    SELECTED WORK<span className="text-[#8B8175]">.</span>
                  </>
                )}
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2">
              {['ALL', 'SAAS', 'WEB APPS'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-sans uppercase tracking-wider transition-all duration-200 active:translate-y-[1px] ${
                    filter === cat
                      ? isTheme1
                        ? 'bg-[#C5AA68] text-[#071D18] font-bold'
                        : 'bg-[#262522] text-[#F4F1EC] font-bold'
                      : isTheme1
                      ? 'border border-[#C5AA68]/20 text-[#AFAF9D] hover:text-[#E9E1CC]'
                      : 'border border-[#D8D2C9] text-[#77736D] hover:text-[#262522]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ================= THEME 1: EDITORIAL CASE STUDIES LIST ================= */}
        {isTheme1 ? (
          <div className="space-y-16 lg:space-y-24">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <TiltCard
                  key={project.title}
                  maxTilt={3.5}
                  className="group relative rounded-3xl p-6 sm:p-10 bg-[#09251F]/90 border border-[#C5AA68]/20 hover:border-[#C5AA68]/50 transition-colors duration-500"
                  style={{
                    boxShadow:
                      '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 30px 60px -20px rgba(0,0,0,0.55), 0 12px 24px -8px rgba(0,0,0,0.4)',
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Visual Mockup Container */}
                    <div
                      className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                      style={{ transform: 'translateZ(20px)' }}
                    >
                      <div
                        data-cursor="VIEW"
                        className="relative rounded-xl overflow-hidden border border-[#C5AA68]/25 bg-[#071D18] shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
                      >
                        {/* Browser Top Bar */}
                        <div className="px-4 py-2.5 bg-[#10332A] border-b border-[#C5AA68]/15 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></span>
                          </div>
                          <span className="text-[10px] font-mono text-[#AFAF9D]/60 tracking-wider">
                            {project.title.toLowerCase().replace(/\s+/g, '')}.app
                          </span>
                          <span className="text-[10px] text-[#C5AA68] font-sans uppercase tracking-widest font-semibold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            {project.status}
                          </span>
                        </div>

                        {/* Project Screenshot */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-contain object-top transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#071D18]/80 via-transparent to-transparent pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Metadata & Narrative Content */}
                    <div
                      className={`lg:col-span-5 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                      style={{ transform: 'translateZ(35px)' }}
                    >
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <span className="font-serif text-3xl font-bold text-[#C5AA68]">
                          {project.number}
                        </span>
                        <div className="text-right">
                          <span className="block text-[11px] font-sans uppercase tracking-widest text-[#AFAF9D]">
                            {project.category}
                          </span>
                          <span className="text-[10px] font-mono text-[#C5AA68]">
                            Year · {project.year}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#E9E1CC] font-semibold mb-4 leading-tight group-hover:text-[#C5AA68] transition-colors">
                        {project.title}
                      </h3>

                      <p className="font-sans text-sm text-[#AFAF9D] leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="mb-8">
                        <span className="block text-[10px] uppercase tracking-widest text-[#C5AA68] font-sans font-semibold mb-2">
                          Core Stack
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((t) => (
                            <span
                              key={t}
                              className="text-xs font-sans px-3 py-1 rounded-full bg-[#10332A] text-[#E9E1CC] border border-[#C5AA68]/20"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="VISIT"
                          className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-sans uppercase tracking-widest font-semibold text-[#071D18] bg-[#C5AA68] hover:bg-[#D8BD7B] transition-all duration-200 active:translate-y-px hover:-translate-y-0.5"
                          style={{
                            boxShadow:
                              '0 1px 0 0 rgba(255,255,255,0.35) inset, 0 8px 20px -6px rgba(197,170,104,0.45)',
                          }}
                        >
                          <span>Visit Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        ) : (
          /* ================= THEME 2: EDITORIAL MASONRY / CAMPAIGN RHYTHM ================= */
          <div className="space-y-16">
            {/* Featured Hero Project */}
            {filteredProjects[0] && (
              <TiltCard
                maxTilt={3}
                className="bg-white border border-[#D8D2C9] rounded-2xl overflow-hidden p-6 sm:p-10"
                style={{
                  boxShadow:
                    '0 1px 0 0 rgba(255,255,255,0.6) inset, 0 30px 60px -20px rgba(38,37,34,0.16), 0 12px 24px -8px rgba(38,37,34,0.08)',
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8" style={{ transform: 'translateZ(15px)' }}>
                    <div
                      data-cursor="VIEW"
                      className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#D8D2C9] group"
                    >
                      <img
                        src={filteredProjects[0].image}
                        alt={filteredProjects[0].title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col justify-between" style={{ transform: 'translateZ(30px)' }}>
                    <div>
                      <span className="text-xs uppercase tracking-[0.2em] font-sans text-[#8B8175] font-semibold">
                        FEATURED PROJECT
                      </span>
                      <h3 className="font-serif text-3xl sm:text-4xl text-[#262522] font-medium tracking-tight mt-2 mb-4">
                        {filteredProjects[0].title}
                      </h3>
                      <p className="font-sans text-sm text-[#77736D] leading-relaxed mb-6">
                        {filteredProjects[0].description}
                      </p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-[#D8D2C9]">
                      <div className="flex justify-between text-xs font-sans">
                        <span className="text-[#77736D] uppercase tracking-wider">Role</span>
                        <span className="text-[#262522] font-medium">{filteredProjects[0].role}</span>
                      </div>
                      <div className="flex justify-between text-xs font-sans">
                        <span className="text-[#77736D] uppercase tracking-wider">Year</span>
                        <span className="text-[#262522] font-medium">{filteredProjects[0].year}</span>
                      </div>
                      <div className="pt-2">
                        <a
                          href={filteredProjects[0].link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-sans uppercase tracking-widest font-semibold bg-[#262522] text-[#F4F1EC] hover:bg-[#3D3A34] transition-all duration-200 active:translate-y-px hover:-translate-y-0.5"
                          style={{
                            boxShadow:
                              '0 1px 0 0 rgba(255,255,255,0.15) inset, 0 8px 20px -6px rgba(38,37,34,0.3)',
                          }}
                        >
                          <span>Live Project</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            )}

            {/* Remaining Projects in 2-Column Editorial Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.slice(1).map((project) => (
                <TiltCard
                  key={project.title}
                  maxTilt={5}
                  className="bg-white border border-[#D8D2C9] rounded-2xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between group transition-colors duration-300 hover:border-[#8B8175]/40"
                  style={{
                    boxShadow:
                      '0 1px 0 0 rgba(255,255,255,0.6) inset, 0 20px 40px -16px rgba(38,37,34,0.12), 0 8px 16px -6px rgba(38,37,34,0.06)',
                  }}
                >
                  <div style={{ transform: 'translateZ(15px)' }}>
                    <div
                      data-cursor="VIEW"
                      className="relative rounded-xl overflow-hidden aspect-[16/10] border border-[#D8D2C9] mb-6"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-sans font-semibold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-[#262522]">
                        {project.category}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif text-lg font-medium text-[#8B8175]">
                        {project.number}
                      </span>
                      <span className="text-xs font-mono text-[#77736D]">{project.year}</span>
                    </div>

                    <h3 className="font-serif text-2xl text-[#262522] font-medium tracking-tight mb-3 group-hover:text-[#8B8175] transition-colors">
                      {project.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-[#77736D] leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div
                    className="pt-4 border-t border-[#D8D2C9] flex items-center justify-between"
                    style={{ transform: 'translateZ(15px)' }}
                  >
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] uppercase font-sans tracking-wider px-2 py-0.5 rounded bg-[#F4F1EC] text-[#262522]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-sans uppercase tracking-widest font-semibold text-[#262522] hover:text-[#8B8175] transition-colors"
                    >
                      <span>View</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientProjects;