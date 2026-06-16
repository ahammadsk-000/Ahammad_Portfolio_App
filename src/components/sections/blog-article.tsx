"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/effects/spotlight-card";

export function BlogArticle({ post, next }: { post: BlogPost; next: BlogPost }) {
  return (
    <article className="mx-auto max-w-3xl px-6 pb-24 pt-32">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <Badge variant="accent">{post.category}</Badge>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" /> {post.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" /> {post.readTime}
          </span>
        </div>
        <h1 className="mt-5 text-balance text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
          {post.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
      </motion.div>

      <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="mt-10 space-y-6">
        {post.content.map((block, i) => {
          switch (block.type) {
            case "h2":
              return (
                <h2
                  key={i}
                  className="pt-4 text-xl font-bold tracking-tight text-foreground"
                >
                  {block.text}
                </h2>
              );
            case "p":
              return (
                <p key={i} className="leading-relaxed text-muted-foreground">
                  {block.text}
                </p>
              );
            case "ul":
              return (
                <ul key={i} className="space-y-2">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            case "code":
              return (
                <pre
                  key={i}
                  className="overflow-x-auto rounded-xl border border-white/10 bg-black/50 p-4 font-mono text-sm text-emerald-200/90"
                >
                  <code>{block.code}</code>
                </pre>
              );
            case "quote":
              return (
                <blockquote
                  key={i}
                  className="border-l-2 border-accent pl-5 text-lg font-medium italic text-foreground/90"
                >
                  {block.text}
                </blockquote>
              );
            default:
              return null;
          }
        })}
      </div>

      <Link href={`/blog/${next.slug}`} className="group mt-16 block">
        <SpotlightCard className="flex items-center justify-between p-6" tilt={false}>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Next article
            </p>
            <p className="mt-1 text-lg font-semibold tracking-tight">{next.title}</p>
          </div>
          <ArrowRight className="h-6 w-6 text-accent transition-transform group-hover:translate-x-1" />
        </SpotlightCard>
      </Link>

      <div className="mt-8 text-center">
        <Link
          href="/blog"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to all articles
        </Link>
      </div>
    </article>
  );
}
