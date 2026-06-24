"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Bilal Ahmed",
    role: "Head of Customer Success, SaaS Startup",
    text: "Solvigos transformed our customer support. Our response times dropped by 60% and CSAT scores went from 72% to 94% within three months.",
  },
  {
    name: "Omar Raza",
    role: "VP Operations, eCommerce Brand",
    text: "Their help desk team became a seamless extension of our brand. We finally have 24/7 coverage without the overhead of building an in-house team.",
  },
  {
    name: "Sana Sheikh",
    role: "Founder, EdTech Platform",
    text: "From onboarding to renewals, Solvigos handles our entire customer lifecycle. Student satisfaction is at an all-time high.",
  },
  {
    name: "Saman Malik",
    role: "Director of Support, Healthcare SaaS",
    text: "They understood the sensitivity healthcare support demands. HIPAA-compliant, empathetic, and always professional. Highly recommend.",
  },
  {
    name: "Zainab Hussain",
    role: "COO, Travel & Hospitality Company",
    text: "Our booking support used to be chaotic. Solvigos streamlined everything with their CRM setup and dedicated support agents. Game changer.",
  },
  {
    name: "Hassan Ali",
    role: "E-commerce Manager",
    text: "They handled our back-office operations so well that we scaled 3x without hiring a single additional admin person. Pure efficiency.",
  },
  {
    name: "Briana Patton",
    role: "CTO, SaaS Company",
    text: "Their technical support team resolved Tier 1-3 issues faster than our previous vendor. Escalation workflows were seamless from day one.",
  },
  {
    name: "Aliza Khan",
    role: "Customer Experience Lead, Retail Brand",
    text: "Solvigos built our omnichannel support from scratch. Live chat, email, phone — everything works in perfect sync now.",
  },
  {
    name: "Farhan Siddiqui",
    role: "Marketing Director, Tech Startup",
    text: "The chatbot they implemented handles 40% of our support tickets automatically. Our team can finally focus on complex cases.",
  },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="bg-[#FFFCFA] rounded-2xl p-6 shadow-sm border border-gray-100 mb-5">
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {testimonial.text}
      </p>
      <div>
        <p className="text-sm font-semibold text-[#1A2B5F]">{testimonial.name}</p>
        <p className="text-xs text-gray-500">{testimonial.role}</p>
      </div>
    </div>
  );
}

export function Testimonials() {
  const col1 = testimonials.slice(0, 3);
  const col2 = testimonials.slice(3, 6);
  const col3 = testimonials.slice(6, 9);

  return (
    <section className="py-10 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A2B5F] mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            What our users say
          </h2>
          <p className="text-gray-500 text-lg">
            See what our customers have to say about us.
          </p>
        </motion.div>

        {/* Testimonial Grid with Infinite Scroll */}
        {/* Mobile: 1 column */}
        <div className="block md:hidden relative h-[500px] overflow-hidden">
          <motion.div
            animate={{ y: [0, -1200] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={`mobile-${i}`} testimonial={t} />
            ))}
          </motion.div>
        </div>

        {/* Desktop: 3 columns */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 items-start">
          {/* Column 1 - scrolls up */}
          <div className="relative h-[500px] overflow-hidden">
            <motion.div
              animate={{ y: [0, -520] }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...col1, ...col1].map((t, i) => (
                <TestimonialCard key={`col1-${i}`} testimonial={t} />
              ))}
            </motion.div>
          </div>

          {/* Column 2 - scrolls down */}
          <div className="relative h-[500px] overflow-hidden">
            <motion.div
              animate={{ y: [-520, 0] }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...col2, ...col2].map((t, i) => (
                <TestimonialCard key={`col2-${i}`} testimonial={t} />
              ))}
            </motion.div>
          </div>

          {/* Column 3 - scrolls up */}
          <div className="relative h-[500px] overflow-hidden">
            <motion.div
              animate={{ y: [0, -520] }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...col3, ...col3].map((t, i) => (
                <TestimonialCard key={`col3-${i}`} testimonial={t} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
