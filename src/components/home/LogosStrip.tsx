const platforms = [
  { name: "Shopify", text: "Shopify" },
  { name: "Zendesk", text: "Zendesk" },
  { name: "HubSpot", text: "HubSpot" },
  { name: "Freshdesk", text: "Freshdesk" },
  { name: "Intercom", text: "Intercom" },
  { name: "Salesforce", text: "Salesforce" },
  { name: "Gorgias", text: "Gorgias" },
  { name: "Help Scout", text: "Help Scout" },
];

export function LogosStrip() {
  return (
    <section className="bg-white border-b border-border py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <p className="text-xs text-body text-center mb-8 uppercase tracking-wider font-semibold">
          Trusted by Growing Businesses Worldwide
        </p>
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex gap-5 animate-scroll">
              {[...platforms, ...platforms].map((brand, i) => (
                <div
                  key={`${brand.name}-${i}`}
                  className="flex items-center justify-center bg-white border-2 border-navy rounded px-6 py-10 flex-shrink-0 min-w-[150px]"
                >
                  <span className="text-base font-bold text-navy tracking-wide">{brand.text}</span>
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
            animation: scroll 30s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
}
