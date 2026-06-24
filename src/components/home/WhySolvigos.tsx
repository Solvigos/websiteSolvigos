"use client";

import Image from "next/image";
import Link from "next/link";
import {
  IconUser,
  IconArrowsShuffle,
  IconClock2,
  IconCash,
  IconChartBar,
  IconHeartHandshake,
  IconCircleCheck,
  IconTrophy,
  IconChartLine,
} from "@tabler/icons-react";

const features = [
  {
    icon: <IconUser className="w-6 h-6" />,
    title: "Dedicated Support Teams",
    description:
      "Your account is managed by a team that knows your business inside and out.",
  },
  {
    icon: <IconArrowsShuffle className="w-6 h-6" />,
    title: "Flexible Scaling Options",
    description:
      "Scale up or down based on your needs with no long-term lock-ins required.",
  },
  {
    icon: <IconClock2 className="w-6 h-6" />,
    title: "24/7 Coverage Available",
    description:
      "Round-the-clock support to serve your customers whenever they need help.",
  },
  {
    icon: <IconCash className="w-6 h-6" />,
    title: "Cost-Effective Operations",
    description:
      "Reduce operational costs while improving service quality and satisfaction.",
  },
  {
    icon: <IconChartBar className="w-6 h-6" />,
    title: "Data-Driven Performance",
    description:
      "Real-time reporting and analytics to continuously improve support outcomes.",
  },
  {
    icon: <IconHeartHandshake className="w-6 h-6" />,
    title: "Customer-Centric Approach",
    description:
      "Every decision we make is guided by what's best for your customers.",
  },
];

const stats = [
  { icon: <IconCircleCheck className="w-6 h-6" />, value: "500+", label: "Projects Completed" },
  { icon: <IconUser className="w-6 h-6" />, value: "200+", label: "Happy Clients" },
  { icon: <IconTrophy className="w-6 h-6" />, value: "10+", label: "Years Experience" },
  { icon: <IconChartLine className="w-6 h-6" />, value: "98%", label: "Client Satisfaction" },
];

export function WhySolvigos() {
  return (
    <section className="pt-0 sm:pt-20 pb-14 sm:pb-20 px-4 bg-white antialiased">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-6 sm:w-10 h-[2px] bg-gray-400"></span>
            <span className="text-[11px] sm:text-sm font-semibold uppercase tracking-wider text-gray-500">
              Excellence in Every Detail
            </span>
            <span className="w-6 sm:w-10 h-[2px] bg-gray-400"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A2B5F] mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg">
            We combine innovation, expertise, and dedication to deliver solutions that exceed expectations
            and drive your business forward.
          </p>
        </div>

        {/* Image + Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-16">
          {/* Left: Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[500px]">
            <Image
              src="/landingPage.png"
              alt="Team collaborating at a table with laptops"
              width={800}
              height={600}
              className="absolute inset-0 w-full h-full object-cover"
            />
            </div>

          {/* Right: Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const isTeal = index % 2 === 1;
              return (
                <div
                  key={index}
                  className={`rounded-xl p-6 hover:shadow-md transition-shadow duration-300 ${
                    isTeal ? "bg-[#348f9a]" : "bg-[#e9f2f6]"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    isTeal ? "bg-white/30 text-white" : "bg-[#348f9a]/20 text-[#348f9a]"
                  }`}>
                    {feature.icon}
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${
                    isTeal ? "text-white" : "text-[#1A2B5F]"
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    isTeal ? "text-white/80" : "text-gray-600"
                  }`}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="rounded-2xl p-8 md:p-12 relative overflow-hidden"
          style={{
            backgroundImage: "radial-gradient(125% 125% at 10% 10%, #dbeafe 0%, #ffffff 100%)",
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-[#285ccc]/20 rounded-full flex items-center justify-center text-[#285ccc] mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#1A2B5F] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#007b7b] hover:bg-[#00f4f4] hover:text-black text-white px-16 py-5 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            Talk to an Expert
          </Link>
        </div>
      </div>
    </section>
  );
}