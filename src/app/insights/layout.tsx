import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights — Influencer Marketing Strategy & Perspective",
  description:
    "Strategy, craft, and perspective on influencer marketing from the Following team. Practical insights for brands running creator campaigns.",
  openGraph: {
    title: "Insights | Following",
    description:
      "Influencer marketing strategy and perspective from the Following team.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
