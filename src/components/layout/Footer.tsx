"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";

const footerLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/process" },
  { label: "Insights", href: "/insights" },
  { label: "Manifesto", href: "/manifesto" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Gradient bar top accent */}
      <div className="gradient-bar w-full" />

      <Container className="py-20 md:py-28">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_auto_auto]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-[14px] font-bold uppercase tracking-[0.2em] text-white"
            >
              Following
            </Link>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/40">
              We turn creators into culture. End-to-end influencer marketing and
              production for brands that refuse to blend in.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/20">
              Navigate
            </p>
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-white/40 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social + Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/20">
              Connect
            </p>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-medium text-white/40 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4">
              <a
                href="mailto:hello@followingagency.com"
                className="text-[13px] font-medium text-white/40 transition-colors duration-200 hover:text-white"
              >
                hello@followingagency.com
              </a>
            </div>
          </div>
        </div>

        {/* Industries */}
        <div className="mt-16 border-t border-white/[0.08] pt-8">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-white/20 mb-4">
            Industries
          </p>
          <div className="flex flex-wrap gap-4">
            {["Fashion", "Beauty", "Food & Beverage", "Tech & Apps", "Lifestyle"].map(
              (industry) => (
                <Link
                  key={industry}
                  href={`/industries/${industry.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                  className="text-xs font-medium text-white/30 transition-colors duration-200 hover:text-white/60"
                >
                  {industry}
                </Link>
              ),
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/[0.08] pt-8 text-xs md:flex-row md:items-center">
          <span className="text-white/30">
            &copy; {new Date().getFullYear()} Following. All rights reserved.
          </span>
          <div className="flex gap-8">
            <Link
              href="/contact"
              className="text-white/30 transition-colors hover:text-white/60"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-white/30 transition-colors hover:text-white/60"
            >
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
