"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronDown } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export function Accordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="border border-border rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex items-center justify-between w-full px-6 py-4 text-left text-sm font-medium text-navy hover:bg-ice/50 transition-colors"
          >
            {item.question}
            <IconChevronDown
              size={18}
              className={cn(
                "text-body transition-transform duration-200 flex-shrink-0 ml-4",
                open === i && "rotate-180"
              )}
            />
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-sm text-body leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
