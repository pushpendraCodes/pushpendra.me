import React from 'react';

const chips = ['LIVE', 'SYNCED', 'AUTOMATED', 'CONNECTED'];

const Architecture = () => (
  <section className="border-y border-[rgba(244,242,236,0.08)] bg-[#101010] py-24 md:py-32">
    <div className="mx-auto max-w-[1400px] px-5 text-center md:px-10">
      <span className="font-mono-label text-[#6B6A63]">04 — ARCHITECTURE</span>

      <h2 className="font-display mx-auto mt-8 max-w-[16ch] text-4xl text-[#F4F2EC] md:text-6xl">
        One idea. One system.{' '}
        <span className="text-[#6B6A63]">Everything connected.</span>
      </h2>

      <p className="mx-auto mt-7 max-w-[54ch] font-sans text-base leading-relaxed text-[#8A8A8A]">
        The website, the app, the automation, and the admin panel are designed
        as one product — not isolated tools bolted together afterwards.
      </p>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
        {chips.map((chip) => (
          <span
            key={chip}
            className="font-mono-label inline-flex items-center gap-2 border border-[rgba(244,242,236,0.14)] bg-[#080808] px-4 py-2 text-[#F4F2EC]"
          >
            <span className="pulse-dot" />
            {chip}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Architecture;
