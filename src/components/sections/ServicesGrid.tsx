"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { useWorld } from "@/components/world/WorldProvider";
import { servicesInfluencer, servicesProduction } from "@/content/site";
import type { ServiceCard } from "@/content/site";

function ServiceCardComponent({
  card,
  index,
}: {
  card: ServiceCard;
  index: number;
}) {
  return (
    <BlurFade delay={index * 0.08} inView>
      <Link href={card.href} className="group block">
        <motion.div
          className="border-b py-10 md:py-14"
          style={{ borderColor: "var(--border)" }}
          whileHover={{ x: 8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[80px_1fr_2fr_auto] md:items-center md:gap-8">
            <span
              className="text-4xl font-bold md:text-5xl"
              style={{ color: "var(--accent)", opacity: 0.4 }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3
              className="text-xl font-semibold md:text-2xl"
              style={{ color: "var(--text)" }}
            >
              {card.title}
            </h3>

            <p className="body-text">{card.description}</p>

            <div className="hidden md:block">
              <div className="flex h-10 w-10 items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100" style={{ backgroundColor: "var(--accent)" }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ color: "var(--accent-text)" }}
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </BlurFade>
  );
}

export function ServicesGrid() {
  const { world } = useWorld();
  const services =
    world === "influencer" ? servicesInfluencer : servicesProduction;

  return (
    <section id="services" className="py-section-mobile md:py-section">
      <Container>
        <BlurFade inView>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
            <div>
              <p className="kicker mb-4">WHAT WE WEAPONIZE</p>
              <h2 className="headline-2">
                Four services.
                <br />
                Zero filler.
              </h2>
            </div>
            <p className="body-large md:text-right">
              Integrated services designed to work together — or standalone.
              Each one built to move product, not just post content.
            </p>
          </div>
        </BlurFade>

        <div className="mt-12 md:mt-20">
          <div className="border-t" style={{ borderColor: "var(--border)" }} />
          {services.map((card, i) => (
            <ServiceCardComponent
              key={`${world}-${card.title}`}
              card={card}
              index={i}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
