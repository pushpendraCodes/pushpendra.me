import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Globe } from 'lucide-react';
import { projects, projectDomain } from '../lib/projects';
import ProjectVisual from '../components/ProjectVisual';
import MonitorFrame from '../components/MonitorFrame';
import Starfield from '../components/Starfield';
import { scrollToY } from '../lib/smoothScroll';

const INTRO = 0.14; // share of gallery scroll spent on the space intro
const easeOut = (x) => 1 - Math.pow(1 - x, 3);

/* ================================================================== */
/* 3D rotation gallery — scroll-driven carousel of all projects.      */
/* Project screens sit on a 3D ring that rotates as you scroll;       */
/* the active project's name, category, and description sync with it. */
/* ================================================================== */

const WorkCarousel = () => {
  const n = projects.length;
  const step = 360 / n;

  const sectionRef = useRef(null);
  const ringRef = useRef(null);
  const cardRefs = useRef([]);
  const dimRefs = useRef([]);
  const stageRef = useRef(null);
  const introRef = useRef(null);
  const uiRef = useRef(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);

  useEffect(() => {
    let rafId = 0;
    let radius = 600;

    const computeRadius = () => {
      const vw = window.innerWidth;
      const cardW = vw > 768 ? Math.min(vw * 0.46, 620) : Math.min(vw * 0.78, 620);
      radius = (cardW / 2 / Math.tan(Math.PI / n)) * 1.18;
    };
    computeRadius();
    window.addEventListener('resize', computeRadius);

    let smoothed = -1;
    let lastKey = '';

    const render = () => {
      rafId = requestAnimationFrame(render);
      const section = sectionRef.current;
      const ring = ringRef.current;
      if (!section || !ring) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < -40 || rect.top > vh + 40) return;

      const scrollable = Math.max(1, section.offsetHeight - vh);
      const target = Math.min(1, Math.max(0, -rect.top / scrollable));
      smoothed = smoothed < 0 ? target : smoothed + (target - smoothed) * 0.14;
      if (Math.abs(target - smoothed) < 0.0002) smoothed = target;
      const progress = smoothed;

      const key = progress.toFixed(4) + radius;
      if (key === lastKey) return;
      lastKey = key;
      const cp = Math.max(0, (progress - INTRO) / (1 - INTRO));
      const rotation = cp * step * (n - 1);

      // Intro: orb fades out, ring flies in from deep space
      const introOp = Math.max(0, 1 - progress / (INTRO * 0.6));
      if (introRef.current) {
        introRef.current.style.opacity = String(introOp);
        introRef.current.style.transform = `translate(-50%, -50%) scale(${1 + (1 - introOp) * 0.5})`;
      }
      const enter = easeOut(
        Math.min(1, Math.max(0, (progress - INTRO * 0.35) / (INTRO * 0.65)))
      );
      if (stageRef.current) stageRef.current.style.opacity = String(enter);
      if (uiRef.current) {
        uiRef.current.style.opacity = String(enter);
        uiRef.current.style.visibility = enter < 0.05 ? 'hidden' : 'visible';
      }

      ring.style.transform = `translateZ(${-radius - (1 - enter) * 1600}px) rotateY(${-rotation - (1 - enter) * 50}deg)`;

      // per-card depth: brightness/opacity by angular distance from front
      for (let i = 0; i < n; i++) {
        const card = cardRefs.current[i];
        if (!card) continue;
        card.style.transform = `rotateY(${i * step}deg) translateZ(${radius}px)`;
        let diff = Math.abs(((i * step - rotation) % 360) + 360) % 360;
        if (diff > 180) diff = 360 - diff;
        const t = Math.min(1, diff / step); // 0 front, 1+ away
        card.style.opacity = String(1 - t * 0.6);
        const dim = dimRefs.current[i];
        if (dim) dim.style.opacity = String(t * 0.6);
      }

      const idx = Math.min(n - 1, Math.round(cp * (n - 1)));
      if (idx !== activeRef.current) {
        activeRef.current = idx;
        setActive(idx);
      }
    };

    rafId = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', computeRadius);
    };
  }, [n, step]);

  const jumpTo = (idx) => {
    const section = sectionRef.current;
    if (!section) return;
    const top = section.offsetTop;
    const scrollable = section.offsetHeight - window.innerHeight;
    scrollToY(top + (INTRO + (idx / (n - 1)) * (1 - INTRO)) * scrollable);
  };

  const current = projects[active];
  const next = projects[(active + 1) % n];

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${n * 85 + 120}vh` }}
      aria-label="3D project gallery"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#060607]">
        <Starfield />

        {/* Intro orb */}
        <div
          ref={introRef}
          className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex flex-col items-center gap-6"
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          <span className="font-mono-label text-[#8A8A8A]">ENTERING THE WORK UNIVERSE</span>
          <div className="relative flex h-20 w-20 items-center justify-center">
            <span className="absolute inset-0 animate-ping rounded-full border border-[var(--accent)] opacity-30" />
            <span className="absolute inset-0 rounded-full border border-[rgba(244,242,236,0.35)] bg-[rgba(8,8,8,0.4)] backdrop-blur-sm" />
            <span className="relative h-3 w-3 rotate-45 border border-[var(--accent)] bg-[var(--accent)]/30" />
          </div>
          <span className="font-mono-label text-[#6B6A63]">SCROLL DOWN</span>
          <span className="h-12 w-px bg-gradient-to-b from-[var(--accent)] to-transparent" />
        </div>

        {/* 3D stage */}
        <div
          ref={stageRef}
          className="absolute inset-0 flex items-center justify-center"
          style={{ perspective: '1700px', opacity: 0 }}
        >
          <div
            ref={ringRef}
            className="relative -mt-[8vh] aspect-[16/12.6] w-[78vw] max-w-[620px] md:w-[46vw]"
            style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
          >
            {projects.map((project, i) => (
              <div
                key={project.slug}
                ref={(el) => (cardRefs.current[i] = el)}
                className="absolute inset-0"
                style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
              >
                <Link
                  to={`/work/${project.slug}`}
                  data-cursor="VIEW"
                  className="relative block"
                >
                  <MonitorFrame project={project} />
                  <span
                    ref={(el) => (dimRefs.current[i] = el)}
                    className="pointer-events-none absolute inset-0 bg-[#060607]"
                    style={{ opacity: 0 }}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* soft vignette for text readability */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(6,6,7,0.75) 0%, rgba(6,6,7,0) 36%), linear-gradient(to top, rgba(6,6,7,0.85) 0%, rgba(6,6,7,0) 30%)',
          }}
        />

        <div
          ref={uiRef}
          className="pointer-events-none absolute inset-0"
          style={{ opacity: 0, visibility: 'hidden' }}
        >
        {/* Left — project list (desktop) */}
        <div className="pointer-events-none absolute left-5 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-1 md:left-10 lg:flex">
          <span className="font-mono-label mb-4 text-[#6B6A63]">
            WHAT ARE YOU LOOKING FOR?
          </span>
          {projects.map((project, i) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => jumpTo(i)}
              className={`pointer-events-auto text-left font-mono-label py-1.5 transition-colors duration-300 ${
                i === active
                  ? 'text-[#F4F2EC]'
                  : 'text-[#6B6A63] hover:text-[#8A8A8A]'
              }`}
              style={{ letterSpacing: '0.22em' }}
            >
              {project.title.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Bottom-left — active project info */}
        <div className="pointer-events-auto absolute bottom-16 left-5 z-10 max-w-[420px] md:bottom-20 md:left-10">
          <p className="font-mono-label flex items-center gap-2.5 text-[var(--accent)]">
            <span className="pulse-dot" />
            {current.number} — {current.category}
            {current.building && ' · IN DEVELOPMENT'}
          </p>
          <h2 className="font-display mt-3 text-3xl text-[#F4F2EC] md:text-4xl">
            {current.title}
          </h2>
          <p className="mt-3 font-sans text-sm leading-relaxed text-[#8A8A8A]">
            {current.description}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-6">
            <Link
              to={`/work/${current.slug}`}
              className="group inline-flex items-center gap-2 border-b border-[var(--accent)] pb-1 font-mono-label text-[#F4F2EC] transition-colors hover:text-[var(--accent)]"
            >
              Know more
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            {projectDomain(current.link) && (
              <a
                href={current.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono-label text-[#8A8A8A] transition-colors hover:text-[var(--accent)]"
              >
                <Globe className="h-3 w-3" />
                {projectDomain(current.link).toUpperCase()}
                <ArrowUpRight className="h-3 w-3" />
              </a>
            )}
          </div>
        </div>

        {/* Bottom-right — up next */}
        <div className="pointer-events-none absolute bottom-16 right-5 z-10 hidden text-right md:bottom-20 md:right-10 md:block">
          <p className="font-mono-label text-[#6B6A63]">UP NEXT</p>
          <p className="font-mono-label mt-2 text-[#8A8A8A]">
            {next.number} — {next.title.toUpperCase()}
          </p>
        </div>

        {/* Progress dots */}
        <div className="pointer-events-none absolute right-5 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-2.5 md:right-10 lg:flex">
          {projects.map((p, i) => (
            <span
              key={p.slug}
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                i === active ? 'scale-125 bg-[var(--accent)]' : 'bg-[rgba(244,242,236,0.25)]'
              }`}
            />
          ))}
        </div>
        </div>

        {/* Scroll hint */}
        <div className="pointer-events-none absolute bottom-5 left-1/2 z-10 -translate-x-1/2">
          <span className="font-mono-label text-[#6B6A63]">SCROLL ↓</span>
        </div>
      </div>
    </section>
  );
};

/* ================================================================== */
/* Tilt card — used in the flat list below the gallery                */
/* ================================================================== */

const TiltCard = ({ project, index }) => {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const sheenRef = useRef(null);
  const frameRef = useRef(0);
  const domain = projectDomain(project.link);

  const handleMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const rotY = (px - 0.5) * 10;
      const rotX = (0.5 - py) * 8;
      card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`;
      if (sheenRef.current) {
        sheenRef.current.style.opacity = '1';
        sheenRef.current.style.background = `radial-gradient(420px circle at ${px * 100}% ${py * 100}%, rgba(43,217,232,0.10), transparent 65%)`;
      }
    });
  };

  const handleLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    cancelAnimationFrame(frameRef.current);
    card.style.transform =
      'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)';
    if (sheenRef.current) sheenRef.current.style.opacity = '0';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1, ease: 'easeOut' }}
      style={{ perspective: 900 }}
    >
      <div
        role="link"
        tabIndex={0}
        data-cursor="VIEW"
        onClick={() => navigate(`/work/${project.slug}`)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') navigate(`/work/${project.slug}`);
        }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        ref={cardRef}
        className="group relative block cursor-pointer border border-[rgba(244,242,236,0.1)] bg-[#101010] p-6 transition-colors duration-300 will-change-transform hover:border-[rgba(244,242,236,0.22)] md:p-8"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.25s ease-out',
        }}
      >
        <div
          ref={sheenRef}
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        />

        <div className="flex items-center justify-between" style={{ transform: 'translateZ(24px)' }}>
          <span className="font-mono-label text-[#6B6A63]">{project.number}</span>
          <span className="font-mono-label inline-flex items-center gap-2 text-[var(--accent)]">
            <span className="pulse-dot" />
            {project.status} · {project.year}
          </span>
        </div>

        <div
          className="mt-6 overflow-hidden border border-[rgba(244,242,236,0.08)]"
          style={{ transform: 'translateZ(36px)' }}
        >
          <ProjectVisual project={project} />
        </div>

        <div
          className="mt-6 flex items-start justify-between gap-4"
          style={{ transform: 'translateZ(28px)' }}
        >
          <div>
            <p className="font-mono-label text-[#6B6A63]">{project.category}</p>
            <h2 className="font-display mt-2 text-2xl text-[#F4F2EC] md:text-3xl">
              {project.title}
            </h2>
          </div>
          <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(244,242,236,0.2)] text-[#8A8A8A] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <p
          className="mt-3 max-w-[56ch] font-sans text-sm leading-relaxed text-[#8A8A8A]"
          style={{ transform: 'translateZ(20px)' }}
        >
          {project.description}
        </p>

        <p className="font-mono-label mt-5 text-[#6B6A63]" style={{ transform: 'translateZ(20px)' }}>
          {project.technologies.join(' · ')}
        </p>

        {/* Live site link */}
        {domain && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{ transform: 'translateZ(24px)' }}
            className="font-mono-label mt-4 inline-flex items-center gap-2 border-b border-[rgba(244,242,236,0.2)] pb-0.5 text-[#8A8A8A] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <Globe className="h-3 w-3" />
            {domain.toUpperCase()}
            <ArrowUpRight className="h-3 w-3" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

/* ================================================================== */

const WorkPage = () => (
  <main className="bg-[#080808] pt-28 md:pt-36">
    {/* Page header */}
    <header className="mx-auto max-w-[1400px] px-5 pb-10 md:px-10">
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-mono-label flex items-center gap-2.5 text-[var(--accent)]"
      >
        <span className="pulse-dot" />
        INDEX — SELECTED WORK
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.08 }}
        className="font-display mt-8 text-6xl text-[#F4F2EC] md:text-[7.5rem]"
      >
        Work &amp; <br />
        <span className="text-[#6B6A63]">case studies.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.18 }}
        className="mt-8 max-w-[56ch] font-sans text-base leading-relaxed text-[#8A8A8A] md:text-lg"
      >
        Websites, apps, ERP, and software platforms shipped by One9 Tech. Scroll
        through the gallery, then open any case study for the full system —
        from public website to admin panel.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 flex items-center gap-8 border-y border-[rgba(244,242,236,0.08)] py-4"
      >
        <span className="font-mono-label text-[#6B6A63]">
          {String(projects.length).padStart(2, '0')} PROJECTS
        </span>
        <span className="font-mono-label text-[#6B6A63]">2024 — 2026</span>
        <span className="font-mono-label hidden text-[#6B6A63] sm:inline">
          WEB · APP · ERP · AI
        </span>
      </motion.div>
    </header>

    {/* 3D rotation gallery */}
    <WorkCarousel />

    {/* Flat list of all projects */}
    <div className="mx-auto max-w-[1400px] px-5 pt-20 md:px-10 md:pt-28">
      <span className="font-mono-label flex items-center gap-2.5 text-[var(--accent)]">
        <span className="pulse-dot" />
        ALL PROJECTS
      </span>
      <h2 className="font-display mt-6 text-4xl text-[#F4F2EC] md:text-6xl">
        The full index<span className="text-[#6B6A63]">.</span>
      </h2>
    </div>

    <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 px-5 py-14 md:grid-cols-2 md:gap-8 md:px-10 md:py-16">
      {projects.map((project, i) => (
        <TiltCard key={project.slug} project={project} index={i} />
      ))}
    </div>
  </main>
);

export default WorkPage;
