import Lenis from 'lenis';

let lenis = null;

export const initSmoothScroll = () => {
  if (lenis || typeof window === 'undefined') return lenis;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;

  lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.4,
  });

  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
  return lenis;
};

export const scrollToY = (y, { immediate = false } = {}) => {
  if (lenis) lenis.scrollTo(y, { immediate, duration: immediate ? 0 : 1.4 });
  else window.scrollTo({ top: y, behavior: immediate ? 'auto' : 'smooth' });
};
