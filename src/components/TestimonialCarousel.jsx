import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const testimonials = [
  {
    company: 'Bagherwal Samaj Trust',
    logo: 'https://res.cloudinary.com/dbj8skjba/image/upload/v1761631407/file_tmvx2y.jpg',
    text: 'Bagherwal Samaj Trust is highly satisfied with the services provided. Pushpendra was professional, responsive, and delivered quality work beyond expectations. Highly recommended.',
    author: 'Ninad NandGaonakar',
    position: 'President',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ninad',
  },
  {
    company: 'Icchhapurti',
    logo: 'https://icchhapurti.com/logo-black.png',
    text: 'The Icchhapurti e-commerce platform was delivered exactly as required. Professional team, smooth execution, and excellent ongoing technical support.',
    author: 'Puneet Jain',
    position: 'Owner',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Puneet',
  },
  {
    company: 'FarmHouse Kitchen',
    logo: 'https://farmhouse-kitchen-website-frontend.vercel.app/logo.jpg',
    text: 'A professional developer with a clear understanding of hospitality and consumer restaurant workflows. The final result and performance exceeded our expectations.',
    author: 'FarmHouse Kitchen Leadership',
    position: 'Owner & Managing Director',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=FarmHouse',
  },
  {
    company: 'Maa Anusaya Urban',
    logo: 'https://banking-frontend-webiste.vercel.app/assets/logo2-Bvw1hDGd.png',
    text: 'Maa Anusaya Urban appreciates the quality services and technical support provided. Structured approach, timely execution, and commitment to software excellence.',
    author: 'Maa Anusaya Urban',
    position: 'Executive Board',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaaAnusaya',
  },
];

const TestimonialCarousel = () => {
  const { isTheme1 } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 lg:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span
              className={`text-xs uppercase tracking-[0.25em] font-sans font-medium flex items-center gap-2 ${
                isTheme1 ? 'text-[#C5AA68]' : 'text-[#77736D]'
              }`}
            >
              <span className="text-[10px]">✦</span>
              CLIENT TESTIMONIALS
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2
              className={`font-serif text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] ${
                isTheme1 ? 'text-[#E9E1CC]' : 'text-[#262522]'
              }`}
            >
              {isTheme1 ? (
                <>
                  KIND WORDS <br />
                  <span className=" font-normal text-[#C5AA68]">FROM CLIENTS.</span>
                </>
              ) : (
                <>
                  FEEDBACK<span className="text-[#8B8175]">.</span>
                </>
              )}
            </h2>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all ${
                  isTheme1
                    ? 'border-[#C5AA68]/30 text-[#C5AA68] hover:bg-[#10332A] hover:border-[#C5AA68]'
                    : 'border-[#D8D2C9] text-[#262522] hover:bg-white'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Testimonial"
                className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all ${
                  isTheme1
                    ? 'border-[#C5AA68]/30 text-[#C5AA68] hover:bg-[#10332A] hover:border-[#C5AA68]'
                    : 'border-[#D8D2C9] text-[#262522] hover:bg-white'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={item.company}
              className={`p-8 sm:p-10 rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                isTheme1
                  ? 'bg-[#09251F]/90 border border-[#C5AA68]/20 hover:border-[#C5AA68]/40 shadow-lg'
                  : 'bg-white border border-[#D8D2C9] hover:border-[#8B8175] shadow-sm'
              }`}
            >
              <div>
                {/* Quotation Mark & Company Logo */}
                <div className="flex items-center justify-between mb-8">
                  <span
                    className={`font-serif text-5xl leading-none select-none ${
                      isTheme1 ? 'text-[#C5AA68]' : 'text-[#8B8175]'
                    }`}
                  >
                    “
                  </span>

                  <div className="flex items-center gap-2.5">
                    <img
                      src={item.logo}
                      alt={item.company}
                      className="w-9 h-9 rounded-full object-cover border border-inherit"
                    />
                    <span
                      className={`text-xs font-sans uppercase tracking-widest font-semibold ${
                        isTheme1 ? 'text-[#E9E1CC]' : 'text-[#262522]'
                      }`}
                    >
                      {item.company}
                    </span>
                  </div>
                </div>

                {/* Quote Body */}
                <p
                  className={`font-serif text-lg sm:text-xl leading-relaxed italic mb-8 ${
                    isTheme1 ? 'text-[#E9E1CC]' : 'text-[#262522]'
                  }`}
                >
                  "{item.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-inherit flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-11 h-11 rounded-full bg-gray-800"
                />
                <div>
                  <h4
                    className={`text-sm font-sans font-semibold tracking-wide ${
                      isTheme1 ? 'text-[#E9E1CC]' : 'text-[#262522]'
                    }`}
                  >
                    {item.author}
                  </h4>
                  <p
                    className={`text-xs font-sans ${
                      isTheme1 ? 'text-[#AFAF9D]' : 'text-[#77736D]'
                    }`}
                  >
                    {item.position} · {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialCarousel;