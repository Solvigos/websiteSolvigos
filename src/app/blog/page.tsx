import { getAllBlogPosts } from "@/lib/content";
import { BlogContent } from "@/components/blog/BlogContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Support & CX Blog",
  description:
    "Insights, guides, and best practices on customer support outsourcing, technical support, BPO operations, CRM implementation, and AI chatbot setup.",
  openGraph: {
    title: "Blog | Solvigos",
    description:
      "Insights, guides, and best practices on customer support outsourcing and customer experience.",
    url: "https://solvigos.com/blog",
    images: [
      {
        url: "/og_image/servicespage.jpg",
        width: 1200,
        height: 630,
        alt: "Solvigos Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Solvigos",
    description:
      "Insights, guides, and best practices on customer support outsourcing and customer experience.",
    images: ["/og_image/servicespage.jpg"],
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  return <BlogContent posts={posts} />;
}
