"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import { Accordion } from "@/components/ui/Accordion";

type ServiceCard = {
  num: string;
  title: string;
  desc: string;
};

type PopularService = {
  title: string;
  image: string;
  desc: string;
};

type ServicePageProps = {
  title: string;
  subtitle: string;
  description: string;
  experienceText?: string;
  serviceCards: ServiceCard[];
  popularServices: PopularService[];
  faqs?: { question: string; answer: string }[];
};

export function ServiceLayout({
  title,
  subtitle,
  description,
  experienceText = "We have over 25 years of experience.",
  serviceCards,
  popularServices,
  faqs,
}: ServicePageProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-navy pt-32 sm:pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
            alt="Team collaboration"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
          >
            {title}
          </motion.h1>
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 flex items-center justify-center gap-2 text-sm text-blue-200"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>→</span>
            <span className="text-white">{subtitle}</span>
          </motion.nav>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue leading-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {experienceText}
              </h2>
            </motion.div>
            <div className="hidden lg:block w-px h-40 bg-border mx-auto" />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-body leading-relaxed"
            >
              {description}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do For You - Numbered Cards */}
      <section className="bg-ice py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-blue uppercase tracking-wider">Service we provide</p>
            <h2
              className="mt-2 text-3xl sm:text-4xl font-bold text-navy"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              What We Do For You
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((card, i) => (
              <motion.div
                key={card.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative bg-navy rounded-xl p-6 pt-10"
              >
                <div className="absolute -top-3 left-6 bg-blue text-white text-sm font-bold px-3 py-1 rounded">
                  {card.num}
                </div>
                <h3 className="text-lg font-bold text-white uppercase">{card.title}</h3>
                <p className="mt-3 text-sm text-blue-200 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Popular Services */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-blue uppercase tracking-wider">Service we provide</p>
            <h2
              className="mt-2 text-3xl sm:text-4xl font-bold text-navy"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Our Popular Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group"
              >
                <div className="relative h-56 rounded-xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/90 to-transparent p-5">
                    <h3 className="text-lg font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm text-body leading-relaxed">{service.desc}</p>
                <Link
                  href="/contact"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-blue transition-colors"
                >
                  Continue Reading <IconArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqs && (
        <section className="bg-ice py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center mb-10">
              <h2
                className="text-3xl sm:text-4xl font-bold text-navy"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Frequently Asked Questions
              </h2>
            </div>
            <Accordion items={faqs} />
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="mt-4 text-blue-200 max-w-xl mx-auto">
            Contact us today to discuss how Solvigos can support your business.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 bg-blue hover:opacity-90 text-white font-semibold text-base px-8 py-4 rounded-full transition-all hover:scale-[1.03] shadow-lg shadow-blue/25"
          >
            Get a Quote
            <IconArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
