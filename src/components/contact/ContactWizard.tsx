"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";

interface FormData {
  services: string[];
  budget: string;
  stage: string;
  name: string;
  email: string;
  phone: string;
  brand: string;
  website: string;
}

const serviceOptions = [
  "Influencer Marketing",
  "Productions",
  "UGC",
  "SMM",
  "Full Package",
];

const budgetOptions = [
  "AED 35k – 100k",
  "AED 100k – 200k",
  "AED 200k+",
];

const stageOptions = [
  "Just exploring",
  "Planning a campaign",
  "Ready to start",
  "Need it yesterday",
];

function ChipGroup({
  label,
  options,
  selected,
  onToggle,
}: {
  label: string;
  options: string[];
  selected: string | string[];
  onToggle: (value: string) => void;
}) {
  const isActive = (opt: string) =>
    Array.isArray(selected) ? selected.includes(opt) : selected === opt;

  return (
    <div>
      <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = isActive(opt);
          return (
            <button
              key={opt}
              onClick={() => onToggle(opt)}
              className="rounded-full border px-4 py-2 text-[13px] font-medium transition-all duration-200"
              style={{
                borderColor: active ? "var(--text)" : "var(--border)",
                backgroundColor: active ? "var(--text)" : "transparent",
                color: active ? "var(--bg)" : "var(--muted)",
              }}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function ContactWizard() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);
  const [data, setData] = useState<FormData>({
    services: [],
    budget: "",
    stage: "",
    name: "",
    email: "",
    phone: "",
    brand: "",
    website: "",
  });

  const toggleService = useCallback((service: string) => {
    setData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  }, []);

  const update = useCallback(
    (field: keyof FormData, value: string) =>
      setData((prev) => ({ ...prev, [field]: value })),
    [],
  );

  const canSubmit =
    data.services.length > 0 && data.name !== "" && data.email !== "";

  const handleSubmit = async () => {
    if (!canSubmit || sending) return;
    setSending(true);
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError(true);
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        className="py-16 text-center"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "backOut" }}
      >
        <div
          className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full"
          style={{ backgroundColor: "var(--bg-alt)" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text)" strokeWidth="2" strokeLinecap="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h2 className="text-lg font-bold" style={{ color: "var(--text)" }}>
          We&apos;ll be in touch
        </h2>
        <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
          Expect a response within 24 hours
        </p>
      </motion.div>
    );
  }

  const labelClass = "mb-2 block text-[11px] font-semibold uppercase tracking-wider";
  const inputClass = "w-full border-b bg-transparent pb-2 text-sm font-medium outline-none transition-colors duration-200 focus:border-[var(--text)]";

  return (
    <div className="space-y-8">
      <ChipGroup label="What do you need? *" options={serviceOptions} selected={data.services} onToggle={toggleService} />
      <ChipGroup label="Budget range" options={budgetOptions} selected={data.budget} onToggle={(v) => update("budget", v)} />
      <ChipGroup label="Where are you at?" options={stageOptions} selected={data.stage} onToggle={(v) => update("stage", v)} />

      {/* Brand + Website — side by side */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} style={{ color: "var(--muted)" }}>Brand</label>
          <input
            type="text"
            value={data.brand}
            onChange={(e) => update("brand", e.target.value)}
            placeholder="Your brand"
            className={inputClass}
            style={{ borderColor: "var(--border)", color: "var(--text)" }}
          />
        </div>
        <div>
          <label className={labelClass} style={{ color: "var(--muted)" }}>Website</label>
          <input
            type="url"
            value={data.website}
            onChange={(e) => update("website", e.target.value)}
            placeholder="https://"
            className={inputClass}
            style={{ borderColor: "var(--border)", color: "var(--text)" }}
          />
        </div>
      </div>

      {/* Name + Email — side by side */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} style={{ color: "var(--muted)" }}>Your name *</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Full name"
            className={inputClass}
            style={{ borderColor: "var(--border)", color: "var(--text)" }}
          />
        </div>
        <div>
          <label className={labelClass} style={{ color: "var(--muted)" }}>Email *</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@brand.com"
            className={inputClass}
            style={{ borderColor: "var(--border)", color: "var(--text)" }}
          />
        </div>
      </div>

      {/* Phone — with UAE flag */}
      <div>
        <label className={labelClass} style={{ color: "var(--muted)" }}>Phone</label>
        <div className="flex items-center gap-2">
          <div className="flex shrink-0 items-center gap-1.5 border-b pb-2" style={{ borderColor: "var(--border)" }}>
            <img src="https://flagcdn.com/w20/ae.png" alt="UAE" className="h-3 w-auto" />
            <span className="text-sm font-medium" style={{ color: "var(--muted)" }}>+971</span>
          </div>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="50 123 4567"
            className={`flex-1 ${inputClass}`}
            style={{ borderColor: "var(--border)", color: "var(--text)" }}
          />
        </div>
      </div>

      {/* Error message */}
      {error && (
        <p className="text-sm font-medium" style={{ color: "#e53e3e" }}>
          Something went wrong. Please try again.
        </p>
      )}

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={!canSubmit || sending}
        className={`inline-flex h-12 w-full items-center justify-center rounded-full text-sm font-semibold transition-all duration-200 sm:w-auto sm:px-10 ${!canSubmit || sending ? "cursor-not-allowed opacity-30" : "hover:-translate-y-0.5"}`}
        style={{
          backgroundColor: "var(--accent)",
          color: "var(--accent-text)",
        }}
      >
        {sending ? "Sending..." : "Send Brief"}
      </button>
    </div>
  );
}
