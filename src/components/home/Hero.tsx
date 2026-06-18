"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = "easeOut" as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease },
});

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ice pt-24 sm:pt-28 lg:pt-32 pb-0 lg:pb-0">
      {/* Abstract blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-tint rounded-full opacity-60 blur-3xl" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-tint rounded-full opacity-40 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-4">
          {/* Left: Text */}
          <div className="flex-1 max-w-xl z-10">
            <motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-blue rounded-full" />
              <span className="text-xs font-semibold text-navy">Customer Support Outsourcing</span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-[2.2rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] font-bold text-navy leading-[1.08] tracking-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Customer Support That Scales With Your Business
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-4 text-base sm:text-lg text-body leading-relaxed max-w-md"
            >
              Deliver exceptional customer experiences without the cost and complexity of building
              an in-house support department.
            </motion.p>

            <motion.p
              {...fadeUp(0.25)}
              className="mt-3 text-base sm:text-lg text-body leading-relaxed max-w-md"
            >
              Solvigos helps businesses provide world-class customer support, technical assistance,
              back-office operations, and digital solutions through flexible outsourcing services.
              Our teams become an extension of your organization, helping you improve customer
              satisfaction, reduce operational costs, and support business growth.
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-navy text-white font-semibold text-sm rounded-full hover:opacity-90 transition-all"
              >
                Schedule a Free Consultation
              </Link>
              <Link
                href="/services/customer-support"
                className="px-7 py-3.5 border-2 border-navy text-navy font-semibold text-sm rounded-full hover:bg-navy hover:text-white transition-all"
              >
                Explore Our Services
              </Link>
            </motion.div>
          </div>

          {/* Right: Circular image with floating cards */}
          <div className="flex-1 relative flex justify-center lg:justify-end z-10">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease }}
                className="w-64 h-64 sm:w-72 sm:h-72 lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-8 border-white shadow-2xl"
              >
                <Image
                  src="/hero-illustration.png"
                  alt="Customer support professional"
                  width={420}
                  height={420}
                  className="w-full h-full object-cover"
                  priority
                />
              </motion.div>

              <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue/30 scale-110" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -top-4 -right-4 sm:top-2 sm:right-0 bg-white rounded-xl shadow-lg px-4 py-3"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-navy">98%</div>
                    <div className="text-[10px] text-body">CSAT Score</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute top-8 -left-8 sm:top-4 sm:-left-12 bg-blue text-white rounded-xl shadow-lg px-4 py-3"
              >
                <div className="text-[10px] opacity-80">Coverage</div>
                <div className="text-lg font-bold">24/7</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 }}
                className="absolute bottom-16 -left-6 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md"
              >
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
                  alt="Team member"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.1 }}
                className="absolute bottom-8 right-0 w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md"
              >
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
                  alt="Team member"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                className="absolute top-1/2 -right-8 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center"
              >
                <span className="text-blue text-lg">💬</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full -mb-1">
          <path d="M0,80 C360,120 1080,0 1440,80 L1440,120 L0,120 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
