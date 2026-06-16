"use client";

import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import { EDUCATION, LANGUAGES } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/effects/spotlight-card";
import { StaggerContainer, staggerItem } from "@/components/ui/reveal";

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Education & Languages"
          title="Foundations & communication"
          description="An engineering foundation in Electronics & Communication, plus full professional fluency across three languages."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Education timeline */}
          <div className="lg:col-span-2">
            <StaggerContainer className="space-y-4">
              {EDUCATION.map((e) => (
                <motion.div key={e.degree} variants={staggerItem}>
                  <SpotlightCard className="flex items-start gap-4 p-5" tilt={false}>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 ring-1 ring-white/10">
                      <e.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-base font-semibold tracking-tight">
                          {e.degree}
                        </h3>
                        <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                          {e.score}
                        </span>
                      </div>
                      <p className="mt-0.5 text-sm text-foreground/80">{e.field}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {e.school} · {e.location} · {e.year}
                      </p>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>

          {/* Languages */}
          <SpotlightCard className="p-6" tilt={false}>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-600/20 ring-1 ring-white/10">
                <Languages className="h-5 w-5 text-emerald-300" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">Languages</h3>
            </div>
            <ul className="space-y-4">
              {LANGUAGES.map((lang, i) => (
                <li key={lang.name}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-xs text-muted-foreground">{lang.level}</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 + i * 0.1 }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
