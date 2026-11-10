import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { DIALOGUES, FRAME_COUNT, HERO_TEXT_FADE_END } from "../lib/hero";
import { WHATSAPP_URL } from "../lib/tokens";

/* ------------------------------------------------------------------ */
/* Procedural 3D artwork — original One9 Tech "signal knot"            */
/* A wireframe torus knot rendered on 2D canvas with perspective       */
/* projection. Rotation + zoom are driven by scroll progress; a slow   */
/* time-based drift keeps it alive while idle. No image assets.        */
/* ------------------------------------------------------------------ */

const TAU = Math.PI * 2;
const CURVE_N = 280; // samples along the knot curve
const STRANDS = 6; // parallel wires forming the tube
const TUBE_R = 0.34; // tube radius (knot units)
const RING_EVERY = 14; // cross-section ring frequency
const PARTICLES = 110;

const buildGeometry = () => {
  const p = 2;
  const q = 3;
  const curve = [];
  for (let i = 0; i < CURVE_N; i++) {
    const t = (i / CURVE_N) * TAU;
    const r = Math.cos(q * t) + 2;
    curve.push([
      r * Math.cos(p * t),
      r * Math.sin(p * t),
      -Math.sin(q * t) * 1.15,
    ]);
  }

  const strands = Array.from({ length: STRANDS }, () => []);
  for (let i = 0; i < CURVE_N; i++) {
    const prev = curve[(i - 1 + CURVE_N) % CURVE_N];
    const next = curve[(i + 1) % CURVE_N];
    // tangent
    let tx = next[0] - prev[0];
    let ty = next[1] - prev[1];
    let tz = next[2] - prev[2];
    const tl = Math.hypot(tx, ty, tz) || 1;
    tx /= tl;
    ty /= tl;
    tz /= tl;
    // normal = tangent x up (fallback if parallel)
    let nx = ty * 1 - tz * 0;
    let ny = tz * 0 - tx * 1;
    let nz = tx * 0 - ty * 0;
    let nl = Math.hypot(nx, ny, nz);
    if (nl < 1e-4) {
      nx = ty * 0 - tz * 1;
      ny = tz * 0 - tx * 0;
      nz = tx * 1 - ty * 0;
      nl = Math.hypot(nx, ny, nz) || 1;
    }
    nx /= nl;
    ny /= nl;
    nz /= nl;
    // binormal = tangent x normal
    const bx = ty * nz - tz * ny;
    const by = tz * nx - tx * nz;
    const bz = tx * ny - ty * nx;

    for (let s = 0; s < STRANDS; s++) {
      const a = (s / STRANDS) * TAU;
      const ca = Math.cos(a) * TUBE_R;
      const sa = Math.sin(a) * TUBE_R;
      strands[s].push([
        curve[i][0] + nx * ca + bx * sa,
        curve[i][1] + ny * ca + by * sa,
        curve[i][2] + nz * ca + bz * sa,
      ]);
    }
  }

  // ambient particle field (deterministic pseudo-random)
  const particles = [];
  let seed = 19;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  for (let i = 0; i < PARTICLES; i++) {
    const theta = rand() * TAU;
    const phi = Math.acos(rand() * 2 - 1);
    const rad = 4.2 + rand() * 4.5;
    particles.push([
      rad * Math.sin(phi) * Math.cos(theta),
      rad * Math.sin(phi) * Math.sin(theta),
      rad * Math.cos(phi),
    ]);
  }

  return { curve, strands, particles };
};

const easeInOut = (x) => x * x * (3 - 2 * x);

const Hero = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const heroTextRef = useRef(null);
  const bigLeftTextRef = useRef(null);
  const progressFillRef = useRef(null);
  const seqLabelRef = useRef(null);

  const prevVisibleIdsRef = useRef("");
  const [visibleCards, setVisibleCards] = useState(new Set());

  // Canvas sizing
  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(window.innerWidth * dpr));
      canvas.height = Math.max(1, Math.round(window.innerHeight * dpr));
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  // Render loop + scroll-linked DOM updates
  useEffect(() => {
    const geo = buildGeometry();
    const accent = { r: 43, g: 217, b: 232 }; // #2BD9E8
    let rafId = 0;
    let lastSeq = -1;

    const projected = new Array(CURVE_N * STRANDS);
    const projectedCurve = new Array(CURVE_N);

    const render = (time) => {
      rafId = requestAnimationFrame(render);
      const section = sectionRef.current;
      const canvas = canvasRef.current;
      if (!section || !canvas) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      // Skip rendering when the hero is fully offscreen
      if (rect.bottom < -80 || rect.top > vh + 80) return;

      const scrollable = Math.max(1, section.offsetHeight - vh);
      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));

      /* ---------- DOM updates tied to scroll ---------- */
      if (heroTextRef.current) {
        const opacity = Math.max(0, 1 - progress / HERO_TEXT_FADE_END);
        heroTextRef.current.style.opacity = String(opacity);
        heroTextRef.current.style.transform = `translateY(${(1 - opacity) * 12}px)`;
        heroTextRef.current.style.pointerEvents =
          opacity < 0.08 ? "none" : "auto";
      }
      if (bigLeftTextRef.current) {
        const op = Math.min(1, Math.max(0, (progress - 0.12) / 0.1));
        const fadeOut =
          progress > 0.85 ? Math.max(0, 1 - (progress - 0.85) / 0.12) : 1;
        const finalOp = op * fadeOut;
        bigLeftTextRef.current.style.opacity = String(finalOp);
        bigLeftTextRef.current.style.transform = `translateY(${(1 - finalOp) * 14}px)`;
      }
      if (progressFillRef.current) {
        progressFillRef.current.style.transform = `scaleX(${progress})`;
      }
      const seq = Math.min(
        FRAME_COUNT,
        Math.round(progress * (FRAME_COUNT - 1)) + 1
      );
      if (seq !== lastSeq && seqLabelRef.current) {
        lastSeq = seq;
        seqLabelRef.current.textContent = `SEQ ${String(seq).padStart(3, "0")} / ${FRAME_COUNT}`;
      }

      const newVisible = new Set();
      for (const d of DIALOGUES) {
        if (progress >= d.show && progress <= d.hide) newVisible.add(d.id);
      }
      const newIds = [...newVisible].sort().join(",");
      if (newIds !== prevVisibleIdsRef.current) {
        prevVisibleIdsRef.current = newIds;
        setVisibleCards(newVisible);
      }

      /* ---------- 3D render ---------- */
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const isDesktop = w > 768;
      const cx = isDesktop ? w * 0.6 : w * 0.5;
      const cy = isDesktop ? h * 0.44 : h * 0.38;
      const zoom = 1 + easeInOut(Math.sin(progress * Math.PI)) * 0.5;
      const scale = Math.min(w, h) * 0.115 * zoom;
      const fov = 7;

      const rotY = time * 0.00012 + progress * Math.PI * 3;
      const rotX = 0.45 + progress * 1.1 + Math.sin(time * 0.0001) * 0.08;
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const project = (pt) => {
        const x1 = pt[0] * cosY - pt[2] * sinY;
        const z1 = pt[0] * sinY + pt[2] * cosY;
        const y2 = pt[1] * cosX - z1 * sinX;
        const z2 = pt[1] * sinX + z1 * cosX;
        const k = fov / (fov + z2);
        return [cx + x1 * scale * k, cy + y2 * scale * k, z2];
      };

      // -- particle field (slow counter-drift) --
      const pRotY = time * 0.00005;
      const pCos = Math.cos(pRotY);
      const pSin = Math.sin(pRotY);
      ctx.fillStyle = "rgba(244,242,236,0.35)";
      for (const pt of geo.particles) {
        const x1 = pt[0] * pCos - pt[2] * pSin;
        const z1 = pt[0] * pSin + pt[2] * pCos;
        const y2 = pt[1] * cosX - z1 * sinX;
        const z2 = pt[1] * sinX + z1 * cosX;
        const k = fov / (fov + z2);
        const a = Math.max(0, 0.32 - (z2 + 8.7) * 0.025);
        if (a <= 0.01) continue;
        ctx.globalAlpha = a;
        const s = k > 0.9 ? 1.5 : 1;
        ctx.fillRect(cx + x1 * scale * k, cy + y2 * scale * k, s, s);
      }
      ctx.globalAlpha = 1;

      // -- orbit rings (two tilted hairline ellipses) --
      ctx.strokeStyle = "rgba(244,242,236,0.10)";
      ctx.lineWidth = 1;
      for (let ring = 0; ring < 2; ring++) {
        const rr = 3.9 + ring * 0.7;
        const tilt = ring === 0 ? 0.5 : -0.9;
        ctx.beginPath();
        for (let i = 0; i <= 72; i++) {
          const a = (i / 72) * TAU;
          const px = Math.cos(a) * rr;
          const pz = Math.sin(a) * rr;
          const py = Math.sin(a) * Math.sin(tilt) * rr * 0.28;
          const [sx, sy] = project([px, py, pz]);
          if (i === 0) ctx.moveTo(sx, sy);
          else ctx.lineTo(sx, sy);
        }
        ctx.stroke();
      }

      // -- project all strand points --
      for (let s = 0; s < STRANDS; s++) {
        const strand = geo.strands[s];
        for (let i = 0; i < CURVE_N; i++) {
          projected[s * CURVE_N + i] = project(strand[i]);
        }
      }
      for (let i = 0; i < CURVE_N; i++) {
        projectedCurve[i] = project(geo.curve[i]);
      }

      // -- strand wires, batched into depth buckets --
      const BUCKETS = 5;
      const paths = Array.from({ length: BUCKETS }, () => new Path2D());
      for (let s = 0; s < STRANDS; s++) {
        const base = s * CURVE_N;
        for (let i = 0; i < CURVE_N; i++) {
          const a = projected[base + i];
          const b = projected[base + ((i + 1) % CURVE_N)];
          const depth = (a[2] + b[2]) * 0.5; // ~[-3.5, 3.5]
          let bucket = Math.floor(((3.5 - depth) / 7) * BUCKETS);
          bucket = Math.max(0, Math.min(BUCKETS - 1, bucket));
          paths[bucket].moveTo(a[0], a[1]);
          paths[bucket].lineTo(b[0], b[1]);
        }
      }
      for (let bkt = 0; bkt < BUCKETS; bkt++) {
        const alpha = 0.05 + (bkt / (BUCKETS - 1)) * 0.3;
        ctx.strokeStyle = `rgba(244,242,236,${alpha})`;
        ctx.lineWidth = bkt >= BUCKETS - 2 ? 1.1 : 1;
        ctx.stroke(paths[bkt]);
      }

      // -- cross-section rings --
      ctx.strokeStyle = "rgba(244,242,236,0.14)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i < CURVE_N; i += RING_EVERY) {
        for (let s = 0; s <= STRANDS; s++) {
          const pt = projected[(s % STRANDS) * CURVE_N + i];
          if (s === 0) ctx.moveTo(pt[0], pt[1]);
          else ctx.lineTo(pt[0], pt[1]);
        }
      }
      ctx.stroke();

      // -- accent signal sweep along the center curve --
      const sweepLen = Math.floor(CURVE_N * 0.14);
      const sweepStart = Math.floor(
        (((progress * 2.2 + time * 0.00005) % 1) + 1) % 1 * CURVE_N
      );
      // soft glow pass
      ctx.lineCap = "round";
      for (const pass of [
        { width: 6, alpha: 0.12 },
        { width: 2.2, alpha: 0.9 },
      ]) {
        ctx.strokeStyle = `rgba(${accent.r},${accent.g},${accent.b},${pass.alpha})`;
        ctx.lineWidth = pass.width;
        ctx.beginPath();
        for (let j = 0; j <= sweepLen; j++) {
          const pt = projectedCurve[(sweepStart + j) % CURVE_N];
          if (j === 0) ctx.moveTo(pt[0], pt[1]);
          else ctx.lineTo(pt[0], pt[1]);
        }
        ctx.stroke();
      }
      // sweep head node
      const head = projectedCurve[(sweepStart + sweepLen) % CURVE_N];
      ctx.fillStyle = `rgba(${accent.r},${accent.g},${accent.b},1)`;
      ctx.beginPath();
      ctx.arc(head[0], head[1], 3, 0, TAU);
      ctx.fill();
      ctx.lineCap = "butt";
    };

    rafId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="scroll-animation relative z-10"
      aria-label="Hero experience"
    >
      <div
        className="sticky top-0 z-10 w-full overflow-hidden bg-[#080808]"
        style={{
          height: "100dvh",
          minHeight: "100vh",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          style={{ willChange: "contents", transform: "translateZ(0)" }}
        />

        {/* Readability scrim */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(8,8,8,0.9) 0%, rgba(8,8,8,0.35) 38%, rgba(8,8,8,0.1) 62%, rgba(8,8,8,0.55) 100%)",
          }}
        />

        {/* Top meta row */}
        <div className="pointer-events-none absolute inset-x-0 top-20 z-10 flex items-center justify-between px-5 md:top-24 md:px-10">
          <span className="font-mono-label text-[#6B6A63]">
            ONE9 TECH / 01&nbsp;&nbsp;|&nbsp;&nbsp;DIGITAL PRODUCT STUDIO&nbsp;&nbsp;|&nbsp;&nbsp;WEB · APP · SOFTWARE
          </span>
          <span className="hidden items-center gap-2 font-mono-label text-[#8A8A8A] sm:inline-flex">
            <span className="pulse-dot" />
            SYSTEMS ONLINE
          </span>
        </div>

        {/* Intro hero text */}
        <div
          ref={heroTextRef}
          className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-start gap-5 px-5 pb-20 md:px-10 md:pb-24"
        >
          <h1 className="font-display text-[11vw] leading-[0.92] text-[#F4F2EC] sm:text-[8.5vw] lg:text-[6.75rem]">
            Websites. Apps.
            <br />
            <span className="text-[#6B6A63]">Software that ships.</span>
          </h1>

          <p className="max-w-[52ch] font-sans text-sm leading-relaxed text-[#8A8A8A] md:text-base">
            One9 Tech designs and engineers websites, mobile apps, ERP systems,
            and custom software — built for businesses and startups that need a
            real product, not a template.
          </p>

          <div className="flex flex-wrap items-center gap-5 pt-1">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--accent)] px-7 py-3.5 font-mono-label text-[#080808] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Start a Project <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="/work"
              className="group inline-flex items-center gap-2 font-mono-label text-[#F4F2EC] transition-colors hover:text-[var(--accent)]"
            >
              Explore Work
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Mid-scroll headline */}
        <div
          ref={bigLeftTextRef}
          className="pointer-events-none absolute bottom-24 left-5 z-10 hidden max-w-[60%] flex-col gap-5 md:bottom-28 md:left-10 md:flex"
          style={{ opacity: 0 }}
        >
          <span className="inline-flex items-center gap-2.5 font-mono-label text-[var(--accent)]">
            <span className="pulse-dot" />
            ENGINEERED TO SHIP
          </span>
          <h2 className="font-display text-[clamp(3.5rem,8.5vw,8rem)] text-[#F4F2EC]">
            Build
            <br />
            <span className="text-[#6B6A63]">what&rsquo;s next.</span>
          </h2>
          <p className="max-w-[38ch] font-mono-label text-[#8A8A8A]">
            4+ years shipping production systems — web · mobile · AI
          </p>
        </div>

        {/* Progress rail */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
          <div className="mx-5 mb-3 h-px bg-[rgba(244,242,236,0.12)] md:mx-10">
            <div
              ref={progressFillRef}
              className="h-full origin-left bg-[var(--accent)]"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
          <div className="mx-5 flex items-center justify-between pb-4 font-mono-label text-[#6B6A63] md:mx-10">
            <span ref={seqLabelRef}>SEQ 001 / {FRAME_COUNT}</span>
            <span className="hidden sm:inline">ONE9 TECH // EXPERIENCE</span>
            <span>SCROLL ↓</span>
          </div>
        </div>

        {/* Dialogue cards — desktop */}
        {DIALOGUES.map((d) => {
          const visible = visibleCards.has(d.id);
          const position =
            d.id === "d1"
              ? "top-[22%] right-5 md:right-10"
              : d.id === "d2"
                ? "top-1/2 -translate-y-1/2 right-5 md:right-10"
                : "bottom-24 right-5 md:bottom-28 md:right-10";
          return (
            <div
              key={d.id}
              className={`pointer-events-none absolute ${position} z-20 hidden w-[380px] max-w-[88vw] md:block`}
            >
              <figure
                className={`border border-[rgba(244,242,236,0.12)] bg-[#101010]/95 p-6 backdrop-blur-sm transition-all duration-300 ease-out ${
                  visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                }`}
              >
                <blockquote className="font-sans text-base font-medium leading-snug text-[#F4F2EC]">
                  &ldquo;{d.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 flex items-center justify-between">
                  <span className="font-sans text-sm text-[#8A8A8A]">{d.speaker}</span>
                  <span className="font-mono-label text-[var(--accent)]">{d.film}</span>
                </figcaption>
              </figure>
            </div>
          );
        })}

        {/* Dialogue cards — mobile */}
        <div className="pointer-events-none absolute inset-x-0 top-[30%] z-20 flex flex-col gap-3 px-5 md:hidden">
          {DIALOGUES.map((d) => {
            const visible = visibleCards.has(d.id);
            return (
              <figure
                key={d.id}
                className={`border border-[rgba(244,242,236,0.12)] bg-[#101010]/95 p-4 transition-all duration-300 ease-out ${
                  visible ? "translate-y-0 opacity-100" : "pointer-events-none absolute translate-y-3 opacity-0"
                }`}
                style={{ display: visible ? "block" : "none" }}
              >
                <blockquote className="font-sans text-sm font-medium leading-snug text-[#F4F2EC]">
                  &ldquo;{d.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-3 flex items-center justify-between">
                  <span className="font-sans text-xs text-[#8A8A8A]">{d.speaker}</span>
                  <span className="font-mono-label text-[var(--accent)]">{d.film}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
