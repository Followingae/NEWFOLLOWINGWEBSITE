import type { World } from "@/lib/theme";

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
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
    kicker: "FOLLOWING / INFLUENCER MARKETING",
    headline: ["Influencer campaigns", "built like an agency."],
    subline:
      "Strategy, sourcing, execution, reporting — end-to-end.",
    ctaPrimary: { label: "Start a Campaign", href: "/contact" },
    ctaSecondary: { label: "View Work", href: "/work" },
  },
  production: {
    kicker: "FOLLOWING / PRODUCTIONS",
    headline: ["Production built", "for social performance."],
    subline:
      "Concept, shoot, edit, delivery — commercial quality for social.",
    ctaPrimary: { label: "Request a Shoot", href: "/contact" },
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
    copy: "We manage campaigns from strategy to reporting — with structure.",
  },
  {
    stat: "Fit-first matching",
    copy: "Creators selected for brand fit, audience quality, and campaign intent.",
  },
  {
    stat: "Production-ready",
    copy: "Content quality frameworks so the output is usable for ads and organic.",
  },
];

export interface ServiceCard {
  title: string;
  description: string;
  href: string;
  tag: string;
}

export const servicesInfluencer: ServiceCard[] = [
  {
    title: "Influencer Marketing",
    description:
      "Fully managed campaigns. Briefs, approvals, delivery, reporting.",
    href: "/influencer-marketing",
    tag: "Core",
  },
  {
    title: "UGC",
    description:
      "Directed creator content with performance-ready variants.",
    href: "/ugc",
    tag: "Content",
  },
  {
    title: "Productions",
    description: "Social-first shoots. Edit, color, motion, deliverables.",
    href: "/productions",
    tag: "Production",
  },
  {
    title: "SMM",
    description: "Content systems, not random posting.",
    href: "/smm",
    tag: "Management",
  },
];

export const servicesProduction: ServiceCard[] = [
  {
    title: "Productions",
    description: "Social-first shoots. Edit, color, motion, deliverables.",
    href: "/productions",
    tag: "Core",
  },
  {
    title: "UGC",
    description:
      "Directed creator content with performance-ready variants.",
    href: "/ugc",
    tag: "Content",
  },
  {
    title: "SMM",
    description: "Content systems, not random posting.",
    href: "/smm",
    tag: "Management",
  },
  {
    title: "Influencer Marketing",
    description:
      "Fully managed campaigns. Briefs, approvals, delivery, reporting.",
    href: "/influencer-marketing",
    tag: "Campaigns",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Strategy & framing",
    description:
      "We align on goals, audience, platforms, and creative direction before anything starts.",
    details: [
      "Campaign objective definition",
      "Audience & platform mapping",
      "Creative direction brief",
      "KPI framework setup",
    ],
  },
  {
    number: "02",
    title: "Matching & confirmation",
    description:
      "Creator shortlists are built for brand fit, audience quality, and campaign intent.",
    details: [
      "Creator sourcing & vetting",
      "Audience overlap analysis",
      "Rate negotiation",
      "Contract & usage rights",
    ],
  },
  {
    number: "03",
    title: "Briefs & alignment",
    description:
      "Clear creative briefs ensure content is on-brand and performance-ready.",
    details: [
      "Detailed creative briefs",
      "Brand guidelines integration",
      "Content format specifications",
      "Approval workflow setup",
    ],
  },
  {
    number: "04",
    title: "Production & posting",
    description:
      "Content is produced, reviewed, and published on schedule.",
    details: [
      "Content production oversight",
      "Quality control review",
      "Scheduling & posting",
      "Real-time coordination",
    ],
  },
  {
    number: "05",
    title: "Reporting & iteration",
    description:
      "Performance data drives the next round — always improving.",
    details: [
      "Performance analytics",
      "ROI reporting",
      "Learnings documentation",
      "Iteration recommendations",
    ],
  },
];

export const ctaContent: Record<World, { label: string; href: string }> = {
  influencer: { label: "Start a Campaign", href: "/contact" },
  production: { label: "Request a Shoot", href: "/contact" },
};
