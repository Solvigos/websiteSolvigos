import fs from "fs";
import path from "path";

const blogDir = path.join(process.cwd(), "content", "blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
};

export function getAllBlogPosts(): BlogPostMeta[] {
  if (!fs.existsSync(blogDir)) return [];

  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const content = fs.readFileSync(path.join(blogDir, file), "utf-8");
      const meta = parseFrontmatter(content);
      return { slug, ...meta } as BlogPostMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): {
  content: string;
  meta: BlogPostMeta;
} | null {
  const filePath = path.join(blogDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const content = fs.readFileSync(filePath, "utf-8");
  const meta = parseFrontmatter(content);
  const body = stripFrontmatter(content);
  return { content: body, meta: { slug, ...meta } as BlogPostMeta };
}

function parseFrontmatter(content: string): Record<string, string> {
  const meta: Record<string, string> = {};
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (match) {
    match[1].split("\n").forEach((line) => {
      const [key, ...rest] = line.split(":");
      if (key && rest.length) {
        meta[key.trim()] = rest.join(":").trim();
      }
    });
  }
  return meta;
}

function stripFrontmatter(content: string): string {
  return content.replace(/^---\n[\s\S]*?\n---\n/, "");
}
