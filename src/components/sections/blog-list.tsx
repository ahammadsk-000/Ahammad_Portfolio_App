"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";
import { SpotlightCard } from "@/components/effects/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function BlogList() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-14 text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
          Writing
        </span>
        <h1 className="mt-4 text-balance text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
          Notes on <span className="gradient-text">AI & Backend Engineering</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-muted-foreground">
          Practical write-ups on building RAG systems, agentic AI, and scalable
          Python backends — from the trenches of real projects.
        </p>
      </motion.div>

      <div className="grid gap-6">
        {BLOG_POSTS.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Link href={`/blog/${post.slug}`} className="group block">
              <SpotlightCard className="p-6 md:p-8" tilt={false}>
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <Badge variant="accent">{post.category}</Badge>
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5" /> {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" /> {post.readTime}
                      </span>
                    </div>
                    <h2 className="mt-3 text-xl font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-2xl">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </div>
                  <div
                    className={cn(
                      "hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ring-1 ring-white/10 transition-transform group-hover:scale-110 md:flex",
                      post.gradient
                    )}
                  >
                    <ArrowUpRight className="h-6 w-6 text-white" />
                  </div>
                </div>
              </SpotlightCard>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
