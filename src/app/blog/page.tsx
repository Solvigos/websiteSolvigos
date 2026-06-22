import { getAllBlogPosts } from "@/lib/content";
import { BlogContent } from "@/components/blog/BlogContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  return <BlogContent posts={posts} />;
}
