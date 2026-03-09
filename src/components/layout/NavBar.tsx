"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { WorldToggle } from "@/components/world/WorldToggle";
import { navLinks } from "@/content/site";

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>(null);
  const pathname = usePathname();

  /* Inner pages have dark heroes, homepage is light */
  const hasDarkHero = pathname !== "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  /* Nav colors based on hero type + scroll state */
  const isTransparentDark = hasDarkHero && !scrolled;
  const textColor = isTransparentDark ? "rgba(255,255,255,0.85)" : "var(--text)";
  const mutedColor = isTransparentDark ? "rgba(255,255,255,0.5)" : "var(--muted)";
  const hamburgerColor = isTransparentDark ? "#ffffff" : "var(--text)";

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
              className="text-[14px] font-bold uppercase tracking-[0.2em] transition-colors duration-500"
              style={{ color: textColor }}
            >
              Following
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={
                    link.children ? () => handleMouseEnter(link.label) : undefined
                  }
                  onMouseLeave={link.children ? handleMouseLeave : undefined}
                >
                  <Link
                    href={link.href}
                    className="relative text-[13px] font-medium tracking-[0.05em] transition-colors duration-300"
                    style={{ color: mutedColor }}
                  >
                    {link.label}
                    {link.children && (
                      <svg
                        className="ml-1 inline-block"
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                      >
                        <path
                          d="M2 3l2 2 2-2"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full z-50 min-w-[240px] pt-4"
                        onMouseEnter={() => handleMouseEnter(link.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div
                          className="rounded-lg border p-2 shadow-xl"
                          style={{
                            backgroundColor: "rgba(255,255,255,0.98)",
                            borderColor: "rgba(0,0,0,0.06)",
                            backdropFilter: "blur(20px)",
                          }}
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block rounded-md px-4 py-3 transition-colors duration-150 hover:bg-gray-50"
                            >
                              <span className="text-sm font-semibold text-gray-900">
                                {child.label}
                              </span>
                              {child.description && (
                                <span className="mt-0.5 block text-xs text-gray-500">
                                  {child.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <WorldToggle />

              {/* Mobile hamburger */}
              <button
                className="flex flex-col gap-[5px] lg:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <motion.span
                  className="block h-[1.5px] w-5 transition-colors duration-500"
                  style={{ backgroundColor: hamburgerColor }}
                  animate={mobileOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
                />
                <motion.span
                  className="block h-[1.5px] w-5 transition-colors duration-500"
                  style={{ backgroundColor: hamburgerColor }}
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.span
                  className="block h-[1.5px] w-5 transition-colors duration-500"
                  style={{ backgroundColor: hamburgerColor }}
                  animate={mobileOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
                />
              </button>
            </div>
          </div>
        </Container>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center overflow-y-auto bg-white px-8 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-1 py-20">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: i * 0.06 + 0.1, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-[clamp(32px,7vw,48px)] font-bold tracking-tight"
                    style={{ color: "var(--text)" }}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-2 flex flex-wrap gap-3 pb-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-sm font-medium"
                          style={{ color: "var(--muted)" }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
