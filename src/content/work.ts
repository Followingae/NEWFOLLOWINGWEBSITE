export type ServiceTag = "Influencer" | "Productions" | "UGC" | "SMM";

export interface CaseStudy {
  slug: string;
  title: string;
  tags: ServiceTag[];
  impact: string;
  thumbnail: string;
  overview: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  gallery: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "summer-launch-campaign",
    title: "Summer Launch Campaign",
    tags: ["Influencer", "UGC"],
    impact: "3.2M impressions, 12x ROAS on paid amplification",
    thumbnail: "/images/work-01.jpg",
    overview:
      "A multi-platform influencer campaign designed to drive awareness and sales for a seasonal product launch.",
    challenge:
      "The brand needed to reach a younger audience segment with authentic content that could also be repurposed for paid media.",
    solution:
      "We sourced 24 creators across Instagram and TikTok, provided detailed briefs with performance hooks, and managed the full approval and posting cycle.",
    deliverables: [
      "48 Reels",
      "24 Stories sequences",
      "12 UGC ad variants",
      "Campaign report",
    ],
    gallery: [
      "/images/work-01-a.jpg",
      "/images/work-01-b.jpg",
      "/images/work-01-c.jpg",
    ],
  },
  {
    slug: "brand-film-series",
    title: "Brand Film Series",
    tags: ["Productions"],
    impact: "4 hero films, 32 cutdowns, 8M total views",
    thumbnail: "/images/work-02.jpg",
    overview:
      "A cinematic brand film series shot across three locations, optimized for social distribution.",
    challenge:
      "Creating premium brand content that performs natively on social platforms without losing production quality.",
    solution:
      "We developed a modular shoot approach — each location yielded a hero film and 8 social cutdowns with hook variants for A/B testing.",
    deliverables: [
      "4 Hero brand films",
      "32 Social cutdowns",
      "Hook variant package",
      "BTS content",
    ],
    gallery: [
      "/images/work-02-a.jpg",
      "/images/work-02-b.jpg",
      "/images/work-02-c.jpg",
    ],
  },
  {
    slug: "ugc-at-scale",
    title: "UGC at Scale",
    tags: ["UGC", "Influencer"],
    impact: "120 assets delivered in 3 weeks, 40% lower CPA",
    thumbnail: "/images/work-03.jpg",
    overview:
      "A high-volume UGC production sprint to fuel performance marketing across Meta and TikTok.",
    challenge:
      "The brand's creative team was stretched thin and needed a rapid influx of performance-ready UGC without sacrificing quality.",
    solution:
      "We onboarded 18 creators with detailed scripts and style guides, ran a quality-first review process, and delivered edited variants within 3 weeks.",
    deliverables: [
      "120 UGC assets",
      "Hook variants",
      "Subtitle packages",
      "Performance brief",
    ],
    gallery: [
      "/images/work-03-a.jpg",
      "/images/work-03-b.jpg",
      "/images/work-03-c.jpg",
    ],
  },
  {
    slug: "always-on-social",
    title: "Always-On Social",
    tags: ["SMM"],
    impact: "6 months managed, 340% growth in engagement rate",
    thumbnail: "/images/work-04.jpg",
    overview:
      "Ongoing social media management with monthly content systems and performance iteration.",
    challenge:
      "Inconsistent posting cadence and no creative direction was diluting the brand's social presence.",
    solution:
      "We built a monthly content system with batch production days, creative direction frameworks, and weekly reporting cycles.",
    deliverables: [
      "Monthly content calendars",
      "Batch production",
      "Weekly reports",
      "Quarterly strategy reviews",
    ],
    gallery: [
      "/images/work-04-a.jpg",
      "/images/work-04-b.jpg",
      "/images/work-04-c.jpg",
    ],
  },
  {
    slug: "product-shoot-system",
    title: "Product Shoot System",
    tags: ["Productions", "UGC"],
    impact: "200+ assets from a single 2-day shoot",
    thumbnail: "/images/work-05.jpg",
    overview:
      "An efficient product photography and video system designed to maximize output from a single production window.",
    challenge:
      "The brand needed a large volume of product content across multiple formats but had a limited production budget.",
    solution:
      "We designed a modular set system with pre-planned shot lists, allowing rapid transitions between setups and formats.",
    deliverables: [
      "Product photography",
      "Product video",
      "Social cutdowns",
      "E-commerce assets",
    ],
    gallery: [
      "/images/work-05-a.jpg",
      "/images/work-05-b.jpg",
      "/images/work-05-c.jpg",
    ],
  },
  {
    slug: "event-content-package",
    title: "Event Content Package",
    tags: ["Productions", "Influencer"],
    impact: "Real-time social coverage reaching 1.8M accounts",
    thumbnail: "/images/work-06.jpg",
    overview:
      "Full event coverage combining production crew and influencer activations for maximum social reach.",
    challenge:
      "Capturing a live event in a way that feels premium but posts natively on social — in real time.",
    solution:
      "We deployed a 3-person production crew alongside 6 invited creators, with a real-time editing workflow for same-day posting.",
    deliverables: [
      "Same-day Reels",
      "Event recap film",
      "Creator stories",
      "Photo gallery",
    ],
    gallery: [
      "/images/work-06-a.jpg",
      "/images/work-06-b.jpg",
      "/images/work-06-c.jpg",
    ],
  },
];

export const filterOptions: ServiceTag[] = [
  "Influencer",
  "Productions",
  "UGC",
  "SMM",
];
