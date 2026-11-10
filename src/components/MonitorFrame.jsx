import React from 'react';
import ProjectVisual from './ProjectVisual';

/* Desktop monitor mockup — bezel, screen glare, chin, and stand.
   The screenshot is shown in full (object-contain) inside the screen. */
const MonitorFrame = ({ project }) => (
  <div className="flex w-full flex-col items-center">
    {/* Display */}
    <div className="relative w-full rounded-[14px] border border-[rgba(244,242,236,0.16)] bg-gradient-to-b from-[#1c1c1e] to-[#0e0e10] p-[2.2%] pb-0 shadow-[0_40px_90px_rgba(0,0,0,0.7)]">
      {/* camera dot */}
      <span className="absolute left-1/2 top-[0.9%] h-1 w-1 -translate-x-1/2 rounded-full bg-[#2a2a2e]" />

      {/* Screen */}
      <div className="relative overflow-hidden rounded-[4px] bg-[#050506] ring-1 ring-black">
        <ProjectVisual project={project} grayscale={false} />
        {/* glass glare */}
        <span
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(115deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 28%, rgba(255,255,255,0) 42%)',
          }}
        />
      </div>

      {/* Chin */}
      <div className="flex h-[clamp(14px,2.6vw,26px)] items-center justify-center">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] opacity-60 shadow-[0_0_8px_var(--accent)]" />
      </div>
    </div>

    {/* Stand neck */}
    <div
      className="h-[clamp(18px,3.4vw,42px)] w-[16%] bg-gradient-to-b from-[#1a1a1c] to-[#2a2a2e]"
      style={{ clipPath: 'polygon(12% 0, 88% 0, 100% 100%, 0 100%)' }}
    />
    {/* Stand base */}
    <div className="h-[clamp(5px,0.8vw,9px)] w-[34%] rounded-t-md rounded-b-[3px] border-t border-[rgba(244,242,236,0.14)] bg-gradient-to-b from-[#2c2c30] to-[#141416] shadow-[0_12px_24px_rgba(0,0,0,0.6)]" />
  </div>
);

export default MonitorFrame;
