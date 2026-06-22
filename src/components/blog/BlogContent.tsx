"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconSearch, IconArrowRight } from "@tabler/icons-react";
import type { BlogPostMeta } from "@/lib/content";

const POSTS_PER_PAGE = 6;

const filterCategories = [
  {
    heading: "Filter by Trends + Strategies",
    tags: ["PRIVACY + SECURITY", "FULL-LIFECYCLE CX", "MEASURING CX IMPACT", "OUTSOURCING 2.0", "SCALING WITH OUTSOURCING", "TECH-ENABLED OUTSOURCING", "CX STRATEGY", "HUMANS + AI", "AI IN CX"],
  },
  {
    heading: "Filter by Solution",
    tags: [
      "CUSTOMER EXPERIENCE",
      "CUSTOMER CONVERSION",
      "CUSTOMER ONBOARDING",
      "CUSTOMER SUPPORT",
      "TECHNICAL SUPPORT",
      "CUSTOMER RENEWALS",
      "BPO & BACK-OFFICE",
      "CRM & CHATBOT SETUP",
      "HELP DESK MANAGEMENT",
      "WEB DEVELOPMENT",
    ],
  },
  {
    heading: "Filter by Industries",
    tags: ["SAAS", "HEALTHCARE", "ECOMMERCE", "TECHNOLOGY", "EDUCATION", "TRAVEL & HOSPITALITY"],
  },
];

export function BlogContent({ posts }: { posts: BlogPostMeta[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleFilter = (tag: string) => {
    setActiveFilters((prev) =>
      prev.includes(tag) ? prev.filter((f) => f !== tag) : [...prev, tag]
    );
    setVisibleCount(POSTS_PER_PAGE);
  };

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      activeFilters.length === 0 ||
      activeFilters.some(
        (f) => post.category.toUpperCase().includes(f) || post.title.toUpperCase().includes(f)
      );
    return matchesSearch && matchesFilter;
  });

  const featuredPosts = filteredPosts.slice(0, 2);
  const allGridPosts = filteredPosts;
  const visiblePosts = allGridPosts.slice(0, visibleCount);
  const hasMore = visibleCount < allGridPosts.length;

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + POSTS_PER_PAGE);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="bg-[#F3F4FA] min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 lg:pt-28 pb-4 sm:pb-8 lg:pb-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A2E]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Support Insights
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl">
            Raise the bar for your support with lessons, tips, and tactics forged from our 10+ years of excellence.
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredPosts.length > 0 && (
        <section className="pb-8 sm:pb-12">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <div className="bg-[#E8DDD4] rounded-2xl overflow-hidden aspect-[6/5] relative mb-4">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-2">
                    Featured Content
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-[#1A1A2E] mb-2 group-hover:text-[#007b7b] transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-[#1A1A2E] flex items-center gap-1">
                      Read article <IconArrowRight size={12} />
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime || "4 min read"}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Browse All Content with Sidebar */}
      <section className="bg-[#F3F4FA] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
            {/* Left Sidebar */}
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Browse All Content
              </h2>

              {/* Search */}
              <div className="relative mb-8 mt-6">
                <IconSearch size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by keyword"
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(POSTS_PER_PAGE); }}
                  className="w-full pl-9 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#007b7b] bg-white"
                />
              </div>

              {/* Filter Categories */}
              <div className="space-y-6">
                {filterCategories.map((category) => (
                  <div key={category.heading}>
                    <h3 className="text-xs font-bold text-[#1A1A2E] uppercase tracking-wider mb-3 pb-2 border-b border-gray-300">
                      {category.heading}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.tags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => toggleFilter(tag)}
                          className={`text-[10px] font-medium px-3 py-1.5 rounded-full border transition-colors ${
                            activeFilters.includes(tag)
                              ? "bg-[#007b7b] text-white border-[#007b7b]"
                              : "bg-white text-gray-600 border-gray-300 hover:border-[#007b7b] hover:text-[#007b7b]"
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {activeFilters.length > 0 && (
                <button
                  onClick={() => { setActiveFilters([]); setVisibleCount(POSTS_PER_PAGE); }}
                  className="mt-6 text-xs font-medium text-[#007b7b] underline"
                >
                  Reset filters
                </button>
              )}
            </div>

            {/* Article Grid */}
            <div>
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 transition-all duration-300 ${
                  isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}
              >
                {visiblePosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block"
                  >
                    <div className="bg-[#E8DDD4] rounded-xl overflow-hidden aspect-[6/5] relative mb-3">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                    </div>
                    <h3 className="text-sm font-bold text-[#1A1A2E] mb-2 group-hover:text-[#007b7b] transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-3 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-medium text-[#1A1A2E] flex items-center gap-1">
                        Read article <IconArrowRight size={10} />
                      </span>
                      <span className="text-[10px] text-gray-400">{post.readTime || "4 min read"}</span>
                    </div>
                  </Link>
                ))}
              </div>

              {allGridPosts.length === 0 && (
                <p className="text-center text-gray-500 py-12">No articles found.</p>
              )}

              {/* Pagination */}
              <div className="mt-10 pt-6 border-t border-gray-200 flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  Showing {visiblePosts.length} of {allGridPosts.length} articles
                </p>
                {hasMore && (
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-[#1A3D2E] hover:bg-[#2a5a42] text-white flex items-center justify-center transition-colors"
                  >
                    <IconArrowRight size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20 block">
        <path d="M0,80 L0,40 C360,80 720,0 1080,40 C1260,60 1380,70 1440,80 Z" fill="#F3F4FA" />
        <path d="M0,80 C360,40 720,80 1080,40 C1260,20 1380,10 1440,0 L1440,80 Z" fill="#FFFFFF" />
      </svg>

      {/* CTA Section */}
      <section className="bg-[#FFFFFF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A2B5F] leading-tight mb-8"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Let&apos;s Talk About What Growth Looks Like for You
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#007b7b] hover:bg-[#00f4f4] hover:text-black text-white px-10 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Speak With an Expert
            <span className="text-lg">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
