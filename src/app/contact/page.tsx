import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/shared/ContactForm";
import { IconPhone, IconMail, IconMapPin } from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-ice py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge>Contact Us</Badge>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-navy">
              Let&apos;s Discuss Your Business Needs
            </h1>
            <p className="mt-4 text-lg text-body max-w-2xl mx-auto">
              Whether you need customer support outsourcing, technical assistance, back-office
              operations, or web development services, our team is ready to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-ice rounded-xl flex items-center justify-center flex-shrink-0">
                  <IconPhone size={22} className="text-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Phone</h3>
                  <p className="text-body text-sm mt-0.5">+1 (406) 313-0211</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-ice rounded-xl flex items-center justify-center flex-shrink-0">
                  <IconMail size={22} className="text-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Email</h3>
                  <p className="text-body text-sm mt-0.5">support@solvigos.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-ice rounded-xl flex items-center justify-center flex-shrink-0">
                  <IconMapPin size={22} className="text-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Office Address</h3>
                  <p className="text-body text-sm mt-0.5 leading-relaxed">
                    30 N Gould St, Suite 38432
                    <br />
                    Sheridan, WY 82801
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-border rounded-xl p-6 sm:p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
