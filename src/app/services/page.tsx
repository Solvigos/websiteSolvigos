import Link from "next/link";
import Image from "next/image";
import {
  IconHeadset,
  IconAntenna,
  IconMessageChatbot,
  IconBuilding,
} from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Support & BPO Services",
  description:
    "Explore Solvigos outsourcing services: Customer Support, Technical Support, BPO & Back-Office, and CRM & AI Chatbot Setup. Scalable solutions for your business.",
  openGraph: {
    title: "Services | Solvigos",
    description:
      "Explore Solvigos outsourcing services: Customer Support, Technical Support, BPO, and CRM & AI Chatbot Setup.",
    url: "https://solvigos.com/services",
    images: [
      {
        url: "/og_image/servicespage.png",
        width: 1200,
        height: 630,
        alt: "Solvigos Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Solvigos",
    description:
      "Explore Solvigos outsourcing services: Customer Support, Technical Support, BPO, and CRM & AI Chatbot Setup.",
    images: ["/og_image/servicespage.png"],
  },
};

const services = [
  {
    icon: IconHeadset,
    title: "Customer Support",
    description: "Omnichannel support teams covering live chat, email, phone, and social media — trained on your brand voice.",
    href: "/services/customer-support",
  },
  {
    icon: IconAntenna,
    title: "Technical Support",
    description: "Tier 1–3 troubleshooting, SaaS product support, and IT help desk management with rapid escalation.",
    href: "/services/technical-support",
  },
  {
    icon: IconMessageChatbot,
    title: "CRM & AI Chatbot Setup",
    description: "Setup, configure, and optimise your CRM stack and AI chatbots for better customer journeys.",
    href: "/services/crm-chatbot",
  },
  {
    icon: IconBuilding,
    title: "BPO & Back-Office",
    description: "Data entry, order processing, CRM management, and billing support — accurate and scalable operations.",
    href: "/services/bpo-back-office",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative z-10"
        style={{ backgroundColor: "#F3F4FA" }}
      >
        <div className="max-w-7xl mx-auto px-4 pt-13 pb-13 sm:px-6 md:pt-25 md:pb-21 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: Content */}
            <div className="space-y-4">
              <p className="text-xs sm:text-sm font-semibold text-[#007b7b] uppercase tracking-wider">
                Our Services
              </p>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1A2B5F] leading-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Support solutions
                <br />
                built around your business
              </h1>
              <p className="text-base sm:text-lg text-black-600 leading-relaxed">
                From customer support to back-office operations, we help you deliver exceptional experiences without the cost and complexity of building it all in-house.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 bg-[#007b7b] hover:bg-[#00f4f4] hover:text-black text-white hover:scale-105 shadow-lg"
              >
                Schedule a Free Consultation
                <span>→</span>
              </Link>
            </div>

            {/* Right: Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl">
                <Image
                  src="/services/heroServices.png"
                  alt="Services illustration"
                  width={700}
                  height={700}
                  className="w-full h-auto object-contain border-0 outline-none"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curved divider*/}
      <div className="bg-[#F3F4FA]">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20">
          <path d="M0,80 L0,40 C360,80 720,0 1080,40 C1260,60 1380,70 1440,80 Z" fill="#F3F4FA" />
          <path d="M0,80 C360,40 720,80 1080,40 C1260,20 1380,10 1440,0 L1440,80 Z" fill="white" />
        </svg>
      </div>


      {/* Top Categories Section */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A2B5F] text-center mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            What We Offer
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-12 rounded-full"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/services/customer-support" className="flex items-center gap-3 px-5 py-4 rounded-full bg-[#f0f0ff] hover:bg-[#e5e5ff] transition-colors group">
              <IconHeadset size={20} className="text-purple-500" />
              <span className="font-medium text-sm text-gray-700 group-hover:text-purple-600">Customer Support</span>
            </Link>

            <Link href="/services/technical-support" className="flex items-center gap-3 px-5 py-4 rounded-full bg-[#f0f8ff] hover:bg-[#e5f3ff] transition-colors group">
              <IconAntenna size={20} className="text-blue-500" />
              <span className="font-medium text-sm text-gray-700 group-hover:text-blue-600">Technical Support</span>
            </Link>

            <Link href="/services/bpo-back-office" className="flex items-center gap-3 px-5 py-4 rounded-full bg-[#ffe8c5] hover:bg-[#ffd9a0] transition-colors group">
              <IconBuilding size={20} className="text-amber-600" />
              <span className="font-medium text-sm text-gray-700 group-hover:text-amber-700">BPO & Back-Office</span>
            </Link>

            <Link href="/services/crm-chatbot" className="flex items-center gap-3 px-5 py-4 rounded-full bg-[#fff0ff] hover:bg-[#ffe5ff] transition-colors group">
              <IconMessageChatbot size={20} className="text-fuchsia-500" />
              <span className="font-medium text-sm text-gray-700 group-hover:text-fuchsia-600">CRM & AI Chatbot Setup</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Detail Blocks */}
      <section className="py-10 sm:py-20 bg-[#F3F4FA]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 space-y-20">

          {/* 1. Customer Support */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Customer Support</p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A2B5F] leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
                Fast Responses. Friendly Service. Every Channel.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We deliver professional support across live chat, email, social media, and helpdesk platforms becoming a seamless extension of your brand.
              </p>
              <Link href="/services/customer-support" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-[#004eb6] text-white hover:bg-black transition-colors">
                Learn More <span>→</span>
              </Link>
            </div>
            <div className="flex justify-center">
              <Image src="/services/CustomerSupport.png" alt="Customer Support" width={400} height={300} className="w-full max-w-md h-auto" />
            </div>
          </div>

          {/* 2. Technical Support */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <Image src="/services/TechnicalSupport.png" alt="Technical Support" width={400} height={300} className="w-full max-w-md h-auto" />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Technical Support</p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A2B5F] leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
                Expertise That Keeps Customers Productive.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our trained specialists resolve product and software issues efficiently, reducing downtime and improving the overall user experience.
              </p>
              <Link href="/services/technical-support" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-[#004eb6] text-white hover:bg-black transition-colors">
                Learn More <span>→</span>
              </Link>
            </div>
          </div>

          {/* 3. BPO & Back-Office */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">BPO & Back-Office</p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A2B5F] leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
                Less Admin. More Growth.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From data entry to CRM management, we handle the administrative work that eats up your time, so your team can focus on strategy and scaling.
              </p>
              <Link href="/services/bpo-back-office" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-[#004eb6] text-white hover:bg-black transition-colors">
                Learn More <span>→</span>
              </Link>
            </div>
            <div className="flex justify-center">
              <Image src="/services/BPOBackOffice.png" alt="BPO & Back-Office" width={400} height={300} className="w-full max-w-md h-auto" />
            </div>
          </div>

          {/* 4. CRM & AI Chatbot Setup */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <Image src="/services/CRMChatbotSetup.png" alt="CRM & AI Chatbot Setup" width={400} height={300} className="w-full max-w-md h-auto" />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">CRM & AI Chatbot Setup</p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A2B5F] leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
                Smarter Conversations Start With the Right Setup.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We implement, configure, and optimize your CRM and chatbot systems so your tools do more of the work and your team spends less time managing them.
              </p>
              <Link href="/services/crm-chatbot" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-[#004eb6] text-white hover:bg-black transition-colors">
                Learn More <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Curved divider*/}
      <div className="bg-[#F3F4FA]">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20">
          <path d="M0,80 L0,40 C360,80 720,0 1080,40 C1260,60 1380,70 1440,80 Z" fill="#F3F4FA" />
          <path d="M0,80 C360,40 720,80 1080,40 C1260,20 1380,10 1440,0 L1440,80 Z" fill="white" />
        </svg>
      </div>

      {/* CTA */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A2B5F] leading-tight mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Let&apos;s Talk About What Growth Looks Like for You
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-12 py-5 rounded-full font-semibold text-lg transition-all duration-300 bg-[#007b7b] hover:bg-[#00f4f4] hover:text-black text-white hover:scale-105 shadow-lg"
          >
            Speak With an Expert
            <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
