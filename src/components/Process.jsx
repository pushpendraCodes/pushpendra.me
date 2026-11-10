import React from 'react';

const steps = [
  {
    number: '01',
    title: 'DISCOVER',
    body: 'Business audit. We map your operations, goals, and bottlenecks before a single line of code is written.',
  },
  {
    number: '02',
    title: 'DESIGN',
    body: 'Architecture first. System design, interface wireframes, and a technical plan — agreed before build starts.',
  },
  {
    number: '03',
    title: 'ENGINEER',
    body: 'Precision build with weekly deliverables and direct communication with the engineer throughout.',
  },
  {
    number: '04',
    title: 'DEPLOY',
    body: 'Production-grade launch with monitoring, documentation, and ongoing support included as standard.',
  },
];

const Process = () => (
  <section id="process" className="bg-[#080808] py-24 md:py-32">
    <div className="mx-auto max-w-[1400px] px-5 md:px-10">
      <span className="font-mono-label text-[#6B6A63]">05 — PROCESS</span>

      <h2 className="font-display mt-8 text-5xl text-[#F4F2EC] md:text-7xl">
        From idea <span className="text-[#6B6A63]">to live product.</span>
      </h2>

      <div className="mt-14 grid grid-cols-1 gap-px bg-[rgba(244,242,236,0.08)] sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div
            key={step.number}
            className="group bg-[#080808] p-8 transition-colors duration-300 hover:bg-[#101010] md:p-10"
          >
            <span className="font-mono-label text-[var(--accent)]">{step.number}</span>
            <h3 className="font-display mt-6 text-2xl text-[#F4F2EC] md:text-3xl">
              {step.title}
            </h3>
            <p className="mt-4 font-sans text-sm leading-relaxed text-[#8A8A8A]">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
