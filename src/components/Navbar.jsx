import React, { useState } from 'react';
import { Github, Plus, Instagram, Menu, X, ChevronDown } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    "Web Development",
    "Mobile App Development",
    "UI / UX Design",
    "Custom Software",
    "Maintenance & Support",
  ];

  return (
    <nav className="border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Left Side - Logo */}
          <h1 className="text-xl font-semibold text-gray-900 tracking-wide">
           Pushpendra Patel
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a className="text-sm font-medium text-gray-700 hover:text-gray-900 transition" href="#">
              Home
            </a>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition">
                Services
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown */}
              <div className="absolute left-0 top-full mt-2 w-56 rounded-lg bg-white border border-gray-200 shadow-lg 
                opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {services.map((item) => (
                  <a
                    key={item}
                    href="#services"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition first:rounded-t-lg last:rounded-b-lg"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <a className="text-sm font-medium text-gray-700 hover:text-gray-900 transition" href="#works">
              Work
            </a>
            {/* <a className="text-sm font-medium text-gray-700 hover:text-gray-900 transition" href="#">
              About Us
            </a>
            <a className="text-sm font-medium text-gray-700 hover:text-gray-900 transition" href="#">
              Contact Us
            </a> */}
          </div>

          {/* Right Side - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            {/* Social Icons */}
            <a href="https://github.com/pushpendraCodes" target='blank' className="text-gray-600 hover:text-gray-900 transition">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/?igsh=aGdpMHlmb2Q2a2ln" target='blank' className="text-pink-600 hover:text-pink-500 transition">
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/918516064332?text=Hello%20I%20need%20support"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 transition"
            >
              <FaWhatsapp className="h-5 w-5" />
            </a>


            {/* CTA Button */}
            <a href="https://wa.me/918516064332?text=Hello%20I%20need%20support"
              target="_blank"
              rel="noopener noreferrer" className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition">
              <Plus className="h-4 w-4" />
              New Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen border-t border-gray-200' : 'max-h-0'
          }`}
      >
        <div className="px-4 py-4 space-y-3 bg-white">
          {/* Navigation Links */}
          <a className="block py-2 text-base font-medium text-gray-700 hover:text-gray-900 transition" href="#">
            Home
          </a>

          {/* Services Accordion */}
          <div>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center justify-between w-full py-2 text-base font-medium text-gray-700 hover:text-gray-900 transition"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-64 mt-2' : 'max-h-0'
                }`}
            >
              <div className="pl-4 space-y-2">
                {services.map((item) => (
                  <a
                    key={item}
                    href="#services"
                    className="block py-2 text-sm text-gray-600 hover:text-gray-900 transition"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a className="block py-2 text-base font-medium text-gray-700 hover:text-gray-900 transition" href="#works">
            Work
          </a>
          {/* <a className="block py-2 text-base font-medium text-gray-700 hover:text-gray-900 transition" href="#">
            About Us
          </a>
          <a className="block py-2 text-base font-medium text-gray-700 hover:text-gray-900 transition" href="#">
            Contact Us
          </a> */}

          {/* Social Icons Mobile */}
          <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
             <a href="https://github.com/pushpendraCodes" target='blank' className="text-gray-600 hover:text-gray-900 transition">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/one9.tech?igsh=aGdpMHlmb2Q2a2ln" target='blank' className="text-pink-600 hover:text-pink-500 transition">
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/918516064332?text=Hello%20I%20need%20support"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 transition"
            >
              <FaWhatsapp className="h-5 w-5" />
            </a>

          </div>

          {/* CTA Button Mobile */}
          <a href="https://wa.me/918516064332?text=Hello%20I%20need%20support"
              target="_blank"
              rel="noopener noreferrer" className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition">
              <Plus className="h-4 w-4" />
              New Project
            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;