import { MapPin, Github, Linkedin, Code2, Rocket, Users } from "lucide-react";

const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "React Native",
  "WhatsApp API",
  "AI Integration",
];

const highlights = [
  {
    icon: Rocket,
    value: "10+",
    label: "Live Products Delivered",
  },
  {
    icon: Users,
    value: "10+",
    label: "Happy Clients",
  },
  {
    icon: Code2,
    value: "4+",
    label: "Years of Experience",
  },
];

const About = () => {
  return (
    <section id="about" className="py-12 lg:py-20 border-y border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <div className="flex justify-center lg:justify-start">
            <span className="inline-block px-5 py-2 bg-white border-2 border-gray-300 rounded-full text-sm font-medium text-gray-700 mb-6">
              About Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center lg:text-left">
            The team behind your next product
          </h2>
          <p className="text-base lg:text-lg text-gray-600 text-center lg:text-left max-w-2xl">
            One9 Tech is a software development studio led by{" "}
            <span className="text-orange-600 font-semibold">Pushpendra Patel</span>,
            building reliable digital products for businesses across India.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Profile */}
          <div className="relative mx-auto lg:mx-0 max-w-sm w-full">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-orange-100 to-amber-50 border-2 border-gray-200 shadow-xl">
              <img
                src="https://github.com/pushpendraCodes.png"
                alt="Pushpendra Patel — Founder of One9 Tech"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xl font-bold">Pushpendra Patel</p>
                <p className="text-sm text-white/80">Founder & Full-Stack Developer</p>
                <div className="flex items-center gap-1.5 mt-2 text-sm text-white/70">
                  <MapPin className="h-4 w-4" />
                  Rewa, Madhya Pradesh, India
                </div>
              </div>
            </div>
            <div className="absolute -z-10 inset-4 bg-orange-500/10 blur-3xl rounded-full" />
          </div>

          {/* Story */}
          <div>
            <p className="text-gray-600 leading-relaxed mb-4">
              I started One9 Tech with a simple goal: help businesses turn ideas into
              production-ready software — without the complexity, delays, or jargon
              that usually comes with it.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Over the past 4+ years, we've shipped web apps, mobile solutions, and
              custom platforms for clients in finance, e-commerce, food, and social
              sectors — from MVPs to full-scale products with WhatsApp automation
              and AI integrations.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you're a startup launching your first product or an established
              business going digital, we work closely with you from discovery to
              launch — and stay around when you need support.
            </p>

            {/* Highlight stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {highlights.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="text-center p-4 bg-white rounded-xl border-2 border-gray-200"
                >
                  <Icon className="h-5 w-5 text-orange-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{value}</p>
                  <p className="text-xs text-gray-500 mt-1">{label}</p>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="mb-8">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Tech we work with
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-amber-50 border border-amber-200 text-gray-700 text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://github.com/pushpendraCodes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/1pushpendrapatel/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
