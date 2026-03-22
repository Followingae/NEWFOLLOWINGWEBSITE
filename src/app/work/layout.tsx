import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work — Influencer Campaign Case Studies",
  description:
    "Real influencer marketing campaigns with real results. Case studies across F&B, beauty, tech, and lifestyle brands in the UAE.",
  openGraph: {
    title: "Our Work | Following",
    description:
      "Real influencer marketing campaigns with real results across UAE brands.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
