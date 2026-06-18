"use client";

import Image from "next/image";

const partners: { name: string; logo: string; invert?: boolean }[] = [
  { name: "PatPat", logo: "/logoTrusted/patpat.svg" },
  { name: "HackerRank", logo: "/logoTrusted/hackerrank.svg" },
  { name: "Apogee", logo: "/logoTrusted/Apogee.jpg" },
  { name: "FetchPay", logo: "/logoTrusted/FETCHPAY.png" },
  { name: "Bayinnah", logo: "/logoTrusted/bayinnah.png" },
];

export function Case() {
  return (
    <section>
      <div className="px-6 sm:px-8 lg:px-10 py-4" style={{ backgroundColor: "#fff2bd" }}>
        <p className="text-xl sm:text-2xl font-bold text-black">
          Trusted by Growing Businesses Worldwide
        </p>
      </div>
      <div className="h-[0.5px] bg-white"></div>
      <div className="py-6 overflow-hidden" style={{ backgroundColor: "#285ccc" }}>
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex gap-1 animate-scroll">
              {[...partners, ...partners, ...partners].map((partner, i) => (
                <div
                  key={`${partner.name}-${i}`}
                  className="flex items-center justify-center bg-white rounded w-44 h-44 sm:w-48 sm:h-48 flex-shrink-0"
                >
                  <Image src={partner.logo} alt={partner.name} width={100} height={100} className="object-contain" style={partner.invert ? { filter: "brightness(0) invert(1)" } : undefined} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
}
