export function TechPartners() {
  const platforms = [
    "Zendesk", "Freshdesk", "HubSpot", "Gorgias", "Salesforce",
    "Intercom", "Help Scout", "Freshchat", "Shopify", "WooCommerce",
  ];

  return (
    <section className="bg-ice py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue text-center mb-8">
          Platforms We Work With
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {platforms.map((p) => (
            <span
              key={p}
              className="px-4 py-2 text-sm font-medium text-body bg-white border border-border rounded-lg"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
