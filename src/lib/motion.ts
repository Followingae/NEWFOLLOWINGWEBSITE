import type { Variants } from "framer-motion";

/* shared easing */
export const ease = {
  out: [0.16, 1, 0.3, 1] as [number, number, number, number],
  inOut: [0.76, 0, 0.24, 1] as [number, number, number, number],
  spring: { type: "spring" as const, stiffness: 100, damping: 20 },
};

/* fade up — default section reveal */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: ease.out, delay: i * 0.1 },
  }),
};

/* fade in only */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, ease: ease.out, delay: i * 0.1 },
  }),
};

/* slide from left */
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: ease.out },
  },
};

/* slide from right */
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: ease.out },
  },
};

/* stagger container */
export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

/* headline mask reveal (line by line) */
export const maskReveal: Variants = {
  hidden: { y: "110%" },
  visible: (i: number = 0) => ({
    y: "0%",
    transition: { duration: 0.8, ease: ease.out, delay: i * 0.12 },
  }),
};

/* scale reveal for images */
export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: ease.out },
  },
};

/* tile float animation */
export const tileFloat: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: ease.out,
      delay: 0.3 + i * 0.12,
    },
  }),
};

/* world transition overlay */
export const overlayVariants: Variants = {
  hidden: { scaleY: 0 },
  cover: {
    scaleY: 1,
    transition: { duration: 0.3, ease: ease.inOut },
  },
  reveal: {
    scaleY: 0,
    transition: { duration: 0.3, ease: ease.inOut },
  },
};
