"use client";

import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const partners: { name: string; logo: string; invert?: boolean }[] = [
  { name: "PatPat", logo: "/logoTrusted/patpat.svg" },
  { name: "HackerRank", logo: "/logoTrusted/hackerrank.svg" },
  { name: "Apogee", logo: "/logoTrusted/Apogee.jpg" },
  { name: "FetchPay", logo: "/logoTrusted/FETCHPAY.png" },
  { name: "Bayinnah", logo: "/logoTrusted/bayinnah.png" },
];

export function Case() {
  return (
    <section className="relative min-h-[400px] w-full -mt-10">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #285ccc 100%)
          `,
          backgroundSize: "100% 100%",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-16 pb-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-[#285ccc]">Trusted by experts.</span>
          <br />
          <span className="text-[#1A2B5F]">Used by the leaders.</span>
        </h2>
      </div>

      <div className="relative z-10 h-[100px] sm:h-[120px] w-full">
        <InfiniteSlider
          className="flex h-full w-full items-center"
          duration={30}
          gap={48}
        >
          {partners.map(({ name, logo, invert }) => (
            <div key={name} className="flex items-center justify-center flex-shrink-0">
              <Image
                src={logo}
                alt={name}
                width={100}
                height={100}
                className="object-contain h-12 sm:h-16 w-auto"
                style={invert ? { filter: "brightness(0) invert(1)" } : undefined}
              />
            </div>
          ))}
        </InfiniteSlider>
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 left-0 h-full w-[200px]"
          direction="left"
          blurIntensity={1}
        />
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 right-0 h-full w-[200px]"
          direction="right"
          blurIntensity={1}
        />
      </div>

      <div className="relative z-10 h-20 w-full">
        <svg
          className="absolute bottom-0 left-0 right-0 w-full"
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ height: "60px" }}
        >
          <path
            d="M0,80 L0,40 Q720,0 1440,40 L1440,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}