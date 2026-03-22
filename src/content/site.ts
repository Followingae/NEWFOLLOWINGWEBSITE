import type { World } from "@/lib/theme";

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export const navLinks: NavLink[] = [
  { label: "Work", href: "/work" },
  {
    label: "Services",
    href: "/#services",
    children: [
      {
        label: "Influencer Marketing",
        href: "/influencer-marketing",
        description: "End-to-end campaign management",
      },
      {
        label: "Productions",
        href: "/productions",
        description: "Social-first shoots & content",
      },
      {
        label: "UGC",
        href: "/ugc",
        description: "Creator content at scale",
      },
      {
        label: "SMM",
        href: "/smm",
        description: "Content systems, not calendars",
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries/fashion",
    children: [
      { label: "Fashion", href: "/industries/fashion" },
      { label: "Beauty", href: "/industries/beauty" },
      { label: "Food & Beverage", href: "/industries/food-beverage" },
      { label: "Tech & Apps", href: "/industries/tech" },
      { label: "Lifestyle", href: "/industries/lifestyle" },
    ],
  },
  { label: "Process", href: "/process" },
  { label: "Insights", href: "/insights" },
  { label: "Manifesto", href: "/manifesto" },
  { label: "Contact", href: "/contact" },
];

export interface HeroContent {
  kicker: string;
  headline: string[];
  subline: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export const heroContent: Record<World, HeroContent> = {
  influencer: {
    kicker: "INFLUENCER MARKETING EXPERTS",
    headline: ["Influencer campaigns", "that actually sell"],
    subline:
      "Strategy, creators, content, reporting. All managed, all tracked, all in one platform",
    ctaPrimary: { label: "Launch a Campaign", href: "/contact" },
    ctaSecondary: { label: "View Work", href: "/work" },
  },
  production: {
    kicker: "PRODUCTION EXPERTS",
    headline: ["We shoot for the feed,", "not the boardroom"],
    subline:
      "Concept, shoot, edit, delivery. Every asset built for performance.",
    ctaPrimary: { label: "Launch a Campaign", href: "/contact" },
    ctaSecondary: { label: "View Reel", href: "/work" },
  },
};

export interface FloatingTile {
  label: string;
  image: string;
}

export const floatingTiles: FloatingTile[] = [
  { label: "Influencer Marketing", image: "/images/tile-influencer.jpg" },
  { label: "UGC", image: "/images/tile-ugc.jpg" },
  { label: "Production", image: "/images/tile-production.jpg" },
  { label: "SMM", image: "/images/tile-smm.jpg" },
  { label: "Campaign Management", image: "/images/tile-campaign.jpg" },
];

export interface SplitPanel {
  stat: string;
  copy: string;
}

export const splitPanels: SplitPanel[] = [
  {
    stat: "End-to-end",
    copy: "We manage campaigns from strategy to reporting. Fast approvals, clear reporting, no gaps.",
  },
  {
    stat: "Fit-first matching",
    copy: "We match creators by audience quality and brand fit, not follower count. Better matches, better results.",
  },
  {
    stat: "Production-ready",
    copy: "Every asset delivered in ad-ready and organic formats. Shot once, usable everywhere.",
  },
];

export interface ServiceCard {
  title: string;
  description: string;
  href: string;
  tag: string;
  image: string;
}

export const servicesInfluencer: ServiceCard[] = [
  {
    title: "Influencer Marketing",
    description:
      "Full-service influencer campaigns. Creator sourcing, briefing, production, publishing, and reporting.",
    href: "/influencer-marketing",
    tag: "Core",
    image: "/images/influencer/spotlight.png",
  },
  {
    title: "UGC",
    description:
      "Creator-made content, directed by us. Hook variants and cutdowns ready for Meta and TikTok ads.",
    href: "/ugc",
    tag: "Content",
    image: "/images/ugc/face.png",
  },
  {
    title: "Productions",
    description:
      "Shoots planned for social, not the boardroom. Concept through delivery, all formats included.",
    href: "/productions",
    tag: "Production",
    image: "/images/production/hero.png",
  },
  {
    title: "SMM",
    description:
      "Monthly content, batch-produced, performance-tracked. We turn inconsistent feeds into growth engines.",
    href: "/smm",
    tag: "Management",
    image: "/images/smm/fashion.png",
  },
];

export const servicesProduction: ServiceCard[] = [
  {
    title: "Productions",
    description:
      "Shoots planned for social, not the boardroom. Concept through delivery, all formats included.",
    href: "/productions",
    tag: "Core",
    image: "/images/production/hero.png",
  },
  {
    title: "UGC",
    description:
      "Creator-made content, directed by us. Hook variants and cutdowns ready for Meta and TikTok ads.",
    href: "/ugc",
    tag: "Content",
    image: "/images/ugc/face.png",
  },
  {
    title: "SMM",
    description:
      "Monthly content, batch-produced, performance-tracked. We turn inconsistent feeds into growth engines.",
    href: "/smm",
    tag: "Management",
    image: "/images/smm/fashion.png",
  },
  {
    title: "Influencer Marketing",
    description:
      "Full-service influencer campaigns. Creator sourcing, briefing, production, publishing, and reporting.",
    href: "/influencer-marketing",
    tag: "Campaigns",
    image: "/images/influencer/spotlight.png",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Listen & frame",
    description:
      "Goals, audience, platforms, creative direction — aligned before a single creator is contacted.",
    details: [
      "Campaign objective definition",
      "Audience & platform mapping",
      "Creative direction brief",
      "KPI framework setup",
    ],
  },
  {
    number: "02",
    title: "Discover & match",
    description:
      "Shortlists built for brand fit, audience quality, and campaign intent.",
    details: [
      "Creator sourcing & vetting",
      "Audience overlap analysis",
      "Rate negotiation",
      "Contract & usage rights",
    ],
  },
  {
    number: "03",
    title: "Ignite & brief",
    description:
      "Creative briefs with brand guidelines, format specs, and approval workflows.",
    details: [
      "Detailed creative briefs",
      "Brand guidelines integration",
      "Content format specifications",
      "Approval workflow setup",
    ],
  },
  {
    number: "04",
    title: "Amplify & produce",
    description:
      "Produced, reviewed, published on schedule. All formats included.",
    details: [
      "Content production oversight",
      "Quality control review",
      "Scheduling & posting",
      "Real-time coordination",
    ],
  },
  {
    number: "05",
    title: "Prove & iterate",
    description:
      "Full reporting, clear learnings, actionable next steps.",
    details: [
      "Performance analytics",
      "ROI reporting",
      "Learnings documentation",
      "Iteration recommendations",
    ],
  },
];

export const ctaContent: Record<
  World,
  { headline: string; subline: string; label: string; href: string }
> = {
  influencer: {
    headline: "Let's build\nyour next\ncampaign",
    subline:
      "Tell us about your brand. We'll come back with a plan, a creator shortlist, and a timeline.",
    label: "Launch a Campaign",
    href: "/contact",
  },
  production: {
    headline: "Let's make\nsomething\nworth watching",
    subline:
      "Tell us about your brand. We'll come back with a concept, a timeline, and a quote.",
    label: "Launch a Campaign",
    href: "/contact",
  },
};

export const clientLogos = [
  { name: "Aseel", logo: "/images/brands/aseel.png", height: 28 },
  { name: "Barakat", logo: "/images/brands/b.png", height: 22 },
  { name: "CAFU", logo: "/images/brands/cafu.png", height: 16 },
  { name: "Coca-Cola Arena", logo: "/images/brands/cca.png", height: 36 },
  { name: "Dollar Car Rental", logo: "/images/brands/dcr.png", height: 26 },
  { name: "Durance", logo: "/images/brands/durance.png", height: 18 },
  { name: "R&B", logo: "/images/brands/rnb.png", height: 24 },
  { name: "Sriracha", logo: "/images/brands/sri.png", height: 50 },
];
