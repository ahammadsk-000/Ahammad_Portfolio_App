"use client";

import { motion } from "framer-motion";

/** Animated gradient divider with a travelling glow — separates sections. */
export function SectionDivider() {
  return (
    <div aria-hidden className="relative mx-auto h-px w-full max-w-6xl px-6">
      <div className="relative h-px w-full overflow-hidden bg-gradient-to-r from-transparent via-white/10 to-transparent">
        <motion.span
          className="absolute top-1/2 h-px w-32 -translate-y-1/2 bg-gradient-to-r from-transparent via-accent to-transparent"
          animate={{ x: ["-10%", "320%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
