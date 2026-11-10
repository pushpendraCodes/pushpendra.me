import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, ArrowRight } from 'lucide-react';
import { getProject, getNextProject } from '../lib/projects';
import { WHATSAPP_URL } from '../lib/tokens';
import ProjectVisual from '../components/ProjectVisual';

const EASE = [0.22, 1, 0.36, 1];

const riseIn = {
  hidden: { opacity: 0, y: 48 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: EASE },
  }),
};

const inView = (delay = 0, y = 28) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: EASE },
});

const SectionHead = ({ label, title, muted }) => (
  <>
    <motion.span
      {...inView(0, 16)}
      className="font-mono-label flex items-center gap-2.5 text-[var(--accent)]"
    >
      <span className="pulse-dot" />
      {label}
    </motion.span>
    <motion.h2
      {...inView(0.05, 24)}
      className="font-display mt-6 max-w-[22ch] text-4xl text-[#F4F2EC] md:text-6xl"
    >
      {title}
      {muted && (
        <>
          {' '}
          <span className="normal-case italic text-[#6B6A63]">{muted}</span>
        </>
      )}
    </motion.h2>
  </>
);

const Chip = ({ children }) => (
  <span className="inline-flex items-center border border-[rgba(244,242,236,0.12)] bg-[rgba(244,242,236,0.03)] px-3 py-1.5 font-sans text-[13px] text-[#D9D6CE] transition-colors duration-300 hover:border-[var(--accent)] hover:text-[#F4F2EC]">
    {children}
  </span>
);

const CaseStudy = () => {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) return <Navigate to="/work" replace />;

  const next = getNextProject(slug);
  const allTech = project.techGroups
    ? [...new Set(project.techGroups.flatMap((g) => g.items))]
    : project.technologies;

  return (
    <main className="bg-[#080808] pt-28 md:pt-36">
      {/* ======== Header ======== */}
      <header className="mx-auto max-w-[1400px] px-5 md:px-10">
        <motion.div variants={riseIn} initial="hidden" animate="visible" custom={0}>
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 font-mono-label text-[#8A8A8A] transition-colors hover:text-[#F4F2EC]"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            All work
          </Link>
        </motion.div>

        <motion.span
          variants={riseIn}
          initial="hidden"
          animate="visible"
          custom={1}
          className="font-mono-label mt-10 flex items-center gap-2.5 text-[var(--accent)]"
        >
          <span className="pulse-dot" />
          CASE STUDY — {project.number} · {project.category}
        </motion.span>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            className="font-display mt-6 break-words text-[clamp(2.5rem,8.2vw,7rem)] leading-[0.95] text-[#F4F2EC]"
          >
            {project.title}
          </motion.h1>
        </div>

        <motion.p
          variants={riseIn}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-8 max-w-[60ch] font-sans text-base leading-relaxed text-[#9A9A96] md:text-lg"
        >
          {project.description}
        </motion.p>

        {/* ======== Technology ======== */}
        <motion.div
          variants={riseIn}
          initial="hidden"
          animate="visible"
          custom={4}
          className="mt-12 border-t border-[rgba(244,242,236,0.08)] pt-6"
        >
          <p className="font-mono-label text-[#6B6A63]">TECHNOLOGY</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {allTech.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </motion.div>
      </header>

      {/* ======== Hero visual — full image, never cropped ======== */}
      <div className="mx-auto mt-14 max-w-[1400px] px-5 md:mt-20 md:px-10">
        <motion.div
          {...inView(0, 40)}
          className="border border-[rgba(244,242,236,0.1)] bg-[#0B0B0B] p-2 md:p-3"
        >
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} — case study by One9 Tech`}
              className="h-auto w-full object-contain"
            />
          ) : (
            <ProjectVisual project={project} grayscale={false} />
          )}
        </motion.div>
      </div>

      {/* ======== Screens gallery ======== */}
      {project.images && project.images.length > 1 && (
        <div className="mx-auto mt-6 grid max-w-[1400px] grid-cols-1 gap-6 px-5 md:grid-cols-2 md:px-10">
          {project.images.slice(1).map((src, i) => (
            <motion.div
              key={src}
              {...inView((i % 2) * 0.1, 32)}
              className={`border border-[rgba(244,242,236,0.1)] bg-[#0B0B0B] p-2 md:p-3 ${
                project.images.length % 2 === 0 && i === project.images.length - 2
                  ? 'md:col-span-2'
                  : ''
              }`}
            >
              <img
                src={src}
                alt={`${project.title} — screen ${i + 2}`}
                loading="lazy"
                className="h-auto w-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      )}

      {/* ======== Overview ======== */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <motion.div {...inView()} className="md:col-span-4">
            <span className="font-mono-label flex items-center gap-2.5 text-[var(--accent)]">
              <span className="pulse-dot" />
              THE BRIEF
            </span>
            <h2 className="font-display mt-6 text-4xl text-[#F4F2EC] md:text-5xl">
              Overview<span className="text-[#6B6A63]">.</span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6 md:col-span-8">
            {project.overview.map((para, i) => (
              <motion.p
                key={i}
                {...inView(i * 0.1, 24)}
                className="max-w-[64ch] font-sans text-base leading-[1.75] text-[#9A9A96] md:text-lg"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* ======== The build — apps that make up the system ======== */}
      {project.parts?.length > 0 && (
        <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-10 md:pb-28">
          <SectionHead label="THE BUILD" title={`${project.parts.length} apps,`} muted="one system." />
          <div
            className={`mt-14 grid grid-cols-1 gap-px border border-[rgba(244,242,236,0.08)] bg-[rgba(244,242,236,0.08)] sm:grid-cols-2 ${
              project.parts.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
            }`}
          >
            {project.parts.map((part, i) => (
              <motion.div
                key={part.name}
                {...inView(i * 0.08, 32)}
                className="group flex flex-col bg-[#080808] p-6 transition-colors duration-300 hover:bg-[#0E0E0E] md:p-8"
              >
                <span className="font-mono-label text-[#6B6A63]">
                  APP {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display mt-6 text-2xl text-[#F4F2EC]">{part.name}</h3>
                <p className="font-mono-label mt-3 text-[var(--accent)]">{part.stack}</p>
                <p className="mt-5 font-sans text-sm leading-relaxed text-[#8A8A8A] md:text-[15px]">
                  {part.summary}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ======== The System — module by module ======== */}
      <section className="border-y border-[rgba(244,242,236,0.08)] bg-[#0B0B0B]">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
          <SectionHead label="THE SYSTEM" title="Every module," muted="explained." />

          <div className="mt-14 grid grid-cols-1 gap-px border border-[rgba(244,242,236,0.08)] bg-[rgba(244,242,236,0.08)] md:grid-cols-2">
            {project.systems.map((mod, i) => (
              <motion.div
                key={mod.name}
                {...inView((i % 2) * 0.08, 32)}
                className="group bg-[#0B0B0B] p-6 transition-colors duration-300 hover:bg-[#101010] md:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono-label text-[#6B6A63]">
                    MODULE {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[rgba(244,242,236,0.2)] transition-colors duration-300 group-hover:bg-[var(--accent)]" />
                </div>
                <h3 className="font-display mt-5 text-2xl text-[#F4F2EC] md:text-3xl">
                  {mod.name}
                </h3>
                <p className="mt-4 max-w-[52ch] font-sans text-sm leading-relaxed text-[#9A9A96] md:text-base">
                  {mod.detail}
                </p>
                {mod.points?.length > 0 && (
                  <ul className="mt-6 flex flex-col gap-2.5 border-t border-[rgba(244,242,236,0.06)] pt-6">
                    {mod.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-3 font-sans text-sm leading-relaxed text-[#C9C6BE]"
                      >
                        <span className="mt-[9px] h-px w-3 shrink-0 bg-[var(--accent)]" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
            {project.systems.length % 2 !== 0 && (
              <div className="hidden bg-[#0B0B0B] md:block" />
            )}
          </div>
        </div>
      </section>

      {/* ======== Roles + Integrations ======== */}
      {(project.roles?.length > 0 || project.integrations?.length > 0) && (
        <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
            {project.roles?.length > 0 && (
              <div className={project.integrations?.length ? 'lg:col-span-5' : 'lg:col-span-12'}>
                <SectionHead label="WHO USES IT" title="Roles" muted="& access." />
                <ul className="mt-12 flex flex-col">
                  {project.roles.map((role, i) => (
                    <motion.li
                      key={role}
                      {...inView(i * 0.05, 16)}
                      className="flex items-baseline gap-5 border-b border-[rgba(244,242,236,0.08)] py-4 first:border-t"
                    >
                      <span className="font-mono-label shrink-0 text-[#6B6A63]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-sans text-[15px] text-[#E4E1D9]">{role}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {project.integrations?.length > 0 && (
              <div className={project.roles?.length ? 'lg:col-span-7' : 'lg:col-span-12'}>
                <SectionHead label="INTEGRATIONS" title="Connected" muted="services." />
                <div className="mt-12 grid grid-cols-1 gap-px border border-[rgba(244,242,236,0.08)] bg-[rgba(244,242,236,0.08)] sm:grid-cols-2">
                  {project.integrations.map((item, i) => (
                    <motion.div
                      key={item.name}
                      {...inView((i % 2) * 0.06, 16)}
                      className="bg-[#080808] p-5 transition-colors duration-300 hover:bg-[#0E0E0E]"
                    >
                      <p className="font-sans text-[15px] font-medium text-[#F4F2EC]">{item.name}</p>
                      <p className="mt-1.5 font-sans text-sm leading-relaxed text-[#8A8A8A]">
                        {item.use}
                      </p>
                    </motion.div>
                  ))}
                  {project.integrations.length % 2 !== 0 && (
                    <div className="hidden bg-[#080808] sm:block" />
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ======== Engineering ======== */}
      {project.engineering?.length > 0 && (
        <section className="border-t border-[rgba(244,242,236,0.08)] bg-[#0B0B0B]">
          <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
            <SectionHead label="ENGINEERING" title="Under" muted="the hood." />
            <div className="mt-12 flex flex-col">
              {project.engineering.map((item, i) => (
                <motion.div
                  key={item.title}
                  {...inView(i * 0.06, 20)}
                  className="group grid grid-cols-1 gap-3 border-b border-[rgba(244,242,236,0.08)] py-8 transition-colors first:border-t hover:bg-[#101010] md:grid-cols-12 md:gap-10 md:px-4"
                >
                  <span className="font-mono-label text-[#6B6A63] md:col-span-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-xl text-[#F4F2EC] md:col-span-4 md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-[#9A9A96] md:col-span-7 md:text-base">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ======== Technology stack + CTA ======== */}
      <section className="border-t border-[rgba(244,242,236,0.08)] bg-[#080808]">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
          <SectionHead label="TECHNOLOGY" title="The" muted="stack." />

          {project.techGroups?.length > 0 && (
            <div className="mt-12 flex flex-col">
              {project.techGroups.map((group, i) => (
                <motion.div
                  key={group.label}
                  {...inView(i * 0.06, 16)}
                  className="grid grid-cols-1 gap-4 border-b border-[rgba(244,242,236,0.08)] py-6 first:border-t md:grid-cols-12 md:items-center md:gap-10"
                >
                  <p className="font-mono-label text-[#6B6A63] md:col-span-3">
                    {group.label.toUpperCase()}
                  </p>
                  <div className="flex flex-wrap gap-2 md:col-span-9">
                    {group.items.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <div className="mt-14 flex flex-wrap items-center gap-6">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="VISIT"
                className="inline-flex items-center gap-2.5 bg-[var(--accent)] px-8 py-4 font-mono-label text-[#080808] transition-transform duration-200 hover:-translate-y-0.5"
              >
                {project.building ? 'Preview website' : 'Visit live site'}{' '}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-label text-[#8A8A8A] transition-colors hover:text-[#F4F2EC]"
            >
              Build something like this →
            </a>
          </div>
        </div>
      </section>

      {/* ======== Next project ======== */}
      <Link
        to={`/work/${next.slug}`}
        data-cursor="NEXT"
        className="group block border-t border-[rgba(244,242,236,0.08)] bg-[#080808]"
      >
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-5 py-20 md:px-10 md:py-28">
          <span className="font-mono-label text-[#6B6A63]">
            NEXT CASE STUDY — {next.number}
          </span>
          <div className="flex items-center justify-between gap-6">
            <h2 className="font-display text-4xl text-[#6B6A63] transition-colors duration-300 group-hover:text-[#F4F2EC] md:text-7xl">
              {next.title}
            </h2>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[rgba(244,242,236,0.2)] text-[#8A8A8A] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] md:h-16 md:w-16">
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </main>
  );
};

export default CaseStudy;
