import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UGC — Creator-Made Content for Ads",
  description:
    "Creator-made content directed by us, built for Meta and TikTok ads. Hook variants, cutdowns, and format adaptations for A/B testing at scale.",
  openGraph: {
    title: "UGC | Following",
    description:
      "Creator-made content directed by us. Built for paid ads at scale.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
