import React from 'react';

/* Shared project image block.
   - Shows the full screenshot uncropped (object-contain, letterboxed on dark).
   - Falls back to a styled "in development" panel when no image exists yet. */
const ProjectVisual = ({ project, className = '', grayscale = true }) => {
  if (!project.image) {
    return (
      <div
        className={`relative flex aspect-[16/10] w-full flex-col items-center justify-center gap-4 overflow-hidden bg-[#0B0B0B] ${className}`}
      >
        {/* blueprint grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(rgba(244,242,236,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(244,242,236,0.05) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <span className="font-mono-label inline-flex items-center gap-2 text-[var(--accent)]">
          <span className="pulse-dot" />
          IN DEVELOPMENT
        </span>
        <span className="font-display px-4 text-center text-3xl text-[#F4F2EC] md:text-4xl">
          {project.title}
        </span>
        <span className="font-mono-label text-[#6B6A63]">{project.category}</span>
      </div>
    );
  }

  return (
    <div
      className={`flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-[#0B0B0B] ${className}`}
    >
      <img
        src={project.image}
        alt={`${project.title} — built by One9 Tech`}
        loading="lazy"
        className={`max-h-full max-w-full object-contain transition-all duration-500 ${
          grayscale ? 'grayscale group-hover:grayscale-0' : ''
        }`}
      />
    </div>
  );
};

export default ProjectVisual;
