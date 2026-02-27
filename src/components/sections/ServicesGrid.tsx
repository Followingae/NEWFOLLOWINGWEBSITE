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
            {/* Number */}
            <span
              className="text-4xl font-bold md:text-5xl"
              style={{ color: "var(--accent)", opacity: 0.4 }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Title */}
            <h3
              className="text-xl font-semibold md:text-2xl"
              style={{ color: "var(--text)" }}
            >
              {card.title}
            </h3>

            {/* Description */}
            <p className="body-text">{card.description}</p>

            {/* Arrow */}
            <div className="hidden md:block">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                style={{ color: "var(--text)" }}
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
              <p className="kicker mb-4">SERVICES</p>
              <h2 className="headline-2">
                Everything you need.
                <br />
                Nothing you don&apos;t.
              </h2>
            </div>
            <p className="body-large md:text-right">
              Four integrated services designed to work together — or standalone.
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
