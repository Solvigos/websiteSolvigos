"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconMenu2,
  IconHeadset,
  IconAntenna,
  IconChevronRight,
  IconBuilding,
  IconRobot,
} from "@tabler/icons-react";
import { MobileMenu } from "./MobileMenu";

type DropdownItem = { label: string; href: string; description?: string; icon?: React.ReactNode };
type DropdownSection = {
  heading?: string;
  href?: string;
  icon?: React.ReactNode;
  items: DropdownItem[];
};
type NavLink = {
  label: string;
  href: string;
  dropdown?: DropdownSection[];
};

const navLinks: NavLink[] = [
  {
    label: "Solutions",
    href: "/services",
    dropdown: [
      {
        items: [
          { label: "Customer Support", href: "/services/customer-support", icon: <IconHeadset size={18} /> },
          { label: "Technical Customer Support", href: "/services/technical-support", icon: <IconAntenna size={18} /> },
        ],
      },
      {
        items: [
          { label: "BPO & Back-Office", href: "/services/bpo-back-office", icon: <IconBuilding size={18} /> },
          { label: "CRM & AI Chatbot Setup", href: "/services/crm-chatbot", icon: <IconRobot size={18} /> },
        ],
      },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Resources",
    href: "#",
    dropdown: [
      {
        items: [
          { label: "Blog", href: "/blog" },
          { label: "FAQ", href: "/faq" },
        ],
      },
    ],
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderDropdown = (link: NavLink) => {
    if (!link.dropdown) return null;

    // Solutions dropdown - SupportNinja style
    if (link.label === "Solutions") {
      return (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.15 }}
          className="absolute top-full left-0 mt-1 bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100 p-6 min-w-[580px]"
        >
          <div className="flex gap-10">
            {link.dropdown.map((section, sIdx) => {
              const hasHeadingItems = section.items.some((item) => item.icon);
              return (
                <div key={section.heading || sIdx} className="flex-1">
                  {section.href ? (
                    <Link
                      href={section.href}
                      className="flex items-center gap-2.5 mb-4 group"
                    >
                      <span className="text-gray-700">{section.icon}</span>
                      <span className="text-sm font-bold text-gray-900 group-hover:text-[#007b7b] transition-colors">
                        {section.heading}
                      </span>
                      <IconChevronRight size={14} className="text-gray-400 ml-auto group-hover:text-[#007b7b] transition-colors" />
                    </Link>
                  ) : section.heading ? (
                    <div className="flex items-center gap-2.5 mb-4">
                      <span className="text-gray-700">{section.icon}</span>
                      <span className="text-sm font-bold text-gray-900">{section.heading}</span>
                    </div>
                  ) : null}
                  {hasHeadingItems ? (
                    <div className="space-y-1">
                      {section.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="flex items-center gap-2.5 px-3 py-2.5 text-[13px] text-gray-700 hover:text-[#007b7b] transition-colors group rounded-lg"
                        >
                          <span className="text-gray-500 group-hover:text-[#007b7b] transition-colors">{item.icon}</span>
                          <span className="font-semibold">{item.label}</span>
                          <IconChevronRight size={13} className="text-gray-300 group-hover:text-[#007b7b] transition-colors ml-auto flex-shrink-0" />
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-0 pl-7">
                      {section.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="flex items-center justify-between px-3 py-2 text-[13px] text-gray-600 hover:text-[#007b7b] transition-colors group"
                        >
                          <span>{item.label}</span>
                          <IconChevronRight size={13} className="text-gray-300 group-hover:text-[#007b7b] transition-colors flex-shrink-0" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      );
    }

    // Simple dropdowns (Resources)
    const items = link.dropdown[0]?.items;
    if (!items) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.15 }}
        className="absolute top-full left-0 mt-1 bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100 py-3 min-w-[200px]"
      >
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#4F46E5] transition-colors font-medium"
          >
            {item.label}
          </Link>
        ))}
      </motion.div>
    );
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-12 lg:h-14" : "h-16 lg:h-[88px]"
          }`}>
            <div className={`flex items-center transition-all duration-300 ${
              scrolled ? "gap-4 lg:gap-30" : "gap-4 lg:gap-30"
            }`}>
              <Link href="/" className="flex items-center gap-0">
                <Image src="/logo1.png" alt="Solvigos" width={110} height={110} className={`object-contain transition-all duration-300 ${
                  scrolled ? "w-5 h-5 sm:w-10 sm:h-10 lg:w-15 lg:h-15" : "w-14 h-14 sm:w-12 sm:h-12 lg:w-23 lg:h-23"
                }`} style={{ filter: isHomePage && !scrolled ? "brightness(0) invert(1)" : "none" }} />
                <span className={`font-bold tracking-tight transition-all duration-300 ${
                  scrolled ? "text-[10px] sm:text-xs lg:text-lg" : "text-base sm:text-sm lg:text-2xl"
                } ${isHomePage && !scrolled ? "text-white" : "text-navy"}`}>Solvigos</span>
              </Link>

              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(link.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <Link
                        href={link.href}
                        className={`px-4 py-2 font-medium transition-all duration-300 rounded-md ${
                            scrolled ? "text-base" : "text-lg"
                          } ${isHomePage && !scrolled ? "text-white" : "text-navy"} hover:text-blue transition-colors`}
                        onClick={(e) => {
                          if (link.href === "#") e.preventDefault();
                        }}
                      >
                        {link.label}
                      </Link>
                      <AnimatePresence>
                        {openDropdown === link.label && renderDropdown(link)}
                      </AnimatePresence>
                    </div>
                  ) : (
                      <Link
                        key={link.label}
                        href={link.href}
                        className={`px-4 py-2 font-medium transition-all duration-300 rounded-md ${
                          scrolled ? "text-base" : "text-lg"
                        } ${isHomePage && !scrolled ? "text-white" : "text-navy"} hover:text-blue transition-colors`}
                      >
                        {link.label}
                      </Link>
                  )
                )}
              </div>
            </div>

            <div className="flex items-center gap-4 ml-auto">
              <div className="hidden lg:block">
                <Link
                  href="/contact"
                   className={`font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-[#007b7b] hover:bg-[#00f4f4] hover:text-black text-white shadow-lg ${
                    scrolled ? "px-6 py-2 text-sm" : "px-15 py-4 text-lg"
                  }`}
                >
                  Get a Quote
                </Link>
              </div>

              <button
                className="lg:hidden p-2"
                onClick={() => setMobileOpen(true)}
              >
                <IconMenu2 size={scrolled ? 20 : 24} className={isHomePage && !scrolled ? "text-white" : "text-navy"} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </>
  );
}
