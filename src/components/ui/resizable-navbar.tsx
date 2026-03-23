"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: { name: string; link: string; children?: { name: string; link: string }[] }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [isDark, setIsDark] = useState(true);

  /* Single scroll handler — no Framer Motion scroll, no double listeners */
  useEffect(() => {
    let darkSections: NodeListOf<Element> | null = null;
    let prevVisible = false;
    let prevDark = true;

    const onScroll = () => {
      const scrolled = window.scrollY > 100;
      if (scrolled !== prevVisible) {
        prevVisible = scrolled;
        setVisible(scrolled);
      }

      if (scrolled) {
        if (prevDark !== false) { prevDark = false; setIsDark(false); }
        return;
      }

      if (!darkSections) darkSections = document.querySelectorAll('[data-nav-theme="dark"]');
      let overDark = false;
      for (const section of darkSections) {
        const rect = section.getBoundingClientRect();
        if (rect.top < 60 && rect.bottom > 60) { overDark = true; break; }
      }
      if (overDark !== prevDark) { prevDark = overDark; setIsDark(overDark); }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      ref={ref}
      data-nav-dark={isDark ? "true" : "false"}
      data-nav-scrolled={visible ? "true" : "false"}
      className={cn("fixed inset-x-0 top-0 z-50 w-full pt-5", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div data-nav-scrolled={visible ? "true" : "false"}
      animate={{
        backdropFilter: visible ? "blur(20px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34,42,53,0.06), 0 1px 1px rgba(0,0,0,0.05), 0 0 0 1px rgba(34,42,53,0.04), 0 0 4px rgba(34,42,53,0.08), 0 16px 68px rgba(47,48,55,0.05), 0 1px 0 rgba(255,255,255,0.1) inset"
          : "none",
        width: visible ? "min(780px, 92%)" : "100%",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-6 py-2 lg:flex",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const dropdownTimer = React.useRef<ReturnType<typeof setTimeout>>(null);

  const openDropdown = (name: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setDropdownOpen(name);
  };
  const closeDropdown = () => {
    dropdownTimer.current = setTimeout(() => setDropdownOpen(null), 120);
  };

  return (
    <motion.div
      onMouseLeave={() => { setHovered(null); closeDropdown(); }}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium lg:flex",
        className,
      )}
    >
      {items.map((item, idx) => (
        <div
          key={`link-${idx}`}
          className="relative"
          onMouseEnter={() => {
            setHovered(idx);
            if (item.children) openDropdown(item.name);
          }}
          onMouseLeave={() => {
            if (item.children) closeDropdown();
          }}
        >
          <a
            onClick={onItemClick}
            className="relative inline-flex items-center gap-1 px-4 py-2 text-sm text-neutral-500 transition-colors dark:text-neutral-400"
            href={item.link}
          >
            {hovered === idx && (
              <motion.div
                layoutId="hovered"
                className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
              />
            )}
            <span className="relative z-20">{item.name}</span>
            {item.children && (
              <svg className="relative z-20" width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M2 3l2 2 2-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </a>

          {/* Dropdown */}
          <AnimatePresence>
            {item.children && dropdownOpen === item.name && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.12 }}
                className="absolute left-1/2 top-full z-50 min-w-[200px] -translate-x-1/2 pt-3"
                onMouseEnter={() => openDropdown(item.name)}
                onMouseLeave={closeDropdown}
              >
                <div className="overflow-hidden rounded-xl border border-neutral-200/60 bg-white p-1.5 shadow-xl dark:border-neutral-800 dark:bg-neutral-950">
                  {item.children.map((child) => (
                    <a
                      key={child.link}
                      href={child.link}
                      className="block rounded-lg px-4 py-2.5 text-[13px] font-medium text-neutral-600 transition-colors duration-100 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:bg-neutral-800"
                    >
                      {child.name}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(20px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34,42,53,0.06), 0 1px 1px rgba(0,0,0,0.05), 0 0 0 1px rgba(34,42,53,0.04)"
          : "none",
        width: visible ? "92%" : "100%",
        borderRadius: visible ? "12px" : "9999px",
        y: visible ? 8 : 0,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-4 py-2 lg:hidden",
        visible && "mobile-nav-scrolled",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({ children, className }: MobileNavHeaderProps) => (
  <div className={cn("flex w-full flex-row items-center justify-between", className)}>
    {children}
  </div>
);

export const MobileNavMenu = ({ children, className, isOpen }: MobileNavMenuProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className={cn(
          "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-xl bg-white px-4 py-8 shadow-xl dark:bg-neutral-950",
          className,
        )}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export const MobileNavToggle = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) =>
  isOpen ? (
    <IconX className="nav-icon h-5 w-5" onClick={onClick} />
  ) : (
    <IconMenu2 className="nav-icon h-5 w-5" onClick={onClick} />
  );

export const NavbarButton = ({
  href,
  children,
  className,
  variant = "primary",
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark";
}) => {
  const variantStyles = {
    primary:
      "bg-white text-black shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]",
    secondary: "bg-transparent text-neutral-500 shadow-none dark:text-neutral-300",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04)]",
  };

  return (
    <a
      href={href}
      className={cn(
        "relative inline-block cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition duration-200 hover:-translate-y-0.5",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </a>
  );
};
