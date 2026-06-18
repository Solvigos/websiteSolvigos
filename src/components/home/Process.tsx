"use client";

import { motion } from "framer-motion";

const steps = [
  { num: 1, title: "Discovery & Assessment", desc: "We learn your business, customers, and support requirements." },
  { num: 2, title: "Team Recruitment & Training", desc: "We build and train a team aligned to your brand and processes." },
  { num: 3, title: "Service Launch & Integration", desc: "Seamless onboarding with your existing systems and workflows." },
  { num: 4, title: "Continuous Optimization", desc: "Data-driven improvements to performance and quality." },
  { num: 5, title: "Growth & Scaling", desc: "Flexibly expand services as your business grows." },
];

export function Process() {
  return (
    <section className="bg-navy py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Our Process
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-blue-800" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-blue flex items-center justify-center text-white font-bold text-lg relative z-10">
                  {step.num}
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-1.5 text-sm text-blue-200 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
