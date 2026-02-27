import { type ClassValue, clsx } from "clsx";

/* lightweight class merger (no tailwind-merge dep for speed) */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/* slugify */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
