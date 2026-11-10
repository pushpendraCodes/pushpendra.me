import React from 'react';

const cards = [
  {
    tag: 'DIRECT',
    title: 'One engineer, zero hand-offs.',
    body: 'You talk to the person writing the code. Strategy, design, and engineering in one line of communication — no dilution between what you asked for and what ships.',
  },
  {
    tag: 'OWNERSHIP',
    title: 'You own every line.',
    body: 'Source code, servers, and accounts belong to you from day one. No lock-in, no subscription hostage — the product is yours.',
  },
  {
    tag: 'PRODUCTION',
    title: 'Built to run, not to demo.',
    body: 'Payments, WhatsApp automation, AI workflows, real users — every build is engineered for live production from the first commit.',
  },
];

const SystemsIntro = () => (
  <section className="border-b border-[rgba(244,242,236,0.08)] bg-[#080808] py-24 md:py-32">
    <div className="mx-auto max-w-[1400px] px-5 md:px-10">
      <span className="font-mono-label flex items-center gap-2.5 text-[var(--accent)]">
        <span className="pulse-dot" />
        02 — THE STUDIO
      </span>

      <h2 className="font-display mt-8 max-w-[18ch] text-5xl text-[#F4F2EC] md:text-7xl">
        We build products that make business{' '}
        <span className="normal-case italic text-[#6B6A63]">move faster.</span>
      </h2>

      <p className="mt-8 max-w-[58ch] font-sans text-base leading-relaxed text-[#8A8A8A] md:text-lg">
        From business websites to startup MVPs and custom software, everything is
        engineered around how your business actually works — not how a template
        assumes it does.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-px bg-[rgba(244,242,236,0.08)] md:grid-cols-3">
        {cards.map((card, i) => (
          <div key={card.tag} className="group bg-[#080808] p-8 transition-colors duration-300 hover:bg-[#101010] md:p-10">
            <div className="flex items-center justify-between">
              <span className="font-mono-label text-[#6B6A63]">{card.tag}</span>
              <span className="font-mono-label text-[var(--accent)]">0{i + 1}</span>
            </div>
            <h3 className="font-display mt-6 text-xl text-[#F4F2EC] md:text-2xl">{card.title}</h3>
            <p className="mt-4 font-sans text-sm leading-relaxed text-[#8A8A8A]">{card.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SystemsIntro;
