"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "24/7", label: "Support Coverage Available" },
  { value: "100%", label: "Brand-Aligned Teams" },
  { value: "Multiple", label: "Industries Served Globally" },
  { value: "Fast", label: "Onboarding — Days to Launch" },
];

function CountUp({ to, suffix }: { to: string; suffix?: string }) {
  return (
    <span className="text-3xl sm:text-4xl font-bold text-white">
      {to}
      {suffix}
    </span>
  );
}

export function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-blue py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat) => (
            <div key={stat.value}>
              <CountUp to={stat.value} />
              <p className="mt-1.5 text-sm text-blue-100">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
