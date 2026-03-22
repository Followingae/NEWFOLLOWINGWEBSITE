import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process — How Every Campaign Runs",
  description:
    "Five steps from brief to final report. Strategy, creator sourcing, briefs, production, and performance reporting — every campaign follows the same proven process.",
  openGraph: {
    title: "Our Process | Following",
    description:
      "Five steps from brief to final report. Every campaign, every time.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
