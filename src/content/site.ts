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
    kicker: "FOLLOWING / INFLUENCER MARKETING",
    headline: ["We turn creators", "into culture"],
    subline:
      "Every scroll is a chance to move someone — we make sure it does. Strategy, sourcing, execution, reporting — end-to-end",
    ctaPrimary: { label: "Let's Be Unreasonable", href: "/contact" },
    ctaSecondary: { label: "View Work", href: "/work" },
  },
  production: {
    kicker: "FOLLOWING / PRODUCTIONS",
    headline: ["We don't shoot content", "We craft evidence"],
    subline:
      "Evidence of what your brand believes — concept, shoot, edit, delivery — commercial quality built for social",
    ctaPrimary: { label: "Start Something Bold", href: "/contact" },
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
    copy: "We manage campaigns from strategy to reporting — with the kind of structure that makes approvals effortless and results inevitable.",
  },
  {
    stat: "Fit-first matching",
    copy: "We don't match creators by follower count. We match by belief, audience quality, and the kind of trust that turns posts into purchases.",
  },
  {
    stat: "Production-ready",
    copy: "Content that looks like it belongs in a campaign because it was built for one. Frameworks that ensure every asset is usable for ads, organic, and everything in between.",
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
      "Find the voices. Shape the story. Own the moment. Fully managed campaigns from brief to report.",
    href: "/influencer-marketing",
    tag: "Core",
  },
  {
    title: "UGC",
    description:
      "Real people. Real proof. Directed creator content with performance-ready variants that fuel paid media.",
    href: "/ugc",
    tag: "Content",
  },
  {
    title: "Productions",
    description:
      "We don't shoot content. We craft evidence of what a brand believes. Social-first, commercially sharp.",
    href: "/productions",
    tag: "Production",
  },
  {
    title: "SMM",
    description:
      "Your feed isn't a brochure. It's a living, breathing brand. Content systems that scale.",
    href: "/smm",
    tag: "Management",
  },
];

export const servicesProduction: ServiceCard[] = [
  {
    title: "Productions",
    description:
      "We don't shoot content. We craft evidence of what a brand believes. Social-first, commercially sharp.",
    href: "/productions",
    tag: "Core",
  },
  {
    title: "UGC",
    description:
      "Real people. Real proof. Directed creator content with performance-ready variants that fuel paid media.",
    href: "/ugc",
    tag: "Content",
  },
  {
    title: "SMM",
    description:
      "Your feed isn't a brochure. It's a living, breathing brand. Content systems that scale.",
    href: "/smm",
    tag: "Management",
  },
  {
    title: "Influencer Marketing",
    description:
      "Find the voices. Shape the story. Own the moment. Fully managed campaigns from brief to report.",
    href: "/influencer-marketing",
    tag: "Campaigns",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Listen & frame",
    description:
      "Before we pitch anything, we listen. Goals, audience, platforms, creative direction — we align on everything before a single creator is contacted.",
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
      "Creator shortlists built for brand fit, audience quality, and campaign intent. Not follower counts — conviction.",
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
      "Clear creative briefs that give creators enough direction to stay on-brand and enough freedom to stay authentic.",
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
      "Content is produced, reviewed, and published on schedule. Every asset is built for the platform it lives on.",
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
      "Performance data drives the next round. We don't just report — we learn, adapt, and improve. Always.",
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
    headline: "Let's make\nsomething\nunreasonable",
    subline:
      "Tell us about your project — we'll build a plan that makes your competitors nervous",
    label: "Let's Be Unreasonable",
    href: "/contact",
  },
  production: {
    headline: "Ready to\ncreate\nevidence?",
    subline:
      "Tell us about your project. We'll build a plan that proves what your brand believes.",
    label: "Start Something Bold",
    href: "/contact",
  },
};

export const clientLogos = [
  "Brand One",
  "Brand Two",
  "Brand Three",
  "Brand Four",
  "Brand Five",
  "Brand Six",
  "Brand Seven",
  "Brand Eight",
];
