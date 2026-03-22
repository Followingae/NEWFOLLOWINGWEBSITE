"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section
      className="flex min-h-screen items-center justify-center"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <Container className="text-center">
        <h1
          className="text-6xl font-bold"
          style={{ color: "var(--text)", opacity: 0.06 }}
        >
          Error
        </h1>
        <p
          className="mt-4 text-lg"
          style={{ color: "var(--muted)" }}
        >
          Something went wrong
        </p>
        <div className="mt-8">
          <Button onClick={reset} variant="primary" size="lg">
            Try again
          </Button>
        </div>
      </Container>
    </section>
  );
}
