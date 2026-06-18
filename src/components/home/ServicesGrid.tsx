"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  IconHeadset,
  IconTool,
  IconClipboardList,
  IconDeviceDesktop,
} from "@tabler/icons-react";

const services = [
  {
    icon: IconHeadset,
    title: "Customer Support Outsourcing",
    desc: "Deliver fast, friendly, and professional support across live chat, email, social media, and helpdesk platforms.",
    href: "/services/customer-support",
  },
  {
    icon: IconTool,
    title: "Technical Support",
    desc: "Resolve technical issues quickly with dedicated specialists trained on your products and systems.",
    href: "/services/technical-support",
  },
  {
    icon: IconClipboardList,
    title: "BPO & Back-Office Services",
    desc: "Streamline administrative processes and reduce operational burdens with reliable back-office support.",
    href: "/services/bpo-back-office",
  },
  {
    icon: IconDeviceDesktop,
    title: "Web Development",
    desc: "Build high-performing websites and digital experiences that strengthen your brand and improve customer engagement.",
    href: "/services/web-development",
  },
];

export function ServicesGrid() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="group block bg-ice/60 hover:bg-ice rounded-2xl p-7 sm:p-8 transition-all duration-200 hover:shadow-lg"
                >
                  <div className="flex gap-5">
                    <div className="w-14 h-14 bg-blue rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon size={26} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy">{service.title}</h3>
                      <p className="mt-2 text-sm text-body leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
