export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  date: string;
  author: string;
  body: string[];
}

export const articles: Article[] = [
  {
    slug: "why-most-influencer-campaigns-fail",
    title: "Why Most Influencer Campaigns Fail (And What We Do Differently)",
    excerpt:
      "The problem isn't influencers. It's the brief. Here's how we structure campaigns that actually convert.",
    tags: ["Strategy", "Influencer"],
    readTime: "6 min",
    date: "2026-02-18",
    author: "Following Team",
    body: [
      "Most influencer campaigns fail before a single piece of content is created. The problem isn't the creator, the platform, or the budget. It's the brief.",
      "We've audited hundreds of influencer briefs from brands who came to us after disappointing results. The pattern is always the same: vague objectives, no creative direction, and a measurement framework that confuses vanity metrics with business outcomes.",
      "A strong brief answers three questions before anything else. What does the brand need the audience to feel? What specific action should they take? And what does success look like in numbers — not impressions, but conversions, saves, and shares?",
      "At Following, every campaign starts with a Strategy & Framing phase. We define the audience segment, platform strategy, creative direction, and KPI framework before we source a single creator. This isn't overhead — it's the reason our campaigns consistently outperform.",
      "The difference between a 2x ROAS and a 12x ROAS isn't luck. It's structure. Brands that invest in the brief invest in results.",
    ],
  },
  {
    slug: "ugc-vs-influencer-content",
    title: "UGC vs. Influencer Content: When to Use Each",
    excerpt:
      "They look similar but serve different purposes. Here's how to deploy each for maximum impact.",
    tags: ["UGC", "Strategy"],
    readTime: "5 min",
    date: "2026-02-04",
    author: "Following Team",
    body: [
      "UGC and influencer content get lumped together constantly. They shouldn't be. They serve fundamentally different purposes in the marketing funnel, and using one where you need the other is a recipe for wasted spend.",
      "Influencer content is about reach and credibility. You're borrowing someone's audience and their trust. The creator's identity is central — their face, their voice, their endorsement. This works best for awareness and consideration.",
      "UGC is about proof and performance. The creator's identity is secondary. What matters is the format — testimonial-style videos, product demos, before-and-after reveals. This content fuels paid media because it feels native to the platform.",
      "The smartest brands use both in tandem. Influencer content drives awareness and captures attention. UGC converts that attention into action through paid amplification. Together, they create a full-funnel content engine.",
      "At Following, we often run hybrid campaigns — sourcing creators who produce both high-visibility organic posts and raw, performance-optimized UGC variants from the same shoot. Maximum output, minimal overhead.",
    ],
  },
  {
    slug: "building-content-systems-not-calendars",
    title: "Building Content Systems, Not Calendars",
    excerpt:
      "Calendars are reactive. Systems are proactive. Here's how we approach always-on social.",
    tags: ["SMM", "Production"],
    readTime: "4 min",
    date: "2026-01-21",
    author: "Following Team",
    body: [
      "Content calendars are a crutch. They create the illusion of strategy while delivering reactive, disconnected posts that nobody remembers. We stopped building calendars years ago.",
      "Instead, we build content systems. A system defines the brand's content pillars, visual language, posting cadence, and iteration loops. It's a machine that produces consistent, on-brand content without reinventing the wheel every month.",
      "The key difference: a calendar asks 'what should we post this week?' A system asks 'what does our audience need to see, feel, and do — and how do we deliver that at scale?'",
      "Our systems include batch production days (one shoot generates a month of content), creative direction frameworks (so every post looks intentional), and weekly reporting cycles that feed insights back into the next round.",
      "The result? Brands we manage see an average 340% increase in engagement within the first six months. Not because we post more — because we post smarter.",
    ],
  },
  {
    slug: "the-production-quality-myth",
    title: "The Production Quality Myth",
    excerpt:
      "Premium production doesn't mean overproduced. Here's why social-first shoots outperform studio perfection.",
    tags: ["Production", "Strategy"],
    readTime: "5 min",
    date: "2026-01-08",
    author: "Following Team",
    body: [
      "There's a persistent myth in marketing: higher production quality equals better performance. It doesn't. Not on social. Not anymore.",
      "The highest-performing content on Instagram and TikTok shares one trait: it feels native to the platform. That doesn't mean it's low quality — it means the production approach serves the platform, not the other way around.",
      "We call this social-first production. Every shoot is designed with the final format in mind — vertical, hook-first, 3-second attention windows. We shoot modular setups that yield hero content and dozens of social cutdowns from a single day.",
      "The numbers back this up. Our social-first brand films consistently outperform traditional 'studio' content by 3-4x in engagement. And because every shoot is designed for maximum output, clients get 200+ assets from a single two-day production.",
      "Premium quality and social performance aren't at odds. They just require a different production philosophy — one that starts with the feed, not the boardroom.",
    ],
  },
  {
    slug: "creator-selection-beyond-follower-count",
    title: "Creator Selection: Beyond Follower Count",
    excerpt:
      "Follower count is the least interesting metric. Here's what actually predicts campaign success.",
    tags: ["Influencer", "Strategy"],
    readTime: "6 min",
    date: "2025-12-15",
    author: "Following Team",
    body: [
      "When brands come to us with a creator shortlist, the first thing we do is throw out the follower counts. It's the least predictive metric for campaign success.",
      "What we look at instead: audience overlap with the brand's target demographic, engagement authenticity (are those comments real conversations or 'love this!' bots?), content quality consistency over the last 90 days, and brand safety signals.",
      "We've run campaigns where a creator with 15K followers outperformed someone with 500K — because the smaller creator had a hyper-engaged niche audience that trusted their recommendations.",
      "Our vetting process includes audience demographic analysis, engagement pattern auditing, content style assessment, and past brand collaboration review. It takes longer than scrolling through follower counts. It also produces campaigns with 3x higher conversion rates.",
      "The creator ecosystem is maturing. Brands that still select on follower count are playing last decade's game. The future belongs to those who select on fit, trust, and audience quality.",
    ],
  },
];

export const insightsTags = [
  "Strategy",
  "Influencer",
  "UGC",
  "Production",
  "SMM",
];
