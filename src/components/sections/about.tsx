"use client";

import { motion } from "framer-motion";
import { ABOUT_CARDS, PERSONAL } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/effects/spotlight-card";
import { StaggerContainer, staggerItem } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Engineering across the full intelligence stack"
          description={`From robust Python backends to autonomous AI agents — ${PERSONAL.experience} of turning complex requirements into reliable, scalable products.`}
        />

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ABOUT_CARDS.map((card) => (
            <motion.div key={card.title} variants={staggerItem}>
              <SpotlightCard className="h-full p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 ring-1 ring-white/10">
                  <card.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
