"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { PERSONAL } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/effects/spotlight-card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/effects/magnetic";

const channels = [
  { icon: Mail, label: "Email", value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
  { icon: Github, label: "GitHub", value: PERSONAL.githubHandle, href: PERSONAL.github },
  { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: PERSONAL.linkedin },
  { icon: MapPin, label: "Location", value: PERSONAL.location, href: "#" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open the user's mail client pre-filled — no backend required.
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${PERSONAL.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something intelligent"
          description="Have a role, project, or idea in mind? I'd love to hear from you. I usually reply within a day."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Channels */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            {channels.map((c) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ x: 4 }}
                className="glow-border flex items-center gap-4 rounded-2xl glass p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 ring-1 ring-white/10">
                  <c.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="text-sm font-medium text-foreground">{c.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Form */}
          <SpotlightCard className="p-6 lg:col-span-3 md:p-8" tilt={false}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  required
                  placeholder="Tell me about your project or role…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <Magnetic className="self-start">
                <Button type="submit" size="lg" disabled={sent}>
                  {sent ? (
                    <>
                      <CheckCircle2 /> Opening your mail app…
                    </>
                  ) : (
                    <>
                      <Send /> Send Message
                    </>
                  )}
                </Button>
              </Magnetic>
            </form>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
