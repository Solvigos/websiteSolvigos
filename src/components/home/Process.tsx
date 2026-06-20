"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "Step 1",
    title: "Discover & Align",
    description:
      "We go deep on your business — your customers, your tone, your pain points, and your goals. Together, we build a service blueprint that maps every detail, from response standards to escalation rules, ensuring our teams represent your brand as if they were built in-house from day one.",
  },
  {
    num: "Step 2",
    title: "Build, Train & Launch",
    description:
      "We recruit the right people, configure your systems, and run real-world simulations before going live. Then we plug seamlessly into your existing tools - CRM, helpdesk, chat platforms, and workflows with zero disruption. Go-live is smooth, structured, and fully supported.",
  },
  {
    num: "Step 3",
    title: "Optimize, Perform & Scale",
    description:
      "We don't set and forget. Through continuous monitoring, quality reviews, and data-driven insights, we push performance higher every month. And as your business grows, we grow with you adding channels, expanding coverage, and scaling teams without the friction of starting over.",
  },
];

export function Process() {
  return (
    <section className="py-20 sm:py-28" style={{ backgroundColor: "#f3f4fa" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
            How We Work
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-serif)", color: "#000f30" }}
          >
            From First Call to Full Operation
            <br />
            Here&apos;s How We Do It
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We move fast, with purpose. From day one, we align on your goals, build tailored
            solutions, and launch with clarity, speed, and momentum.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center flex flex-col h-full"
            >
              <p
                className="text-3xl font-bold mb-6"
                style={{ color: "#001b4a", fontFamily: "var(--font-serif)" }}
              >
                {step.num}
              </p>
              <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#1A2B5F] mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-1">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* CTA */}
        <div className="mt-20 border-t border-gray-300 pt-12 pb-8 border-b border-gray-300">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <h3
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A2B5F] leading-tight text-center sm:text-left"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Let&apos;s Talk About What Growth Looks Like for You
            </h3>
            <a
              href="/contact"
              className="px-8 py-4 rounded-full font-semibold transition-all duration-200 whitespace-nowrap"
              style={{ backgroundColor: "#007B7B", color: "white" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f4ffff";
                e.currentTarget.style.color = "black";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#007B7B";
                e.currentTarget.style.color = "white";
              }}
            >
              Speak With an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
