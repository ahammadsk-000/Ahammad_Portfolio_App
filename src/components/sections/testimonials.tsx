"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/effects/spotlight-card";
import { StaggerContainer, staggerItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by teams & leaders"
          description="What managers and collaborators say about working with me across enterprise and AI projects."
        />

        <StaggerContainer className="grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <motion.div key={t.name} variants={staggerItem}>
              <SpotlightCard className="flex h-full flex-col p-6 md:p-8" tilt={false}>
                <Quote className="h-8 w-8 text-accent/40" />
                <p className="mt-4 flex-1 text-base leading-relaxed text-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white",
                      t.accent
                    )}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
