"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useWorld } from "@/components/world/WorldProvider";

/* ─── Types ─── */
interface FormData {
  objective: string;
  services: string[];
  platform: string;
  budget: string;
  timeline: string;
  brandName: string;
  brandWebsite: string;
  name: string;
  email: string;
  message: string;
}

const initialData: FormData = {
  objective: "",
  services: [],
  platform: "",
  budget: "",
  timeline: "",
  brandName: "",
  brandWebsite: "",
  name: "",
  email: "",
  message: "",
};

const objectives = [
  "Launch a campaign",
  "Create content",
  "Ongoing management",
  "Event coverage",
  "Brand refresh",
];

const serviceOptions = [
  "Influencer Marketing",
  "Productions",
  "UGC",
  "SMM",
];

const platforms = [
  "Instagram",
  "TikTok",
  "YouTube",
  "Multi-platform",
];

const budgets = [
  "Under $10k",
  "$10k – $25k",
  "$25k – $50k",
  "$50k – $100k",
  "$100k+",
];

const timelines = [
  "ASAP (< 2 weeks)",
  "1 month",
  "2–3 months",
  "Ongoing",
  "Flexible",
];

const TOTAL_STEPS = 9;

/* ─── Component ─── */
export function ContactWizard() {
  const { world } = useWorld();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>({
    ...initialData,
    services:
      world === "influencer"
        ? ["Influencer Marketing"]
        : ["Productions"],
  });
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  }, []);

  const update = useCallback(
    <K extends keyof FormData>(key: K, value: FormData[K]) => {
      setData((d) => ({ ...d, [key]: value }));
    },
    [],
  );

  const toggleService = useCallback((svc: string) => {
    setData((d) => ({
      ...d,
      services: d.services.includes(svc)
        ? d.services.filter((s) => s !== svc)
        : [...d.services, svc],
    }));
  }, []);

  const handleSubmit = useCallback(async () => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  }, [data]);

  /* Progress */
  const progress = ((step + 1) / TOTAL_STEPS) * 100;

  /* Option selector button — clean OMC style */
  const OptionBtn = ({
    label,
    selected,
    onClick,
  }: {
    label: string;
    selected: boolean;
    onClick: () => void;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className="px-5 py-4 text-left text-sm font-medium transition-all duration-200"
      style={{
        backgroundColor: selected ? "var(--bg-alt)" : "transparent",
        border: `1px solid ${selected ? "var(--text)" : "var(--border)"}`,
        color: selected ? "var(--text)" : "var(--muted)",
      }}
    >
      {label}
    </button>
  );

  /* Input field — clean style */
  const Input = ({
    label,
    value,
    onChange,
    type = "text",
    placeholder,
  }: {
    label: string;
    value: string;
    onChange: (v: string) => void;
    type?: string;
    placeholder?: string;
  }) => (
    <div>
      <label
        className="micro-label mb-2 block"
        style={{ color: "var(--muted)" }}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border-b bg-transparent px-0 py-3 text-sm outline-none transition-all duration-200"
        style={{
          borderColor: "var(--border)",
          color: "var(--text)",
        }}
      />
    </div>
  );

  /* Slide variant */
  const slideVariant = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  };

  if (submitted) {
    return (
      <section className="flex min-h-[60vh] items-center py-section-mobile md:py-section">
        <Container className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center"
              style={{ backgroundColor: "var(--accent)" }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                style={{ color: "var(--accent-text)" }}
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="headline-2">We&apos;ll be in touch.</h2>
            <p className="body-text mx-auto mt-4 max-w-md">
              Thanks for reaching out. We&apos;ll review your brief and get
              back to you within 24 hours.
            </p>
          </motion.div>
        </Container>
      </section>
    );
  }

  return (
    <section className="min-h-[80vh] py-section-mobile md:py-section">
      <Container className="max-w-2xl">
        {/* Clean wizard wrapper */}
        <div
          className="border p-8 md:p-12"
          style={{
            borderColor: "var(--border)",
            backgroundColor: "var(--bg)",
          }}
        >
          {/* Progress bar */}
          <div className="mb-10">
            <div className="flex items-center justify-between text-xs">
              <span className="micro-label" style={{ color: "var(--muted)" }}>
                Step {step + 1} of {TOTAL_STEPS}
              </span>
              <span className="micro-label" style={{ color: "var(--muted)" }}>
                {Math.round(progress)}%
              </span>
            </div>
            <div
              className="mt-2 h-px overflow-hidden"
              style={{ backgroundColor: "var(--border)" }}
            >
              <motion.div
                className="h-full"
                style={{ backgroundColor: "var(--accent)" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>

          {/* Steps */}
          <div className="relative min-h-[320px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                variants={slideVariant}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                {/* Step 0: Objective */}
                {step === 0 && (
                  <div>
                    <h2 className="headline-3 mb-6">
                      What&apos;s your objective?
                    </h2>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {objectives.map((obj) => (
                        <OptionBtn
                          key={obj}
                          label={obj}
                          selected={data.objective === obj}
                          onClick={() => update("objective", obj)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 1: Services */}
                {step === 1 && (
                  <div>
                    <h2 className="headline-3 mb-6">
                      Which services do you need?
                    </h2>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {serviceOptions.map((svc) => (
                        <OptionBtn
                          key={svc}
                          label={svc}
                          selected={data.services.includes(svc)}
                          onClick={() => toggleService(svc)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Platform */}
                {step === 2 && (
                  <div>
                    <h2 className="headline-3 mb-6">Primary platform?</h2>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {platforms.map((p) => (
                        <OptionBtn
                          key={p}
                          label={p}
                          selected={data.platform === p}
                          onClick={() => update("platform", p)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Budget */}
                {step === 3 && (
                  <div>
                    <h2 className="headline-3 mb-6">Budget range?</h2>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {budgets.map((b) => (
                        <OptionBtn
                          key={b}
                          label={b}
                          selected={data.budget === b}
                          onClick={() => update("budget", b)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 4: Timeline */}
                {step === 4 && (
                  <div>
                    <h2 className="headline-3 mb-6">Timeline?</h2>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {timelines.map((t) => (
                        <OptionBtn
                          key={t}
                          label={t}
                          selected={data.timeline === t}
                          onClick={() => update("timeline", t)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 5: Brand basics */}
                {step === 5 && (
                  <div>
                    <h2 className="headline-3 mb-6">Tell us about your brand.</h2>
                    <div className="flex flex-col gap-6">
                      <Input
                        label="Brand name"
                        value={data.brandName}
                        onChange={(v) => update("brandName", v)}
                        placeholder="Your brand"
                      />
                      <Input
                        label="Website"
                        value={data.brandWebsite}
                        onChange={(v) => update("brandWebsite", v)}
                        placeholder="https://"
                      />
                    </div>
                  </div>
                )}

                {/* Step 6: Contact */}
                {step === 6 && (
                  <div>
                    <h2 className="headline-3 mb-6">Your contact details.</h2>
                    <div className="flex flex-col gap-6">
                      <Input
                        label="Full name"
                        value={data.name}
                        onChange={(v) => update("name", v)}
                        placeholder="Jane Doe"
                      />
                      <Input
                        label="Email"
                        value={data.email}
                        onChange={(v) => update("email", v)}
                        type="email"
                        placeholder="jane@brand.com"
                      />
                      <div>
                        <label
                          className="micro-label mb-2 block"
                          style={{ color: "var(--muted)" }}
                        >
                          Additional notes (optional)
                        </label>
                        <textarea
                          value={data.message}
                          onChange={(e) => update("message", e.target.value)}
                          rows={3}
                          className="w-full border-b bg-transparent px-0 py-3 text-sm outline-none transition-all duration-200"
                          style={{
                            borderColor: "var(--border)",
                            color: "var(--text)",
                          }}
                          placeholder="Anything else we should know?"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 7: Review */}
                {step === 7 && (
                  <div>
                    <h2 className="headline-3 mb-6">Review your brief.</h2>
                    <div className="flex flex-col">
                      {[
                        { label: "Objective", value: data.objective },
                        {
                          label: "Services",
                          value: data.services.join(", "),
                        },
                        { label: "Platform", value: data.platform },
                        { label: "Budget", value: data.budget },
                        { label: "Timeline", value: data.timeline },
                        { label: "Brand", value: data.brandName },
                        { label: "Contact", value: `${data.name} (${data.email})` },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center justify-between border-b py-4"
                          style={{ borderColor: "var(--border)" }}
                        >
                          <span
                            className="micro-label"
                            style={{ color: "var(--muted)" }}
                          >
                            {item.label}
                          </span>
                          <span
                            className="text-sm font-medium"
                            style={{ color: "var(--text)" }}
                          >
                            {item.value || "—"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 8: Submit */}
                {step === 8 && (
                  <div className="text-center">
                    <h2 className="headline-3 mb-4">
                      Ready to send?
                    </h2>
                    <p className="body-text mx-auto mb-10 max-w-sm">
                      We&apos;ll review your brief and get back to you within
                      24 hours.
                    </p>
                    <Button onClick={handleSubmit} variant="primary" size="lg">
                      Submit Brief
                    </Button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          {step < 8 && (
            <div className="mt-10 flex items-center justify-between">
              <button
                onClick={prev}
                className="text-sm font-medium transition-opacity duration-200"
                style={{
                  color: "var(--muted)",
                  opacity: step === 0 ? 0.3 : 1,
                }}
                disabled={step === 0}
              >
                Back
              </button>
              <Button onClick={next} variant="primary" size="default">
                Continue
              </Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
