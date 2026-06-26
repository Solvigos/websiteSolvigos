import Link from "next/link";
import { IconCheck } from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outsourced Support Pricing Plans",
  description:
    "Transparent pricing for customer support outsourcing. Choose from Starter, Growth, or Enterprise plans — or request a custom quote tailored to your business needs.",
  openGraph: {
    title: "Pricing | Solvigos",
    description:
      "Transparent pricing for customer support outsourcing. Choose from Starter, Growth, or Enterprise plans.",
    url: "https://solvigos.com/pricing",
    images: [
      {
        url: "/og_image/pricingpage.jpg",
        width: 1200,
        height: 630,
        alt: "Solvigos Pricing Plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Solvigos",
    description:
      "Transparent pricing for customer support outsourcing. Choose from Starter, Growth, or Enterprise plans.",
    images: ["/og_image/pricingpage.jpg"],
  },
};

const plans = [
  {
    name: "Starter",
    agents: "1 dedicated agent",
    description: "Perfect for startups & small businesses launching support operations.",
    badge: "",
    supportLevel: "L1 Support",
    features: [
      "1 dedicated agent",
      "Email & chat support",
      "48-hr onboarding",
      "Basic reporting",
      "Business hours coverage",
      "Monthly performance review",
    ],
    cta: "Get a Quote",
    href: "/contact",
    highlighted: false,
  },
  {
    name: "Growth",
    agents: "Up to 5 agents",
    description: "Ideal for growing businesses needing multi-channel support.",
    badge: "Most Popular",
    supportLevel: "L1 & L2 Support",
    features: [
      "Up to 5 dedicated agents",
      "Email & chat support",
      "2-week onboarding",
      "Advanced analytics",
      "24/5 coverage",
      "QA program included",
      "Dedicated account manager",
    ],
    cta: "Get a Quote",
    href: "/contact",
    highlighted: true,
  },
  {
    name: "Enterprise",
    agents: "15+ agents",
    description: "Tailored for large operations with complex CX needs.",
    badge: "",
    supportLevel: "L1, L2 & L3 Support",
    features: [
      "15+ dedicated agents",
      "Full multi-channel support",
      "Custom onboarding timeline",
      "Real-time dashboards & BI",
      "24/7 / 365 coverage",
      "Enterprise QA & training",
      "Dedicated success team",
      "Custom integrations",
    ],
    cta: "Get a Quote",
    href: "/contact",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="bg-[#F3F4FA] pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A2E] leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Transparent Pricing
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Choose the plan that fits your business. All plans include a dedicated team, quality assurance, and ongoing support.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Pricing Cards */}
      <section className="bg-[#F3F4FA] py-10 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 flex flex-col h-full ${
                  plan.highlighted
                    ? "border-2 border-[#007b7b] bg-[#FAFAFD] shadow-lg relative"
                    : "border border-gray-200 bg-[#FAFAFD]"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#007b7b] text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="text-xl font-bold text-[#1A1A2E]">{plan.name}</h3>

                {/* Agents Count */}
                <p className="text-sm text-gray-500 mt-1">{plan.agents}</p>

                {/* Description */}
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{plan.description}</p>

                {/* Support Level Badge */}
                <div className="mt-4">
                  <span className="inline-block bg-teal-50 text-[#007b7b] text-xs font-semibold px-3 py-1.5 rounded-full border border-teal-200">
                    {plan.supportLevel}
                  </span>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-6"></div>

                {/* Features */}
                <ul className="space-y-3 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <IconCheck size={18} className="mt-0.5 flex-shrink-0 text-[#007b7b]" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href={plan.href}
                  className={`mt-8 w-full inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 px-8 py-3.5 text-base ${
                    plan.highlighted
                      ? "bg-[#007b7b] text-white hover:bg-[#00f4f4] hover:text-black"
                      : "border border-[#007b7b] text-[#007b7b] hover:bg-[#007b7b] hover:text-white"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}

            {/* Custom Plan Card - Blurred */}
            <div className="rounded-2xl p-8 flex flex-col h-full border border-gray-200 bg-[#FAFAFD] relative overflow-hidden">
              {/* Blurred Content */}
              <div className="blur-sm pointer-events-none select-none">
                <h3 className="text-xl font-bold text-[#1A1A2E]">Custom</h3>
                <p className="text-sm text-gray-500 mt-1">For your specific needs</p>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">Build a plan tailored to your business needs</p>
                <div className="mt-4">
                  <span className="inline-block bg-teal-50 text-[#007b7b] text-xs font-semibold px-3 py-1.5 rounded-full border border-teal-200">
                    Custom Support
                  </span>
                </div>
                <div className="border-t border-gray-200 my-6"></div>
                <ul className="space-y-3">
                  {["Tailored to your needs", "Flexible pricing", "Custom integrations", "Dedicated support"].map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <IconCheck size={18} className="mt-0.5 flex-shrink-0 text-[#007b7b]" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg">
                  <div className="w-12 h-12 bg-[#007b7b] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-[#1A1A2E]">Unlock Custom Pricing</h4>
                </div>
              </div>

              {/* CTA Button - Clickable and moved down */}
              <div className="mt-auto pt-8 relative z-10">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 px-8 py-3.5 text-base border border-[#007b7b] text-[#007b7b] hover:bg-[#007b7b] hover:text-white"
                >
                  Get a Quote
                </Link>
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

      {/* Section 4: Not Sure */}
      <section className="bg-white py-10 sm:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1A1A2E]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Not Sure Which Plan is Right for You?
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Schedule a call with our team and we&apos;ll help you find the perfect solution.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#007b7b] hover:bg-[#00f4f4] hover:text-black text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}