'use client';

import React from 'react';
import Link from 'next/link';
import { faqItems, SERVICE_AREAS } from '../lib/seo';

const LocalPresence = () => (
  <section
    id="rewa"
    aria-labelledby="local-seo-heading"
    className="border-t border-[rgba(244,242,236,0.08)] bg-[#080808] py-24 md:py-32"
  >
    <div className="mx-auto max-w-[1400px] px-5 md:px-10">
      <span className="font-mono-label flex items-center gap-2.5 text-[var(--accent)]">
        <span className="pulse-dot" />
        BASED IN REWA · MP
      </span>

      <h2
        id="local-seo-heading"
        className="font-display mt-8 max-w-[22ch] text-4xl text-[#F4F2EC] md:text-6xl"
      >
        Website, app &amp; software company in{' '}
        <span className="text-[#6B6A63]">Rewa, Madhya Pradesh.</span>
      </h2>

      <p className="mt-6 max-w-[64ch] font-sans text-base leading-relaxed text-[#9A9A96] md:text-lg">
        Looking for a website developer, app developer, ERP software partner, or
        digital marketing agency in Rewa? One9 Tech builds production systems for
        local businesses and startups — and ranks your product so customers in
        Rewa, Satna, Sidhi and nearby cities can find you.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-px border border-[rgba(244,242,236,0.08)] bg-[rgba(244,242,236,0.08)] md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: 'Website Development',
            copy: 'Business websites, web apps, and SaaS from Rewa that convert visitors into customers.',
          },
          {
            title: 'App Development',
            copy: 'Android and cross-platform apps with backend, admin panel, and Play Store launch support.',
          },
          {
            title: 'ERP & Software',
            copy: 'Custom ERP, CRM, billing, and automation software shaped around your operations.',
          },
          {
            title: 'Marketing & SEO',
            copy: 'Google Ads, Meta Ads, and local SEO so your Rewa business shows up when people search.',
          },
        ].map((item) => (
          <div key={item.title} className="bg-[#080808] p-6 md:p-8">
            <h3 className="font-display text-xl text-[#F4F2EC]">{item.title}</h3>
            <p className="mt-3 font-sans text-sm leading-relaxed text-[#8A8A8A]">
              {item.copy}
            </p>
          </div>
        ))}
      </div>

      <p className="font-mono-label mt-8 text-[#6B6A63]">
        SERVING {SERVICE_AREAS.join(' · ').toUpperCase()} · INDIA · WORLDWIDE
      </p>

      <div className="mt-16">
        <h3 className="font-display text-2xl text-[#F4F2EC] md:text-3xl">
          Frequently asked in Rewa
        </h3>
        <div className="mt-8 flex flex-col">
          {faqItems.map((item, i) => (
            <details
              key={item.question}
              className="group border-b border-[rgba(244,242,236,0.08)] py-5 first:border-t"
            >
              <summary className="cursor-pointer list-none font-sans text-[15px] font-medium text-[#F4F2EC] marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start gap-4">
                  <span className="font-mono-label shrink-0 text-[#6B6A63]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1">{item.question}</span>
                </span>
              </summary>
              <p className="mt-3 max-w-[68ch] pl-12 font-sans text-sm leading-relaxed text-[#8A8A8A] md:text-[15px]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-wrap gap-6">
        <Link
          href="/services"
          className="bg-[var(--accent)] px-8 py-4 font-mono-label text-[#080808]"
        >
          View services in Rewa
        </Link>
        <Link
          href="/contact"
          className="font-mono-label text-[#8A8A8A] transition-colors hover:text-[#F4F2EC]"
        >
          Talk to a Rewa developer →
        </Link>
      </div>
    </div>
  </section>
);

export default LocalPresence;
