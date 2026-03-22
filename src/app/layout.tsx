import type { Metadata } from "next";
import "./globals.css";
import { WorldProvider } from "@/components/world/WorldProvider";
import { WorldTransitionOverlay } from "@/components/world/WorldTransitionOverlay";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { LenisWrapper } from "@/components/layout/LenisWrapper";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: {
    default: "Following — Influencer Marketing Agency, UAE",
    template: "%s | Following",
  },
  description:
    "End-to-end influencer marketing and production. Strategy, creators, content, reporting — all managed, all tracked.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://following.ae"),
  openGraph: {
    title: "Following — Influencer Marketing Agency, UAE",
    description:
      "End-to-end influencer marketing and production. Strategy, creators, content, reporting.",
    type: "website",
    locale: "en_US",
    siteName: "Following",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Following — Influencer Marketing Agency, UAE",
    description:
      "End-to-end influencer marketing and production. Strategy, creators, content, reporting.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
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
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
        <SchemaMarkup />
      </head>
      <body className="grain-overlay">
        <WorldProvider>
          <LenisWrapper>
            <WorldTransitionOverlay />
            <NavBar />
            <main>{children}</main>
            <Footer />
            <WhatsAppButton />
          </LenisWrapper>
        </WorldProvider>
      </body>
    </html>
  );
}
