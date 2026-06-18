"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { IconBuilding, IconWorld } from "@tabler/icons-react";

export function OtherPrograms() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-16">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 max-w-md"
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Other Programs
            </h2>
            <p className="mt-6 text-blue-200 leading-relaxed">
              Solvigos is more than a service provider. We provide corporate language
              training and study abroad program for learning foreign languages.
            </p>
          </motion.div>

          {/* Right: Overlapping cards */}
          <div className="flex-1 relative">
            <div className="relative flex justify-center">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-7 w-64 sm:w-72 shadow-xl z-10"
              >
                <h3 className="text-lg font-bold text-navy">Solvigos Corporate</h3>
                <div className="w-12 h-12 bg-blue rounded-xl flex items-center justify-center mt-4 mb-4">
                  <IconBuilding size={22} className="text-white" />
                </div>
                <p className="text-sm text-body leading-relaxed">
                  Deliver exceptional customer support by scheduling your dedicated team with
                  chosen time and coverage.
                </p>
                <Link
                  href="/contact"
                  className="inline-block mt-5 px-6 py-2.5 border-2 border-navy text-navy text-sm font-semibold rounded-full hover:bg-navy hover:text-white transition-all"
                >
                  See Details
                </Link>
              </motion.div>

              {/* Card 2 (overlapping) */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="bg-white rounded-2xl p-7 w-56 sm:w-60 shadow-xl -ml-8 mt-8 z-20"
              >
                <h3 className="text-lg font-bold text-navy">Solvigos Abroad</h3>
                <div className="w-12 h-12 bg-blue rounded-xl flex items-center justify-center mt-4 mb-4">
                  <IconWorld size={22} className="text-white" />
                </div>
                <p className="text-sm text-body leading-relaxed">
                  We help deliver foreign language skills in countries where they're
                  spoken.
                </p>
                <Link
                  href="/contact"
                  className="inline-block mt-5 px-6 py-2.5 border-2 border-navy text-navy text-sm font-semibold rounded-full hover:bg-navy hover:text-white transition-all"
                >
                  See Details
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
