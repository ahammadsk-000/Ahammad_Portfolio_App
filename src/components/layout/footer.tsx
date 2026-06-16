"use client";

import Link from "next/link";
import { Github, Mail, Linkedin, ArrowUp } from "lucide-react";
import { PERSONAL, NAV_LINKS } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Footer() {
  const year = 2026; // build-time constant; avoids hydration drift

  return (
    <footer className="relative border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <Link href="/" className="text-lg font-bold gradient-text">
              {PERSONAL.name}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {PERSONAL.title}. Based in {PERSONAL.location}. Open to senior
              backend, AI engineering, and cloud opportunities.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-2">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-2">
            <Button asChild variant="outline" size="icon" aria-label="GitHub">
              <a href={PERSONAL.github} target="_blank" rel="noreferrer">
                <Github />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" aria-label="LinkedIn">
              <a href={PERSONAL.linkedin} target="_blank" rel="noreferrer">
                <Linkedin />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" aria-label="Email">
              <a href={`mailto:${PERSONAL.email}`}>
                <Mail />
              </a>
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {PERSONAL.name}.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            Back home <ArrowUp className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
