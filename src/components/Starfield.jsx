import React, { useEffect, useRef } from 'react';

/* Universe background — 3D starfield flying toward the camera.
   Scroll speed turns stars into warp streaks; nebula glows are
   GPU-composited CSS layers so the canvas only draws stars.
   Stars are batched into one path per color/alpha bucket. */

const PALETTE = [
  [244, 242, 236], // bone white
  [43, 217, 232], // accent cyan
  [98, 110, 255], // indigo
  [180, 140, 255], // violet
];
const WEIGHTS = [0.72, 0.14, 0.09, 0.05];
const ALPHA_LEVELS = 4;

const pickColor = () => {
  let r = Math.random();
  let i = 0;
  while (i < WEIGHTS.length - 1 && r > WEIGHTS[i]) {
    r -= WEIGHTS[i];
    i++;
  }
  return i;
};

const spawn = (s, initial) => {
  s.x = (Math.random() * 2 - 1) * 1.6;
  s.y = (Math.random() * 2 - 1) * 1.0;
  s.z = initial ? Math.random() * 0.95 + 0.05 : 1;
  s.c = pickColor();
  s.tw = Math.random() * Math.PI * 2;
  s.ts = 0.001 + Math.random() * 0.003;
  s.px = null;
  s.py = null;
  return s;
};

const Starfield = ({ className = '' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return undefined;

    let w = 0;
    let h = 0;
    let dpr = 1;
    const resize = () => {
      const r = canvas.parentElement.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      w = r.width;
      h = r.height;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };
    resize();
    window.addEventListener('resize', resize);

    const count = window.innerWidth < 768 ? 260 : 560;
    const stars = Array.from({ length: count }, () => spawn({}, true));

    const buckets = PALETTE.length * ALPHA_LEVELS;
    const dots = new Array(buckets);
    const lines = new Array(buckets);
    const fillStyles = [];
    for (let c = 0; c < PALETTE.length; c++) {
      for (let a = 0; a < ALPHA_LEVELS; a++) {
        const [r, g, b] = PALETTE[c];
        fillStyles.push(`rgba(${r},${g},${b},${((a + 1) / ALPHA_LEVELS).toFixed(2)})`);
      }
    }

    let tmx = 0;
    let tmy = 0;
    const onMouse = (e) => {
      tmx = (e.clientX / window.innerWidth) * 2 - 1;
      tmy = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', onMouse, { passive: true });

    let visible = true;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(canvas);

    let raf = 0;
    let last = performance.now();
    let lastY = window.scrollY;
    let vel = 0;
    let mx = 0;
    let my = 0;

    const frame = (now) => {
      raf = requestAnimationFrame(frame);
      if (!visible) {
        lastY = window.scrollY;
        last = now;
        return;
      }

      const dt = Math.min(40, now - last);
      last = now;
      const y = window.scrollY;
      const inst = Math.abs(y - lastY) / Math.max(1, dt);
      lastY = y;
      vel += (Math.min(inst, 6) - vel) * 0.06;
      mx += (tmx - mx) * 0.04;
      my += (tmy - my) * 0.04;

      const speed = 0.00005 + vel * 0.0003;
      const warp = Math.min(1, vel / 2.5);
      const streaking = warp > 0.05;

      for (let i = 0; i < buckets; i++) {
        dots[i] = null;
        lines[i] = null;
      }

      const cx = w / 2 + mx * 30;
      const cy = h / 2 + my * 20;
      const f = Math.min(w, h) * 0.55;
      const stretch = 1 + warp * 8;

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.z -= speed * dt;
        if (s.z <= 0.02) {
          spawn(s, false);
          continue;
        }
        const sx = cx + (s.x / s.z) * f;
        const sy = cy + (s.y / s.z) * f;
        if (sx < -60 || sx > w + 60 || sy < -60 || sy > h + 60) {
          spawn(s, false);
          continue;
        }

        const depth = 1 - s.z;
        const twinkle = 0.65 + 0.35 * Math.sin(now * s.ts + s.tw);
        const alpha = Math.min(1, depth * 1.3) * twinkle;
        const level = Math.min(ALPHA_LEVELS - 1, Math.floor(alpha * ALPHA_LEVELS));
        const bi = s.c * ALPHA_LEVELS + level;
        const size = 0.5 + depth * 1.8;

        if (streaking && s.px !== null) {
          const p = lines[bi] || (lines[bi] = new Path2D());
          p.moveTo(sx - (sx - s.px) * stretch, sy - (sy - s.py) * stretch);
          p.lineTo(sx, sy);
        } else {
          const p = dots[bi] || (dots[bi] = new Path2D());
          p.rect(sx - size / 2, sy - size / 2, size, size);
        }
        s.px = sx;
        s.py = sy;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.lineCap = 'round';
      ctx.lineWidth = 1.4;
      for (let i = 0; i < buckets; i++) {
        if (dots[i]) {
          ctx.fillStyle = fillStyles[i];
          ctx.fill(dots[i]);
        }
        if (lines[i]) {
          ctx.strokeStyle = fillStyles[i];
          ctx.stroke(lines[i]);
        }
      }
    };

    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {/* Nebula glows — CSS layers, composited on the GPU */}
      <div className="nebula nebula-a" />
      <div className="nebula nebula-b" />
      <div className="nebula nebula-c" />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
};

export default Starfield;
