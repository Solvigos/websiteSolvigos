"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronLeft, IconChevronRight, IconQuote } from "@tabler/icons-react";

const testimonials = [
  {
    name: "Ethan Jarman",
    role: "Director of Inside Sales, TurboPass",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    quote:
      "We've never been more satisfied with a partner. The team you've provided has been outstanding. Everything just works so well that I'd be upset if anything changed.",
  },
  {
    name: "Lorna Quijano",
    role: "Full Service Manager, RedWeek",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    quote:
      "I love the communication that we have with management, especially when we need to address something. It gets handled really quickly! They're reliable and get the job done.",
  },
  {
    name: "Sudip Dasgupta",
    role: "Head of Customer Experience, Product Madness",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    quote:
      "SupportNinja is really responsive and flexible based on our needs. But what we're really happy about is the team's commitment to the brand. They're like an extension of our team!",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

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
            What our customers are saying
          </h2>
          <p className="mt-4 text-body max-w-xl mx-auto">
            We will always try to improve the service and collect more variations
            in it, which can be accessed from anywhere and anytime.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-ice/60 rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-10">
            {/* Image */}
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Quote */}
            <div className="flex-1">
              <IconQuote size={36} className="text-blue/30 mb-4" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-navy font-medium leading-relaxed text-base sm:text-lg">
                    {testimonials[current].quote}
                  </p>
                  <div className="mt-6">
                    <p className="font-bold text-navy text-sm">{testimonials[current].name}</p>
                    <p className="text-xs text-body mt-0.5">{testimonials[current].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-ice transition-colors"
            >
              <IconChevronLeft size={18} className="text-navy" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-blue w-6" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-ice transition-colors"
            >
              <IconChevronRight size={18} className="text-navy" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
