"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navLinks } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Gradient bar top accent */}
      <div className="gradient-bar w-full" />

      <Container className="py-20 md:py-28">
        {/* Top section — logo + navigation */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_auto]">
          <div>
            <Link
              href="/"
              className="text-[14px] font-bold uppercase tracking-[0.2em] text-white"
            >
              Following
            </Link>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/40">
              End-to-end influencer marketing and production for brands that
              want structure, quality, and results.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-16 gap-y-4 md:grid-cols-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium tracking-wide text-white/40 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-white/[0.08] pt-8 text-xs md:flex-row md:items-center">
          <span className="text-white/30">
            &copy; {new Date().getFullYear()} Following. All rights reserved.
          </span>
          <div className="flex gap-8">
            <Link href="/contact" className="text-white/30 transition-colors hover:text-white/60">
              Privacy
            </Link>
            <Link href="/contact" className="text-white/30 transition-colors hover:text-white/60">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
