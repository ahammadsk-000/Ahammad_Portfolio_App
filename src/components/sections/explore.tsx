"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EXPLORE_CARDS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/effects/spotlight-card";
import { StaggerContainer, staggerItem } from "@/components/ui/reveal";

/** Home-page grid that routes visitors to each dedicated page. */
export function Explore() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Explore"
          title="Dive into the portfolio"
          description="Each area lives on its own page — pick where you'd like to start."
        />

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EXPLORE_CARDS.map((card) => (
            <motion.div key={card.href} variants={staggerItem}>
              <Link href={card.href} className="group block h-full">
                <SpotlightCard className="flex h-full items-start gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 ring-1 ring-white/10 transition-transform group-hover:scale-110">
                    <card.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">
                        {card.label}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                </SpotlightCard>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
