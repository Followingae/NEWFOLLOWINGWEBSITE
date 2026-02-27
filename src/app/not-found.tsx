"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <Container className="text-center">
        <motion.h1
          className="headline-display"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          404
        </motion.h1>

        <motion.p
          className="body-large mx-auto mt-6 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          This page doesn&apos;t exist.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <MagneticButton>
            <Button href="/" variant="primary" size="lg">
              Go home
            </Button>
          </MagneticButton>
        </motion.div>
      </Container>
    </section>
  );
}
