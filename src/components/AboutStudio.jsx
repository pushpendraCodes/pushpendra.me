import React from 'react';
import { Globe } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const stats = [
  { value: '10+', label: 'PRODUCTS SHIPPED' },
  { value: '10+', label: 'HAPPY CLIENTS' },
  { value: '4+', label: 'YEARS BUILDING' },
];

const AboutStudio = () => (
  <section id="about" className="border-y border-[rgba(244,242,236,0.08)] bg-[#101010] py-24 md:py-32">
    <div className="mx-auto max-w-[1400px] px-5 md:px-10">
      <span className="font-mono-label flex items-center gap-2.5 text-[var(--accent)]">
        <span className="pulse-dot" />
        06 — ABOUT
      </span>

      <div className="mt-8 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
        {/* Left — statement + copy */}
        <div className="lg:col-span-8">
          <h2 className="font-display max-w-[16ch] text-5xl text-[#F4F2EC] md:text-7xl">
            Not another digital{' '}
            <span className="normal-case italic text-[#6B6A63]">agency.</span>
          </h2>

          <div className="mt-10 max-w-[64ch] space-y-5 font-sans text-base leading-relaxed md:text-lg">
            <p className="text-[#F4F2EC]">
              One9 Tech is a digital product studio founded by full-stack
              engineer Pushpendra Patel.
            </p>
            <p className="text-[#8A8A8A]">
              Over 4+ years we have shipped web applications, SaaS products,
              e-commerce platforms, ERP systems, and mobile apps for clients
              across India and beyond — from WhatsApp automation and payment
              gateways to AI workflows and real-time video.
            </p>
            <p className="text-[#8A8A8A]">
              No templates, no subscriptions. Whether you need a website
              developer, an app developer, or a complete software partner — you
              work with the engineer directly, from discovery to launch and
              support.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <span className="font-mono-label inline-flex items-center gap-2 text-[#8A8A8A]">
              <Globe className="h-3.5 w-3.5 text-[var(--accent)]" />
              WORKING WITH CLIENTS WORLDWIDE
            </span>
            <a
              href="https://github.com/pushpendraCodes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#8A8A8A] transition-colors hover:text-[var(--accent)]"
            >
              <FaGithub className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/1pushpendrapatel/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#8A8A8A] transition-colors hover:text-[var(--accent)]"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right — founder + stats */}
        <div className="flex flex-col gap-px bg-[rgba(244,242,236,0.08)] lg:col-span-4">
          <div className="flex items-center gap-4 bg-[#080808] p-6">
            <img
              src="https://github.com/pushpendraCodes.png"
              alt="Pushpendra Patel — founder of One9 Tech"
              className="h-16 w-16 rounded-full object-cover grayscale"
            />
            <div>
              <p className="font-display text-lg text-[#F4F2EC]">Pushpendra Patel</p>
              <p className="font-mono-label mt-1 text-[#6B6A63]">FOUNDER / ENGINEER</p>
            </div>
          </div>
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-baseline justify-between bg-[#080808] p-6">
              <span className="font-mono-label text-[#6B6A63]">{stat.label}</span>
              <span className="font-display text-4xl text-[var(--accent)] md:text-5xl">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutStudio;
