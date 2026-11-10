import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const systems = [
  {
    number: '01',
    title: 'WEB PLATFORMS',
    tag: 'WEBSITES & WEB APPS',
    description:
      'Business websites, web applications, admin panels, and SaaS products — fast, responsive, and built to convert visitors into customers.',
    stack: ['React', 'Next.js', 'Node.js', 'Tailwind'],
  },
  {
    number: '02',
    title: 'MOBILE APPS',
    tag: 'ANDROID & IOS',
    description:
      'Cross-platform mobile apps with native feel — from idea to Play Store and App Store, including backend, admin panel, and launch support.',
    stack: ['React Native', 'Flutter', 'Firebase'],
  },
  {
    number: '03',
    title: 'CUSTOM SOFTWARE',
    tag: 'BUSINESS SYSTEMS',
    description:
      'Billing, inventory, CRM, and workflow software shaped around how your business actually runs. Every field earns its place.',
    stack: ['Node.js', 'MongoDB', 'PostgreSQL', 'Express'],
  },
  {
    number: '04',
    title: 'AUTOMATION & AI',
    tag: 'WHATSAPP & WORKFLOWS',
    description:
      'WhatsApp automation, AI-driven workflows, and payment integrations that remove manual overhead from your operation — permanently.',
    stack: ['WhatsApp API', 'AI Workflows', 'Razorpay'],
  },
  {
    number: '05',
    title: 'UI/UX DESIGN',
    tag: 'PREMIUM INTERFACES',
    description:
      'Interfaces engineered to position you as the serious operator you are — design systems, wireframes, and high-fidelity screens in Figma.',
    stack: ['Figma', 'Design Systems', 'Prototyping'],
  },
  {
    number: '06',
    title: 'DIGITAL MARKETING',
    tag: 'ADS & SOCIAL GROWTH',
    description:
      'Performance campaigns on Google and Meta, social media management, and conversion tracking — every rupee of ad spend measured against real leads and sales.',
    stack: ['Google Ads', 'Meta Ads', 'Social Media', 'Analytics'],
  },
  {
    number: '07',
    title: 'SEO',
    tag: 'SEARCH VISIBILITY',
    description:
      'Technical SEO, on-page optimization, local SEO with Google Business Profile, and content strategy — so customers find you first when they search.',
    stack: ['Technical SEO', 'Local SEO', 'Search Console', 'Schema'],
  },
];

const SystemsAccordion = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="bg-[#080808] py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <span className="font-mono-label flex items-center gap-2.5 text-[var(--accent)]">
          <span className="pulse-dot" />
          03 — SERVICES
        </span>

        <h2 className="font-display mt-8 text-5xl text-[#F4F2EC] md:text-7xl">
          The seven systems.
        </h2>
        <p className="mt-6 max-w-[52ch] font-sans text-base leading-relaxed text-[#8A8A8A]">
          Seven disciplines, one studio — we build the product, then help
          the right people find it.
        </p>

        <div className="mt-14 flex flex-col gap-3">
          {systems.map((sys, idx) => {
            const isOpen = open === idx;
            return (
              <button
                key={sys.number}
                type="button"
                onClick={() => setOpen(isOpen ? -1 : idx)}
                aria-expanded={isOpen}
                className={`group w-full border bg-[#101010] text-left transition-all duration-300 ${
                  isOpen
                    ? 'border-[var(--accent)]'
                    : 'border-[rgba(244,242,236,0.08)] hover:border-[rgba(244,242,236,0.2)]'
                }`}
              >
                <div className="flex items-center gap-5 px-5 py-6 md:gap-10 md:px-10 md:py-8">
                  <span className="font-mono-label text-[#6B6A63]">{sys.number}</span>
                  <h3 className="font-display flex-1 text-2xl text-[#F4F2EC] sm:text-3xl md:text-5xl">
                    {sys.title}
                  </h3>
                  <span className="font-mono-label hidden text-[#6B6A63] lg:inline">
                    {sys.tag}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? 'rotate-45 border-[var(--accent)] text-[var(--accent)]'
                        : 'border-[rgba(244,242,236,0.2)] text-[#8A8A8A] group-hover:text-[#F4F2EC]'
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </div>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-7 md:px-10 md:pb-9 md:pl-[7.5rem]">
                      <p className="max-w-[60ch] font-sans text-sm leading-relaxed text-[#8A8A8A] md:text-base">
                        {sys.description}
                      </p>
                      <p className="font-mono-label mt-5 flex flex-wrap items-center gap-2 text-[var(--accent)]">
                        <span className="pulse-dot" />
                        {sys.stack.join(' · ')}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SystemsAccordion;
