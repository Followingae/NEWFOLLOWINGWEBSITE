"use client";

import { useLenis } from "@/hooks/use-lenis";
import type { ReactNode } from "react";

export function LenisWrapper({ children }: { children: ReactNode }) {
  useLenis();
  return <>{children}</>;
}
