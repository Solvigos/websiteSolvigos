"use client";

import Link from "next/link";
import {
  IconHeadset,
  IconUserPlus,
  IconUserStar,
  IconMessage,
  IconHeadphones,
  IconRefresh,
  IconBuilding,
  IconWorld,
  IconClipboardList,
  IconMessageChatbot,
} from "@tabler/icons-react";

const mainServices = [
  {
    icon: IconHeadset,
    title: "Customer Experience",
    href: "/services/customer-support",
    hasSub: true,
    sub: [
      { icon: IconUserPlus, title: "Customer Conversion", href: "/services/customer-conversion" },
      { icon: IconUserStar, title: "Customer Onboarding", href: "/services/customer-onboarding" },
      { icon: IconMessage, title: "Customer Support", href: "/services/customer-support" },
      { icon: IconHeadphones, title: "Technical Customer Support", href: "/services/technical-support" },
      { icon: IconRefresh, title: "Customer Renewals", href: "/services/customer-renewals" },
    ],
  },
  {
    icon: IconClipboardList,
    title: "Help Desk Management",
    href: "/services/help-desk-management",
  },
  {
    icon: IconMessageChatbot,
    title: "CRM & Chatbot Setup",
    href: "/services/crm-chatbot",
  },
  {
    icon: IconBuilding,
    title: "BPO & Back-Office",
    href: "/services/bpo-back-office",
  },
  {
    icon: IconWorld,
    title: "Web Development",
    href: "/services/web-development",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20 sm:py-28" style={{ backgroundColor: "#f3f4fa" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Heading + Image */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Our Solutions
              </p>
              <h2
                className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1A2B5F] leading-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Customer Support, CRM Administration, and Business Process Automation Under One Roof
              </h2>
            </div>
            <div className="relative">
              <img
                src="/solutions.png"
                alt="Solutions illustration"
                className="w-full max-w-md"
              />
            </div>
          </div>

          {/* Right: Service Items */}
          <div className="space-y-3">
            {mainServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div key={index}>
                  {/* Main button */}
                  <Link
                    href={service.href}
                    className="flex items-center gap-4 w-full px-6 py-4 rounded-full font-semibold text-black transition-all duration-200 hover:text-white bg-[#d0d8ff] hover:bg-[#003d4b]"
                  >
                    <Icon size={24} className="flex-shrink-0" />
                    <span className="flex-1 text-left">{service.title}</span>
                    <span className="text-lg">→</span>
                  </Link>

                  {/* Sub-items always visible */}
                  {service.hasSub && service.sub && (
                    <div className="ml-6 space-y-2 mt-2">
                      {service.sub.map((subItem, subIndex) => {
                        const SubIcon = subItem.icon;
                        return (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="group flex items-center gap-4 w-full px-6 py-3 rounded-full font-medium text-black border border-black bg-transparent transition-all duration-200 hover:bg-[#003d4b] hover:text-white hover:border-[#003d4b]"
                          >
                            <span className="group-hover:text-white">↳</span>
                            <SubIcon size={20} className="flex-shrink-0" />
                            <span className="flex-1 text-left">{subItem.title}</span>
                            <span className="text-sm">→</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <div
          className="mt-16 rounded-2xl px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ backgroundColor: "#000f30" }}
        >
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Let&apos;s Build Your CX Advantage
          </h3>
          <a
            href="/contact"
            className="px-8 py-4 rounded-full font-semibold transition-all duration-200 whitespace-nowrap"
            style={{ backgroundColor: "#007b7b", color: "white" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f4ffff";
              e.currentTarget.style.color = "black";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#007b7b";
              e.currentTarget.style.color = "white";
            }}
          >
            Speak With an Expert
          </a>
        </div>
      </div>
    </section>
  );
}
