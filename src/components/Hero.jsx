import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import {
  DIALOGUES,
  FRAME_COUNT,
  HERO_TEXT_FADE_END,
  framePath,
} from "../lib/hero";

const HudCorner = ({ corner, size = 26, className = "" }) => {
  const paths = {
    tl: `M 2 ${size} L 2 2 L ${size} 2`,
    tr: `M ${size - 20} 2 L ${size} 2 L ${size} ${size}`,
    bl: `M 2 ${size - 20} L 2 ${size} L ${size} ${size}`,
    br: `M ${size - 20} ${size} L ${size} ${size} L ${size} ${size - 20}`,
  };
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      className={className}
    >
      <path
        d={paths[corner]}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
};

const Hero = () => {
  const { isTheme1 } = useTheme();
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const heroTextRef = useRef(null);
  const bigLeftTextRef = useRef(null);
  const progressFillRef = useRef(null);
  const powerReadoutRef = useRef(null);
  const seqLabelRef = useRef(null);

  const framesRef = useRef([]);
  const tickingRef = useRef(false);
  const loadedRef = useRef(false);
  const lastFrameRef = useRef(-1);
  const prevVisibleIdsRef = useRef("");

  const [loadProgress, setLoadProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());

  const whatsappUrl =
    "https://wa.me/918516064332?text=Hello%20Pushpendra%2C%20I%20have%20a%20project%20idea";

  // Theme-aware palette — readable on frame imagery
  const accent = isTheme1 ? "#C5AA68" : "#8B8175";
  const bg = isTheme1 ? "#071D18" : "#F4F1EC";
  const fg = isTheme1 ? "#E9E1CC" : "#FFFFFF";
  const muted = isTheme1 ? "#AFAF9D" : "rgba(255,255,255,0.78)";
  const cardBg = isTheme1 ? "rgba(9,37,31,0.92)" : "rgba(38,37,34,0.88)";
  const cardBorder = isTheme1 ? "rgba(197,170,104,0.28)" : "rgba(255,255,255,0.18)";
  const cardFg = isTheme1 ? "#E9E1CC" : "#FFFFFF";
  const cardMuted = isTheme1 ? "#AFAF9D" : "rgba(255,255,255,0.7)";

  const drawFrame = useCallback((index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Prefer requested frame; fall back to nearest loaded frame
    let img = framesRef.current[index];
    if (!img || !img.complete || !img.naturalWidth) {
      for (let i = index; i >= 0; i--) {
        const candidate = framesRef.current[i];
        if (candidate?.complete && candidate.naturalWidth) {
          img = candidate;
          break;
        }
      }
    }
    if (!img || !img.complete || !img.naturalWidth) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    if (!cw || !ch) return;

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = cw / ch;

    let drawW;
    let drawH;
    if (canvasRatio > imgRatio) {
      drawW = cw;
      drawH = cw / imgRatio;
    } else {
      drawH = ch;
      drawW = ch * imgRatio;
    }

    if (window.innerWidth <= 768) {
      drawW *= 1.25;
      drawH *= 1.25;
    }

    const drawX = (cw - drawW) / 2;
    const drawY = (ch - drawH) / 2;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }, []);

  useEffect(() => {
    let cancelled = false;
    let loadedCount = 0;
    let ready = false;
    const imgs = new Array(FRAME_COUNT);

    const markReady = () => {
      if (ready || cancelled) return;
      ready = true;
      loadedRef.current = true;
      setLoaded(true);
      lastFrameRef.current = 0;
      drawFrame(0);
    };

    // Priority-load first frames so hero paints immediately
    const loadOne = (i) => {
      const img = new Image();
      img.decoding = "async";
      img.src = framePath(i + 1);
      const onDone = () => {
        if (cancelled) return;
        loadedCount++;
        setLoadProgress(loadedCount / FRAME_COUNT);
        if (i === 0 || (img.complete && img.naturalWidth)) {
          markReady();
          if (lastFrameRef.current === i || lastFrameRef.current < 0) {
            drawFrame(Math.max(0, lastFrameRef.current));
          }
        }
      };
      img.onload = onDone;
      img.onerror = onDone;
      imgs[i] = img;
    };

    framesRef.current = imgs;
    // Load first 8 ASAP, then the rest
    for (let i = 0; i < Math.min(8, FRAME_COUNT); i++) loadOne(i);
    const restId = window.setTimeout(() => {
      for (let i = 8; i < FRAME_COUNT; i++) loadOne(i);
    }, 50);

    // Failsafe: never leave hero stuck on blank loader
    const failsafe = window.setTimeout(() => markReady(), 1200);

    return () => {
      cancelled = true;
      window.clearTimeout(restId);
      window.clearTimeout(failsafe);
    };
  }, [drawFrame]);

  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(window.innerWidth * dpr));
      canvas.height = Math.max(1, Math.round(window.innerHeight * dpr));
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      drawFrame(lastFrameRef.current >= 0 ? lastFrameRef.current : 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [drawFrame]);

  useEffect(() => {
    if (!loaded) return;
    drawFrame(lastFrameRef.current >= 0 ? lastFrameRef.current : 0);
  }, [loaded, drawFrame]);

  useEffect(() => {
    if (!loaded) return;

    const update = () => {
      tickingRef.current = false;
      const section = sectionRef.current;
      if (!section || !loadedRef.current) return;

      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));

      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.round(progress * (FRAME_COUNT - 1))
      );

      if (frameIndex !== lastFrameRef.current) {
        lastFrameRef.current = frameIndex;
        drawFrame(frameIndex);
      }

      if (heroTextRef.current) {
        const opacity = Math.max(0, 1 - progress / HERO_TEXT_FADE_END);
        heroTextRef.current.style.opacity = String(opacity);
        heroTextRef.current.style.transform = `translateY(${(1 - opacity) * 12}px)`;
        heroTextRef.current.style.pointerEvents = opacity < 0.08 ? "none" : "auto";
      }

      if (bigLeftTextRef.current) {
        const op = Math.min(1, Math.max(0, (progress - 0.12) / 0.1));
        const fadeOut = progress > 0.85 ? Math.max(0, 1 - (progress - 0.85) / 0.12) : 1;
        const finalOp = op * fadeOut;
        bigLeftTextRef.current.style.opacity = String(finalOp);
        bigLeftTextRef.current.style.transform = `translateY(${(1 - finalOp) * 14}px)`;
      }

      if (progressFillRef.current) {
        progressFillRef.current.style.transform = `scaleX(${progress})`;
      }

      if (powerReadoutRef.current) {
        const pwr = 87.3 + Math.sin(progress * Math.PI * 2) * 6.7;
        powerReadoutRef.current.textContent = `${pwr.toFixed(1)}%`;
      }

      if (seqLabelRef.current) {
        const n = String(frameIndex + 1).padStart(3, "0");
        seqLabelRef.current.textContent = `SEQ ${n} / ${FRAME_COUNT}`;
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
    };

    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [drawFrame, loaded]);

  return (
    <section
      ref={sectionRef}
      className="scroll-animation relative z-10"
      aria-label="Hero experience"
    >
      <div
        className="sticky top-0 z-10 w-full overflow-hidden"
        style={{
          height: "100dvh",
          minHeight: "100vh",
          backgroundColor: bg,
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          style={{ willChange: "contents", transform: "translateZ(0)" }}
        />

        {/* Readability overlay — stronger at bottom for text */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: isTheme1
              ? "linear-gradient(to top, rgba(7,29,24,0.92) 0%, rgba(7,29,24,0.35) 35%, rgba(7,29,24,0.15) 60%, rgba(7,29,24,0.45) 100%)"
              : "linear-gradient(to top, rgba(38,37,34,0.88) 0%, rgba(38,37,34,0.4) 35%, rgba(38,37,34,0.2) 60%, rgba(38,37,34,0.5) 100%)",
          }}
        />

        {/* HUD corners */}
        <div
          className="pointer-events-none absolute left-5 top-24 md:left-10 md:top-28"
          style={{ color: accent }}
        >
          <HudCorner corner="tl" />
        </div>
        <div
          className="pointer-events-none absolute right-5 top-24 md:right-10 md:top-28"
          style={{ color: accent }}
        >
          <HudCorner corner="tr" />
        </div>
        <div
          className="pointer-events-none absolute bottom-14 left-5 md:bottom-16 md:left-10"
          style={{ color: accent }}
        >
          <HudCorner corner="bl" />
        </div>
        <div
          className="pointer-events-none absolute bottom-14 right-5 md:bottom-16 md:right-10"
          style={{ color: accent }}
        >
          <HudCorner corner="br" />
        </div>

        {/* Intro hero text */}
        <div
          ref={heroTextRef}
          className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-start gap-4 px-5 pb-20 md:gap-5 md:px-12 md:pb-24"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.22em] backdrop-blur-md"
            style={{
              color: accent,
              borderColor: isTheme1 ? "rgba(197,170,104,0.35)" : "rgba(255,255,255,0.25)",
              backgroundColor: isTheme1 ? "rgba(7,29,24,0.55)" : "rgba(38,37,34,0.45)",
            }}
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: accent, boxShadow: `0 0 10px ${accent}` }}
            />
            FULL STACK DEVELOPER // ONE9 TECH
          </span>

          <h1
            className="max-w-[16ch] font-serif text-5xl font-semibold leading-[0.95] tracking-tighter md:text-7xl lg:text-8xl"
            style={{ color: fg }}
          >
            Pushpendra
            <br />
            <span style={{ color: accent }}>Patel</span>
          </h1>

          <p
            className="max-w-[42ch] font-sans text-sm leading-relaxed md:text-base"
            style={{ color: muted }}
          >
            I design and develop modern websites, SaaS products, and custom web
            applications for ambitious businesses.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="#works"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-sans uppercase tracking-widest font-semibold transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: accent,
                color: isTheme1 ? "#071D18" : "#FFFFFF",
              }}
            >
              View My Work
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-xs font-sans uppercase tracking-widest font-semibold transition-all hover:-translate-y-0.5"
              style={{
                borderColor: isTheme1 ? "rgba(197,170,104,0.5)" : "rgba(255,255,255,0.4)",
                color: fg,
                backgroundColor: isTheme1 ? "rgba(7,29,24,0.4)" : "rgba(38,37,34,0.35)",
              }}
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Start a Project
            </a>
          </div>
        </div>

        {/* Mid-scroll headline */}
        <div
          ref={bigLeftTextRef}
          className="pointer-events-none absolute bottom-24 left-5 z-10 hidden max-w-[58%] flex-col gap-5 md:flex md:bottom-28 md:left-12"
          style={{ opacity: 0 }}
        >
          <span
            className="inline-flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.3em]"
            style={{ color: accent }}
          >
            <span
              aria-hidden
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: accent, boxShadow: `0 0 10px ${accent}` }}
            />
            Engineering with Craft
          </span>
          <h2
            className="font-serif font-semibold leading-[0.88] tracking-tighter text-[clamp(3.5rem,8vw,7.5rem)]"
            style={{ color: fg }}
          >
            Build
            <br />
            with <span style={{ color: accent }}>One9</span>
          </h2>
          <p
            className="max-w-[36ch] font-mono text-[11px] uppercase tracking-[0.22em]"
            style={{ color: muted }}
          >
            4+ years shipping production products — web, mobile &amp; AI.
          </p>
        </div>

        {/* Top meta */}
        <div className="pointer-events-none absolute left-5 top-20 z-10 flex items-center gap-2 md:left-10 md:top-24">
          <div className="h-px w-8" style={{ backgroundColor: `${accent}99` }} />
          <span
            className="font-mono text-[10px] uppercase tracking-[0.32em]"
            style={{ color: muted }}
          >
            Portfolio — Live
          </span>
        </div>

        <div className="pointer-events-none absolute right-5 top-20 z-10 flex items-center gap-3 md:right-10 md:top-24">
          <span
            className="font-mono text-[10px] uppercase tracking-[0.32em]"
            style={{ color: muted }}
          >
            Delivery
          </span>
          <span
            ref={powerReadoutRef}
            className="font-mono text-[10px] uppercase tracking-[0.22em]"
            style={{ color: accent }}
          >
            87.3%
          </span>
          <span
            aria-hidden
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: accent, boxShadow: `0 0 10px ${accent}` }}
          />
        </div>

        {/* Progress */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
          <div
            className="mx-5 mb-3 h-px md:mx-10"
            style={{ backgroundColor: isTheme1 ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.2)" }}
          >
            <div
              ref={progressFillRef}
              className="h-full origin-left"
              style={{
                backgroundColor: accent,
                transform: "scaleX(0)",
              }}
            />
          </div>
          <div
            className="mx-5 flex items-center justify-between pb-4 font-mono text-[10px] uppercase tracking-[0.28em] md:mx-10"
            style={{ color: muted }}
          >
            <span ref={seqLabelRef}>SEQ 001 / {FRAME_COUNT}</span>
            <span className="hidden sm:inline">ONE9 TECH // EXPERIENCE</span>
            <span>Scroll ↓</span>
          </div>
        </div>

        {/* Dialogue cards — desktop */}
        {DIALOGUES.map((d) => {
          const visible = visibleCards.has(d.id);
          const position =
            d.id === "d1"
              ? "top-[22%] right-5 md:right-12"
              : d.id === "d2"
                ? "top-1/2 -translate-y-1/2 right-5 md:right-12"
                : "bottom-24 right-5 md:bottom-28 md:right-12";
          return (
            <div
              key={d.id}
              className={`pointer-events-none absolute ${position} z-20 hidden w-[400px] max-w-[90vw] md:block`}
            >
              <figure
                className={`rounded-2xl border p-6 backdrop-blur-xl transition-all duration-300 ease-out ${
                  visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                }`}
                style={{
                  backgroundColor: cardBg,
                  borderColor: cardBorder,
                }}
              >
                <blockquote
                  className="font-sans text-lg font-medium leading-snug tracking-tight"
                  style={{ color: cardFg }}
                >
                  &ldquo;{d.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 flex items-center justify-between">
                  <span className="font-sans text-sm" style={{ color: cardMuted }}>
                    {d.speaker}
                  </span>
                  <span
                    className="font-mono text-[10px] uppercase tracking-[0.24em]"
                    style={{ color: accent }}
                  >
                    {d.film}
                  </span>
                </figcaption>
              </figure>
            </div>
          );
        })}

        {/* Dialogue cards — mobile (single stack, only show visible) */}
        <div className="pointer-events-none absolute inset-x-0 top-[32%] z-20 flex flex-col gap-3 px-5 md:hidden">
          {DIALOGUES.map((d) => {
            const visible = visibleCards.has(d.id);
            return (
              <figure
                key={d.id}
                className={`rounded-2xl border p-4 backdrop-blur-xl transition-all duration-300 ease-out ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none absolute opacity-0 translate-y-3"
                }`}
                style={{
                  backgroundColor: cardBg,
                  borderColor: cardBorder,
                  display: visible ? "block" : "none",
                }}
              >
                <blockquote
                  className="font-sans text-sm font-medium leading-snug"
                  style={{ color: cardFg }}
                >
                  &ldquo;{d.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-3 flex items-center justify-between">
                  <span className="font-sans text-xs" style={{ color: cardMuted }}>
                    {d.speaker}
                  </span>
                  <span
                    className="font-mono text-[9px] uppercase tracking-[0.2em]"
                    style={{ color: accent }}
                  >
                    {d.film}
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>

        {/* Soft load badge — never covers the whole hero */}
        {!loaded || loadProgress < 0.98 ? (
          <div className="pointer-events-none absolute bottom-16 left-1/2 z-30 -translate-x-1/2 md:bottom-20">
            {loadProgress < 0.98 && (
              <div
                className="rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] backdrop-blur-md"
                style={{
                  color: accent,
                  borderColor: isTheme1 ? "rgba(197,170,104,0.35)" : "rgba(255,255,255,0.25)",
                  backgroundColor: isTheme1 ? "rgba(7,29,24,0.7)" : "rgba(38,37,34,0.65)",
                }}
              >
                Loading frames · {Math.round(loadProgress * 100)}%
              </div>
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Hero;
