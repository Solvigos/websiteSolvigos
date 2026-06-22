"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconCheck,
  IconArrowRight,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconHeadset,
  IconDeviceLaptop,
  IconUserPlus,
  IconBuilding,
  IconMessageChatbot,
  IconTicket,
  IconTrendingUp,
  IconRefresh,
  IconWorld,
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
}: ServicePageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const allServices = [
    { label: "Customer Support", href: "/services/customer-support", image: "/moreSolutions/customerSupport.png" },
    { label: "Customer Conversion", href: "/services/customer-conversion", image: "/moreSolutions/customerConversion.png" },
    { label: "Customer Onboarding", href: "/services/customer-onboarding", image: "/moreSolutions/customerOnboarding.png" },
    { label: "Technical Support", href: "/services/technical-support", image: "/moreSolutions/technicalSupport.png" },
    { label: "Customer Renewals", href: "/services/customer-renewals", image: "/moreSolutions/customerRenewals.png" },
    { label: "BPO & Back-Office", href: "/services/bpo-back-office", image: "/moreSolutions/bpoBackoffice.png" },
    { label: "CRM & Chatbot Setup", href: "/services/crm-chatbot", image: "/moreSolutions/crmChatotSetup.png" },
    { label: "Help Desk Management", href: "/services/help-desk-management", image: "/moreSolutions/helpdeskManagement.png" },
    { label: "Web Development", href: "/services/web-development", image: "/moreSolutions/webDevelopment.png" },
  ];

  const moreSolutions = currentService
    ? allServices.filter((s) => s.href !== `/services/${currentService}`)
    : allServices;

  const serviceBlogMap: Record<string, { slug: string; title: string; image: string; readTime: string }> = {
    "customer-support": { slug: "customers-decide-in-first-seven-days", title: "Why Customers Decide in the First Seven Days", image: "/blog/blog1.png", readTime: "4 min read" },
    "technical-support": { slug: "why-turning-it-off-not-technical-support", title: "Why Turning It Off Is Not Technical Support", image: "/blog/blog2.png", readTime: "4 min read" },
    "customer-conversion": { slug: "cart-abandonment-not-just-cart", title: "Cart Abandonment Is Not Just About the Cart", image: "/blog/blog3.png", readTime: "4 min read" },
    "customer-onboarding": { slug: "enrollment-is-easy-part-completion-hard", title: "Enrollment Is Easy, Part-Completion Is Hard", image: "/blog/blog4.png", readTime: "4 min read" },
    "customer-renewals": { slug: "renewals-not-won-at-renewal-time", title: "Renewals Are Not Won at Renewal Time", image: "/blog/blog5.png", readTime: "4 min read" },
    "bpo-back-office": { slug: "admin-work-quietly-slowing-growth", title: "The Admin Work Nobody Sees Is Quietly Slowing Your Growth", image: "/blog/blog6.png", readTime: "4 min read" },
    "crm-chatbot": { slug: "crm-only-as-smart-as-setup", title: "Your CRM Is Only as Smart as Its Setup", image: "/blog/blog7.png", readTime: "4 min read" },
    "help-desk-management": { slug: "hold-music-not-strategy", title: "Hold Music Is Not a Strategy", image: "/blog/blog8.png", readTime: "4 min read" },
    "web-development": { slug: "website-your-hardest-working-employee", title: "Your Website Is Your Hardest-Working Employee", image: "/blog/blog9.png", readTime: "4 min read" },
  };

  const featuredBlog = currentService ? serviceBlogMap[currentService] : null;

  const scrollMoreSolutions = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Section 1: Hero */}
      <section className="relative bg-[#F3F4FA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-24 sm:py-32 lg:py-40">
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
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96">
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

        {/* Curved bottom divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20">
            <path d="M0,80 L0,40 C360,80 720,0 1080,40 C1260,60 1380,70 1440,80 Z" fill="#F3F4FA" />
            <path d="M0,80 C360,40 720,80 1080,40 C1260,20 1380,10 1440,0 L1440,80 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Section 2: Outsourced Solutions - Alternating Content */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Outsourced Solutions for Every Stage
              <br />
              of the Customer Journey
            </h2>
          </div>

          {/* Content blocks */}
          <div className="space-y-20">
            {/* Block 1: Image left, text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-[#E8DDD4] rounded-2xl aspect-[4/3] flex items-center justify-center">
                <span className="text-gray-500 text-sm">[GIF / Image placeholder]</span>
              </div>
              <div className="space-y-5">
                <h3
                  className="text-2xl sm:text-3xl font-bold text-[#1A1A2E]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Delivering Value at Every Stage
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  With our expertise in customer experience outsourcing, we ensure
                  that your business maintains the high-quality CX your customers expect.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We deliver value at every stage of the customer lifecycle, helping your
                  company build strong, lasting customer relationships.
                </p>
              </div>
            </div>

            {/* Block 2: Text left, image right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-5">
                <h3
                  className="text-2xl sm:text-3xl font-bold text-[#1A1A2E]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Comprehensive Support, Anytime, Anywhere
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our 24/7 multichannel support spans email, chat, phone, in-app,
                  social platforms, and beyond — ensuring your customers receive
                  prompt assistance wherever they are.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We proactively monitor engagement, uncovering key insights that drive
                  continuous improvement, all while keeping your customer journey
                  frictionless.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This flexible, always-on approach allows your business to scale
                  efficiently while delivering exceptional, consistent CX at every
                  touchpoint.
                </p>
              </div>
              <div className="order-1 lg:order-2 bg-[#E8DDD4] rounded-2xl aspect-[4/3] flex items-center justify-center">
                <span className="text-gray-500 text-sm">[GIF / Image placeholder]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curved divider: Testimonials → CTA */}
      <div className="bg-white">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20">
          <path d="M0,80 L0,40 C360,80 720,0 1080,40 C1260,60 1380,70 1440,80 Z" fill="white" />
          <path d="M0,80 C360,40 720,80 1080,40 C1260,20 1380,10 1440,0 L1440,80 Z" fill="#F3F4FA" />
        </svg>
      </div>

      {/* Section 3: Why Partner with Us */}
      <section className="bg-[#F3F4FA] py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Header */}
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] leading-tight uppercase"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Why Partner with Us
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              We don&apos;t just provide support — we become an extension of your team.
              Dedicated specialists, proven processes, and the flexibility to scale
              with your business.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-6 bg-[#1A1A2E] hover:bg-[#2a3a5a] text-white px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Arched Cards */}
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
                  className={`${color.bg} rounded-t-full rounded-b-2xl overflow-hidden flex flex-col items-center`}
                >
                  {/* Image Area */}
                  <div className="w-full aspect-[3/4] relative overflow-hidden">
                    <Image
                      src={images[index]}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  {/* Text Area */}
                  <div className="px-4 pb-6 pt-4 text-center">
                    <h3 className="text-sm font-bold text-[#1A1A2E] mb-1 leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Curved divider: Why Partner with Us → Testimonials */}
      <div className="bg-[#F3F4FA]">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20">
          <path d="M0,80 L0,40 C360,80 720,0 1080,40 C1260,60 1380,70 1440,80 Z" fill="#F3F4FA" />
          <path d="M0,80 C360,40 720,80 1080,40 C1260,20 1380,10 1440,0 L1440,80 Z" fill="white" />
        </svg>
      </div>

      {/* Testimonials Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
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
                rotate: "-rotate-3",
                translate: "translate-y-4",
              },
              {
                text: "We needed to scale our support operation fast without sacrificing quality. Solvigos delivered on both fronts. Their team integrated with our processes seamlessly and the results spoke for themselves. Response times improved, CSAT went up, and we finally felt like our customers were in good hands.",
                name: "Dennis Miller",
                rotate: "rotate-2",
                translate: "-translate-y-2",
              },
              {
                text: "Thanks for helping us launch our customer support function. Professional, responsive, and detail-oriented at every stage. A few rough patches early on, but we got there in the end. I would certainly consider working with them again.",
                name: "Mary",
                rotate: "-rotate-1",
                translate: "translate-y-2",
              },
              {
                text: "Solvigos helped us get our CRM and support desk running smoothly. They were patient with our questions and quick to resolve any issues. Their team took the time to understand our workflows and configured everything to match how we actually work.",
                name: "A.H.",
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curved divider: Testimonials → CTA */}
      <div className="bg-white">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20">
          <path d="M0,80 L0,40 C360,80 720,0 1080,40 C1260,60 1380,70 1440,80 Z" fill="white" />
          <path d="M0,80 C360,40 720,80 1080,40 C1260,20 1380,10 1440,0 L1440,80 Z" fill="#F3F4FA" />
        </svg>
      </div>

      {/* Section 6: CTA - Start Building Your Dream Team */}
      <section className="bg-[#F3F4FA] py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Team Collage Placeholder */}
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 bg-[#F3F4FA] rounded-xl aspect-square flex items-center justify-center">
                <span className="text-gray-400 text-xs">[Team photo]</span>
              </div>
              <div className="bg-[#E8DDD4] rounded-xl aspect-square flex items-center justify-center">
                <span className="text-gray-400 text-xs">[Photo]</span>
              </div>
              <div className="bg-[#D4B896] rounded-xl aspect-square flex items-center justify-center">
                <span className="text-gray-400 text-xs">[Icon]</span>
              </div>
              <div className="bg-[#F3F4FA] rounded-xl aspect-square flex items-center justify-center">
                <span className="text-gray-400 text-xs">[Photo]</span>
              </div>
              <div className="col-span-2 bg-[#E8DDD4] rounded-xl aspect-[2/1] flex items-center justify-center">
                <span className="text-gray-400 text-xs">[Team photo]</span>
              </div>
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

      {/* Curved divider: CTA → Still Have Questions */}
      <div className="bg-[#F3F4FA]">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20">
          <path d="M0,80 L0,40 C360,80 720,0 1080,40 C1260,60 1380,70 1440,80 Z" fill="#F3F4FA" />
          <path d="M0,80 C360,40 720,80 1080,40 C1260,20 1380,10 1440,0 L1440,80 Z" fill="white" />
        </svg>
      </div>

      {/* Still Have Questions */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
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
                We&apos;re here to answer any questions you may have about outsourcing your
                customer experience. Whether you&apos;re looking to outsource a specific
                phase of the journey or the entire lifecycle, our team is ready to
                support your business goals.
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

      {/* Curved divider: Still Have Questions → More Solutions */}
      <div className="bg-white">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20">
          <path d="M0,80 L0,40 C360,80 720,0 1080,40 C1260,60 1380,70 1440,80 Z" fill="white" />
          <path d="M0,80 C360,40 720,80 1080,40 C1260,20 1380,10 1440,0 L1440,80 Z" fill="#F3F4FA" />
        </svg>
      </div>

      {/* More Solutions*/}
      {/* More Solutions */}
      <section className="bg-[#F3F4FA] py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] text-center mb-14"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            More Solutions
          </h2>

          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
          >
            {moreSolutions.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="flex-shrink-0 w-52 bg-[#e7edf7] rounded-2xl p-5 snap-start group hover:shadow-lg transition-all duration-300"
              >
                <div className="w-full aspect-square rounded-xl relative overflow-hidden mb-4">
                  <Image
                    src={service.image}
                    alt={service.label}
                    fill
                    className="object-contain"
                    sizes="208px"
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

          {/* Navigation arrows + divider */}
          <div className="mt-8">
            <div className="h-px bg-gray-300 mb-6" />
            <div className="flex justify-end">
              <div className="flex gap-2">
                <button
                  onClick={() => scrollMoreSolutions("left")}
                  className="w-10 h-10 rounded-full bg-[#1A3D2E] hover:bg-[#2a5a42] text-white flex items-center justify-center transition-colors"
                >
                  <IconChevronLeft size={18} />
                </button>
                <button
                  onClick={() => scrollMoreSolutions("right")}
                  className="w-10 h-10 rounded-full bg-[#1A3D2E] hover:bg-[#2a5a42] text-white flex items-center justify-center transition-colors"
                >
                  <IconChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
