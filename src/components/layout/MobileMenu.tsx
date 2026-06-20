"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IconX, IconChevronDown } from "@tabler/icons-react";

type DropdownLink = { label: string; href: string };
type NavLink = {
  label: string;
  href: string;
  dropdown?: DropdownLink[];
};

export function MobileMenu({
  open,
  onClose,
  links,
}: {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-50 lg:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 shadow-xl lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-0">
                <Image src="/logo1.png" alt="Solvigos" width={28} height={28} className="object-contain" />
                <span className="text-lg font-bold text-navy">Solvigos</span>
              </div>
              <button onClick={onClose} className="p-1 text-body hover:text-navy">
                <IconX size={22} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              {links.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <button
                      onClick={() =>
                        setExpanded(expanded === link.label ? null : link.label)
                      }
                      className="flex items-center justify-between w-full px-3 py-2.5 text-sm text-body hover:text-navy rounded-md"
                    >
                      {link.label}
                      <IconChevronDown
                        size={16}
                        className={`transition-transform ${
                          expanded === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {expanded === link.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden ml-3"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={onClose}
                              className="block px-3 py-2 text-sm text-body hover:bg-ice hover:text-navy rounded-md"
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
                    onClick={onClose}
                    className="block px-3 py-2.5 text-sm text-body hover:text-navy rounded-md"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
            <div className="p-4 border-t border-border">
              <Link
                href="/contact"
                onClick={onClose}
                className="block w-full text-center px-4 py-3 text-sm font-medium text-white bg-blue rounded-lg"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
