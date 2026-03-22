import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Influencer Marketing — Full-Service Creator Campaigns",
  description:
    "End-to-end influencer marketing in the UAE. Creator sourcing, briefing, content production, publishing, and performance reporting — all managed.",
  openGraph: {
    title: "Influencer Marketing | Following",
    description:
      "Full-service creator campaigns. Sourcing to reporting, all managed.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
