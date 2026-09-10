import { Globe, Smartphone, Code, Palette, TestTube, Wrench, ShoppingCart, Plug, Lightbulb } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const ServicesSection = () => {
  const { isTheme1 } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const services = [
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Web Development",
      badge: "Web",
      description: "Custom websites and web apps for businesses in Rewa and Madhya Pradesh.",
      features: [
        "Custom Website Development",
        "Web Application Development",
        "Progressive Web Apps (PWA)",
        "SaaS Product Development",
        "Admin Panels & Dashboards",
        "API Development & Integration"
      ],
      link: "Explore Web →",
      technologies: ["HTML", "CSS", "JS", "REACT JS", "NEXT JS", "NODE JS"]
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Mobile App Development",
      badge: "Mobile",
      description: "iOS, Android, and React Native apps built for local businesses and startups.",
      features: [
        "Android App Development",
        "iOS App Development",
        "Cross-Platform Apps (React Native / Flutter)",
        "Enterprise Mobile Applications",
        "App Maintenance & Support"
      ],
      link: "Build Apps →",
      technologies: ["React Native", "FLUTTER"]
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "Custom Software Development",
      badge: "Software",
      description: "Custom software, billing, ERP/CRM, and automation for businesses in Rewa.",
      features: [
        "Business Automation Software",
        "ERP / CRM Development",
        "Inventory & Billing Systems",
        "Custom Workflow Solutions",
        "Desktop Applications"
      ],
      link: "Get Custom →",
      technologies: ["HTML", "CSS", "JS", "REACT JS", "NEXT JS", "NODE JS", "MONGO DB"]
    },
    {
      icon: <Palette className="h-5 w-5" />,
      title: "UI/UX & Design Services",
      badge: "Design",
      description: "User-centered designs that create exceptional digital experiences.",
      features: [
        "UI/UX Research & Strategy",
        "Wireframing & Prototyping (Figma)",
        "Web & Mobile App Design",
        "Design Systems & Branding",
        "Landing Page Design",
        "Accessibility-Friendly Design"
      ],
      link: "See Designs →",
      technologies: ["FIGMA"]
    },
    {
      icon: <TestTube className="h-5 w-5" />,
      title: "Testing & Quality Assurance",
      badge: "QA",
      description: "Comprehensive testing to ensure flawless, high-performing applications.",
      features: [
        "Manual Testing",
        "Automated Testing",
        "Performance & Load Testing",
        "Security Testing",
        "Bug Fixing & Optimization"
      ],
      link: "Test Quality →"
    },
    {
      icon: <Wrench className="h-5 w-5" />,
      title: "Maintenance & Support",
      badge: "Support",
      description: "Ongoing maintenance and technical support to keep your systems running smoothly.",
      features: [
        "Application Maintenance",
        "Feature Enhancements",
        "Bug Fixing",
        "Performance Monitoring",
        "Technical Support",
        "Version Upgrades"
      ],
      link: "Get Support →"
    },
    {
      icon: <ShoppingCart className="h-5 w-5" />,
      title: "E-Commerce Solutions",
      badge: "E-commerce",
      description: "Complete e-commerce platforms with seamless payment and inventory management.",
      features: [
        "Custom E-Commerce Development",
        "Payment Gateway Integration",
        "Order & Inventory Management",
        "Subscription Systems",
        "Marketplace Platforms"
      ],
      link: "Start Selling →",
      technologies: ["HTML", "CSS", "JS", "REACT JS", "NEXT JS", "NODE JS"]
    },
    {
      icon: <Plug className="h-5 w-5" />,
      title: "Integration & API Services",
      badge: "Integration",
      description: "Seamlessly connect your systems with powerful API integrations.",
      features: [
        "Third-Party API Integration",
        "Payment APIs (Razorpay, Stripe, PayPal)",
        "SMS / Email / WhatsApp Integration",
        "CRM & ERP Integrations",
        "Data Migration"
      ],
      link: "Integrate Now →"
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Business & Digital Solutions",
      badge: "Consulting",
      description: "Strategic consulting and digital transformation for modern businesses.",
      features: [
        "Digital Transformation Consulting",
        "Software Architecture Consulting",
        "Startup MVP Development",
        "Product Scaling & Optimization",
        "Technical Documentation"
      ],
      link: "Transform Now →"
    }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile, services.length]);

  const row1 = services.slice(0, 4);
  const row2 = services.slice(4, 7);
  const row3 = services.slice(7, 9);

  const ServiceCard = ({ service, isLastInRow, isLastRow }) => (
    <div
      className={`p-8 transition-all duration-200 group ${
        !isLastInRow ? "border-r-2" : ""
      } ${!isLastRow ? "border-b-2" : ""} ${
        isTheme1
          ? "border-[#C5AA68]/20 hover:bg-[#10332A]/40"
          : "border-[#D8D2C9] hover:bg-[#F4F1EC]/80"
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 ${
            isTheme1
              ? "bg-[#C5AA68] text-[#071D18]"
              : "bg-[#262522] text-[#F4F1EC]"
          }`}
        >
          {service.icon}
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            isTheme1
              ? "bg-[#C5AA68]/15 text-[#C5AA68]"
              : "bg-[#EAE5DE] text-[#585148]"
          }`}
        >
          {service.badge}
        </span>
      </div>

      <h3
        className={`text-xl font-bold mb-3 ${
          isTheme1 ? "text-[#E9E1CC]" : "text-[#262522]"
        }`}
      >
        {service.title}
      </h3>

      <p
        className={`text-sm mb-4 leading-relaxed ${
          isTheme1 ? "text-[#AFAF9D]" : "text-[#77736D]"
        }`}
      >
        {service.description}
      </p>

      <div
        className={`mb-4 pb-4 border-b ${
          isTheme1 ? "border-[#C5AA68]/15" : "border-[#D8D2C9]"
        }`}
      >
        <p
          className={`text-xs font-semibold mb-2 uppercase tracking-wide ${
            isTheme1 ? "text-[#C5AA68]" : "text-[#8B8175]"
          }`}
        >
          Services Include
        </p>
        <ul className="space-y-1.5">
          {service.features.slice(0, 4).map((feature, idx) => (
            <li
              key={idx}
              className={`text-xs flex items-start ${
                isTheme1 ? "text-[#E9E1CC]/80" : "text-[#262522]/80"
              }`}
            >
              <span
                className={`mr-2 mt-0.5 ${
                  isTheme1 ? "text-[#C5AA68]" : "text-[#8B8175]"
                }`}
              >
                •
              </span>
              <span>{feature}</span>
            </li>
          ))}
          {service.features.length > 4 && (
            <li
              className={`text-xs italic ${
                isTheme1 ? "text-[#AFAF9D]" : "text-[#77736D]"
              }`}
            >
              +{service.features.length - 4} more...
            </li>
          )}
        </ul>
      </div>

      <div className="flex gap-2 flex-wrap">
        {service?.technologies?.map((item, idx) => (
          <p
            key={idx}
            className={`text-xs border p-1 font-medium ${
              isTheme1
                ? "bg-[#10332A] border-[#C5AA68]/20 text-[#E9E1CC]"
                : "bg-[#F4F1EC] border-[#D8D2C9] text-[#262522]"
            }`}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="services"
      className={`py-20 transition-colors duration-300 ${
        isTheme1 ? "bg-[#071D18]" : "bg-[#F4F1EC]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <div className="flex justify-center">
            <span
              className={`inline-block px-5 py-2 border-2 rounded-full text-sm font-medium mb-8 ${
                isTheme1
                  ? "bg-[#10332A] border-[#C5AA68]/30 text-[#E9E1CC]"
                  : "bg-white border-[#D8D2C9] text-[#262522]"
              }`}
            >
              Our Services
            </span>
          </div>

          <h2
            className={`text-3xl font-bold mb-4 ${
              isTheme1 ? "text-[#E9E1CC]" : "text-[#262522]"
            }`}
          >
            Website, App &amp; Software Services in Rewa
          </h2>
          <p
            className={`text-lg max-w-3xl ${
              isTheme1 ? "text-[#AFAF9D]" : "text-[#77736D]"
            }`}
          >
            One9 Tech builds websites, mobile apps, and custom software for businesses
            in Rewa, Madhya Pradesh — from first sketch to live product and support.
          </p>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div
                    className={`border-2 rounded-lg ${
                      isTheme1
                        ? "border-[#C5AA68]/25 bg-[#09251F]"
                        : "border-[#D8D2C9] bg-white"
                    }`}
                  >
                    <ServiceCard service={service} isLastInRow={true} isLastRow={true} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? isTheme1
                      ? "w-8 bg-[#C5AA68]"
                      : "w-8 bg-[#262522]"
                    : isTheme1
                      ? "w-2 bg-[#C5AA68]/30"
                      : "w-2 bg-[#D8D2C9]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div
          className={`hidden md:block border-2 rounded-lg overflow-hidden ${
            isTheme1
              ? "border-[#C5AA68]/25 bg-[#09251F]"
              : "border-[#D8D2C9] bg-white"
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {row1.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                isLastInRow={index === row1.length - 1}
                isLastRow={false}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3">
            {row2.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                isLastInRow={index === row2.length - 1}
                isLastRow={false}
              />
            ))}
          </div>

          <div className="grid grid-cols-2">
            {row3.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                isLastInRow={index === row3.length - 1}
                isLastRow={true}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
