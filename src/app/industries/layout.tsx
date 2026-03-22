import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries — Influencer Marketing by Vertical",
  description:
    "Influencer marketing expertise across fashion, beauty, food & beverage, tech, and lifestyle. Industry-specific strategies and creator networks.",
  openGraph: {
    title: "Industries | Following",
    description:
      "Industry-specific influencer marketing. Fashion, beauty, F&B, tech, lifestyle.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
