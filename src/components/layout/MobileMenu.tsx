"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IconX, IconArrowRight } from "@tabler/icons-react";

type DropdownItem = { label: string; href: string; description?: string; icon?: React.ReactNode };
type DropdownSection = {
  heading?: string;
  icon?: React.ReactNode;
  items: DropdownItem[];
};
type NavLink = {
  label: string;
  href: string;
  dropdown?: DropdownSection[];
};

const menuSections = [
  {
    heading: "Solutions",
    items: [
      { label: "Customer Experience", href: "/services/customer-support" },
      { label: "Customer Conversion", href: "/services/customer-conversion" },
      { label: "Customer Onboarding", href: "/services/customer-onboarding" },
      { label: "Customer Support", href: "/services/customer-support" },
      { label: "Technical Customer Support", href: "/services/technical-support" },
      { label: "Customer Renewals", href: "/services/customer-renewals" },
      { label: "BPO & Back-Office", href: "/services/bpo-back-office" },
      { label: "CRM & Chatbot Setup", href: "/services/crm-chatbot" },
      { label: "Help Desk Management", href: "/services/help-desk-management" },
      { label: "Web Development", href: "/services/web-development" },
    ],
  },
  {
    heading: "Industries",
    items: [
      { label: "eCommerce", href: "/industries/ecommerce" },
      { label: "SaaS", href: "/industries/saas" },
      { label: "Technology", href: "/industries/technology" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Education", href: "/industries/education" },
      { label: "Travel & Hospitality", href: "/industries/travel-hospitality" },
    ],
  },
  {
    heading: "How it Works",
    items: [
      { label: "How it Works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "About Us", href: "/about" },
    ],
  },
  {
    heading: "Resources",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 lg:hidden"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40" onClick={onClose} />

          {/* Full-screen menu */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-white flex flex-col"
          >
            {/* Close button */}
            <div className="flex justify-end p-5">
              <button
                onClick={onClose}
                className="p-2 text-gray-600 hover:text-[#1A1A2E] transition-colors"
              >
                <IconX size={26} strokeWidth={1.5} />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-6 pb-8">
              {/* CTA Button */}
              <Link
                href="/contact"
                onClick={onClose}
                className="block w-full text-center py-4 text-base font-semibold text-white bg-[#007b7b] hover:bg-[#00f4f4] hover:text-black rounded-full transition-all duration-300 mb-8"
              >
                Get a Quote
              </Link>

              {/* Menu sections */}
              {menuSections.map((section, sIdx) => (
                <div
                  key={section.heading}
                  className={sIdx > 0 ? "mt-8" : ""}
                >
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                    {section.heading}
                  </h3>
                  <div className="border-t border-gray-200">
                    {section.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={onClose}
                        className="flex items-center justify-between py-3.5 border-b border-gray-200 text-base text-gray-700 hover:text-[#007b7b] transition-colors group"
                      >
                        <span>{item.label}</span>
                        <IconArrowRight
                          size={16}
                          className="text-gray-400 group-hover:text-[#007b7b] transition-colors flex-shrink-0 ml-3"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative curves */}
            <div className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none overflow-hidden">
              <svg
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-0 right-0 w-full h-full"
              >
                <circle cx="160" cy="160" r="80" stroke="#d1d5db" strokeWidth="1" fill="none" />
                <circle cx="140" cy="180" r="100" stroke="#d1d5db" strokeWidth="1" fill="none" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
