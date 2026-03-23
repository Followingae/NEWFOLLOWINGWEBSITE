import type { Metadata, Viewport } from "next";
import "./globals.css";
import { WorldProvider } from "@/components/world/WorldProvider";
import { WorldTransitionOverlay } from "@/components/world/WorldTransitionOverlay";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { LenisWrapper } from "@/components/layout/LenisWrapper";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4YMHB8ZTXF" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-4YMHB8ZTXF');`,
          }}
        />
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
          </LenisWrapper>
        </WorldProvider>
      </body>
    </html>
  );
}
