"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Bilal Ahmed",
    role: "IT Manager",
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Omar Raza",
    role: "CEO",
    text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Sana Sheikh",
    role: "Sales Manager",
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Saman Malik",
    role: "Customer Support Lead",
    text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    name: "Zainab Hussain",
    role: "Project Manager",
    text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
    avatar: "https://i.pravatar.cc/150?img=16",
  },
  {
    name: "Hassan Ali",
    role: "E-commerce Manager",
    text: "Our business functions improved with a user-friendly design and positive customer feedback.",
    avatar: "https://i.pravatar.cc/150?img=14",
  },
  {
    name: "Briana Patton",
    role: "Operations Manager",
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    avatar: "https://i.pravatar.cc/150?img=23",
  },
  {
    name: "Aliza Khan",
    role: "Business Analyst",
    text: "Our business functions improved with a user-friendly design and positive customer feedback.",
    avatar: "https://i.pravatar.cc/150?img=25",
  },
  {
    name: "Farhan Siddiqui",
    role: "Marketing Director",
    text: "This ERP's seamless integration enhanced our business operations and customer satisfaction.",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-5">
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {testimonial.text}
      </p>
      <div className="flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-[#1A2B5F]">{testimonial.name}</p>
          <p className="text-xs text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const col1 = testimonials.slice(0, 3);
  const col2 = testimonials.slice(3, 6);
  const col3 = testimonials.slice(6, 9);

  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden">
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
