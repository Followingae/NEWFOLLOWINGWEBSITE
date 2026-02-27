import type { Metadata } from "next";
import "./globals.css";
import { WorldProvider } from "@/components/world/WorldProvider";
import { WorldTransitionOverlay } from "@/components/world/WorldTransitionOverlay";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { LenisWrapper } from "@/components/layout/LenisWrapper";

export const metadata: Metadata = {
  title: "Following — Influencer Marketing & Production Agency",
  description:
    "Strategy, sourcing, execution, reporting. Influencer campaigns built like an agency.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" data-world="influencer">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain-overlay">
        <WorldProvider>
          <LenisWrapper>
            <WorldTransitionOverlay />
            <NavBar />
            <main>{children}</main>
            <Footer />
          </LenisWrapper>
        </WorldProvider>
      </body>
    </html>
  );
}
