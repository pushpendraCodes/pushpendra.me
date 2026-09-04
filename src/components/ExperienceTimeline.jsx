import React from 'react';
import { useTheme } from '../context/ThemeContext';

const experiences = [
  {
    year: '2026',
    role: 'Lead Full-Stack Developer & Founder',
    company: 'One9 Tech',
    description: 'Directing bespoke digital engineering for startups and expanding businesses. Architecting SaaS platforms, high-throughput e-commerce stores, and AI-assisted workflows.',
  },
  {
    year: '2025',
    role: 'Full Stack & SaaS Engineer',
    company: 'Client & SaaS Projects (Review QR, Bagherwal Samaj)',
    description: 'Developed and launched AI review management software, automated WhatsApp notification platforms, and real-time social platforms using Next.js, Node.js, and Agora SDK.',
  },
  {
    year: '2024',
    role: 'Full Stack Web Developer',
    company: 'Commercial Client Solutions',
    description: 'Delivered production web applications, food ordering systems (FarmHouse Kitchen), and educational institutional portals with custom admin management interfaces.',
  },
  {
    year: '2023',
    role: 'MERN Stack Developer',
    company: 'Freelance & Startup Collaborations',
    description: 'Constructed custom RESTful APIs, responsive React user interfaces, database schemas in MongoDB, and third-party payment integrations with Razorpay.',
  },
  {
    year: '2022',
    role: 'Frontend & Web Development Initiation',
    company: 'Independent Foundations',
    description: 'Immersed into modern JavaScript standards, component architecture, and UI/UX design principles to engineer production-ready digital interfaces.',
  },
];

const ExperienceTimeline = () => {
  const { isTheme1 } = useTheme();

  return (
    <section id="experience" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14 lg:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span
              className={`text-xs uppercase tracking-[0.25em] font-sans font-medium flex items-center gap-2 ${
                isTheme1 ? 'text-[#C5AA68]' : 'text-[#77736D]'
              }`}
            >
              <span className="text-[10px]">✦</span>
              TRACK RECORD
            </span>
          </div>

          <h2
            className={`font-serif text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] ${
              isTheme1 ? 'text-[#E9E1CC]' : 'text-[#262522]'
            }`}
          >
            {isTheme1 ? (
              <>
                JOURNEY &amp; <br />
                <span className="italic font-normal text-[#C5AA68]">EXPERIENCE.</span>
              </>
            ) : (
              <>
                EXPERIENCE<span className="text-[#8B8175]">.</span>
              </>
            )}
          </h2>
        </div>

        {/* Vertical Editorial Timeline */}
        <div className="relative border-l-2 ml-4 sm:ml-8 transition-colors duration-300"
          style={{
            borderColor: isTheme1 ? 'rgba(197, 170, 104, 0.25)' : '#D8D2C9'
          }}
        >
          {experiences.map((item, index) => (
            <div key={item.year + item.role} className="relative pl-8 sm:pl-12 pb-14 last:pb-0 group">
              
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  isTheme1
                    ? 'bg-[#071D18] border-[#C5AA68] group-hover:bg-[#C5AA68] group-hover:scale-125'
                    : 'bg-[#F4F1EC] border-[#262522] group-hover:bg-[#262522] group-hover:scale-125'
                }`}
              />

              {/* Year & Role Row */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 mb-2">
                <div className="flex items-center gap-3">
                  <span
                    className={`font-serif text-2xl sm:text-3xl font-bold tracking-tight ${
                      isTheme1 ? 'text-[#C5AA68]' : 'text-[#262522]'
                    }`}
                  >
                    {item.year}
                  </span>
                  <span className={`text-xs uppercase tracking-widest font-sans ${isTheme1 ? 'text-[#AFAF9D]' : 'text-[#77736D]'}`}>
                    — {item.company}
                  </span>
                </div>

                <span
                  className={`text-xs font-sans uppercase tracking-wider font-semibold ${
                    isTheme1 ? 'text-[#E9E1CC]' : 'text-[#262522]'
                  }`}
                >
                  {item.role}
                </span>
              </div>

              {/* Description */}
              <p
                className={`font-sans text-sm sm:text-base leading-relaxed max-w-3xl ${
                  isTheme1 ? 'text-[#AFAF9D]' : 'text-[#77736D]'
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceTimeline;
