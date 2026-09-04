import React from 'react';
import { useTheme } from '../context/ThemeContext';

const techCategories = [
  {
    category: 'FRONTEND ARCHITECTURE',
    tools: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Redux Toolkit', 'HTML5 / Modern CSS', 'Framer Motion'],
  },
  {
    category: 'BACKEND & RUNTIMES',
    tools: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL', 'Authentication (JWT)', 'Microservices Architecture'],
  },
  {
    category: 'DATABASE & CACHING',
    tools: ['MongoDB (Mongoose)', 'PostgreSQL', 'Redis (Caching & Queues)', 'Database Indexing & Schema Design'],
  },
  {
    category: 'INFRASTRUCTURE & DEPLOYMENT',
    tools: ['AWS (EC2, S3)', 'Vercel', 'Render', 'Nginx', 'Docker (Basics)', 'Git / GitHub CI/CD'],
  },
  {
    category: 'INTEGRATIONS & THIRD-PARTY',
    tools: ['Razorpay / Stripe Payments', 'WhatsApp Business API', 'Agora Audio/Video SDK', 'Cloudinary Media', 'Firebase'],
  },
];

const TechStack = () => {
  const { isTheme1 } = useTheme();

  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 lg:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span
              className={`text-xs uppercase tracking-[0.25em] font-sans font-medium flex items-center gap-2 ${
                isTheme1 ? 'text-[#C5AA68]' : 'text-[#77736D]'
              }`}
            >
              <span className="text-[10px]">✦</span>
              ENGINEERING FOUNDATION
            </span>
          </div>

          <h2
            className={`font-serif text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] ${
              isTheme1 ? 'text-[#E9E1CC]' : 'text-[#262522]'
            }`}
          >
            {isTheme1 ? (
              <>
                TOOLS I <br />
                <span className=" font-normal text-[#C5AA68]">WORK WITH.</span>
              </>
            ) : (
              <>
                TOOLS I WORK WITH<span className="text-[#8B8175]">.</span>
              </>
            )}
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((group) => (
            <div
              key={group.category}
              className={`p-7 rounded-2xl transition-all duration-300 ${
                isTheme1
                  ? 'bg-[#09251F]/80 border border-[#C5AA68]/20 hover:border-[#C5AA68]/50 shadow-md'
                  : 'bg-white border border-[#D8D2C9] hover:border-[#8B8175] shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-inherit">
                <h3
                  className={`text-xs font-sans uppercase tracking-[0.2em] font-semibold ${
                    isTheme1 ? 'text-[#C5AA68]' : 'text-[#8B8175]'
                  }`}
                >
                  {group.category}
                </h3>
                <span className="text-[10px] font-mono text-[#AFAF9D]">
                  {group.tools.length} Technologies
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className={`text-xs font-sans px-3 py-1.5 rounded-lg transition-all duration-200 ${
                      isTheme1
                        ? 'bg-[#10332A]/70 text-[#E9E1CC] border border-[#C5AA68]/15 hover:border-[#C5AA68] hover:bg-[#10332A]'
                        : 'bg-[#F4F1EC] text-[#262522] border border-[#D8D2C9] hover:bg-[#E9E4DD]'
                    }`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
