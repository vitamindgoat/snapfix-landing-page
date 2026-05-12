"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type Tier = {
  name: string;
  price: string;
  period: string;
  blurb: string;
  features: string[];
  cta: string;
  highlight?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    blurb: "Snap, identify, and get matched. No card needed.",
    features: [
      "Unlimited photo diagnoses",
      "AI severity + trade match",
      "Up to 3 quotes per job",
      "Standard 24h pro matching",
    ],
    cta: "Start free",
  },
  {
    name: "Pro",
    price: "$9",
    period: "per month",
    blurb: "Faster matches, priority pros, and protection on every booking.",
    features: [
      "Everything in Free",
      "Priority matching in under 10 min",
      "Background-checked top-rated pros only",
      "$2,000 booking protection",
      "Reschedule fee waivers",
    ],
    cta: "Start Pro trial",
    highlight: true,
  },
  {
    name: "Business",
    price: "$39",
    period: "per month",
    blurb: "For landlords and property managers running multiple units.",
    features: [
      "Everything in Pro",
      "Unlimited properties & tenants",
      "Tenant-submitted photo intake",
      "Centralized billing & invoices",
      "Dedicated account manager",
    ],
    cta: "Talk to sales",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="container-page py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-success/10 px-3 py-1 text-xs font-medium text-success">
          Simple pricing
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
          Free to snap. Pay only when it makes things easier.
        </h2>
        <p className="mt-3 text-muted text-base md:text-lg">
          No service fees. No commissions on quotes. Cancel anytime.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 md:grid-cols-3 md:items-stretch">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            whileHover={{ y: -4, scale: 1.02 }}
            className={cn(
              "relative flex flex-col rounded-lg border p-6 md:p-8 shadow-subtle transition-shadow hover:shadow-medium",
              t.highlight
                ? "border-primary bg-surface shadow-medium md:scale-[1.03] md:-my-2"
                : "border-border bg-surface",
            )}
          >
            {t.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-2xs font-semibold text-primary-fg shadow-medium">
                <Sparkles className="h-3 w-3" /> Most popular
              </span>
            )}

            <h3 className="text-xl font-bold tracking-tight">{t.name}</h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              {t.blurb}
            </p>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-bold tracking-tight">
                {t.price}
              </span>
              <span className="text-sm text-muted">/{t.period}</span>
            </div>

            <ul className="mt-6 space-y-3 text-sm">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span
                    className={cn(
                      "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                      t.highlight
                        ? "bg-primary text-primary-fg"
                        : "bg-success/15 text-success",
                    )}
                  >
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-foreground">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#download"
              className={cn(
                "mt-8 inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-transform duration-150 hover:scale-[1.02]",
                t.highlight
                  ? "bg-primary text-primary-fg shadow-medium"
                  : "border border-border bg-background text-foreground hover:bg-surface",
              )}
            >
              {t.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
