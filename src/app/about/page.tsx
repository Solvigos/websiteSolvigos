"use client";

import Link from "next/link";
import Image from "next/image";
import { IconArrowRight, IconUser, IconHeart, IconChartBar, IconMessageCircle, IconMoodSmile } from "@tabler/icons-react";

const values = [
  {
    icon: <IconUser size={22} />,
    title: "Customer First",
    description: "Every decision begins with understanding customer needs.",
  },
  {
    icon: <IconHeart size={22} />,
    title: "Accountability",
    description: "We take ownership of every interaction and outcome.",
  },
  {
    icon: <IconChartBar size={22} />,
    title: "Innovation",
    description: "We continuously improve processes, technology, and service delivery.",
  },
  {
    icon: <IconMessageCircle size={22} />,
    title: "Transparency",
    description: "We believe strong partnerships are built on trust and open communication.",
  },
  {
    icon: <IconMoodSmile size={22} />,
    title: "Continuous Improvement",
    description: "We embrace learning and growth to deliver better outcomes.",
  },
];

const stats = [
  { value: "500+", label: "Projects Completed", detail: "Across multiple industries worldwide" },
  { value: "200+", label: "Happy Clients", detail: "Trusted by businesses of all sizes" },
  { value: "10+", label: "Years Experience", detail: "Delivering exceptional outsourcing solutions" },
];

export default function AboutPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="bg-[#F3F4FA] py-14 sm:py-16 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A2E] leading-[1.1]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Customer Experience Experts Focused on Your Success
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                From enabling companies to flourish, to helping customers thrive.
              </p>
              <p className="text-base text-gray-500 leading-relaxed max-w-lg">
                Founded to help successful companies solve for scale. By connecting your team
                with a wider world of talent, you&apos;ll be able to free up resources, extend
                capacity, and accelerate growth.
              </p>
            </div>

            {/* Right: Hero image */}
            <div className="flex justify-center lg:justify-center">
              <div className="relative w-76 h-76 sm:w-100 sm:h-100">
                <Image src="/aboutus/hero2.png" alt="About Solvigos" fill className="object-contain" sizes="(max-width: 768px) 54vw, 37vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curved divider*/}
      <div className="bg-[#F3F4FA]">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20">
          <path d="M0,80 L0,40 C360,80 720,0 1080,40 C1260,60 1380,70 1440,80 Z" fill="#F3F4FA" />
          <path d="M0,80 C360,40 720,80 1080,40 C1260,20 1380,10 1440,0 L1440,80 Z" fill="white" />
        </svg>
      </div>


      {/* Section 2: Stats - People First */}
      <section className="bg-[#FFFFFF] py-10 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="mb-16">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] leading-tight max-w-2xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              It starts with putting our people first
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl text-lg">
              Our culture is built on a foundation of taking care of our own, investing in
              continued education and wellness, and developing skills, because we know you
              can&apos;t pour from an empty cup. The natural result? You and your customers
              are well taken care of.
            </p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-300 rounded-xl overflow-hidden bg-[#000F30]">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-8 sm:p-10 ${index < 2 ? "border-b md:border-b-0 md:border-r border-gray-700" : ""}`}
              >
                <p
                  className="text-4xl sm:text-5xl font-light text-white mb-3"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {stat.value}
                </p>
                <h3 className="text-sm font-bold text-white mb-3">
                  {stat.label}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curved divider*/}
      <div className="bg-white">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20">
          <path d="M0,80 L0,40 C360,80 720,0 1080,40 C1260,60 1380,70 1440,80 Z" fill="white" />
          <path d="M0,80 C360,40 720,80 1080,40 C1260,20 1380,10 1440,0 L1440,80 Z" fill="#F3F4FA" />
        </svg>
      </div>

      {/* Section 3: Our Values */}
      <section className="bg-[#F3F4FA] py-10 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] text-center mb-14"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Our values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {values.map((value, index) => (
              <div key={index} className="border-t border-gray-300 pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-gray-700">{value.icon}</span>
                  <h3 className="text-lg font-bold text-[#1A1A2E]">{value.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed pl-9">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curved divider*/}
      <div className="bg-[#F3F4FA]">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20">
          <path d="M0,80 L0,40 C360,80 720,0 1080,40 C1260,60 1380,70 1440,80 Z" fill="#F3F4FA" />
          <path d="M0,80 C360,40 720,80 1080,40 C1260,20 1380,10 1440,0 L1440,80 Z" fill="white" />
        </svg>
      </div>

      {/* Section 5: Why Work With Us */}
      <section className="bg-white py-10 sm:py-20 lg:py-24 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] leading-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Why Work With Us
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our teams integrate seamlessly into your operations. We learn your processes,
                understand your customers, and represent your brand as if it were our own.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you need customer support outsourcing, technical assistance, back-office
                operations, or web development services, our team is ready to help.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#007b7b] hover:bg-[#00f4f4] hover:text-black text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              >
                Get Started Today
                <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <IconArrowRight size={16} />
                </span>
              </Link>
            </div>

            {/* Right: Image collage */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl aspect-square relative overflow-hidden">
                <Image src="/aboutus/image2.png" alt="Team" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
              <div className="rounded-xl aspect-square relative overflow-hidden">
                <Image src="/aboutus/image5.png" alt="Team" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
              <div className="rounded-xl aspect-square relative overflow-hidden">
                <Image src="/aboutus/image6.png" alt="Team" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
              <div className="rounded-xl aspect-square relative overflow-hidden">
                <Image src="/aboutus/image7.png" alt="Team" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
