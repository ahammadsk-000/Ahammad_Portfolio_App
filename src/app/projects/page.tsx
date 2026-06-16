import type { Metadata } from "next";
import { Projects } from "@/components/sections/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Featured AI products by Ahammadali Shaik — AI Coding Agent, Enterprise RAG, Interview Prep, Cinematic Video Generation, and Face Recognition Attendance.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="relative min-h-[80vh] pt-16">
      <Projects />
    </main>
  );
}
