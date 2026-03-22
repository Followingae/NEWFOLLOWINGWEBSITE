import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Launch a Campaign",
  description:
    "Get in touch with Following to launch your next influencer marketing campaign. Fill in your brief and hear back within 24 hours.",
  openGraph: {
    title: "Launch a Campaign | Following",
    description:
      "Get in touch to launch your next influencer marketing campaign.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
