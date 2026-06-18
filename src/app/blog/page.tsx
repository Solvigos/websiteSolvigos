import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { getAllBlogPosts } from "@/lib/content";

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <section className="bg-ice py-16 sm:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge>Blog</Badge>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-navy">Our Blog</h1>
          <p className="mt-3 text-body max-w-xl mx-auto">
            Insights, tips, and best practices for customer support, CX, and business growth.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-body">No posts yet. Check back soon!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block border border-border rounded-xl bg-white p-6 hover:border-blue hover:shadow-lg transition-all"
              >
                <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-tint text-blue">
                  {post.category}
                </span>
                <h2 className="mt-3 text-lg font-semibold text-navy leading-snug">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-body leading-relaxed">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-body">{post.date}</span>
                  <span className="text-sm font-medium text-blue">Read More &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
