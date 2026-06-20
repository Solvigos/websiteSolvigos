"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  Play,
  Target,
  Crown,
  Star,
  Headphones,
} from "lucide-react";

const CLIENTS: { name: string; logo: string | null; invert?: boolean }[] = [
  { name: "Shopify", logo: "/logoHero/shopify.svg" },
  { name: "Zendesk", logo: "/logoHero/zendesk.svg", invert: true },
  { name: "HubSpot", logo: "/logoHero/hubspot.svg" },
  { name: "Freshdesk", logo: "/logoHero/freshdesk.svg" },
  { name: "Intercom", logo: "/logoHero/intercom.svg", invert: true },
  { name: "Salesforce", logo: "/logoHero/salesforce.svg" },
  { name: "Gorgias", logo: "/logoHero/gorgias.jpeg" },
  { name: "GHL", logo: "/logoHero/ghl.jpeg" },
  { name: "Help Scout", logo: "/logoHero/helpscout.svg" },
];

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
    <span className="text-lg font-bold text-white sm:text-xl">{value}</span>
    <span className="text-[9px] uppercase tracking-wider text-zinc-500 font-medium sm:text-[10px]">{label}</span>
  </div>
);

export default function HeroSection() {
  return (
    <div className="relative w-full bg-zinc-950 text-white overflow-hidden font-sans">
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-fade-in {
          animation: fadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      <div
        className="absolute inset-0 z-0 bg-[url(/landingPage.png)] bg-cover bg-center opacity-30"
        style={{
          maskImage: "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
          WebkitMaskImage: "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-16 sm:px-6 md:pt-36 md:pb-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">

          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 pt-4">

            <div className="animate-fade-in delay-100">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md transition-colors hover:bg-white/10">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                  Trusted Support Partner
                  <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                </span>
              </div>
            </div>

            <h1
              className="animate-fade-in delay-200 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tighter leading-[0.9]"
              style={{
                maskImage: "linear-gradient(180deg, black 0%, black 80%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(180deg, black 0%, black 80%, transparent 100%)",
              }}
            >
              Elevate Your<br />
              <span className="bg-gradient-to-br from-white via-white to-[#ffcd75] bg-clip-text text-transparent">
                Customer Support
              </span><br />
              Experience
            </h1>

            <p className="animate-fade-in delay-300 max-w-xl text-lg text-zinc-400 leading-relaxed">
              Deliver exceptional customer experiences without the cost and complexity
              of building an in-house support department. We handle your support so you
              can focus on growing your business.
            </p>

            <div className="animate-fade-in delay-400 flex flex-col sm:flex-row gap-5">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-semibold text-zinc-950 transition-all hover:scale-[1.02] hover:bg-zinc-200 active:scale-[0.98]"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/services"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-10 py-5 text-lg font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20"
              >
                <Play className="w-5 h-5 fill-current" />
                Explore Services
              </a>
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="lg:col-span-5 space-y-4 lg:mt-8">

            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-2xl">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                    <Headphones className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold tracking-tight text-white">24/7</div>
                    <div className="text-xs text-zinc-400">Customer Support</div>
                  </div>
                </div>

                <div className="space-y-2 mb-5">
                  <div className="flex justify-between text-xs">
                    <span className="text-zinc-400">Client Satisfaction</span>
                    <span className="text-white font-medium">97%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800/50">
                    <div className="h-full w-[97%] rounded-full bg-gradient-to-r from-white to-zinc-400" />
                  </div>
                </div>

                <div className="h-px w-full bg-white/10 mb-4" />

                <div className="grid grid-cols-3 gap-3 text-center">
                  <StatItem value="10+" label="Years" />
                  <div className="w-px h-full bg-white/10 mx-auto" />
                  <StatItem value="24/7" label="Coverage" />
                  <div className="w-px h-full bg-white/10 mx-auto" />
                  <StatItem value="200+" label="Clients" />
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] font-medium tracking-wide text-zinc-300">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                    </span>
                    AVAILABLE
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] font-medium tracking-wide text-zinc-300">
                    <Crown className="w-2.5 h-2.5 text-yellow-500" />
                    PREMIUM
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 py-5 backdrop-blur-xl">
              <h3 className="mb-4 px-6 text-sm font-semibold text-zinc-300">Our Tech Partners</h3>

              <div
                className="relative flex overflow-hidden"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                }}
              >
                <div className="animate-marquee flex gap-10 whitespace-nowrap px-4">
                  {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 opacity-50 transition-all hover:opacity-100 hover:scale-105 cursor-default grayscale hover:grayscale-0"
                    >
                      {client.logo ? (
                        <Image src={client.logo} alt={client.name} width={22} height={22} className="object-contain" style={{ ...(client.invert ? { filter: "brightness(0) invert(1)" } : {}), height: "auto" }} />
                      ) : (
                        <span className="flex items-center justify-center w-6 h-6 rounded-md bg-blue/30 text-blue-300 text-[10px] font-bold">
                          {client.name.charAt(0)}
                        </span>
                      )}
                      <span className="text-sm font-bold text-white tracking-tight">
                        {client.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
