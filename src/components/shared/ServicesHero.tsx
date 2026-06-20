"use client";

import Image from "next/image";
import Link from "next/link";

type ServicesHeroProps = {
  subtitle?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
};

export function ServicesHero({
  subtitle = "Our Services",
  title = "Feel the Difference",
  description = "We deliver exceptional support that transforms customer experiences and drives business growth.",
  ctaText = "Get a Quote",
  ctaLink = "/contact",
}: ServicesHeroProps) {
  return (
    <section
      className="relative min-h-[85vh] flex items-center overflow-hidden"
      style={{ backgroundColor: "#091f38" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/heroServices.png"
          alt="Services illustration"
          fill
          sizes="100vw"
          className="object-cover opacity-80"
          priority
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(9,31,56,0.9) 0%, rgba(9,31,56,0.4) 50%, transparent 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">
            {subtitle}
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8 max-w-xl">
            {description}
          </p>
          <Link
            href={ctaLink}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200"
            style={{ backgroundColor: "#007b7b", color: "white" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f4ffff";
              e.currentTarget.style.color = "black";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#007b7b";
              e.currentTarget.style.color = "white";
            }}
          >
            {ctaText}
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* Curved Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          className="w-full"
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ height: "60px", display: "block" }}
        >
          <path
            d="M0,80 L0,40 Q720,0 1440,40 L1440,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
