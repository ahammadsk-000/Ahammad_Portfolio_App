"use client";

import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/effects/spotlight-card";
import { StaggerContainer, staggerItem } from "@/components/ui/reveal";

export function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognized for high-impact delivery"
          description="Awards and milestones earned across a 7.4+ year journey building enterprise software."
        />

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENTS.map((a) => (
            <motion.div key={a.title} variants={staggerItem}>
              <SpotlightCard className="flex h-full flex-col items-center p-6 text-center">
                <div className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/20 to-orange-500/10 ring-1 ring-white/10">
                  <a.icon className="h-8 w-8 text-amber-300" />
                  <span className="absolute inset-0 rounded-2xl ring-1 ring-amber-300/30 animate-pulse-glow" />
                </div>
                <h3 className="text-base font-semibold tracking-tight">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {a.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
