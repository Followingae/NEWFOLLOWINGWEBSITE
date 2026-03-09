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
    slug: "summer-launch-campaign",
    title: "Summer Launch Campaign",
    tags: ["Influencer", "UGC"],
    industry: "Fashion",
    impact: "3.2M impressions, 12x ROAS on paid amplification",
    thumbnail: "/images/work-01.jpg",
    overview:
      "A multi-platform influencer campaign designed to turn a seasonal product launch into a cultural moment — not just another ad.",
    challenge:
      "The brand had products people liked but nobody talked about. They needed to reach a younger audience with content authentic enough to share and sharp enough to convert.",
    solution:
      "We sourced 24 creators across Instagram and TikTok who genuinely fit the brand's aesthetic. Detailed briefs with performance hooks ensured every piece of content was both authentic and built for paid amplification. Full approval and posting cycle managed end-to-end.",
    results: [
      { value: "3.2M", label: "Impressions" },
      { value: "12x", label: "ROAS" },
      { value: "24", label: "Creators activated" },
      { value: "48", label: "Reels delivered" },
    ],
    deliverables: [
      "48 Reels",
      "24 Stories sequences",
      "12 UGC ad variants",
      "Campaign report",
    ],
    testimonial: {
      quote:
        "Following didn't just run a campaign. They made our brand the one people were talking about at brunch.",
      name: "Sarah Chen",
      role: "Head of Marketing, Aura Studio",
    },
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
    industry: "Lifestyle",
    impact: "4 hero films, 32 cutdowns, 8M total views",
    thumbnail: "/images/work-02.jpg",
    overview:
      "A cinematic brand film series shot across three locations, designed to look like a campaign but perform like social content.",
    challenge:
      "Creating premium brand content that performs natively on social platforms without losing the cinematic quality that defines the brand.",
    solution:
      "We developed a modular shoot approach — each location yielded a hero film and 8 social cutdowns with hook variants for A/B testing. Every frame was planned for the feed, not the boardroom.",
    results: [
      { value: "8M", label: "Total views" },
      { value: "4", label: "Hero films" },
      { value: "32", label: "Social cutdowns" },
      { value: "3.4x", label: "Engagement vs. benchmark" },
    ],
    deliverables: [
      "4 Hero brand films",
      "32 Social cutdowns",
      "Hook variant package",
      "BTS content",
    ],
    testimonial: {
      quote:
        "The films looked like they cost five times what they did. And they actually performed on social. That never happens.",
      name: "Marcus Webb",
      role: "Creative Director, Meridian Co.",
    },
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
    industry: "Beauty",
    impact: "120 assets delivered in 3 weeks, 40% lower CPA",
    thumbnail: "/images/work-03.jpg",
    overview:
      "A high-volume UGC production sprint to fuel performance marketing across Meta and TikTok. Real people. Real proof. At scale.",
    challenge:
      "The brand's creative team was stretched thin and needed a rapid influx of performance-ready UGC without sacrificing the authenticity that makes UGC work.",
    solution:
      "We onboarded 18 creators with detailed scripts and style guides, ran a quality-first review process, and delivered edited variants within 3 weeks. Every asset was built for the ad platform, not the portfolio.",
    results: [
      { value: "120", label: "Assets delivered" },
      { value: "40%", label: "Lower CPA" },
      { value: "18", label: "Creators" },
      { value: "3 wk", label: "Turnaround" },
    ],
    deliverables: [
      "120 UGC assets",
      "Hook variants",
      "Subtitle packages",
      "Performance brief",
    ],
    testimonial: {
      quote:
        "We went from zero creative pipeline to 120 high-performing assets in three weeks. Following made it look easy.",
      name: "Priya Kapoor",
      role: "Performance Lead, Glow Collective",
    },
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
    industry: "Food & Beverage",
    impact: "6 months managed, 340% growth in engagement rate",
    thumbnail: "/images/work-04.jpg",
    overview:
      "Ongoing social media management with monthly content systems and performance iteration. Not a calendar — a machine.",
    challenge:
      "Inconsistent posting cadence and no creative direction was diluting the brand's social presence. Their feed looked like it was managed by committee.",
    solution:
      "We built a monthly content system with batch production days, creative direction frameworks, and weekly reporting cycles. Every post serves a purpose in the larger content architecture.",
    results: [
      { value: "340%", label: "Engagement growth" },
      { value: "6 mo", label: "Managed" },
      { value: "2.1x", label: "Follower growth rate" },
      { value: "89%", label: "Content consistency score" },
    ],
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
    industry: "Beauty",
    impact: "200+ assets from a single 2-day shoot",
    thumbnail: "/images/work-05.jpg",
    overview:
      "An efficient product photography and video system designed to maximize output from a single production window. Every frame, planned.",
    challenge:
      "The brand needed a large volume of product content across multiple formats but had a limited production budget and an even more limited timeline.",
    solution:
      "We designed a modular set system with pre-planned shot lists, allowing rapid transitions between setups and formats. One shoot, 200+ assets, zero wasted time.",
    results: [
      { value: "200+", label: "Assets produced" },
      { value: "2 day", label: "Shoot duration" },
      { value: "6", label: "Content formats" },
      { value: "3 mo", label: "Content runway" },
    ],
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
    industry: "Tech",
    impact: "Real-time social coverage reaching 1.8M accounts",
    thumbnail: "/images/work-06.jpg",
    overview:
      "Full event coverage combining production crew and influencer activations. Premium quality, same-day delivery, maximum social velocity.",
    challenge:
      "Capturing a live event in a way that feels premium but posts natively on social — in real time. No polishing in post. No 'we'll send the edit next week.'",
    solution:
      "We deployed a 3-person production crew alongside 6 invited creators, with a real-time editing workflow for same-day posting. The event went live and so did the content.",
    results: [
      { value: "1.8M", label: "Accounts reached" },
      { value: "6", label: "Creator activations" },
      { value: "Same day", label: "Content turnaround" },
      { value: "24", label: "Assets published live" },
    ],
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

export const industryFilterOptions: IndustryTag[] = [
  "Fashion",
  "Beauty",
  "Food & Beverage",
  "Tech",
  "Lifestyle",
];
