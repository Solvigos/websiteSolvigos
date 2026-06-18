"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="bg-ice py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="mt-4 text-body max-w-xl mx-auto text-lg">
            Partner with Solvigos and build stronger relationships with every customer
            interaction.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Get a Quote &rarr;
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
