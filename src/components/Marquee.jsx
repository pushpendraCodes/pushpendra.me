import React from 'react';

const items = [
  'WEB DEVELOPMENT',
  'MOBILE APPS',
  'CUSTOM SOFTWARE',
  'UI/UX DESIGN',
  'SAAS PRODUCTS',
  'WHATSAPP AUTOMATION',
  'E-COMMERCE',
];

const Marquee = () => {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-[rgba(244,242,236,0.08)] bg-[#080808] py-5">
      <div className="marquee-track">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center" aria-hidden={half === 1}>
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center">
                <span className="font-display whitespace-nowrap px-6 text-2xl text-[#6B6A63] md:text-3xl">
                  {item}
                </span>
                <span className="text-[var(--accent)]">·</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
