"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IconShieldCheck, IconBulb, IconHeart, IconArrowsUp } from "@tabler/icons-react";

const features = [
  {
    icon: IconShieldCheck,
    title: "Dedicated Support Teams",
    desc: "Your account is managed by a team that knows your business inside and out.",
  },
  {
    icon: IconBulb,
    title: "Flexible Scaling",
    desc: "Scale up or down based on your business needs with no long-term lock-ins.",
  },
  {
    icon: IconHeart,
    title: "Customer-Centric Approach",
    desc: "Every decision we make is guided by what's best for your customers.",
  },
  {
    icon: IconArrowsUp,
    title: "Data-Driven Results",
    desc: "Real-time reporting and analytics to continuously improve support outcomes.",
  },
];

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ice rounded-full opacity-50 blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-tint rounded-full opacity-40 blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
          {/* Left: Circular image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 relative flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-8 border-white shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                  alt="Business professional"
                  width={380}
                  height={380}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative dots */}
              <div className="absolute -top-4 -right-4 w-20 h-20 grid grid-cols-3 gap-1.5">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-blue/20 rounded-full" />
                ))}
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 grid grid-cols-3 gap-1.5">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-blue/15 rounded-full" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Features */}
          <div className="flex-1 max-w-xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Why Should Choose Solvigos?
            </motion.h2>

            <div className="mt-10 space-y-8">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-blue rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-white" />
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
        </div>
      </div>
    </section>
  );
}
