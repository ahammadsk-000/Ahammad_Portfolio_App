"use client";

import { motion } from "framer-motion";
import { Building2, CheckCircle2 } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title="A track record across enterprise & finance"
          description="Delivering mission-critical systems for global clients with a focus on resilience, automation, and scale."
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 top-2 h-full w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col gap-6 md:flex-row md:items-center ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Node */}
                <div className="absolute left-5 top-2 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full glass-strong ring-1 ring-accent/40 md:left-1/2">
                  <exp.icon className="h-5 w-5 text-accent" />
                </div>

                {/* Spacer for alternating layout on desktop */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-14 w-full md:ml-0 md:w-1/2 md:px-8">
                  <div className="glow-border rounded-2xl glass p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="accent">{exp.period}</Badge>
                      {exp.client && (
                        <Badge variant="outline">Client: {exp.client}</Badge>
                      )}
                    </div>
                    <h3 className="mt-3 flex items-center gap-2 text-xl font-semibold tracking-tight">
                      <Building2 className="h-5 w-5 text-muted-foreground" />
                      {exp.company}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent">
                      {exp.role}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {exp.project ? `${exp.project} · ` : ""}
                      {exp.location}
                    </p>
                    <ul className="mt-4 space-y-2.5">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent/80" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
