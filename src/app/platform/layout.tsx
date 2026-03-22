import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Analytics Platform — Creator Discovery & Campaign Management",
  description:
    "Our proprietary platform with 12 AI models for creator discovery, fraud detection, audience intelligence, campaign tracking, and performance reporting.",
  openGraph: {
    title: "AI Analytics Platform | Following",
    description:
      "12 AI models. Creator discovery, fraud detection, campaign tracking.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
