"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  IconUser,
  IconArrowsShuffle,
  IconClock2,
  IconCash,
  IconChartBar,
  IconHeartHandshake,
} from "@tabler/icons-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 40, filter: "blur(10px)" }
      }
      transition={{
        duration: 0.7,
        delay: delay,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className="group"
    >
      <div className="size-12 p-2.5 bg-[#285ccc]/10 border border-[#285ccc]/20 rounded-lg mb-5 group-hover:scale-110 transition-transform duration-300">
        <div className="w-full h-full text-[#285ccc]">{icon}</div>
      </div>
      <div className="space-y-2">
        <h3 className="text-base font-semibold text-[#1A2B5F]">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export function WhySolvigos() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });
  const isSubtitleInView = useInView(subtitleRef, { once: true });

  const features = [
    {
      icon: <IconUser className="w-full h-full" />,
      title: "Dedicated Support Teams",
      description:
        "Your account is managed by a team that knows your business inside and out.",
    },
    {
      icon: <IconArrowsShuffle className="w-full h-full" />,
      title: "Flexible Scaling Options",
      description:
        "Scale up or down based on your needs with no long-term lock-ins required.",
    },
    {
      icon: <IconClock2 className="w-full h-full" />,
      title: "24/7 Coverage Available",
      description:
        "Round-the-clock support to serve your customers whenever they need help.",
    },
    {
      icon: <IconCash className="w-full h-full" />,
      title: "Cost-Effective Operations",
      description:
        "Reduce operational costs while improving service quality and satisfaction.",
    },
    {
      icon: <IconChartBar className="w-full h-full" />,
      title: "Data-Driven Performance",
      description:
        "Real-time reporting and analytics to continuously improve support outcomes.",
    },
    {
      icon: <IconHeartHandshake className="w-full h-full" />,
      title: "Customer-Centric Approach",
      description:
        "Every decision we make is guided by what's best for your customers.",
    },
  ];

  const stats = [
    { value: "500+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "10+", label: "Years Experience" },
    { value: "50+", label: "Team Members" },
  ];

  return (
    <section className="py-24 px-4 bg-[#F0F5FF] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#285ccc]/5 via-transparent to-[#285ccc]/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={
              isTitleInView
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: 20, filter: "blur(10px)" }
            }
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-4 text-[#285ccc]">
              <span className="w-8 h-[2px] bg-[#285ccc]"></span>
              <span className="text-sm font-semibold uppercase tracking-wider">
                Why Choose Us
              </span>
              <span className="w-8 h-[2px] bg-[#285ccc]"></span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2B5F]">
              Built for{" "}
              <span className="text-[#285ccc] relative inline-block">
                Modern Support
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-[#285ccc]/30 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={isTitleInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </h1>
          </motion.div>

          <motion.p
            ref={subtitleRef}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={
              isSubtitleInView
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: 20, filter: "blur(10px)" }
            }
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-gray-500 max-w-3xl mx-auto"
          >
            We combine innovation, expertise, and dedication to deliver
            solutions that exceed expectations and drive your business forward.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.12}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="rounded-2xl bg-[#285ccc] p-10 md:p-14 relative overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,242,189,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,242,189,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-1">
                <div className="text-3xl md:text-4xl font-bold text-[#fff2bd]">
                  {stat.value}
                </div>
                <div className="text-sm text-[#fff2bd]/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 bg-[#fff2bd] border-2 border-[#285ccc]/20 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B5F] mb-4">
            Ready to Transform Your Support?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that trust us to deliver exceptional
            results. Let&apos;s build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#285ccc] hover:bg-[#1a3d7a] text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 shadow-lg shadow-[#285ccc]/25 transition-all duration-300"
            >
              Get Started Today
            </motion.a>
            <motion.a
              href="/services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent hover:bg-[#285ccc]/10 text-[#285ccc] border-2 border-[#285ccc] px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Explore Services
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
