"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, CheckCircle2, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Magnetic } from "@/components/effects/magnetic";
import { SpotlightCard } from "@/components/effects/spotlight-card";
import { cn } from "@/lib/utils";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function ProjectCaseStudy({ slug }: { slug: string }) {
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[index];
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <article className="relative mx-auto max-w-4xl px-6 pb-24 pt-32">
      {/* Hero */}
      <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.08 }}>
        <motion.div variants={fade} className="flex flex-wrap items-center gap-2">
          <Badge variant="accent">{project.year}</Badge>
          <Badge variant="outline">{project.status}</Badge>
          <Badge variant="outline">{project.role}</Badge>
        </motion.div>

        <motion.h1
          variants={fade}
          className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl"
        >
          {project.title}
        </motion.h1>
        <motion.p variants={fade} className="mt-3 text-lg text-accent">
          {project.tagline}
        </motion.p>
        <motion.p
          variants={fade}
          className="mt-5 max-w-2xl text-balance leading-relaxed text-muted-foreground"
        >
          {project.overview}
        </motion.p>

        <motion.div variants={fade} className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t} variant="accent">
              {t}
            </Badge>
          ))}
        </motion.div>

        <motion.div variants={fade} className="mt-7 flex gap-3">
          <Magnetic>
            <Button asChild>
              <a href={project.github} target="_blank" rel="noreferrer">
                <Github /> View Code
              </a>
            </Button>
          </Magnetic>
          {project.demo !== "#" && (
            <Magnetic>
              <Button asChild variant="outline">
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <ExternalLink /> Live Demo
                </a>
              </Button>
            </Magnetic>
          )}
        </motion.div>
      </motion.div>

      {/* Animated banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className={cn(
          "relative mt-12 aspect-[16/7] w-full overflow-hidden rounded-3xl bg-gradient-to-br ring-1 ring-white/10",
          project.gradient
        )}
      >
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={`${project.title} application preview`}
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className={cn(
                project.imageContain
                  ? "object-contain p-4"
                  : "object-cover object-top"
              )}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-grid-pattern bg-[size:32px_32px] opacity-40" />
            <div className="shimmer-bg absolute inset-0 animate-shimmer" />
            <motion.div
              className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl glass-strong"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <project.icon className="h-12 w-12 text-white" />
            </motion.div>
          </>
        )}
      </motion.div>

      {/* Outcomes */}
      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {project.outcomes.map((o, i) => (
          <motion.div
            key={o.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <SpotlightCard className="p-5 text-center" tilt={false}>
              <div className="gradient-text text-2xl font-bold">{o.value}</div>
              <p className="mt-1 text-sm text-muted-foreground">{o.label}</p>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>

      {/* Challenge / Solution */}
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <CaseBlock title="The Challenge" body={project.challenge} />
        <CaseBlock title="The Solution" body={project.solution} />
      </div>

      {/* Architecture */}
      <section className="mt-14">
        <h2 className="text-xl font-bold tracking-tight">Architecture</h2>
        <ul className="mt-5 space-y-3">
          {project.architecture.map((a, i) => (
            <motion.li
              key={a}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-3 rounded-xl glass p-4"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">
                {i + 1}
              </span>
              <span className="text-sm text-foreground/90">{a}</span>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Key features */}
      <section className="mt-14">
        <h2 className="text-xl font-bold tracking-tight">Key Features</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {project.features.map((f) => (
            <div key={f} className="flex items-center gap-2.5 rounded-xl glass p-4 text-sm">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
              {f}
            </div>
          ))}
        </div>
      </section>

      {/* Narrative sections */}
      {project.sections.map((s) => (
        <section key={s.heading} className="mt-14">
          <h2 className="text-xl font-bold tracking-tight">{s.heading}</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
        </section>
      ))}

      {/* Next project */}
      <Link href={`/projects/${next.slug}`} className="group mt-20 block">
        <SpotlightCard className="flex items-center justify-between p-6" tilt={false}>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Next project
            </p>
            <p className="mt-1 text-xl font-semibold tracking-tight">{next.title}</p>
          </div>
          <ArrowRight className="h-6 w-6 text-accent transition-transform group-hover:translate-x-1" />
        </SpotlightCard>
      </Link>

      <div className="mt-10 text-center">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          See all projects <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

function CaseBlock({ title, body }: { title: string; body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl glass p-6"
    >
      <h2 className="text-xl font-bold tracking-tight">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </motion.div>
  );
}
