"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { WorldToggle } from "@/components/world/WorldToggle";
import { navLinks } from "@/content/site";

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 right-0 left-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.06)" : "none",
        }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Container>
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? "h-16" : "h-20"
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              className="text-[14px] font-bold uppercase tracking-[0.2em]"
              style={{ color: "var(--text)" }}
            >
              Following
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-10 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-[13px] font-medium tracking-[0.05em] transition-colors duration-200 hover:text-black"
                  style={{ color: "var(--muted)" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <WorldToggle />

              {/* Mobile hamburger */}
              <button
                className="flex flex-col gap-[5px] md:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <motion.span
                  className="block h-[1.5px] w-5"
                  style={{ backgroundColor: "var(--text)" }}
                  animate={mobileOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
                />
                <motion.span
                  className="block h-[1.5px] w-5"
                  style={{ backgroundColor: "var(--text)" }}
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.span
                  className="block h-[1.5px] w-5"
                  style={{ backgroundColor: "var(--text)" }}
                  animate={mobileOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
                />
              </button>
            </div>
          </div>
        </Container>

        {/* Gradient accent bar under nav */}
        <div
          className="gradient-bar w-full transition-opacity duration-500"
          style={{ opacity: scrolled ? 0 : 1 }}
        />
      </motion.header>

      {/* Mobile menu — full screen, editorial */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center bg-white px-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: i * 0.06 + 0.1, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-[clamp(36px,8vw,56px)] font-bold tracking-tight"
                    style={{ color: "var(--text)" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
