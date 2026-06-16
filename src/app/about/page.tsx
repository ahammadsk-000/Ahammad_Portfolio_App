import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Education } from "@/components/sections/education";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Ahammadali Shaik — Senior Python Backend Developer & AI Engineer. Background, focus areas, education and languages.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="relative min-h-[80vh] pt-16">
      <About />
      <Education />
    </main>
  );
}
