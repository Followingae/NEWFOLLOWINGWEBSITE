"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
  href?: string;
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center font-semibold text-sm tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current";

const variantStyles = {
  primary:
    "bg-accent text-accent-text hover:opacity-90 active:scale-[0.98]",
  secondary:
    "border hover:bg-text hover:text-bg active:scale-[0.98]",
  ghost: "hover:opacity-80",
};

const sizes = {
  sm: "h-9 px-5 text-xs",
  default: "h-11 px-7 text-sm",
  lg: "h-13 px-10 text-sm",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "default", href, children, className, style: customStyle, ...props },
    ref,
  ) => {
    const classes = cn(base, variantStyles[variant], sizes[size], className);

    /* Secondary & ghost use currentColor so they adapt to light/dark contexts automatically */
    const resolvedStyle: React.CSSProperties = {
      ...customStyle,
      ...(variant === "secondary"
        ? {
            color: "var(--text)",
            borderColor: "color-mix(in srgb, var(--text) 25%, transparent)",
          }
        : {}),
      ...(variant === "ghost"
        ? { color: "var(--muted)" }
        : {}),
    };

    if (href) {
      return (
        <Link href={href} className={classes} style={resolvedStyle}>
          <motion.span
            className="inline-flex items-center gap-2"
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.span>
        </Link>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={classes}
        style={resolvedStyle}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {children}
      </motion.button>
    );
  },
);

Button.displayName = "Button";
