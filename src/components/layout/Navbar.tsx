"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2 } from "@tabler/icons-react";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  {
    label: "Services",
    href: "#",
    dropdown: [
      { label: "Customer Support", href: "/services/customer-support" },
      { label: "Technical Support", href: "/services/technical-support" },
      { label: "BPO & Back-Office", href: "/services/bpo-back-office" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "CRM & Chatbot", href: "/services/crm-chatbot" },
    ],
  },
  {
    label: "Industries",
    href: "#",
    dropdown: [
      { label: "eCommerce", href: "/industries#ecommerce" },
      { label: "SaaS", href: "/industries#saas" },
      { label: "Healthcare", href: "/industries#healthcare" },
      { label: "Fintech", href: "/industries#fintech" },
      { label: "Education", href: "/industries#education" },
      { label: "Professional Services", href: "/industries#professional" },
    ],
  },
  { label: "About", href: "/about" },
  {
    label: "Resources",
    href: "#",
    dropdown: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
                <Image src="/logo.png" alt="Solvigos" width={110} height={110} className={`object-contain transition-all duration-300 ${
                  scrolled ? "w-5 h-5 sm:w-10 sm:h-10 lg:w-15 lg:h-15" : "w-9 h-9 sm:w-12 sm:h-12 lg:w-23 lg:h-23"
                }`} style={{ filter: scrolled ? "none" : "brightness(0) invert(1)" }} />
                <span className={`font-bold tracking-tight transition-all duration-300 ${
                  scrolled ? "text-[10px] sm:text-xs lg:text-lg" : "text-xs sm:text-sm lg:text-2xl"
                } ${scrolled ? "text-navy" : "text-white"}`}>olvigos</span>
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
                      <button className={`px-4 py-2 font-medium transition-all duration-300 ${
                          scrolled ? "text-base" : "text-lg"
                        } ${scrolled ? "text-navy" : "text-white"} hover:text-blue rounded-md transition-colors`}>
                        {link.label}
                      </button>
                      <AnimatePresence>
                        {openDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-border py-2"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="block px-4 py-2.5 text-sm text-body hover:bg-ice hover:text-navy transition-colors"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                      <Link
                        key={link.label}
                        href={link.href}
                        className={`px-4 py-2 font-medium transition-all duration-300 ${
                          scrolled ? "text-base" : "text-lg"
                        } ${scrolled ? "text-navy" : "text-white"} hover:text-blue rounded-md transition-colors`}
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
                   className={`font-semibold text-white bg-blue rounded-full transition-all duration-300 hover:opacity-90 hover:scale-[1.03] ${
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
                <IconMenu2 size={scrolled ? 20 : 24} className={scrolled ? "text-navy" : "text-white"} />
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
