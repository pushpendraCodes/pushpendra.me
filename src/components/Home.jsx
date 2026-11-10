import React from 'react';
import Hero from './Hero';
import Marquee from './Marquee';
import SystemsIntro from './SystemsIntro';
import SystemsAccordion from './SystemsAccordion';
import Architecture from './Architecture';
import Process from './Process';
import AboutStudio from './AboutStudio';
import Manifesto from './Manifesto';
import Work from './Work';
import ScrollReveal from './ScrollReveal';

const Home = () => {
  return (
    <main className="relative">
      <Hero />

      <Marquee />

      <ScrollReveal>
        <SystemsIntro />
      </ScrollReveal>

      <ScrollReveal>
        <SystemsAccordion />
      </ScrollReveal>

      <ScrollReveal>
        <Architecture />
      </ScrollReveal>

      <ScrollReveal>
        <Work />
      </ScrollReveal>

      <ScrollReveal>
        <Process />
      </ScrollReveal>

      <ScrollReveal>
        <AboutStudio />
      </ScrollReveal>

      <Manifesto />
    </main>
  );
};

export default Home;
