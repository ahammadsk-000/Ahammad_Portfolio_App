import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS, PERSONAL, SITE_URL } from "@/lib/data";
import { BlogArticle } from "@/components/sections/blog-article";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Article not found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: `${post.title} — ${PERSONAL.name}`,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      images: ["/og.svg"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = BLOG_POSTS.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const post = BLOG_POSTS[index];
  const next = BLOG_POSTS[(index + 1) % BLOG_POSTS.length];

  return (
    <main className="relative min-h-[80vh]">
      <BlogArticle post={post} next={next} />
    </main>
  );
}
