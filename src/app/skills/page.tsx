import type { Metadata } from "next";
import { Skills } from "@/components/sections/skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills of Ahammadali Shaik across backend (Python, Django), AI & LLM (LangChain, RAG, Agentic AI), AWS cloud, DevOps and databases.",
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  return (
    <main className="relative min-h-[80vh] pt-16">
      <Skills />
    </main>
  );
}
