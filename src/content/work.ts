export type ServiceTag = "Influencer" | "Productions" | "UGC" | "SMM";

export type IndustryTag =
  | "Fashion"
  | "Beauty"
  | "Food & Beverage"
  | "Tech"
  | "Lifestyle";

export interface CaseStudy {
  slug: string;
  title: string;
  tags: ServiceTag[];
  industry: IndustryTag;
  impact: string;
  thumbnail: string;
  overview: string;
  challenge: string;
  solution: string;
  results: { value: string; label: string }[];
  deliverables: string[];
  testimonial?: {
    quote: string;
    name: string;
    role: string;
  };
  gallery: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "mocktail-launch",
    title: "Mocktail Cans Launch",
    tags: ["Influencer"],
    industry: "Food & Beverage",
    impact: "859K reach, 954K views, 4.1% engagement rate",
    thumbnail: "/images/work/mocktail-1.jpg",
    overview:
      "Launch campaign for a leading UAE fresh juice brand's new mocktail can range. Paid influencer reels across Instagram driving awareness and trial.",
    challenge:
      "New product category for a brand known for fresh juice. Needed to introduce canned mocktails to a health-conscious UAE audience without diluting the brand's fresh, premium positioning.",
    solution:
      "Sourced 7 creators across food, lifestyle, and wellness verticals. Each creator produced Instagram Reels showing natural moments with the product. Content was performance-tracked in real time through our platform.",
    results: [
      { value: "859K", label: "Reach" },
      { value: "954K", label: "Views" },
      { value: "4.1%", label: "Engagement rate" },
      { value: "7", label: "Creators" },
    ],
    deliverables: [
      "8 Instagram Reels",
      "Creator sourcing & vetting",
      "Creative briefs",
      "Real-time campaign tracking",
      "Post-campaign report",
    ],
    gallery: [
      "/images/work/mocktail-1.jpg",
      "/images/work/mocktail-2.jpg",
      "/images/work/mocktail-3.jpg",
    ],
  },
  {
    slug: "frozen-dessert-campaign",
    title: "Frozen Dessert Launch",
    tags: ["Influencer"],
    industry: "Food & Beverage",
    impact: "621K reach, 2.1% ER, AED 0.07 cost per view",
    thumbnail: "/images/work/frozen-1.jpg",
    overview:
      "Influencer campaign to launch the UAE's first artisanal frozen dessert range from a major fresh food brand. Mix of macro and micro creators driving trial and conversation.",
    challenge:
      "Launching an entirely new product line in a competitive frozen dessert market. The brand needed authentic creator content that felt native to the feed, not like an ad.",
    solution:
      "Selected 7 creators across food review, family, and lifestyle verticals. Reels focused on unboxing, first-taste reactions, and family sharing moments. All content reviewed and approved through our platform before posting.",
    results: [
      { value: "621K", label: "Reach" },
      { value: "690K", label: "Views" },
      { value: "2.1%", label: "Engagement rate" },
      { value: "0.07", label: "CPV (AED)" },
    ],
    deliverables: [
      "7 Instagram Reels",
      "Creator sourcing & vetting",
      "Creative direction",
      "Campaign analytics",
      "Post-campaign report",
    ],
    gallery: [
      "/images/work/frozen-1.jpg",
      "/images/work/frozen-2.jpg",
      "/images/work/frozen-3.jpg",
    ],
  },
  {
    slug: "gaming-collab-pr",
    title: "Gaming x F&B Collab",
    tags: ["Influencer"],
    industry: "Food & Beverage",
    impact: "2M+ reach, 5.5M impressions, 89% authentic audience",
    thumbnail: "/images/work/gaming-1.jpg",
    overview:
      "PR-driven influencer campaign for a cross-brand collaboration between a major UAE food brand and a global gaming console. Premium unboxing experience with lifestyle-driven story and reel content.",
    challenge:
      "Merging two very different brand worlds — fresh food and gaming — into content that felt authentic and drove buzz without confusing either audience.",
    solution:
      "Enrolled 12 creators across food, gaming, and lifestyle verticals. Each received a limited-edition PR box. Content focused on unboxing moments and natural reactions. Micro-influencers outperformed macro by 3.8x in engagement.",
    results: [
      { value: "2M+", label: "Verified reach" },
      { value: "5.5M", label: "Impressions" },
      { value: "12", label: "Creators" },
      { value: "89%", label: "Authentic audience" },
    ],
    deliverables: [
      "60+ Story frames",
      "2 Instagram Reels",
      "PR box design direction",
      "Creator sourcing & vetting",
      "Full campaign report with audience quality analysis",
    ],
    gallery: [
      "/images/work/gaming-1.jpg",
      "/images/work/gaming-2.jpg",
      "/images/work/gaming-3.jpg",
    ],
  },
  {
    slug: "fuel-delivery-giveaway",
    title: "On-Demand Fuel Giveaway",
    tags: ["Influencer"],
    industry: "Tech",
    impact: "8,500 giveaway enrolments via micro-influencers",
    thumbnail: "/images/work/fuel-1.jpg",
    overview:
      "Micro-influencer giveaway campaign for a leading UAE on-demand fuel delivery app. Goal was driving app installs and giveaway participation through trusted, niche creators.",
    challenge:
      "The brand needed real enrolments, not just impressions. Standard influencer content wasn't converting. They needed creators whose audiences would actually download an app and enter a giveaway.",
    solution:
      "We sourced micro-influencers with high engagement and verified UAE-based audiences. Each creator ran a giveaway mechanic tied to app download. All tracked through our platform.",
    results: [
      { value: "8,500", label: "Giveaway enrolments" },
      { value: "Micro", label: "Influencer tier" },
      { value: "UAE", label: "Geo-targeted" },
      { value: "App", label: "Install-driven" },
    ],
    deliverables: [
      "Influencer sourcing",
      "Giveaway mechanic design",
      "Content ideation",
      "Campaign reporting",
    ],
    gallery: [
      "/images/work/fuel-1.jpg",
      "/images/work/fuel-2.jpg",
      "/images/work/fuel-3.jpg",
    ],
  },
  {
    slug: "perfume-brand-ambassador",
    title: "Luxury Perfume Ambassador",
    tags: ["Influencer"],
    industry: "Beauty",
    impact: "6%+ engagement, 3M+ reach, long-term brand ambassadorship",
    thumbnail: "/images/work/perfume-1.jpg",
    overview:
      "Long-term influencer ambassadorship for a UAE-based luxury perfume house. Ongoing content creation, PR deliveries, and usage rights management over multiple months.",
    challenge:
      "The brand needed more than one-off posts. They wanted a genuine, long-term association with a creator whose audience trusted her beauty recommendations.",
    solution:
      "We identified and secured a single high-affinity creator for a multi-month ambassadorship. Managed all content ideation, production, PR deliveries, reporting, and usage rights licensing.",
    results: [
      { value: "3M+", label: "Total reach" },
      { value: "6%+", label: "Engagement rate" },
      { value: "Long-term", label: "Ambassadorship" },
      { value: "Multi-month", label: "Duration" },
    ],
    deliverables: [
      "Influencer sourcing & securing",
      "Content ideation",
      "Content production",
      "Usage rights management",
      "PR deliveries",
      "Ongoing reporting",
    ],
    gallery: [
      "/images/work/perfume-1.jpg",
      "/images/work/perfume-2.jpg",
      "/images/work/perfume-3.jpg",
    ],
  },
];

/* Only show filters for work types that actually have case studies */
export const filterOptions: ServiceTag[] = [
  ...new Set(caseStudies.flatMap((s) => s.tags)),
];
