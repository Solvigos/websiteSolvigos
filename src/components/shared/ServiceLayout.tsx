"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconArrowRight, IconCheck } from "@tabler/icons-react";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type KeyFeature = {
  title: string;
  description: string;
};

type ServicePageProps = {
  title: string;
  subtitle: string;
  description: string;
  heroImage?: string;
  features: Feature[];
  keyFeatures: KeyFeature[];
  ctaTitle?: string;
  ctaDescription?: string;
};

export function ServiceLayout({
  title,
  subtitle,
  description,
  heroImage = "/solutions.png",
  features,
  keyFeatures,
  ctaTitle = "Ready to Transform Your Customer Experience?",
  ctaDescription = "Contact us today to discuss how Solvigos can support your business.",
}: ServicePageProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden min-h-[600px]">
        {/* Large organic purple blob - top right */}
        <div className="absolute top-[-150px] right-[-150px] w-[700px] h-[700px] bg-[#3730A3] rounded-full opacity-90"></div>
        <div className="absolute top-[-50px] right-[0px] w-[500px] h-[500px] bg-[#4338CA] rounded-full opacity-80"></div>
        
        {/* Turquoise accent shapes */}
        <div className="absolute top-[100px] right-[150px] w-[200px] h-[200px] bg-[#72E3E8] rounded-full opacity-60"></div>
        <div className="absolute bottom-[50px] right-[100px] w-[150px] h-[150px] bg-[#72E3E8] rounded-full opacity-40"></div>
        
        {/* Floating decorative turquoise arc - bottom left */}
        <div className="absolute bottom-[-100px] left-[-50px] w-[300px] h-[300px] border-[40px] border-[#72E3E8] rounded-full opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20 sm:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A2E] leading-tight"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                {description}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base bg-[#FF7A59] text-white hover:bg-[#E86A4A] transition-colors shadow-lg shadow-[#FF7A59]/30"
                >
                  Start a free trial
                </Link>
                <button className="inline-flex items-center gap-3 px-6 py-4 rounded-full font-semibold text-base text-[#1A1A2E] hover:bg-gray-100 transition-colors">
                  <span className="w-10 h-10 rounded-full bg-[#1A1A2E] flex items-center justify-center">
                    <span className="text-white text-sm">▶</span>
                  </span>
                  Watch the demo
                </button>
              </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Turquoise speech bubble shape background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[400px] bg-[#72E3E8] rounded-[40px] rounded-bl-none opacity-80"></div>
              
              <div className="relative w-full max-w-lg z-10">
                <Image
                  src={heroImage}
                  alt={title}
                  width={600}
                  height={500}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview Section */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              The software that supports special events
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
              Solvigos is a web-based dialer and practical CRM solution for telemarketing, fundraising, and appointment scheduling businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#EEF2FF] flex items-center justify-center text-[#3730A3]">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Key features
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
              Numerous features make it possible to customize the system according to all your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#3730A3] flex items-center justify-center flex-shrink-0">
                    <IconCheck size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#3730A3] py-20 sm:py-24 relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#4338CA] rounded-full opacity-50"></div>
        <div className="absolute bottom-[-50px] left-[-50px] w-[200px] h-[200px] bg-[#72E3E8] rounded-full opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {ctaTitle}
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto text-lg">
            {ctaDescription}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 bg-[#FF7A59] hover:bg-[#E86A4A] text-white font-semibold text-base px-8 py-4 rounded-full transition-all hover:scale-[1.03] shadow-lg shadow-[#FF7A59]/30"
          >
            Get a Quote
            <IconArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
