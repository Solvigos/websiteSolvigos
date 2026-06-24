"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";

const schema = z.object({
  message: z.string().min(1, "Please tell us how we can help"),
  email: z.string().email("Valid email is required"),
  preferPhone: z.boolean().optional(),
  phoneCode: z.string().optional(),
  phone: z.string().optional(),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  agents: z.string().min(1, "Please select an option"),
  timeline: z.string().min(1, "Please select an option"),
  hearAbout: z.string().min(1, "This field is required"),
}).refine(
  (data) => !data.preferPhone || (data.phone && data.phone.length >= 3),
  { message: "Phone number is required when phone is preferred", path: ["phone"] }
);

type FormData = z.infer<typeof schema>;

const countryCodes = [
  { code: "+1", country: "US", label: "US +1" },
  { code: "+44", country: "UK", label: "UK +44" },
  { code: "+92", country: "PK", label: "PK +92" },
  { code: "+91", country: "IN", label: "IN +91" },
  { code: "+61", country: "AU", label: "AU +61" },
  { code: "+1", country: "CA", label: "CA +1" },
  { code: "+49", country: "DE", label: "DE +49" },
  { code: "+33", country: "FR", label: "FR +33" },
  { code: "+39", country: "IT", label: "IT +39" },
  { code: "+34", country: "ES", label: "ES +34" },
  { code: "+31", country: "NL", label: "NL +31" },
  { code: "+46", country: "SE", label: "SE +46" },
  { code: "+47", country: "NO", label: "NO +47" },
  { code: "+45", country: "DK", label: "DK +45" },
  { code: "+358", country: "FI", label: "FI +358" },
  { code: "+48", country: "PL", label: "PL +48" },
  { code: "+420", country: "CZ", label: "CZ +420" },
  { code: "+36", country: "HU", label: "HU +36" },
  { code: "+40", country: "RO", label: "RO +40" },
  { code: "+359", country: "BG", label: "BG +359" },
  { code: "+30", country: "GR", label: "GR +30" },
  { code: "+351", country: "PT", label: "PT +351" },
  { code: "+352", country: "LU", label: "LU +352" },
  { code: "+43", country: "AT", label: "AT +43" },
  { code: "+41", country: "CH", label: "CH +41" },
  { code: "+32", country: "BE", label: "BE +32" },
  { code: "+353", country: "IE", label: "IE +353" },
  { code: "+852", country: "HK", label: "HK +852" },
  { code: "+65", country: "SG", label: "SG +65" },
  { code: "86", country: "CN", label: "CN +86" },
  { code: "+81", country: "JP", label: "JP +81" },
  { code: "+82", country: "KR", label: "KR +82" },
  { code: "+880", country: "BD", label: "BD +880" },
  { code: "+94", country: "LK", label: "LK +94" },
  { code: "+60", country: "MY", label: "MY +60" },
  { code: "+66", country: "TH", label: "TH +66" },
  { code: "+63", country: "PH", label: "PH +63" },
  { code: "+62", country: "ID", label: "ID +62" },
  { code: "+84", country: "VN", label: "VN +84" },
  { code: "+55", country: "BR", label: "BR +55" },
  { code: "+52", country: "MX", label: "MX +52" },
  { code: "+54", country: "AR", label: "AR +54" },
  { code: "+56", country: "CL", label: "CL +56" },
  { code: "+57", country: "CO", label: "CO +57" },
  { code: "+51", country: "PE", label: "PE +51" },
  { code: "+593", country: "EC", label: "EC +593" },
  { code: "+598", country: "UY", label: "UY +598" },
  { code: "+27", country: "ZA", label: "ZA +27" },
  { code: "+234", country: "NG", label: "NG +234" },
  { code: "+254", country: "KE", label: "KE +254" },
  { code: "+20", country: "EG", label: "EG +20" },
  { code: "+212", country: "MA", label: "MA +212" },
  { code: "+971", country: "AE", label: "AE +971" },
  { code: "+966", country: "SA", label: "SA +966" },
  { code: "+974", country: "QA", label: "QA +974" },
  { code: "+973", country: "BH", label: "BH +973" },
  { code: "+968", country: "OM", label: "OM +968" },
  { code: "+965", country: "KW", label: "KW +965" },
  { code: "+64", country: "NZ", label: "NZ +64" },
  { code: "+679", country: "FJ", label: "FJ +679" },
  { code: "+685", country: "WS", label: "WS +685" },
  { code: "+507", country: "PA", label: "PA +507" },
  { code: "+506", country: "CR", label: "CR +506" },
  { code: "+1", country: "JM", label: "JM +1" },
  { code: "+1", country: "TT", label: "TT +1" },
  { code: "+1", country: "BB", label: "BB +1" },
];

const agentOptions = [
  "1-2 agents",
  "3-5 agents",
  "6-10 agents",
  "11-20 agents",
  "20+ agents",
  "Not sure yet",
];

const timelineOptions = [
  "Immediately",
  "Within 1-2 weeks",
  "Within 1 month",
  "Within 2-3 months",
  "Just exploring",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      preferPhone: false,
      phoneCode: "+1",
    },
  });

  const preferPhone = watch("preferPhone");

  const handlePreferPhoneChange = (checked: boolean) => {
    setValue("preferPhone", checked, { shouldValidate: true });
    setShowPhone(checked);
  };

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
      reset();
    } catch {
      alert("Something went wrong. Please email us directly at support@solvigos.com");
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[#1A1A2E]">Thank You!</h3>
        <p className="mt-2 text-gray-600">
          We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-[#007b7b] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* How can we help */}
      <div>
        <textarea
          {...register("message")}
          rows={4}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#007b7b] focus:ring-1 focus:ring-[#007b7b] transition-colors resize-none placeholder:text-gray-400 bg-transparent"
          placeholder="How can we help your company scale for growth?*"
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
      </div>

      {/* Email + Phone preference */}
      <div className="flex flex-col sm:flex-row gap-5 items-start">
        <div className="flex-1 w-full">
          <input
            {...register("email")}
            type="email"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#007b7b] focus:ring-1 focus:ring-[#007b7b] transition-colors placeholder:text-gray-400 bg-transparent"
            placeholder="Your Business Email*"
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
        </div>
        <label className="flex items-center gap-2 text-sm text-gray-700 whitespace-nowrap cursor-pointer mt-2 sm:mt-3">
          <input
            type="checkbox"
            checked={preferPhone}
            onChange={(e) => handlePreferPhoneChange(e.target.checked)}
            className="w-4 h-4 rounded border-gray-300 text-[#007b7b] focus:ring-[#007b7b]"
          />
          I&apos;d prefer to connect by phone
        </label>
      </div>

      {/* Phone Number (shown when checkbox is checked) */}
      {preferPhone && (
        <div>
          <label className="block text-sm text-gray-600 mb-2">Your Phone Number</label>
          <div className="flex gap-0 border border-gray-200 rounded-lg overflow-hidden focus-within:border-[#007b7b] focus-within:ring-1 focus-within:ring-[#007b7b] transition-colors">
            <div className="relative flex items-center bg-gray-50 border-r border-gray-200 min-w-0">
              <select
                {...register("phoneCode")}
                className="appearance-none bg-transparent pl-2 sm:pl-3 pr-6 sm:pr-8 py-3 text-xs sm:text-sm text-gray-700 focus:outline-none cursor-pointer min-w-0"
              >
                {countryCodes.map((c, i) => (
                  <option key={i} value={c.code}>
                    {c.label}
                  </option>
                ))}
              </select>
              <IconChevronDown size={14} className="absolute right-2 text-gray-400 pointer-events-none" />
            </div>
            <input
              {...register("phone")}
              type="tel"
              className="flex-1 px-4 py-3 text-sm focus:outline-none placeholder:text-gray-400 bg-transparent"
              placeholder="Phone number"
            />
          </div>
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
        </div>
      )}

      {/* First + Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <input
            {...register("firstName")}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#007b7b] focus:ring-1 focus:ring-[#007b7b] transition-colors placeholder:text-gray-400 bg-transparent"
            placeholder="Your First Name*"
          />
          {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName.message}</p>}
        </div>
        <div>
          <input
            {...register("lastName")}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#007b7b] focus:ring-1 focus:ring-[#007b7b] transition-colors placeholder:text-gray-400 bg-transparent"
            placeholder="Your Last Name*"
          />
          {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName.message}</p>}
        </div>
      </div>

      {/* How many agents */}
      <div>
        <select
          {...register("agents")}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#007b7b] focus:ring-1 focus:ring-[#007b7b] transition-colors bg-transparent text-gray-500"
        >
          <option value="">How many agents do you need?*</option>
          {agentOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {errors.agents && <p className="text-xs text-red-500 mt-1">{errors.agents.message}</p>}
      </div>

      {/* Timeline */}
      <div>
        <select
          {...register("timeline")}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#007b7b] focus:ring-1 focus:ring-[#007b7b] transition-colors bg-transparent text-gray-500"
        >
          <option value="">How soon are you looking to scale with Solvigos?*</option>
          {timelineOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {errors.timeline && <p className="text-xs text-red-500 mt-1">{errors.timeline.message}</p>}
      </div>

      {/* How did you hear */}
      <div>
        <input
          {...register("hearAbout")}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#007b7b] focus:ring-1 focus:ring-[#007b7b] transition-colors placeholder:text-gray-400 bg-transparent"
          placeholder="How did you hear about us?*"
        />
        {errors.hearAbout && <p className="text-xs text-red-500 mt-1">{errors.hearAbout.message}</p>}
      </div>

      {/* Privacy */}
      <p className="text-xs text-gray-500 leading-relaxed">
        By submitting this form, you agree to share your personal information with us in accordance with our{" "}
         <a href="/privacy-policy" className="underline hover:text-[#007b7b]">Privacy Policy</a>.
      </p>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-4 bg-[#1A3D2E] hover:bg-[#2a5a42] text-white text-base font-semibold rounded-lg transition-all duration-300 disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
