import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { getBlogPost, getAllBlogPosts } from "@/lib/content";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Blog Post" };
  const baseUrl = "https://solvigos.com";
  return {
    title: `${post.meta.title}`,
    description: post.meta.excerpt,
    openGraph: {
      title: `${post.meta.title} | Solvigos Blog`,
      description: post.meta.excerpt,
      url: `${baseUrl}/blog/${slug}`,
      type: "article",
      images: post.meta.image
        ? [{ url: `${baseUrl}${post.meta.image}`, width: 1200, height: 630, alt: post.meta.title }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.meta.title} | Solvigos Blog`,
      description: post.meta.excerpt,
      images: post.meta.image ? [`${baseUrl}${post.meta.image}`] : [],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllBlogPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const nextPost = allPosts[currentIndex + 1] || null;
  const prevPost = allPosts[currentIndex - 1] || null;

  return (
    <div className="bg-[#FFFCFA] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.meta.title,
            description: post.meta.excerpt,
            image: post.meta.image ? `${"https://solvigos.com"}${post.meta.image}` : undefined,
            datePublished: post.meta.date,
            author: {
              "@type": "Organization",
              name: "Solvigos",
            },
          }),
        }}
      />
      {/* Hero Section*/}
      <section className="relative">
        <div className="bg-[#F3F4FA] relative">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#007b7b] transition-colors mb-8"
            >
              <IconArrowLeft size={16} />
              Back to Resources
            </Link>

            {/* Date & Read Time */}
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
              <span>{post.meta.date}</span>
              <span className="w-1 h-1 rounded-full bg-gray-400" />
              <span>{post.meta.readTime}</span>
            </div>

            {/* Divider */}
            <hr className="border-gray-200 mb-6" />

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1A1A2E] leading-tight mb-8"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {post.meta.title}
            </h1>

            {/* Featured Image */}
            <div className="relative z-20 aspect-[6/5] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={post.meta.image}
                alt={post.meta.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-[#FFFCFA] pt-12 sm:pt-16 lg:pt-20 pb-8">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="prose prose-gray prose-lg max-w-none">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </section>

      {/* CTA Bar at end of article - article content width */}
      <section className="bg-[#FFFCFA] pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base sm:text-lg font-bold text-[#1A1A2E]">
                  Growth can be a great problem to have
                </p>
                <p className="text-xs text-gray-500">
                  As long as you have the right team.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#007b7b] hover:bg-[#00f4f4] hover:text-black text-white px-6 py-3 text-sm font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              >
                Talk to an Expert
                <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <IconArrowRight size={12} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-[#FFFCFA] py-10 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {prevPost && (
              <Link href={`/blog/${prevPost.slug}`} className="group p-6 border border-gray-200 rounded-xl hover:border-[#007b7b] transition-colors">
                <span className="text-xs text-gray-400 flex items-center gap-1 mb-2">
                  <IconArrowLeft size={12} /> Previous
                </span>
                <h3 className="text-sm font-bold text-[#1A1A2E] group-hover:text-[#007b7b] transition-colors leading-snug">
                  {prevPost.title}
                </h3>
              </Link>
            )}
            {nextPost && (
              <Link href={`/blog/${nextPost.slug}`} className="group p-6 border border-gray-200 rounded-xl hover:border-[#007b7b] transition-colors text-right sm:col-start-2">
                <span className="text-xs text-gray-400 flex items-center justify-end gap-1 mb-2">
                  Next <IconArrowRight size={12} />
                </span>
                <h3 className="text-sm font-bold text-[#1A1A2E] group-hover:text-[#007b7b] transition-colors leading-snug">
                  {nextPost.title}
                </h3>
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
