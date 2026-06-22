import Link from "next/link";
import Image from "next/image";
import { IconArrowRight, IconBrandLinkedin, IconBrandX, IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";

const serviceLinks = [
  { label: "All Services", href: "/services" },
  { label: "Customer Conversion", href: "/services/customer-conversion" },
  { label: "Customer Onboarding", href: "/services/customer-onboarding" },
  { label: "Customer Support", href: "/services/customer-support" },
  { label: "Technical Customer Support", href: "/services/technical-support" },
  { label: "Customer Renewals", href: "/services/customer-renewals" },
  { label: "BPO & Back-Office", href: "/services/bpo-back-office" },
  { label: "CRM & Chatbot Setup", href: "/services/crm-chatbot" },
  { label: "Help Desk Management", href: "/services/help-desk-management" },
  { label: "Web Development", href: "/services/web-development" },
];

const industryLinks = [
  { label: "eCommerce", href: "/industries/ecommerce" },
  { label: "SaaS", href: "/industries/saas" },
  { label: "Technology", href: "/industries/technology" },
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Education", href: "/industries/education" },
  { label: "Travel & Hospitality", href: "/industries/travel-hospitality" },
];

const companyLinks = [
  { label: "How it Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: IconBrandLinkedin, href: "#", label: "LinkedIn" },
  { icon: IconBrandX, href: "#", label: "X (Twitter)" },
  { icon: IconBrandFacebook, href: "#", label: "Facebook" },
  { icon: IconBrandInstagram, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-[#000f30]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-16 pb-10">
        <div className="flex items-center gap-0 mb-10">
          <Image
            src="/logo1.png"
            alt="Solvigos"
            width={110}
            height={110}
            className="object-contain brightness-0 invert"
          />
          <span className="text-3xl font-bold text-white tracking-tight">
            Solvigos
          </span>
        </div>
        <div className="h-px bg-blue-800" />

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Solutions */}
          <div>
            <h3 className="text-[15px] font-bold text-white mb-5">Solutions</h3>
            <ul className="space-y-3">
              {serviceLinks.slice(0, 6).map((link) => (
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

          {/* More Solutions */}
          <div>
            <h3 className="text-[15px] font-bold text-white mb-5">&nbsp;</h3>
            <ul className="space-y-3">
              {serviceLinks.slice(6).map((link) => (
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

          {/* Company */}
          <div>
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
            <div className="flex gap-3 mb-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#285ccc] transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#007b7b] hover:bg-[#00f4f4] hover:text-black text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg w-full justify-between"
            >
              Get a Quote
              <span className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <IconArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </div>

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
