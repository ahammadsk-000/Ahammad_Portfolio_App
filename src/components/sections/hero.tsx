"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, Sparkles } from "lucide-react";
import { PERSONAL, STATS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/effects/magnetic";
import { Typewriter } from "@/components/effects/typewriter";
import { AnimatedCounter } from "@/components/effects/animated-counter";
import { SpotlightCard } from "@/components/effects/spotlight-card";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-20 pt-32"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-5xl flex-col items-center text-center"
      >
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for senior roles &amp; AI projects
          </span>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground"
        >
          <MapPin className="h-4 w-4 text-accent" /> {PERSONAL.location}
        </motion.div>

        <motion.span
          variants={item}
          className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-accent"
        >
          Hello, I&apos;m
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-3 text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
        >
          <span className="gradient-text">{PERSONAL.name}</span>
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-5 flex min-h-[1.75rem] items-center gap-2 text-lg font-semibold text-foreground/90 sm:text-xl"
        >
          <Sparkles className="h-5 w-5 text-accent" />
          <Typewriter words={[...PERSONAL.roles]} />
        </motion.div>

        <motion.p
          variants={item}
          className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground"
        >
          {PERSONAL.heroSubtitle}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Magnetic>
            <Button asChild size="lg">
              <Link href="/projects">
                View Projects <ArrowRight />
              </Link>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button asChild size="lg" variant="outline">
              <a href={PERSONAL.resumeUrl} download>
                <Download /> Download Resume
              </a>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button asChild size="lg" variant="ghost">
              <Link href="/contact">
                <Mail /> Contact Me
              </Link>
            </Button>
          </Magnetic>
        </motion.div>

        {/* Stat cards */}
        <motion.div
          variants={item}
          className="mt-16 grid w-full grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <SpotlightCard key={stat.label} className="p-5">
              <stat.icon className="mb-3 h-6 w-6 text-accent" />
              <div className="text-2xl font-bold tracking-tight sm:text-3xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </SpotlightCard>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.span
            className="h-2 w-1 rounded-full bg-accent"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
