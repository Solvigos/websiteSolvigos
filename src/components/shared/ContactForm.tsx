"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(1, "Full name is required"),
  company: z.string().min(1, "Company name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(1, "Please include a message"),
});

type FormData = z.infer<typeof schema>;

const services = [
  "Customer Support",
  "Technical Support",
  "BPO & Back-Office",
  "Web Development",
  "CRM & Chatbot Services",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

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
        <h3 className="text-xl font-semibold text-navy">Thank You!</h3>
        <p className="mt-2 text-body">
          We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-blue hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-navy mb-1.5">Full Name *</label>
          <input
            {...register("name")}
            className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-colors"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-navy mb-1.5">Company Name *</label>
          <input
            {...register("company")}
            className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-colors"
            placeholder="Acme Inc."
          />
          {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-navy mb-1.5">Email Address *</label>
          <input
            {...register("email")}
            type="email"
            className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-colors"
            placeholder="john@company.com"
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-navy mb-1.5">Phone Number *</label>
          <input
            {...register("phone")}
            type="tel"
            className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-colors"
            placeholder="+1 (406) 313-0211"
          />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-navy mb-1.5">Service Required *</label>
        <select
          {...register("service")}
          className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-colors bg-white"
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-navy mb-1.5">Message *</label>
        <textarea
          {...register("message")}
          rows={4}
          className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-colors resize-none"
          placeholder="Tell us about your needs..."
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-blue text-white font-medium rounded-lg hover:opacity-90 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
      >
        {isSubmitting ? "Sending..." : "Book Your Free Consultation"}
      </button>
    </form>
  );
}
