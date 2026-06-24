"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconArrowRight,
  IconChevronDown,
} from "@tabler/icons-react";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type KeyFeature = {
  title: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type ServicePageProps = {
  title: string;
  subtitle?: string;
  description: string;
  heroImage?: string;
  features?: Feature[];
  keyFeatures?: KeyFeature[];
  faqItems?: FaqItem[];
  ctaTitle?: string;
  ctaDescription?: string;
  currentService: string;
  strikeHeadline?: string;
  strikeWord?: string;
  strikeReplacement?: string;
  strikeSubheadline?: string;
  ctaImages?: string[];
  stillHaveQuestionsText?: string;
  outsourcedBlocks?: {
    heading?: ReactNode;
    blocks: {
      title: string;
      descriptions: string[];
    }[];
  };
};

const defaultFaqItems: FaqItem[] = [
  {
    question: "How do you ensure quality across all touchpoints?",
    answer: "We implement rigorous quality assurance processes, regular performance reviews, and continuous training to ensure consistent excellence across every customer interaction.",
  },
  {
    question: "Can you support multilingual customer interactions?",
    answer: "Yes, our teams are equipped to handle customer interactions in multiple languages, ensuring your diverse customer base receives the support they need.",
  },
  {
    question: "How quickly can you scale our support team?",
    answer: "We can typically scale your team within 2-3 weeks, depending on the complexity of the role and specific skill requirements.",
  },
];

const serviceImageMap: Record<string, string> = {
  "customer-support": "customerSupport",
  "technical-support": "technicalSupport",
  "bpo-back-office": "bpoBackoffice",
  "crm-chatbot": "crmChatbot",
};

export function ServiceLayout({
  title,
  subtitle = "Services",
  description,
  heroImage = "/solutions.png",
  features = [],
  keyFeatures = [],
  faqItems = defaultFaqItems,
  ctaTitle = "Start Building Your Dream Team",
  ctaDescription = "Design a custom outsourcing solution that enables you to scale. We've got you covered.",
  currentService,
  strikeHeadline,
  strikeWord,
  strikeReplacement,
  strikeSubheadline,
  ctaImages = [],
  stillHaveQuestionsText = "We're here to answer any questions you may have about outsourcing your customer experience. Whether you're looking to outsource a specific phase of the journey or the entire lifecycle, our team is ready to support your business goals.",
  outsourcedBlocks,
}: ServicePageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const allServices = [
    { label: "Customer Support", href: "/services/customer-support", image: "/moreSolutions/customerSupport.png" },
    { label: "Technical Support", href: "/services/technical-support", image: "/moreSolutions/technicalSupport.png" },
    { label: "BPO & Back-Office", href: "/services/bpo-back-office", image: "/moreSolutions/bpoBackoffice.png" },
    { label: "CRM & AI Chatbot Setup", href: "/services/crm-chatbot", image: "/moreSolutions/crmChatotSetup.png" },
  ];

  const moreSolutions = currentService
    ? allServices.filter((s) => s.href !== `/services/${currentService}`)
    : allServices;

  const serviceBlogMap: Record<string, { slug: string; title: string; image: string; readTime: string }> = {
    "customer-support": { slug: "customers-decide-in-first-seven-days", title: "Why Customers Decide in the First Seven Days", image: "/blog/blog1.png", readTime: "4 min read" },
    "technical-support": { slug: "why-turning-it-off-not-technical-support", title: "Why Turning It Off Is Not Technical Support", image: "/blog/blog2.png", readTime: "4 min read" },
    "bpo-back-office": { slug: "admin-work-quietly-slowing-growth", title: "The Admin Work Nobody Sees Is Quietly Slowing Your Growth", image: "/blog/blog6.png", readTime: "4 min read" },
    "crm-chatbot": { slug: "crm-only-as-smart-as-setup", title: "Your CRM Is Only as Smart as Its Setup", image: "/blog/blog7.png", readTime: "4 min read" },
  };

  const featuredBlog = currentService ? serviceBlogMap[currentService] : null;

  return (
    <>
      {/* Section 1: Hero */}
      <section className="relative bg-[#F3F4FA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A2E] leading-[1.1]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {title}
              </h1>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-lg">
                {description}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#007b7b] hover:bg-[#00f4f4] hover:text-black text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              >
                Get Started
                <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <IconArrowRight size={16} />
                </span>
              </Link>
            </div>

            {/* Right: Illustration */}
            <div className="flex justify-center lg:justify-center lg:-ml-8">
              <div className="relative w-80 h-80 sm:w-[500px] sm:h-[500px]">
                <Image
                  src={heroImage}
                  alt={title}
                  width={400}
                  height={400}
                  className="relative z-10 w-full h-full object-contain p-8"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Outsourced Solutions - Alternating Content */}
      <section className="bg-[#F3F4FA] py-10 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
            {outsourcedBlocks?.heading ? (
              outsourcedBlocks.heading
            ) : (
              <>
                Outsourced Solutions for Every Stage
                <br />
                of the Customer Journey
              </>
            )}
            </h2>
          </div>

          {/* Content blocks */}
          <div className="space-y-20">
            {/* Block 1: Image left, text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl aspect-[4/3] overflow-hidden">
                <Image
                  src={`/servicepages/${serviceImageMap[currentService] || "image"}1.png`}
                  alt="Service block 1"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-5">
                <h3
                  className="text-2xl sm:text-3xl font-bold text-[#1A1A2E]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {outsourcedBlocks ? outsourcedBlocks.blocks[0].title : "Delivering Value at Every Stage"}
                </h3>
                {(outsourcedBlocks ? outsourcedBlocks.blocks[0].descriptions : [
                  "With our expertise in customer experience outsourcing, we ensure that your business maintains the high-quality CX your customers expect.",
                  "We deliver value at every stage of the customer lifecycle, helping your company build strong, lasting customer relationships.",
                ]).map((desc, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">{desc}</p>
                ))}
              </div>
            </div>

            {/* Block 2: Text left, image right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-5">
                <h3
                  className="text-2xl sm:text-3xl font-bold text-[#1A1A2E]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {outsourcedBlocks ? outsourcedBlocks.blocks[1].title : "Comprehensive Support, Anytime, Anywhere"}
                </h3>
                {(outsourcedBlocks ? outsourcedBlocks.blocks[1].descriptions : [
                  "Our 24/7 multichannel support spans email, chat, phone, in-app, social platforms, and beyond — ensuring your customers receive prompt assistance wherever they are.",
                  "We proactively monitor engagement, uncovering key insights that drive continuous improvement, all while keeping your customer journey frictionless.",
                  "This flexible, always-on approach allows your business to scale efficiently while delivering exceptional, consistent CX at every touchpoint.",
                ]).map((desc, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">{desc}</p>
                ))}
              </div>
              <div className="order-1 lg:order-2 relative rounded-2xl aspect-[4/3] overflow-hidden">
                <Image
                  src={`/servicepages/${serviceImageMap[currentService] || "image"}2.png`}
                  alt="Service block 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curved divider: Why Partner with Us*/}
      <div className="bg-[#F3F4FA]">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20">
          <path d="M0,80 L0,40 C360,80 720,0 1080,40 C1260,60 1380,70 1440,80 Z" fill="#F3F4FA" />
          <path d="M0,80 C360,40 720,80 1080,40 C1260,20 1380,10 1440,0 L1440,80 Z" fill="white" />
        </svg>
      </div>

      {/* Section 3: Why Partner with Us */}
      <section className="bg-[#FFFFFF] py-10 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Strikethrough Headline */}
          {strikeHeadline && strikeWord && strikeReplacement && (
            <div className="text-center mb-6">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] leading-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {strikeHeadline}{" "}
                <span className="relative inline-block">
                  <span className="text-gray-400 line-through decoration-2 decoration-gray-400">
                    {strikeWord}
                  </span>
                </span>{" "}
                <span className="text-[#1A1A2E]">{strikeReplacement}</span>
              </h2>
            </div>
          )}

          {/* Subheadline */}
          {strikeSubheadline && (
            <div className="text-center mb-8">
              <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                {strikeSubheadline}
              </p>
            </div>
          )}

          {/* CTA Button */}
          <div className="text-center mb-14">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#007b7b] hover:bg-[#00f4f4] hover:text-black text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get Started
              <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <IconArrowRight size={16} />
              </span>
            </Link>
          </div>

          {/* Arched Cards - text on top, image below */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {(keyFeatures.length > 0
              ? keyFeatures.slice(0, 4)
              : [
                  { title: "Drive Sustainable Growth", description: "Scale customer operations efficiently and focus on core business growth." },
                  { title: "Personalized Solutions", description: "Our solutions grow with you, allowing you to outsource as much or as little as needed." },
                  { title: "Optimize Satisfaction", description: "Our data-driven approach ensures customers receive the best experience at every stage." },
                  { title: "Strategic Partner", description: "We specialize in fast-growing, customer-obsessed companies with deep expertise." },
                ]
            ).map((feature, index) => {
              const cardColors = [
                { bg: "bg-[#f5d5d5]", overlay: "bg-[#f5d5d5]/80" },
                { bg: "bg-[#d5e5f5]", overlay: "bg-[#d5e5f5]/80" },
                { bg: "bg-[#f5e5d5]", overlay: "bg-[#f5e5d5]/80" },
                { bg: "bg-[#f5f0d5]", overlay: "bg-[#f5f0d5]/80" },
              ];
              const color = cardColors[index % 4];
              const images = [
                `/partnerWithUs/${currentService}-1.png`,
                `/partnerWithUs/${currentService}-2.png`,
                `/partnerWithUs/${currentService}-3.png`,
                `/partnerWithUs/${currentService}-4.png`,
              ];
              return (
                <div
                  key={index}
                  className={`${color.bg} rounded-t-full rounded-b-2xl flex flex-col items-center min-h-[380px] sm:min-h-[440px]`}
                >
                  {/* Text Area (on top) */}
                  <div className="px-4 pt-16 sm:pt-20 pb-4 text-center">
                    <h3 className="text-base font-bold text-[#1A1A2E] mb-3 leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  {/* Image Area - pushed to bottom */}
                  <div className="w-full h-36 sm:h-40 relative mt-auto">
                    <Image
                      src={images[index]}
                      alt={feature.title}
                      fill
                      className="object-contain rounded-b-2xl"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="bg-white py-10 sm:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Header */}
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              The feeling is <span className="italic">mutual</span>
            </h2>
          </div>

          {/* Testimonial cards */}
          <div className="flex gap-5 py-6 min-h-[320px] overflow-x-auto pb-6 snap-x snap-mandatory lg:justify-center lg:flex-wrap lg:overflow-visible">
            {[
              {
                text: "We've worked with many vendors over the years, and Solvigos stands out for their ability to adapt to our needs quickly. Their team became a genuine extension of ours from day one. The quality of support has been consistently high.",
                name: "Valerie Wall",
                role: "VP of Customer Experience",
                rotate: "-rotate-3",
                translate: "translate-y-4",
              },
              {
                text: "We needed to scale our support operation fast without sacrificing quality. Solvigos delivered on both fronts. Their team integrated with our processes seamlessly and the results spoke for themselves. Response times improved, CSAT went up, and we finally felt like our customers were in good hands.",
                name: "Dennis Miller",
                role: "Director of Operations",
                rotate: "rotate-2",
                translate: "-translate-y-2",
              },
              {
                text: "Thanks for helping us launch our customer support function. Professional, responsive, and detail-oriented at every stage. A few rough patches early on, but we got there in the end. I would certainly consider working with them again.",
                name: "Mary",
                role: "Head of Customer Support",
                rotate: "-rotate-1",
                translate: "translate-y-2",
              },
              {
                text: "Solvigos helped us get our CRM and support desk running smoothly. They were patient with our questions and quick to resolve any issues. Their team took the time to understand our workflows and configured everything to match how we actually work.",
                name: "A.H.",
                role: "Senior CRM Manager",
                rotate: "rotate-3",
                translate: "-translate-y-4",
              },
            ].map((t, i) => (
              <div
                key={i}
                className={`flex-shrink-0 w-64 snap-start bg-[#E7EDF7] rounded-2xl p-6 ${t.rotate} ${t.translate} transition-all duration-300 hover:scale-105 hover:z-10 hover:rotate-0 shadow-sm hover:shadow-md`}
              >
                <p className="text-xs text-gray-600 leading-relaxed mb-6 min-h-[100px]">
                  {t.text}
                </p>
                <span className="text-xs font-semibold text-[#1A1A2E]">
                  {t.name}
                </span>
                <p className="text-xs text-gray-500 mt-0.5">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curved divider: Start Building Your Dream Team */}
      <div className="bg-white">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20">
          <path d="M0,80 L0,40 C360,80 720,0 1080,40 C1260,60 1380,70 1440,80 Z" fill="white" />
          <path d="M0,80 C360,40 720,80 1080,40 C1260,20 1380,10 1440,0 L1440,80 Z" fill="#F3F4FA" />
        </svg>
      </div>

      {/* Section 6: CTA - Start Building Your Dream Team */}
      <section className="bg-[#F3F4FA] py-10 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Team Images */}
            <div className="grid grid-cols-3 gap-4">
              {[0, 1, 2, 3].map((i) => {
                const positions = [
                  "col-span-2 aspect-square",
                  "aspect-square",
                  "aspect-square",
                  "col-span-2 aspect-[2/1]",
                ];
                return (
                  <div key={i} className={`${positions[i]} rounded-xl relative overflow-hidden`}>
                    {ctaImages[i] ? (
                      <Image
                        src={ctaImages[i]}
                        alt={`Team ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#E8DDD4] flex items-center justify-center">
                        <span className="text-gray-400 text-xs">[Team photo]</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] leading-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {ctaTitle}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {ctaDescription}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#007b7b] hover:bg-[#00f4f4] hover:text-black text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              >
                Get Started
                <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <IconArrowRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Still Have Questions */}
      <section className="bg-[#F3F4FA] py-10 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Content + FAQs */}
            <div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] leading-tight mb-6"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Still Have Questions?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 max-w-lg">
                {stillHaveQuestionsText}
              </p>

              {/* FAQ Accordions */}
              <div className="space-y-0 mb-8">
                {faqItems.slice(0, 3).map((faq, i) => (
                  <div key={i} className="border-b border-gray-200">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex items-center justify-between w-full py-4 text-left"
                    >
                      <span className="text-sm font-medium text-[#1A1A2E] pr-4">
                        {faq.question}
                      </span>
                      <IconChevronDown
                        size={18}
                        className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                          openFaq === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-4 text-sm text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <Link
                href="/faq"
                className="inline-block w-full sm:w-auto text-center bg-[#1A3D2E] hover:bg-[#2a5a42] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                See All FAQs
              </Link>
            </div>

            {/* Right: Featured Content Card */}
            {featuredBlog && (
              <div className="bg-[#e7edf7] rounded-2xl p-6 sm:p-8">
                <div className="bg-[#d4c9a8] rounded-xl aspect-[4/3] relative overflow-hidden mb-6">
                  <Image
                    src={featuredBlog.image}
                    alt={featuredBlog.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <span className="absolute top-4 left-4 bg-[#1A3D2E] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Featured Content
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1A1A2E] mb-4">
                  {featuredBlog.title}
                </h3>
                <div className="flex items-center justify-between">
                  <Link
                    href={`/blog/${featuredBlog.slug}`}
                    className="inline-flex items-center gap-2 bg-[#1A3D2E] hover:bg-[#2a5a42] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
                  >
                    Start Reading
                  </Link>
                  <span className="text-xs text-gray-500">{featuredBlog.readTime}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Curved divider: More Solutions */}
      <div className="bg-[#F3F4FA]">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20">
          <path d="M0,80 L0,40 C360,80 720,0 1080,40 C1260,60 1380,70 1440,80 Z" fill="#F3F4FA" />
          <path d="M0,80 C360,40 720,80 1080,40 C1260,20 1380,10 1440,0 L1440,80 Z" fill="white" />
        </svg>
      </div>

      {/* More Solutions */}
      <section className="bg-[#FFFFFF] py-10 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] text-center mb-14"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            More Solutions
          </h2>

          {/* Centered cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {moreSolutions.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="bg-[#e7edf7] rounded-2xl p-5 group hover:shadow-lg transition-all duration-300"
              >
                <div className="w-full aspect-square rounded-xl relative overflow-hidden mb-4">
                  <Image
                    src={service.image}
                    alt={service.label}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-[#1A1A2E] leading-snug pr-2 group-hover:text-[#007b7b] transition-colors">
                    {service.label}
                  </h3>
                  <IconArrowRight size={16} className="text-gray-400 group-hover:text-[#007b7b] transition-colors flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
