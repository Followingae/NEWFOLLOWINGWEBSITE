import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productions — Social-First Video & Photo Production",
  description:
    "Shoots planned for social, built for performance. Brand films, product photography, event coverage — concept through delivery, all formats included.",
  openGraph: {
    title: "Productions | Following",
    description:
      "Social-first production. Concept through delivery, all formats.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
