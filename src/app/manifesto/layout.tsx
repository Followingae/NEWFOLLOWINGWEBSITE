import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manifesto — What We Believe",
  description:
    "How Following operates. No committee, no fluff — the principles behind how we run influencer campaigns and build our platform.",
  openGraph: {
    title: "Manifesto | Following",
    description: "What we believe. How we work.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
