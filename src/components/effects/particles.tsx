"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  pulse: number;
};

/**
 * AI-themed neural-network canvas background:
 *  - drifting nodes connected by constellation lines
 *  - signal pulses that travel along the brightest connections
 *  - subtle cursor gravity that nudges nearby nodes
 * Pauses when the tab is hidden and respects prefers-reduced-motion.
 */
export function Particles({ density = 0.00009 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let nodes: Node[] = [];
    let raf = 0;
    let width = 0;
    let height = 0;
    let t = 0;
    const mouse = { x: -9999, y: -9999 };
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const init = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      const count = Math.min(130, Math.floor(width * height * density));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 1.8 + 0.5,
        alpha: Math.random() * 0.5 + 0.2,
        pulse: Math.random() * Math.PI * 2,
      }));
    };

    const draw = () => {
      t += 0.01;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i];
        p.x += p.vx;
        p.y += p.vy;

        // cursor gravity
        const mdx = mouse.x - p.x;
        const mdy = mouse.y - p.y;
        const mdist = Math.hypot(mdx, mdy);
        if (mdist < 160 && mdist > 0) {
          const force = (160 - mdist) / 160;
          p.x += (mdx / mdist) * force * 0.6;
          p.y += (mdy / mdist) * force * 0.6;
        }

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const twinkle = (Math.sin(t * 2 + p.pulse) + 1) * 0.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 139, 250, ${p.alpha * (0.5 + twinkle * 0.5)})`;
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const q = nodes[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            const lineAlpha = 0.14 * (1 - dist / 130);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(96, 165, 250, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();

            // travelling signal pulse on close connections
            if (dist < 90) {
              const prog = (Math.sin(t * 1.5 + (i + j) * 0.6) + 1) * 0.5;
              const sx = p.x + (q.x - p.x) * prog;
              const sy = p.y + (q.y - p.y) * prog;
              ctx.beginPath();
              ctx.arc(sx, sy, 1.3, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(34, 211, 238, ${0.5 * (1 - dist / 90)})`;
              ctx.fill();
            }
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      init();
      ctx.scale(dpr, dpr);
    };
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else if (!reduce) raf = requestAnimationFrame(draw);
    };

    init();
    draw();
    if (reduce) cancelAnimationFrame(raf);

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
