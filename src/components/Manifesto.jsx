import React from 'react';
import ScrollReveal from './ScrollReveal';

const Manifesto = () => (
  <section className="bg-[#080808] py-28 md:py-40">
    <div className="mx-auto max-w-[1400px] px-5 text-center md:px-10">
      <span className="font-mono-label text-[#6B6A63]">— MANIFESTO</span>

      <ScrollReveal>
        <h2 className="font-display mx-auto mt-10 max-w-[18ch] text-4xl text-[#6B6A63] md:text-6xl">
          We don&rsquo;t just build websites.
        </h2>
      </ScrollReveal>

      <p className="font-mono-label mt-10 text-[var(--accent)]">PRODUCTS · NOT PAGES</p>

      <ScrollReveal>
        <h2 className="font-display mx-auto mt-10 max-w-[16ch] text-5xl text-[#F4F2EC] md:text-8xl">
          We build products{' '}
          <span className="normal-case italic text-[#6B6A63]">people remember.</span>
        </h2>
      </ScrollReveal>
    </div>
  </section>
);

export default Manifesto;
