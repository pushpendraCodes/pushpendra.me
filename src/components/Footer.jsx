import React from 'react';
import { Twitter, Linkedin, Github, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white to-amber-50 text-gray-800">

      {/* Subtle particles (light version) */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-orange-200 rounded-full opacity-40"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
      `}</style>

      <div className="relative z-10">

        {/* CTA Section */}
        <div className="text-center py-20 px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
            Let's discuss how our IT solutions can drive your business forward. Get a free consultation today.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
              Get Free Consultation
            </button>

            <a href="tel:+918516064332">
              <button className="border-2 border-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Call Us Now
              </button>
            </a>

          </div>
        </div>

        {/* Stats */}
        <div className="border-y border-gray-200 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                ['10+', 'Projects Completed'],
                ['10+', 'Happy Clients'],
                ['4+', 'Years Experience'],
                ['5+', 'Team Members'],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                    {value}
                  </div>
                  <div className="text-gray-600">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Company */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                {/* <div className="bg-orange-500 rounded-lg p-2">
                  <div className="w-6 h-6 bg-white rounded rotate-45"></div>
                </div> */}
                <span className="text-xl font-bold text-gray-900">
                  Pushpendra Patel
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-6">
                We're a design and development agency focused on creating exceptional digital experiences that drive results.
              </p>

              <div className="flex gap-3">
                {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="bg-white border border-gray-200 p-2.5 rounded-lg hover:bg-gray-100 transition"
                  >
                    <Icon className="w-5 h-5 text-gray-700" />
                  </a>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Industries</h3>
              <ul className="space-y-3 text-gray-600">
                {['Healthcare', 'E-commerce', 'Education', 'Finance'].map(i => (
                  <li key={i}>
                    <a href="#" className="hover:text-gray-900 transition">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Services</h3>
              <ul className="space-y-3 text-gray-600">
                {[
                  'Web Development',
                  'Mobile App Development',
                  'UI / UX Design',
                  'Digital Marketing',
                  'Cloud Solutions',
                  'IT Consulting',
                ].map(s => (
                  <li key={s}>
                    <a href="#" className="hover:text-gray-900 transition">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact Info</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3">
                  <Mail className="w-5 h-5 text-orange-500 mt-0.5" />
                  <span>pushpendracontact8055@gmail.com</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="w-5 h-5 text-orange-500 mt-0.5" />
                  <span>+91 8516064332</span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 mt-0.5" />
                  <span>Rewa, MP (India)</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-600">
            <span>© 2026 Pushpendra Patel. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900">Terms of Service</a>
              <a href="#" className="hover:text-gray-900">Cookie Policy</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
