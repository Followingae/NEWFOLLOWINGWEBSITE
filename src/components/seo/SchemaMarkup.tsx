export function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Following",
    description:
      "End-to-end influencer marketing and production agency for brands that refuse to blend in.",
    url: "https://followingagency.com",
    email: "hello@followingagency.com",
    sameAs: [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Influencer Marketing",
            description:
              "Fully managed influencer campaigns from strategy to reporting.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Productions",
            description:
              "Social-first shoots with commercial quality output.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UGC",
            description:
              "Directed creator content at scale for performance marketing.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Media Management",
            description:
              "Content systems and ongoing social media management.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
