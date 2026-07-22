import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const ClientProjects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        {
            title: "Shri Bagherwal Samaj Sahayata",
            status: "Live",
            description: "Shri Bagherwal Samaj Sahayata Trust",
            image: "./projectsThumbnails/thumbnail1.jpg",
            technologies: ["React", "Node.js", "MongoDB", "whatsapp API"],
            link: "https://bagherwaljaindp.com",
            category: "Social"
        },
        {
            title: "Icchhapurti",
            status: "Live",
            description: "Icchhapurti- A Manifestion Pen",
            image: "/projectsThumbnails/thumbnail2.jpg",
            technologies: ["React", "Node.js", "MongoDB"],
            link: "https://icchhapurti.com/",
            category: "E-Commerce"
        },
        {
            title: "Review QR",
            status: "Live",
            description: "Review QR- A QR Code based review platform",
            image: "/projectsThumbnails/thumbnail5.png",
            technologies: ["Next js", "tailwindcss", "Javascript", "Nodejs", "Ai"],
            link: "https://www.getreviewqr.com/",
            category: "Marketing"
        },
        {
            title: "FarmHouse Kitchen",
            status: "Live",
            description: " FarmHouse Kitchen - Secure Enjoy Your Delicious  Food",
            image: "/projectsThumbnails/thumbnail3.jpg",
            technologies: ["React", "Node.js", "MongoDB"],
            link: "https://farmhouse-kitchen-website.vercel.app/",
            category: "Food"
        },
        
        {
            title: "Optech Computer Institute",
            status: "Live",
            description: "Optech Computer Institute - A Computer Education  Institute",
            image: "/projectsThumbnails/thumbnail6.png",
            technologies: ["React"],
            link: "https://optech-website.vercel.app/",
            category: "Education"
        }
    ];

    const itemsPerView = 3;
    const maxIndex = Math.ceil(projects.length / itemsPerView) - 1;
    const mobileMaxIndex = projects.length - 1;

    // Auto-play slider on mobile
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => {
                // Check if we're on mobile (will update on every interval)
                const isMobile = window.innerWidth < 1024;
                const max = isMobile ? mobileMaxIndex : maxIndex;
                return prev < max ? prev + 1 : 0;
            });
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(timer);
    }, [maxIndex, mobileMaxIndex]);

    const handlePrev = () => {
        const isMobile = window.innerWidth < 1024;
        const max = isMobile ? mobileMaxIndex : maxIndex;
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : max));
    };

    const handleNext = () => {
        const isMobile = window.innerWidth < 1024;
        const max = isMobile ? mobileMaxIndex : maxIndex;
        setCurrentIndex((prev) => (prev < max ? prev + 1 : 0));
    };

    const visibleProjects = projects.slice(
        currentIndex * itemsPerView,
        (currentIndex + 1) * itemsPerView
    );

    return (
        <section id='works' className="py-12 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                {/* Header */}
                <div className="mb-12 lg:mb-24">
                    <div className="flex justify-center">
                        <span className="inline-block px-5 py-2 bg-white border-2 border-gray-300 rounded-full text-sm font-medium text-gray-700 mb-6 lg:mb-8">
                            Our Projects
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center lg:text-left">
                        Our Clients Projects
                    </h2>
                    <p className="text-base lg:text-lg text-gray-600 text-center lg:text-left">
                        Explore our <span className="text-orange-600 font-semibold">Live Projects</span>, collaborate with innovation, and witness success stories from our vibrant portfolio.
                    </p>
                </div>

                {/* Mobile Slider */}
                <div className="lg:hidden mb-8">
                    <div className="relative overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {projects.map((project, index) => (
                                <div key={index} className="w-full flex-shrink-0 px-2">
                                    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                                        <div className="p-4 sm:p-6">
                                            {/* Live Badge */}
                                            <div className="flex items-center gap-2 mb-4">
                                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                                <span className="text-sm font-medium text-gray-600">{project.status}</span>
                                            </div>

                                            {/* Project Title */}
                                            <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: '#8B4513' }}>
                                                {project.title}
                                            </h3>

                                            {/* Project Image */}
                                            <div className="relative rounded-xl overflow-hidden mb-4 aspect-video">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>

                                            {/* Description */}
                                            <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.technologies.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Category and Link */}
                                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                <span className="inline-block bg-amber-100 px-4 py-1 text-xs font-semibold tracking-wider uppercase">
                                                    {project.category}
                                                </span>
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-orange-600 hover:text-orange-700 flex items-center gap-1 text-sm font-medium"
                                                >
                                                    Visit <ExternalLink className="h-4 w-4" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Desktop Grid */}
                <div className="hidden lg:block">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {visibleProjects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                            >
                                <div className="p-4">
                                    {/* Live Badge */}
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                        <span className="text-sm font-medium text-gray-600">{project.status}</span>
                                    </div>

                                    {/* Project Title */}
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ color: '#8B4513' }}>
                                        {project.title}
                                    </h3>

                                    {/* Project Image */}
                                    <div className="relative rounded-xl overflow-hidden mb-4 aspect-video">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                        />
                                        {/* Visit Website Button Overlay */}
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center transition-all duration-300"
                                        >
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-100 scale-90">
                                                <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100">
                                                    <ExternalLink className="h-5 w-5" />
                                                    Visit Website
                                                </button>
                                            </div>
                                        </a>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Category Label */}
                                    <div className="pt-4 border-t border-gray-100">
                                        <span className="inline-block bg-amber-100 px-4 py-1 text-xs font-semibold tracking-wider uppercase">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows - Desktop Only */}
                    <div className="flex justify-end items-center gap-3">
                        <button
                            onClick={handlePrev}
                            className="w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 group"
                            aria-label="Previous projects"
                        >
                            <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-gray-900" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 group"
                            aria-label="Next projects"
                        >
                            <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-gray-900" />
                        </button>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center items-center gap-2 mt-6">
                    {Array.from({ length: window.innerWidth < 1024 ? projects.length : maxIndex + 1 }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                                ? 'w-8 bg-orange-500'
                                : 'w-2 bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientProjects;