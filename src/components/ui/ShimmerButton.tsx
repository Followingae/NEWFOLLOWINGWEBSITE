"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps {
  children: ReactNode;
  className?: string;
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  href?: string;
  onClick?: () => void;
}

export function ShimmerButton({
  children,
  className,
  shimmerColor = "rgba(255, 255, 255, 0.15)",
  shimmerSize = "0.05em",
  borderRadius = "100px",
  shimmerDuration = "3s",
  background = "var(--accent)",
  href,
  onClick,
}: ShimmerButtonProps) {
  const buttonContent = (
    <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap px-7 py-3 text-sm font-semibold text-accent-text">
      {children}
    </span>
  );

  const sharedClasses = cn(
    "group relative inline-flex cursor-pointer items-center justify-center overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_8px_rgba(var(--accent-rgb,211,255,2),0.15)] active:scale-[0.98]",
    className,
  );

  const sharedStyle = {
    borderRadius,
    "--shimmer-color": shimmerColor,
    "--shimmer-size": shimmerSize,
    "--shimmer-duration": shimmerDuration,
    background,
  } as React.CSSProperties;

  if (href) {
    return (
      <Link href={href} className={sharedClasses} style={sharedStyle}>
        <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
          <div className="absolute inset-[-100%] animate-shimmer-slide bg-[linear-gradient(90deg,transparent_25%,var(--shimmer-color)_50%,transparent_75%)] bg-[length:var(--shimmer-size)_100%]" />
        </div>
        <div
          className="absolute inset-px rounded-[inherit]"
          style={{ background }}
        />
        {buttonContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={sharedClasses} style={sharedStyle}>
      <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
        <div className="absolute inset-[-100%] animate-shimmer-slide bg-[linear-gradient(90deg,transparent_25%,var(--shimmer-color)_50%,transparent_75%)] bg-[length:var(--shimmer-size)_100%]" />
      </div>
      <div
        className="absolute inset-px rounded-[inherit]"
        style={{ background }}
      />
      {buttonContent}
    </button>
  );
}
