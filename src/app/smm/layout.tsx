import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Management — Monthly Content Systems",
  description:
    "Monthly content systems that grow your brand. Content planning, batch production, creative direction, performance iteration, and reporting.",
  openGraph: {
    title: "Social Media Management | Following",
    description:
      "Monthly content systems. Planning, production, iteration, reporting.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
