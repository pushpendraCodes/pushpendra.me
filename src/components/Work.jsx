import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Globe } from 'lucide-react';
import { projects, projectDomain } from '../lib/projects';
import ProjectVisual from './ProjectVisual';

/* Card is a div (not <a>) so the live-site link inside can be a real anchor. */
const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const domain = projectDomain(project.link);

  return (
    <div
      role="link"
      tabIndex={0}
      data-cursor="VIEW"
      onClick={() => navigate(`/work/${project.slug}`)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') navigate(`/work/${project.slug}`);
      }}
      className="group cursor-pointer bg-[#080808] p-6 transition-colors duration-300 hover:bg-[#101010] md:p-10"
    >
      {/* Meta row */}
      <div className="flex items-center justify-between">
        <span className="font-mono-label text-[#6B6A63]">{project.number}</span>
        <span className="font-mono-label inline-flex items-center gap-2 text-[var(--accent)]">
          <span className="pulse-dot" />
          {project.status} · {project.year}
        </span>
      </div>

      {/* Image — full screenshot, never cropped */}
      <div className="mt-6 overflow-hidden border border-[rgba(244,242,236,0.08)]">
        <ProjectVisual project={project} />
      </div>

      {/* Body */}
      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono-label text-[#6B6A63]">{project.category}</p>
          <h3 className="font-display mt-2 text-2xl text-[#F4F2EC] md:text-3xl">
            {project.title}
          </h3>
        </div>
        <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(244,242,236,0.2)] text-[#8A8A8A] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <p className="mt-3 max-w-[56ch] font-sans text-sm leading-relaxed text-[#8A8A8A]">
        {project.description}
      </p>

      <p className="font-mono-label mt-5 text-[#6B6A63]">
        {project.technologies.join(' · ')}
      </p>

      {/* Live site link */}
      {domain && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="font-mono-label mt-4 inline-flex items-center gap-2 border-b border-[rgba(244,242,236,0.2)] pb-0.5 text-[#8A8A8A] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          <Globe className="h-3 w-3" />
          {domain.toUpperCase()}
          <ArrowUpRight className="h-3 w-3" />
        </a>
      )}
    </div>
  );
};

const Work = () => (
  <section id="works" className="bg-[#080808] py-24 md:py-32">
    <div className="mx-auto max-w-[1400px] px-5 md:px-10">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="font-mono-label flex items-center gap-2.5 text-[var(--accent)]">
            <span className="pulse-dot" />
            07 — SELECTED WORK
          </span>

          <h2 className="font-display mt-8 text-5xl text-[#F4F2EC] md:text-7xl">
            Case studies.
          </h2>
          <p className="mt-6 max-w-[52ch] font-sans text-base leading-relaxed text-[#8A8A8A]">
            Production systems shipped for real businesses — every one of them live
            and earning today.
          </p>
        </div>
        <Link
          to="/work"
          className="group inline-flex items-center gap-2 font-mono-label text-[#F4F2EC] transition-colors hover:text-[var(--accent)]"
        >
          View all work
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-px bg-[rgba(244,242,236,0.08)] md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}

        {/* Filler CTA cell to keep the grid even */}
        <div className="flex flex-col items-start justify-center gap-5 bg-[#080808] p-6 md:p-10">
          <span className="font-mono-label text-[#6B6A63]">NEXT — YOUR PROJECT</span>
          <h3 className="font-display text-3xl text-[#F4F2EC] md:text-4xl">
            This slot is <span className="text-[#6B6A63]">reserved.</span>
          </h3>
          <p className="max-w-[40ch] font-sans text-sm leading-relaxed text-[#8A8A8A]">
            Have a website, app, or software product in mind? The next case
            study on this page could be yours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-mono-label text-[var(--accent)]"
          >
            Start a Project <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Work;
