"use client";

import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/effects/spotlight-card";
import { StaggerContainer, staggerItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit spanning backend, AI & cloud"
          description="Proficiency built over years of shipping production systems — from REST APIs to multi-agent AI and AWS infrastructure."
        />

        <StaggerContainer className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((cat) => (
            <motion.div key={cat.title} variants={staggerItem}>
              <SpotlightCard className="h-full p-6" tilt={false}>
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className={cn(
                      "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ring-1 ring-white/10",
                      cat.accent
                    )}
                  >
                    <cat.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                <ul className="space-y-3.5">
                  {cat.skills.map((skill, i) => (
                    <li key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="font-medium text-foreground/90">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                        <motion.div
                          className={cn(
                            "h-full rounded-full bg-gradient-to-r",
                            cat.accent
                          )}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.15 + i * 0.06,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
