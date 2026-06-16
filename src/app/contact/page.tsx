import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ahammadali Shaik — Senior Python Backend Developer & AI Engineer. Open to senior backend, AI engineering and cloud roles.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="relative min-h-[80vh] pt-16">
      <Contact />
    </main>
  );
}
