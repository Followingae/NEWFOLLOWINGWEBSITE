export interface IndustryPage {
  slug: string;
  name: string;
  kicker: string;
  headline: string;
  subline: string;
  stats: { value: string; label: string }[];
  capabilities: string[];
  insight: string;
}

export const industries: IndustryPage[] = [
  {
    slug: "fashion",
    name: "Fashion",
    kicker: "INDUSTRIES / FASHION",
    headline: "Where style meets strategy",
    subline:
      "Fashion moves fast. Your influencer strategy needs to move faster. We build campaigns that turn drops into moments and collections into conversations.",
    stats: [
      { value: "47", label: "Fashion campaigns delivered" },
      { value: "8.2M", label: "Average reach per campaign" },
      { value: "3.1x", label: "Average ROAS" },
    ],
    capabilities: [
      "Seasonal launch campaigns",
      "Lookbook & editorial production",
      "Fashion week creator activations",
      "Styling & creative direction",
      "Trend-responsive UGC sprints",
      "Always-on social content systems",
    ],
    insight:
      "Fashion audiences don't want to be sold to. They want to be invited in. The brands winning right now are the ones treating their feed like a magazine and their creators like editors.",
  },
  {
    slug: "beauty",
    name: "Beauty",
    kicker: "INDUSTRIES / BEAUTY",
    headline: "Beauty is a conversation — we start it",
    subline:
      "In beauty, trust is everything. We connect brands with creators who don't just use products — they believe in them. That's the difference between a post and a movement.",
    stats: [
      { value: "62", label: "Beauty campaigns delivered" },
      { value: "12.4M", label: "Total impressions generated" },
      { value: "4.8x", label: "Average ROAS on paid amplification" },
    ],
    capabilities: [
      "Product launch campaigns",
      "Tutorial & routine content",
      "Ingredient education series",
      "Before/after UGC at scale",
      "Dermatologist & expert partnerships",
      "Community seeding programs",
    ],
    insight:
      "The beauty brands breaking through aren't the ones with the biggest budgets. They're the ones with the most authentic voices. We find those voices.",
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    kicker: "INDUSTRIES / FOOD & BEVERAGE",
    headline: "From feed to fork",
    subline:
      "Food content lives and dies by appetite appeal. We produce content that makes people hungry — literally and figuratively — for what you're serving.",
    stats: [
      { value: "38", label: "F&B campaigns delivered" },
      { value: "5.6M", label: "Average views per campaign" },
      { value: "340%", label: "Average engagement lift" },
    ],
    capabilities: [
      "Product launch & sampling campaigns",
      "Recipe & lifestyle content",
      "Restaurant & venue activations",
      "Food photography & video production",
      "Seasonal & holiday campaigns",
      "Delivery platform content strategy",
    ],
    insight:
      "Nobody shares a perfectly lit product shot anymore. They share the moment — the unboxing, the first bite, the chaos of cooking. That's what we capture.",
  },
  {
    slug: "tech",
    name: "Tech & Apps",
    kicker: "INDUSTRIES / TECH",
    headline: "The brands disrupting tomorrow need stories today",
    subline:
      "Tech products need more than feature announcements. They need creators who can translate complexity into desire. We bridge the gap between innovation and culture.",
    stats: [
      { value: "29", label: "Tech campaigns delivered" },
      { value: "6.8M", label: "Total reach across platforms" },
      { value: "22%", label: "Average install rate from creator content" },
    ],
    capabilities: [
      "App launch campaigns",
      "Product demo & review content",
      "Unboxing & first-look series",
      "Developer & tech creator partnerships",
      "Feature adoption campaigns",
      "B2B thought leadership content",
    ],
    insight:
      "The best tech marketing doesn't feel like marketing. It feels like a friend recommending something that changed how they work. That's the bar.",
  },
  {
    slug: "lifestyle",
    name: "Lifestyle",
    kicker: "INDUSTRIES / LIFESTYLE",
    headline: "Culture doesn't wait — neither should you",
    subline:
      "Lifestyle brands don't sell products — they sell identity. We build influencer strategies that make your brand the one people choose to be associated with.",
    stats: [
      { value: "54", label: "Lifestyle campaigns delivered" },
      { value: "15.2M", label: "Total impressions" },
      { value: "2.8x", label: "Average ROAS" },
    ],
    capabilities: [
      "Brand identity campaigns",
      "Community building & ambassador programs",
      "Event & experience activations",
      "Travel & adventure content",
      "Fitness & wellness partnerships",
      "Home & design content production",
    ],
    insight:
      "The brands that own a lifestyle don't just market — they curate. Every creator, every post, every story is a deliberate choice that says: this is who we are.",
  },
];
