export interface JobListing {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

export const jobListings: JobListing[] = [
  {
    title: "Campaign Strategist",
    department: "Strategy",
    location: "Remote / Hybrid",
    type: "Full-time",
    description:
      "Own the strategy layer of our influencer campaigns — from audience mapping to creative direction to KPI frameworks.",
  },
  {
    title: "Creator Partnerships Lead",
    department: "Influencer",
    location: "Remote",
    type: "Full-time",
    description:
      "Build and maintain our creator network. Source, vet, and manage relationships with influencers across platforms.",
  },
  {
    title: "Content Producer",
    department: "Production",
    location: "On-site / Hybrid",
    type: "Full-time",
    description:
      "Lead social-first shoots from pre-production through delivery. Concept, direct, and oversee multi-format content production.",
  },
  {
    title: "Social Media Manager",
    department: "SMM",
    location: "Remote",
    type: "Full-time",
    description:
      "Build and execute content systems for our managed accounts. Weekly reporting, creative direction, and community management.",
  },
  {
    title: "Motion Designer",
    department: "Production",
    location: "Remote",
    type: "Contract",
    description:
      "Create motion graphics, animated social assets, and video cutdowns that stop thumbs. After Effects + social-native formats.",
  },
  {
    title: "Intern — Campaign Operations",
    department: "Operations",
    location: "Hybrid",
    type: "Internship",
    description:
      "Learn the full campaign lifecycle. Support strategy, creator coordination, content review, and reporting across live campaigns.",
  },
];

export const coreValues = [
  {
    title: "Move fast, stay sharp",
    description: "Speed without sloppiness. We ship fast because we think clearly.",
  },
  {
    title: "Be unreasonably good",
    description:
      "Good enough isn't. We hold ourselves to a standard that makes clients say 'how did you do that?'",
  },
  {
    title: "Say what you mean",
    description:
      "No corporate doublespeak. Direct feedback, honest timelines, transparent results.",
  },
  {
    title: "Build the system",
    description:
      "Don't just solve the problem — build the system that prevents it from happening again.",
  },
  {
    title: "Obsess over the work",
    description:
      "The work is the product. Every brief, every edit, every report reflects who we are.",
  },
];

export const careersFaq = [
  {
    question: "What's the interview process?",
    answer:
      "Culture call (30 min) -> Skills deep-dive (60 min) -> Case study or portfolio review -> Team meet -> Offer. We move fast — typically 2-3 weeks from application to decision.",
  },
  {
    question: "Do you hire remotely?",
    answer:
      "Most roles are remote-friendly. Production roles require periodic on-site presence for shoots. We're flexible — results matter more than location.",
  },
  {
    question: "What's the culture like?",
    answer:
      "Direct, fast-paced, and creatively ambitious. We don't do unnecessary meetings or performative busyness. Ship the work, share the learnings, celebrate the wins.",
  },
  {
    question: "No role fits — can I still reach out?",
    answer:
      "Always. We're growing and roles open regularly. Send us a note and we'll keep you on our radar.",
  },
];
