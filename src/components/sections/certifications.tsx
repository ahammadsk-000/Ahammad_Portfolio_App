"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/effects/spotlight-card";
import { StaggerContainer, staggerItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Continuously leveling up"
          description="Focused learning across cloud, programming, and modern AI/ML to stay at the edge of the field."
        />

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map((cert) => (
            <motion.div key={cert.title} variants={staggerItem}>
              <SpotlightCard className="h-full p-6">
                <div
                  className={cn(
                    "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ring-1 ring-white/10",
                    cert.gradient
                  )}
                >
                  <cert.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-accent">
                  <BadgeCheck className="h-3.5 w-3.5" /> {cert.area}
                </div>
                <h3 className="mt-2 text-base font-semibold tracking-tight">
                  {cert.title}
                </h3>
              </SpotlightCard>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
