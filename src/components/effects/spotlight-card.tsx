"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  /** enable subtle 3D tilt toward the cursor */
  tilt?: boolean;
  spotlightColor?: string;
};

/**
 * Glassmorphism card with a radial spotlight that follows the cursor and an
 * optional 3D tilt. The glowing border lives in `.glow-border`.
 */
export function SpotlightCard({
  children,
  className,
  tilt = true,
  spotlightColor = "rgba(124, 92, 246, 0.18)",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const rotX = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });
  const rotY = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });
  const rX = useTransform(rotX, (v) => `${v}deg`);
  const rY = useTransform(rotY, (v) => `${v}deg`);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    setPos({ x: px, y: py });
    if (tilt) {
      const midX = rect.width / 2;
      const midY = rect.height / 2;
      rotY.set(((px - midX) / midX) * 5);
      rotX.set((-(py - midY) / midY) * 5);
    }
  };

  const handleLeave = () => {
    setOpacity(0);
    rotX.set(0);
    rotY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={handleLeave}
      style={{ rotateX: tilt ? rX : 0, rotateY: tilt ? rY : 0, transformPerspective: 1000 }}
      className={cn(
        "glow-border group relative overflow-hidden rounded-2xl glass [transform-style:preserve-3d]",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 60%)`,
        }}
      />
      <div className="relative z-10 h-full [transform:translateZ(40px)]">{children}</div>
    </motion.div>
  );
}
