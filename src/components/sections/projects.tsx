"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, FileSearch } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/effects/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StaggerContainer, staggerItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

/**
 * Project preview: shows a self-hosted screenshot (from /public/projects) when
 * the project provides an `image`, falling back to an animated code-style
 * mockup for projects with no image (or if the image fails to load).
 */
function ProjectPreview({
  gradient,
  icon: Icon,
  image,
  imageContain,
  title,
}: {
  gradient: string;
  icon: React.ElementType;
  image?: string;
  imageContain?: boolean;
  title: string;
}) {
  const [failed, setFailed] = useState(false);
  const showShot = Boolean(image) && !failed;

  return (
    <div
      className={cn(
        "relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-gradient-to-br ring-1 ring-white/10",
        gradient
      )}
    >
      {showShot ? (
        <>
          <Image
            src={image as string}
            alt={`${title} application preview`}
            fill
            sizes="(max-width: 1024px) 100vw, 1100px"
            className={cn(
              "transition-transform duration-700 group-hover:scale-[1.03]",
              imageContain ? "object-contain p-3" : "object-cover object-top"
            )}
            onError={() => setFailed(true)}
          />
          {/* readability + brand wash */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
        </>
      ) : (
        <>
          {/* grid + shimmer */}
          <div className="absolute inset-0 bg-grid-pattern bg-[size:24px_24px] opacity-40" />
          <div className="shimmer-bg absolute inset-0 animate-shimmer" />

          {/* faux terminal */}
          <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/10 bg-black/40 p-3 backdrop-blur-md">
            <div className="mb-2 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <div className="space-y-1.5">
              <div className="h-1.5 w-3/4 rounded-full bg-white/20" />
              <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
              <div className="h-1.5 w-2/3 rounded-full bg-accent/30" />
            </div>
          </div>
        </>
      )}

      {/* floating glyph (always shown) */}
      <motion.div
        className="absolute right-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl glass-strong"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon className="h-7 w-7 text-white" />
      </motion.div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="AI products built end-to-end"
          description="Production-minded systems spanning agentic AI, RAG, voice, generative video, and computer vision."
        />

        <StaggerContainer className="grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.slug}
              variants={staggerItem}
              className={cn(i === 0 && "lg:col-span-2")}
            >
              <SpotlightCard className="h-full p-5" tilt={false}>
                <ProjectPreview
                  gradient={project.gradient}
                  icon={project.icon}
                  image={project.image}
                  imageContain={project.imageContain}
                  title={project.title}
                />

                <div className="mt-5 flex flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="text-xl font-semibold tracking-tight transition-colors hover:text-accent"
                      >
                        {project.title}
                      </Link>
                      <p className="mt-1 text-sm text-accent">
                        {project.tagline}
                      </p>
                    </div>
                    <Link
                      href={`/projects/${project.slug}`}
                      aria-label={`Open ${project.title} case study`}
                    >
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                    </Link>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.features.map((f) => (
                      <span
                        key={f}
                        className="rounded-full bg-white/[0.05] px-2.5 py-1 text-xs text-foreground/80 ring-1 ring-white/10"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="accent">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <Button asChild size="sm">
                      <Link href={`/projects/${project.slug}`}>
                        <FileSearch /> Case Study
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github /> Code
                      </a>
                    </Button>
                    {project.demo !== "#" && (
                      <Button asChild variant="ghost" size="sm">
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          <ExternalLink /> Live Demo
                        </a>
                      </Button>
                    )}
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
