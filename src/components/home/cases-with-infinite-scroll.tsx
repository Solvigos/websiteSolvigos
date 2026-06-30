"use client";

import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

const partners: { name: string; logo: string; invert?: boolean; size?: string }[] = [
  { name: "VectorAlgorithms", logo: "/logoTrusted/vectorAlgorithms.png", size: "h-12 sm:h-20" },
  { name: "HackerRank", logo: "/logoTrusted/hackerrank.svg", size: "h-5 sm:h-7" },
  { name: "Apogee", logo: "/logoTrusted/Apogee.png", size: "h-8 sm:h-16" },
  { name: "PatPat", logo: "/logoTrusted/patpat.svg", size: "h-9 sm:h-11" },
  { name: "FetchPay", logo: "/logoTrusted/FETCHPAY.png", size: "h-3 sm:h-10" },
  { name: "Bayinnah", logo: "/logoTrusted/bayinnah.png", size: "h-4 sm:h-12" }
];

export function Case() {
  return (
    <section className="relative min-h-[320px] sm:min-h-[400px] w-full -mt-10 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #285ccc 100%)
          `,
          backgroundSize: "100% 100%",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-12 sm:pt-16 pb-2 sm:pb-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-[#285ccc]">Trusted by experts.</span>
          <br />
          <span className="text-[#1A2B5F]">Used by the leaders.</span>
        </h2>
      </div>

      <div
        className="relative z-10 h-[100px] sm:h-[120px] w-full overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <InfiniteSlider
          className="flex h-full w-full items-center"
          duration={3}
          gap={28}
        >
          {partners.map(({ name, logo, invert, size }) => (
            <div key={name} className="flex items-center justify-center flex-shrink-0">
              <Image
                src={logo}
                alt={name}
                width={100}
                height={100}
                className={`object-contain w-auto ${size || "h-12 sm:h-16"}`}
                style={invert ? { filter: "brightness(0) invert(1)" } : undefined}
              />
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
