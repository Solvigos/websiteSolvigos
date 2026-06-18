"use client";

import { motion } from "framer-motion";

const industries = [
  "eCommerce", "SaaS", "Technology", "Healthcare", "Education",
  "Professional Services", "Travel & Hospitality", "Fintech",
];

export function IndustriesSection() {
  return (
    <section className="bg-ice py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Industries We Serve
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {industries.map((industry) => (
            <span
              key={industry}
              className="px-5 py-2.5 text-sm font-medium text-navy bg-white rounded-full border border-tint shadow-sm hover:border-blue hover:shadow-md transition-all"
            >
              {industry}
            </span>
          ))}
          <span className="px-5 py-2.5 text-sm font-medium text-body bg-white rounded-full border border-border shadow-sm">
            and more
          </span>
        </motion.div>
      </div>
    </section>
  );
}
