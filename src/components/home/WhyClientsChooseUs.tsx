"use client";

import { motion } from "framer-motion";
import { IconCheck, IconUsers, IconArrowsShuffle, IconClock, IconCoin, IconChartBar, IconHeart } from "@tabler/icons-react";

const features = [
  {
    icon: IconUsers,
    title: "Dedicated Support Teams",
    desc: "Your account is managed by a team that knows your business inside and out.",
  },
  {
    icon: IconArrowsShuffle,
    title: "Flexible Scaling Options",
    desc: "Scale up or down based on your needs with no long-term lock-ins required.",
  },
  {
    icon: IconClock,
    title: "24/7 Coverage Available",
    desc: "Round-the-clock support to serve your customers whenever they need help.",
  },
  {
    icon: IconCoin,
    title: "Cost-Effective Operations",
    desc: "Reduce operational costs while improving service quality and satisfaction.",
  },
  {
    icon: IconChartBar,
    title: "Data-Driven Performance",
    desc: "Real-time reporting and analytics to continuously improve support outcomes.",
  },
  {
    icon: IconHeart,
    title: "Customer-Centric Approach",
    desc: "Every decision we make is guided by what's best for your customers.",
  },
];

export function WhyClientsChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Why Clients Choose Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 bg-ice rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-blue" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy">{feature.title}</h3>
                  <p className="mt-1 text-sm text-body leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
