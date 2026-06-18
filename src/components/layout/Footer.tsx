import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

const serviceLinks = [
  { label: "Customer Support", href: "/services/customer-support" },
  { label: "Technical Support", href: "/services/technical-support" },
  { label: "BPO & Back-Office", href: "/services/bpo-back-office" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "CRM & Chatbot", href: "/services/crm-chatbot" },
];

const industryLinks = [
  { label: "eCommerce", href: "/industries#ecommerce" },
  { label: "SaaS", href: "/industries#saas" },
  { label: "Healthcare", href: "/industries#healthcare" },
  { label: "Fintech", href: "/industries#fintech" },
  { label: "Education", href: "/industries#education" },
  { label: "Professional Services", href: "/industries#professional" },
];

const resourceLinks = [
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "X (Twitter)", href: "#" },
  { label: "Facebook", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-navy">
      {/* Top: Logo + divider */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-16 pb-10">
        <div className="flex items-center gap-2 mb-10">
          <span className="text-[22px] font-bold text-white tracking-tight">
            Solvi<span className="text-blue">gos</span>
          </span>
        </div>
        <div className="h-px bg-blue-800" />

        {/* Columns */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Services */}
          <div>
            <h3 className="text-[15px] font-bold text-white mb-5">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-[15px] font-bold text-white mb-5">Industries</h3>
            <ul className="space-y-3">
              {industryLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources + Company */}
          <div>
            <h3 className="text-[15px] font-bold text-white mb-5">Resources</h3>
            <ul className="space-y-3 mb-8">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-[15px] font-bold text-white mb-5">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h3 className="text-[15px] font-bold text-white mb-5">Follow</h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 flex items-start">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-blue hover:opacity-90 text-white font-semibold text-base px-8 py-4 rounded-full transition-all hover:scale-[1.03] shadow-lg shadow-blue/25 w-full lg:w-auto justify-between"
            >
              Get a Quote
              <span className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <IconArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-blue-300">
          <p>&copy; {new Date().getFullYear()} Solvigos. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/faq" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/faq" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
