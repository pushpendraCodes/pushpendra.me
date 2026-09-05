import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { AURORA_CONFIG, setAuroraTheme } from '../lib/aurora';
import { createAuroraFluid } from '../lib/aurora-fluid';

/**
 * Fluid mouse-trail overlay (ported from optech/website AuroraCursorTrail).
 * Kept behind page UI so it never blanks the hero.
 */
const CursorTrail = () => {
  const canvasRef = useRef(null);
  const { isTheme1 } = useTheme();

  useEffect(() => {
    setAuroraTheme(isTheme1 ? 'theme1' : 'theme2');
  }, [isTheme1]);

  useEffect(() => {
    if (!AURORA_CONFIG.enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    setAuroraTheme(isTheme1 ? 'theme1' : 'theme2');

    let sim = null;
    // Defer so hero paints first
    const id = window.setTimeout(() => {
      try {
        sim = createAuroraFluid(canvas);
      } catch {
        /* WebGL not supported */
      }
    }, 400);

    return () => {
      window.clearTimeout(id);
      try {
        sim?.destroy();
      } catch {
        /* ignore */
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[40]"
      style={{
        mixBlendMode: isTheme1 ? 'screen' : 'soft-light',
        width: '100%',
        height: '100%',
        opacity: isTheme1 ? 1 : 0.7,
      }}
    />
  );
};

export default CursorTrail;
