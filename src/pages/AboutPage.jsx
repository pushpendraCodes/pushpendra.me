import React from 'react';
import { motion } from 'framer-motion';
import AboutStudio from '../components/AboutStudio';
import Manifesto from '../components/Manifesto';
import ScrollReveal from '../components/ScrollReveal';

const AboutPage = () => (
  <main className="bg-[#080808] pt-28 md:pt-36">
    {/* Page header */}
    <header className="mx-auto max-w-[1400px] px-5 md:px-10">
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-mono-label flex items-center gap-2.5 text-[var(--accent)]"
      >
        <span className="pulse-dot" />
        INDEX — THE STUDIO
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.08 }}
        className="font-display mt-8 text-6xl text-[#F4F2EC] md:text-[7.5rem]"
      >
        One studio, <br />
        <span className="text-[#6B6A63]">shipped everywhere.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.18 }}
        className="mt-8 max-w-[56ch] font-sans text-base leading-relaxed text-[#8A8A8A] md:text-lg"
      >
        One9 Tech is a digital product studio run by an engineer, not an
        account manager. Every project is designed, built, and deployed by the
        people you actually talk to.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 flex items-center gap-8 border-y border-[rgba(244,242,236,0.08)] py-4"
      >
        <span className="font-mono-label text-[#6B6A63]">REMOTE-FIRST</span>
        <span className="font-mono-label text-[#6B6A63]">4+ YEARS</span>
        <span className="font-mono-label hidden text-[#6B6A63] sm:inline">
          10+ SYSTEMS LIVE
        </span>
      </motion.div>
    </header>

    <div className="pt-4">
      <ScrollReveal>
        <AboutStudio />
      </ScrollReveal>

      <Manifesto />
    </div>
  </main>
);

export default AboutPage;
