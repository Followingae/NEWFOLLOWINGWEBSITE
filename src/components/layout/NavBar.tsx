"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "Work", link: "/work" },
  {
    name: "Services",
    link: "/#services",
    children: [
      { name: "Influencer Marketing", link: "/influencer-marketing" },
      { name: "Productions", link: "/productions" },
      { name: "UGC", link: "/ugc" },
      { name: "SMM", link: "/smm" },
    ],
  },
  { name: "Process", link: "/process" },
  { name: "Platform", link: "/pricing" },
];

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop */}
      <NavBody>
        <Link href="/" className="relative z-20">
          <img
            src="/logo.svg"
            alt="Following"
            className="h-10 w-auto transition-all duration-500 nav-logo"
          />
        </Link>

        <NavItems items={navItems} />

        <div className="relative z-20">
          <a
            href="/contact"
            className="inline-flex h-9 items-center rounded-full px-5 text-[13px] font-semibold transition duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--accent-text)",
            }}
          >
            Launch a Campaign
          </a>
        </div>
      </NavBody>

      {/* Mobile */}
      <MobileNav>
        <MobileNavHeader>
          <Link href="/">
            <img
              src="/logo.svg"
              alt="Following"
              className="h-8 w-auto dark:invert"
            />
          </Link>
          <MobileNavToggle
            isOpen={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
        >
          {navItems.map((item) => (
            <div key={item.name}>
              <a
                href={item.link}
                onClick={() => setMobileOpen(false)}
                className="w-full text-lg font-semibold text-neutral-700 dark:text-neutral-300"
              >
                {item.name}
              </a>
              {item.children && (
                <div className="mt-1 ml-1 flex flex-wrap gap-2">
                  {item.children.map((child) => (
                    <a
                      key={child.link}
                      href={child.link}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm text-neutral-500"
                    >
                      {child.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="w-full pt-4">
            <a
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-11 w-full items-center justify-center rounded-full text-sm font-semibold"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--accent-text)",
              }}
            >
              Launch a Campaign
            </a>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
