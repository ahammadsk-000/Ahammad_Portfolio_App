import type { Metadata } from "next";
import { Testimonials } from "@/components/sections/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What managers, leaders and collaborators say about working with Ahammadali Shaik across enterprise and AI projects.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <main className="relative min-h-[80vh] pt-16">
      <Testimonials />
    </main>
  );
}
