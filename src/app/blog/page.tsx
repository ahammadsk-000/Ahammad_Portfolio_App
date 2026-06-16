import type { Metadata } from "next";
import { BlogList } from "@/components/sections/blog-list";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical write-ups on building RAG systems, agentic AI, local LLMs, and scalable Python backends by Ahammadali Shaik.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main className="relative min-h-[80vh]">
      <BlogList />
    </main>
  );
}
