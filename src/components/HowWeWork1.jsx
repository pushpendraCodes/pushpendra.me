import React from 'react';
import { Compass, FileCode2, Palette, Code, Rocket, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const processSteps = [
  {
    number: '01',
    title: 'DISCOVER',
    subtitle: 'Scope & Business Objectives',
    description: 'We unpack your product goals, target demographic, timeline, and functional requirements to establish a razor-sharp specification.',
    icon: Compass,
  },
  {
    number: '02',
    title: 'PLAN',
    subtitle: 'System Architecture & Roadmapping',
    description: 'Formulating database schemas, selecting the optimal tech stack, designing API contracts, and outlining milestones for delivery.',
    icon: FileCode2,
  },
  {
    number: '03',
    title: 'DESIGN',
    subtitle: 'High-Fidelity UI/UX & Flow',
    description: 'Crafting modern, accessible, and intuitive interfaces with responsive typography, micro-interactions, and conversion-oriented layouts.',
    icon: Palette,
  },
  {
    number: '04',
    title: 'BUILD',
    subtitle: 'Clean Full-Stack Engineering',
    description: 'Writing maintainable code across React/Next.js frontend, Node.js backend, robust database pipelines, and third-party API integrations.',
    icon: Code,
  },
  {
    number: '05',
    title: 'LAUNCH',
    subtitle: 'Quality Assurance & Deployment',
    description: 'End-to-end testing, performance optimization, CI/CD deployment on cloud servers (AWS/Vercel), and dedicated post-launch support.',
    icon: Rocket,
  },
];

const whyWorkWithMe = [
  {
    title: 'FULL-STACK DELIVERY',
    description: 'Complete accountability from responsive frontend to backend logic, databases, security, and cloud deployment.',
  },
  {
    title: 'BUSINESS FOCUSED',
    description: 'Technology selected and constructed directly around quantifiable business objectives, user retention, and ROI.',
  },
  {
    title: 'CLEAN & SCALABLE',
    description: 'Production-tested modular codebases built to scale gracefully rather than fragile quick fixes.',
  },
  {
    title: 'CLEAR COMMUNICATION',
    description: 'Consistent sprint updates, live staging previews, and transparent collaboration from day one to launch.',
  },
];

const HowWeWork1 = () => {
  const { isTheme1 } = useTheme();

  return (
    <section id="process" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= PROCESS HEADER ================= */}
        <div className="mb-14 lg:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span
              className={`text-xs uppercase tracking-[0.25em] font-sans font-medium flex items-center gap-2 ${
                isTheme1 ? 'text-[#C5AA68]' : 'text-[#77736D]'
              }`}
            >
              <span className="text-[10px]">✦</span>
              DEVELOPMENT METHODOLOGY
            </span>
          </div>

          <h2
            className={`font-serif text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] ${
              isTheme1 ? 'text-[#E9E1CC]' : 'text-[#262522]'
            }`}
          >
            {isTheme1 ? (
              <>
                HOW I <br />
                <span className=" font-normal text-[#C5AA68]">BRING IDEAS TO LIFE.</span>
              </>
            ) : (
              <>
                HOW I WORK<span className="text-[#8B8175]">.</span>
              </>
            )}
          </h2>
        </div>

        {/* ================= PROCESS STEPS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`p-6 sm:p-7 rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  isTheme1
                    ? 'bg-[#09251F]/90 border border-[#C5AA68]/20 hover:border-[#C5AA68] shadow-md hover:-translate-y-1'
                    : 'bg-white border border-[#D8D2C9] hover:border-[#8B8175] shadow-sm hover:-translate-y-1'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C5AA68]">
                      {step.number}
                    </span>
                    <div className={`p-2 rounded-full border ${isTheme1 ? 'border-[#C5AA68]/20 text-[#C5AA68]' : 'border-[#D8D2C9] text-[#262522]'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3
                    className={`font-serif text-xl font-bold mb-1 ${
                      isTheme1 ? 'text-[#E9E1CC]' : 'text-[#262522]'
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p className="text-[10px] font-sans uppercase tracking-widest text-[#C5AA68] mb-4">
                    {step.subtitle}
                  </p>

                  <p
                    className={`font-sans text-xs leading-relaxed ${
                      isTheme1 ? 'text-[#AFAF9D]' : 'text-[#77736D]'
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= WHY WORK WITH ME ================= */}
        <div
          className={`rounded-3xl p-8 sm:p-12 transition-all duration-300 ${
            isTheme1
              ? 'bg-[#10332A]/70 border border-[#C5AA68]/25 shadow-xl'
              : 'bg-[#E9E4DD]/60 border border-[#D8D2C9] shadow-sm'
          }`}
        >
          <div className="max-w-xl mb-8">
            <span
              className={`text-xs uppercase tracking-[0.25em] font-sans font-semibold block mb-2 ${
                isTheme1 ? 'text-[#C5AA68]' : 'text-[#8B8175]'
              }`}
            >
              VALUE PROPOSITION
            </span>
            <h3
              className={`font-serif text-2xl sm:text-4xl font-semibold tracking-tight ${
                isTheme1 ? 'text-[#E9E1CC]' : 'text-[#262522]'
              }`}
            >
              Why Work With Me
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyWorkWithMe.map((item, idx) => (
              <div key={item.title} className="flex flex-col text-left">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-xs text-[#C5AA68]">0{idx + 1}.</span>
                  <h4
                    className={`font-sans text-xs uppercase tracking-wider font-bold ${
                      isTheme1 ? 'text-[#E9E1CC]' : 'text-[#262522]'
                    }`}
                  >
                    {item.title}
                  </h4>
                </div>
                <p
                  className={`font-sans text-xs sm:text-sm leading-relaxed ${
                    isTheme1 ? 'text-[#AFAF9D]' : 'text-[#77736D]'
                  }`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowWeWork1;