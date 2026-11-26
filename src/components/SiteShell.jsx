'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import { initSmoothScroll, scrollToY } from '../lib/smoothScroll';

export default function SiteShell({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    initSmoothScroll();
  }, []);

  useEffect(() => {
    scrollToY(0, { immediate: true });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#080808] text-[#F4F2EC]">
      <CustomCursor />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
