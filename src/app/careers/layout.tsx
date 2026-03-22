import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Join the Following Team",
  description:
    "We're hiring across influencer marketing, production, and platform engineering. Based in Dubai with a team in Karachi.",
  openGraph: {
    title: "Careers | Following",
    description:
      "Join the Following team. Hiring across marketing, production, and engineering.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
