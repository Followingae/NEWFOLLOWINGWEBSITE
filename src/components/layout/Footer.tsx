"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";

const nav = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "Platform", href: "/platform" },
  { label: "Process", href: "/process" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export function Footer() {
  return (
    <footer data-nav-theme="dark" className="relative bg-[#0a0a0a] text-white">
      {/* Big CTA band */}
      <div className="border-b border-white/[0.06]">
        <Container className="flex flex-col items-center justify-between gap-8 py-20 md:flex-row md:py-28">
          <h2
            className="text-center text-[clamp(28px,4vw,48px)] font-bold leading-tight tracking-tight md:text-left"
          >
            <span style={{ fontFamily: "var(--font-sans)" }}>Ready to </span>
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
              launch?
            </span>
          </h2>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex h-12 items-center rounded-full px-8 text-sm font-semibold transition duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: "var(--accent)", color: "var(--accent-text)" }}
            >
              Launch a Campaign
            </a>
            <a
              href="/pricing"
              className="inline-flex h-12 items-center rounded-full border px-8 text-sm font-medium transition duration-200 hover:-translate-y-0.5 hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)" }}
            >
              Try the Platform
            </a>
          </div>
        </Container>
      </div>

      {/* Main footer grid */}
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="block">
              <img
                src="/logo.svg"
                alt="Following"
                className="h-10 w-auto"
                style={{ filter: "invert(1)" }}
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/30">
              End-to-end influencer marketing and production. Dubai and beyond.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/20">
              Navigate
            </p>
            <div className="flex flex-col gap-2.5">
              {nav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-white/35 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/20">
              Connect
            </p>
            <div className="flex flex-col gap-2.5">
              {socials.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-white/35 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:hello@followingagency.com"
                className="mt-2 text-[13px] text-white/35 transition-colors duration-200 hover:text-white"
              >
                hello@followingagency.com
              </a>
            </div>
          </div>

          {/* Offices */}
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/20">
              Offices
            </p>
            <div className="flex flex-col gap-4">
              <p className="text-[13px] text-white/50">Dubai, UAE <span className="text-white/20">— HQ</span></p>
              <p className="text-[13px] text-white/35">Karachi, Pakistan</p>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-[11px] text-white/20 md:flex-row">
          <span>&copy; {new Date().getFullYear()} Following. All rights reserved.</span>
          <div className="flex gap-6">
            <span className="cursor-default">Privacy Policy</span>
            <span className="cursor-default">Terms</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
