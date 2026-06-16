"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Github, FileText } from "lucide-react";
import { NAV_LINKS, PERSONAL } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/effects/magnetic";
import { cn } from "@/lib/utils";

/** A nav link is active when the current route matches it (or is nested under it). */
function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const initials = PERSONAL.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 md:px-6",
          scrolled ? "glass-strong shadow-2xl shadow-black/40" : "bg-transparent"
        )}
      >
        <Link href="/" className="flex items-center gap-2.5" aria-label="Home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
            {initials}
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            {PERSONAL.shortName}
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const activeLink = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    activeLink
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {activeLink && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/[0.08]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="ghost" size="icon" aria-label="GitHub">
            <a href={PERSONAL.github} target="_blank" rel="noreferrer">
              <Github />
            </a>
          </Button>
          <Magnetic>
            <Button asChild size="sm">
              <a href={PERSONAL.resumeUrl} target="_blank" rel="noreferrer">
                <FileText /> Resume
              </a>
            </Button>
          </Magnetic>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl text-foreground lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="absolute top-20 w-[calc(100%-2rem)] max-w-5xl rounded-2xl glass-strong p-4 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-white/[0.06] hover:text-foreground",
                      isActive(pathname, link.href)
                        ? "bg-white/[0.06] text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex gap-2 border-t border-white/10 pt-3">
              <Button asChild variant="outline" className="flex-1">
                <a href={PERSONAL.github} target="_blank" rel="noreferrer">
                  <Github /> GitHub
                </a>
              </Button>
              <Button asChild className="flex-1">
                <a href={PERSONAL.resumeUrl} target="_blank" rel="noreferrer">
                  <FileText /> Resume
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
