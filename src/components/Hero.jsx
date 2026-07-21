import { ArrowRight, CheckCircle2 } from "lucide-react";
import VideoPlayer from "./VideoPlayer";

const proofPoints = [
  "5+ live products in production",
  "Web, mobile & custom software",
  "Based in India · Working globally",
];

const Hero = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2">
          {/* VIDEO PLAYER */}
          <div className="relative order-1 lg:order-2">
            <VideoPlayer />
            <div className="absolute inset-0 -z-10 bg-orange-500/10 blur-3xl rounded-full" />
          </div>

          {/* CONTENT */}
          <div className="text-left order-2 lg:order-1">
            <span className="inline-block px-4 py-1.5 mb-4 bg-white border-2 border-gray-300 rounded-full text-sm font-medium text-gray-700">
              One9 Tech · Software Development
            </span>

            <h1 className="mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              We Build Web &amp; Mobile Apps That{" "}
              <span className="text-orange-600">Grow Your Business</span>
            </h1>

            <p className="mb-6 md:mb-8 text-base sm:text-lg leading-relaxed text-gray-600">
              We help startups and growing businesses design, build, and launch
              powerful digital products — from custom web apps and mobile solutions
              to AI-powered automation. Complex ideas, delivered simply.
            </p>

            {/* Proof points */}
            <ul className="mb-8 space-y-2.5">
              {proofPoints.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-orange-600 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://wa.me/918516064332?text=Hello%2C%20I%20have%20a%20project%20idea"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>

              <a
                href="#works"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-800 transition hover:bg-gray-100"
              >
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
