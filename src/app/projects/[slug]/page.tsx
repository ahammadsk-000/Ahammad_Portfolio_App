import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS, PERSONAL, SITE_URL } from "@/lib/data";
import { ProjectCaseStudy } from "@/components/sections/project-case-study";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.overview,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${PERSONAL.name}`,
      description: project.overview,
      url: `${SITE_URL}/projects/${project.slug}`,
      images: ["/og.svg"],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!PROJECTS.some((p) => p.slug === slug)) notFound();

  return (
    <main className="relative min-h-[80vh]">
      <ProjectCaseStudy slug={slug} />
    </main>
  );
}
