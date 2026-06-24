"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  IconShoppingCart,
  IconCloud,
  IconCode,
  IconHeartbeat,
  IconSchool,
  IconPlane,
} from "@tabler/icons-react";

const industries = [
  {
    icon: IconShoppingCart,
    title: "eCommerce",
    subtitle: "From Cart to Customer Loyalty",
    description:
      "Online shoppers expect fast answers and frictionless experiences. We handle order management, returns and refunds, live chat support, and customer inquiries — so your buyers stay happy and your team stays focused on growth.",
  },
  {
    icon: IconCloud,
    title: "SaaS",
    subtitle: "Support That Matches Your Product's Pace",
    description:
      "Subscription businesses live and die by retention. We provide technical support, user onboarding, help desk management, and CRM configuration that keeps your customers activated, engaged, and renewing.",
  },
  {
    icon: IconCode,
    title: "Technology",
    subtitle: "Specialized Support for Complex Products",
    description:
      "Tech companies need agents who understand the product, not just the script. We provide Tier 1 and Tier 2 technical support, bug reporting, knowledge base management, and escalation handling for startups and established tech firms alike.",
  },
  {
    icon: IconHeartbeat,
    title: "Healthcare",
    subtitle: "Reliable Support With the Sensitivity It Demands",
    description:
      "Patient communication requires accuracy, empathy, and discretion. We support healthcare providers with patient-facing assistance, appointment coordination, administrative processing, and back-office operations handled with the care your patients deserve.",
  },
  {
    icon: IconSchool,
    title: "Education",
    subtitle: "Supporting Students From Enrollment to Completion",
    description:
      "Educational institutions need responsive, knowledgeable support teams. We assist with student inquiries, enrollment support, academic help desk services, and administrative operations helping institutions deliver a better experience at every stage.",
  },
  {
    icon: IconPlane,
    title: "Travel & Hospitality",
    subtitle: "Every Interaction Is Part of the Experience",
    description:
      "Travelers expect instant, knowledgeable responses at every touchpoint. We support booking management, guest inquiries, itinerary assistance, concierge operations, and complaint resolution delivering the seamless experience your customers expect before, during, and after their journey.",
  },
];

export function IndustriesSection() {
  return (
    <section className="py-10 sm:py-28" style={{ backgroundColor: "#000f30" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-wider mb-3 text-white/60">
            Industries We Serve
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 max-w-2xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Built for the Industries That Demand More
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            We understand that every industry has unique customer expectations, compliance requirements,
            and operational demands. Our teams are trained to speak your industry&apos;s language and
            deliver support that fits your world.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full"
                style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-1" style={{ color: "#eaeeff" }}>
                  {industry.title}
                </h3>
                <p className="text-sm font-medium mb-3" style={{ color: "#a4f5ff" }}>
                  {industry.subtitle}
                </p>
                <p className="text-sm text-white leading-relaxed flex-1">
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 text-lg mb-6">
            Don&apos;t see your industry? We work with businesses across many sectors. If you need reliable support, we&apos;ll make it work.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-12 py-5 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg bg-[#007b7b] hover:bg-[#00f4f4] hover:text-black text-white"
          >
            Talk to Our Team
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
