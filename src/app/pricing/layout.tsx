import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform Pricing — Free, Standard & Premium Plans",
  description:
    "AI-powered influencer analytics platform. Start free with 5 profile unlocks, or scale with Standard ($199/mo) and Premium ($499/mo) plans.",
  openGraph: {
    title: "Platform Pricing | Following",
    description:
      "AI-powered influencer analytics. Start free, scale when ready.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
