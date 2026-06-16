import type { Metadata } from "next";
import { Experience } from "@/components/sections/experience";
import { Achievements } from "@/components/sections/achievements";
import { Certifications } from "@/components/sections/certifications";
import { SectionDivider } from "@/components/effects/section-divider";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience of Ahammadali Shaik at Cognizant (JP Morgan Chase) and Accenture, plus awards and certifications.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <main className="relative min-h-[80vh] pt-16">
      <Experience />
      <SectionDivider />
      <Achievements />
      <Certifications />
    </main>
  );
}
