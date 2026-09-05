import React from 'react';
import Hero from './Hero';
import About from './About';
import ServicesSection from './ServicesSection';
import ClientProjects from './ClientProjects';
import TechStack from './TechStack';
import ExperienceTimeline from './ExperienceTimeline';
import HowWeWork1 from './HowWeWork1';
import TestimonialCarousel from './TestimonialCarousel';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';

const Home = () => {
  return (
    <main className="relative">
      <Hero />

      <About />

      <ScrollReveal>
        <ServicesSection />
      </ScrollReveal>

      <ScrollReveal>
        <ClientProjects />
      </ScrollReveal>

      <ScrollReveal>
        <TechStack />
      </ScrollReveal>
{/* 
      <ScrollReveal>
        <ExperienceTimeline />
      </ScrollReveal> */}

      <ScrollReveal>
        <HowWeWork1 />
      </ScrollReveal>

      <ScrollReveal>
        <TestimonialCarousel />
      </ScrollReveal>

      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </main>
  );
};

export default Home;
