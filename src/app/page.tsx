import { Hero } from "@/components/sections/hero";
import { Explore } from "@/components/sections/explore";
import { TechMarquee } from "@/components/effects/tech-marquee";
import { SectionDivider } from "@/components/effects/section-divider";
import { PERSONAL, SITE_URL, PROJECTS, BLOG_POSTS } from "@/lib/data";

// JSON-LD structured data for rich search results.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PERSONAL.name,
  url: SITE_URL,
  jobTitle: "Senior Python Backend Developer, AI Engineer, AWS Developer",
  email: `mailto:${PERSONAL.email}`,
  telephone: PERSONAL.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Guntur",
    addressRegion: "Andhra Pradesh",
    addressCountry: "India",
  },
  sameAs: [PERSONAL.github, PERSONAL.linkedin],
  knowsAbout: [
    "Python",
    "Django",
    "REST APIs",
    "AWS",
    "LangChain",
    "RAG",
    "Agentic AI",
    "LLM Engineering",
  ],
  worksFor: { "@type": "Organization", name: "Cognizant Technology Solutions" },
  hasOccupation: PROJECTS.map((p) => ({ "@type": "CreativeWork", name: p.title })),
  blogPost: BLOG_POSTS.map((b) => ({
    "@type": "BlogPosting",
    headline: b.title,
    url: `${SITE_URL}/blog/${b.slug}`,
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="relative">
        <Hero />
        <TechMarquee />
        <SectionDivider />
        <Explore />
      </main>
    </>
  );
}
