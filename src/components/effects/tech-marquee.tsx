"use client";

import { MARQUEE_TECH } from "@/lib/data";

/**
 * Infinite, seamless marquee of core technologies.
 * The track is duplicated so the -50% translate loops without a seam.
 * Pauses on hover.
 */
export function TechMarquee() {
  const items = [...MARQUEE_TECH, ...MARQUEE_TECH];

  return (
    <div className="group relative w-full overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused]">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-foreground/70 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
