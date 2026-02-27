"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ContactWizard } from "@/components/contact/ContactWizard";

export default function ContactPage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const words = ["Let's", "build", "something."];

  return (
    <>
      <section ref={ref} className="pt-28 pb-10 md:pt-40 md:pb-16">
        <Container>
          <motion.p
            className="kicker mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            GET IN TOUCH
          </motion.p>

          <h1 className="headline-display max-w-[800px]">
            {words.map((word, i) => (
              <span key={i} className="mr-[0.22em] inline-block overflow-hidden py-[0.1em]">
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={isInView ? { y: "0%", opacity: 1 } : {}}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.1 + i * 0.05,
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="body-large mt-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Tell us about your project. We&apos;ll put together a plan.
          </motion.p>
        </Container>

        <div className="mt-16 md:mt-24">
          <div className="gradient-bar" />
        </div>
      </section>

      <ContactWizard />
    </>
  );
}
