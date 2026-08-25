"use client";

import { useEffect, useRef } from "react";

/**
 * Full-page brand backdrop: warm dusk sky, city skyline, and falling binary rain.
 * Fixed behind all content so every page carries the theme edge to edge.
 *
 * Motion is skipped entirely for `prefers-reduced-motion` users and paused when
 * the tab is hidden; the static gradient + skyline still read as the brand.
 */
export default function BackgroundTheme() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let frame = 0;
    let columns: { x: number; y: number; speed: number; length: number; glyphs: string[] }[] = [];
    let width = 0;
    let height = 0;
    let running = false;
    let last = 0;

    const FONT_SIZE = 15;

    const randomGlyphs = (n: number) =>
      Array.from({ length: n }, () => (Math.random() > 0.5 ? "1" : "0"));

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = `600 ${FONT_SIZE}px ui-monospace, SFMono-Regular, Menlo, monospace`;
      ctx.textBaseline = "top";

      // Fewer, wider-spaced columns on small screens keeps phones smooth.
      const spacing = width < 768 ? 54 : 42;
      const count = Math.ceil(width / spacing);
      columns = Array.from({ length: count }, (_, i) => {
        const length = 8 + Math.floor(Math.random() * 16);
        return {
          x: i * spacing + spacing * 0.25,
          y: -Math.random() * height * 1.6,
          speed: 18 + Math.random() * 46,
          length,
          glyphs: randomGlyphs(length),
        };
      });
    };

    const draw = (now: number) => {
      if (!running) return;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      ctx.clearRect(0, 0, width, height);

      for (const col of columns) {
        col.y += col.speed * dt;
        if (col.y - col.length * FONT_SIZE > height) {
          col.y = -Math.random() * height * 0.6;
          col.speed = 18 + Math.random() * 46;
          col.glyphs = randomGlyphs(col.glyphs.length);
        }

        for (let i = 0; i < col.glyphs.length; i += 1) {
          const y = col.y - i * FONT_SIZE;
          if (y < -FONT_SIZE || y > height) continue;
          const fade = 1 - i / col.glyphs.length;
          if (i === 0) {
            ctx.fillStyle = "rgba(253, 246, 227, 0.72)";
          } else {
            ctx.fillStyle = `rgba(224, 176, 60, ${(fade * 0.42).toFixed(3)})`;
          }
          ctx.fillText(col.glyphs[i], col.x, y);
        }

        // Occasionally flip a glyph so the stream never looks like a looping texture.
        if (Math.random() > 0.965) {
          const idx = Math.floor(Math.random() * col.glyphs.length);
          col.glyphs[idx] = Math.random() > 0.5 ? "1" : "0";
        }
      }

      frame = window.requestAnimationFrame(draw);
    };

    const start = () => {
      if (running || reduceMotion.matches || document.hidden) return;
      running = true;
      last = performance.now();
      frame = window.requestAnimationFrame(draw);
    };

    const stop = () => {
      running = false;
      window.cancelAnimationFrame(frame);
    };

    const onResize = () => {
      build();
      if (reduceMotion.matches) {
        ctx.clearRect(0, 0, width, height);
      }
    };

    const onVisibility = () => (document.hidden ? stop() : start());
    const onMotionChange = () => {
      stop();
      ctx.clearRect(0, 0, width, height);
      start();
    };

    build();
    start();

    window.addEventListener("resize", onResize, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    reduceMotion.addEventListener("change", onMotionChange);

    return () => {
      stop();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      reduceMotion.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Dusk sky */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_85%_at_50%_0%,#3a2a17_0%,#1b1610_38%,#0b0d13_72%,#07080c_100%)]" />
      {/* Warm horizon glow */}
      <div className="absolute inset-x-0 bottom-0 h-[62vh] bg-[radial-gradient(85%_100%_at_50%_105%,rgba(227,178,60,0.28)_0%,rgba(173,122,20,0.12)_38%,transparent_72%)]" />
      {/* Binary rain */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-70" />
      {/* Skyline silhouette */}
      <Skyline />
      {/* Legibility veil */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,12,0.72)_0%,rgba(7,8,12,0.58)_45%,rgba(7,8,12,0.86)_100%)]" />
    </div>
  );
}

function Skyline() {
  return (
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className="absolute inset-x-0 bottom-0 h-[38vh] w-full min-h-[180px]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="tic-skyline" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1610" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#07080c" stopOpacity="0.98" />
        </linearGradient>
      </defs>
      <path
        fill="url(#tic-skyline)"
        d="M0 250 h48 v-52 h34 v52 h40 v-88 h30 v-26 h26 v26 h30 v88 h44 v-42 h52 v42 h38 v-118 h22 v-30 h24 v30 h24 v118 h46 v-64 h56 v64 h40 v-96 h34 v-34 h26 v34 h32 v96 h44 v-56 h48 v56 h42 v-140 h28 v-38 h26 v38 h28 v140 h46 v-72 h54 v72 h40 v-104 h34 v-30 h26 v30 h30 v104 h44 v-48 h50 v48 h38 v-90 h36 v90 h40 V320 H0 Z"
      />
    </svg>
  );
}
