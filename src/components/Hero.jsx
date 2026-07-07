import { ArrowRight } from "lucide-react";
import VideoPlayer from "./VideoPlayer";

const Hero = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2">

          {/* VIDEO PLAYER - Shows first on mobile, right side on desktop */}
          <div className="relative order-1 lg:order-2">
            <VideoPlayer />

            {/* Soft Accent Glow */}
            <div className="absolute inset-0 -z-10 bg-orange-500/10 blur-3xl rounded-full"></div>
          </div>

          {/* CONTENT - Shows second on mobile, left side on desktop */}
          <div className="text-left order-2 lg:order-1">
            <h1 className="mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              We Make Your Visual Dreams Come True
            </h1>

            <p className="mb-6 md:mb-8 text-base sm:text-lg leading-relaxed text-gray-600">
              We help fast-growing businesses build, automate, and scale powerful digital products.
              From custom applications to smart infrastructure, we turns complex ideas into
              simple, reliable solutions.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="tel:+918516064332">
                <button className="group inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-800 transition hover:bg-gray-100">
                  Let's Talk
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>
              </a>


              <a href="#works" className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
                View Our Work
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
