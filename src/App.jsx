import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Seo from './components/Seo';
import WorkPage from './pages/WorkPage';
import CaseStudy from './pages/CaseStudy';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { initSmoothScroll, scrollToY } from './lib/smoothScroll';

// Restore scroll to top on every route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    scrollToY(0, { immediate: true });
  }, [pathname]);
  return null;
};

const SmoothScroll = () => {
  useEffect(() => {
    initSmoothScroll();
  }, []);
  return null;
};

function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F4F2EC]">
      <Seo />
      <CustomCursor />
      <SmoothScroll />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
