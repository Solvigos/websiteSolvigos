import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getBlogPost, getAllBlogPosts } from "@/lib/content";

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

  return (
    <section className="bg-ice py-16 sm:py-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Badge>{post.meta.category}</Badge>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-navy leading-tight">
          {post.meta.title}
        </h1>
        <p className="mt-2 text-sm text-body">{post.meta.date}</p>
        <div className="mt-8 bg-white border border-border rounded-xl p-6 sm:p-8">
          <div className="prose prose-gray max-w-none">
            <MDXRemote source={post.content} />
          </div>
        </div>
        <div className="mt-8 text-center">
          <Button href="/blog" variant="secondary">
            &larr; Back to Blog
          </Button>
        </div>
      </article>
    </section>
  );
}
