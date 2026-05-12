"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "How accurate is the AI diagnosis?",
    a: "Our model is trained on millions of labeled home-repair photos and reaches 94% accuracy on top-trade classification. When confidence is low, SnapFix asks a clarifying question or routes you to a generalist who can scope on arrival.",
  },
  {
    q: "Are the pros background-checked?",
    a: "Every pro is license-verified, insurance-confirmed, and identity-checked. Pro plan users only see top-rated, background-checked pros — the rest are filtered out automatically.",
  },
  {
    q: "What if the quote changes after the pro arrives?",
    a: "Quotes are fixed for the scope in your photo. If the pro spots something extra, you get a written change-order before any work continues. You can decline and only pay the diagnostic fee.",
  },
  {
    q: "Which trades do you cover?",
    a: "Plumbing, electrical, HVAC, carpentry, fencing, landscaping, appliance repair, pest control, and general handywork. Expanding to roofing and solar in 2026.",
  },
  {
    q: "Do you work outside the US?",
    a: "SnapFix is live in the US and Canada. UK, Ireland, and Australia roll out next. Join the waitlist in-app to be notified when your area opens.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Free is free forever. Pro and Business are month-to-month with no commitment — cancel from Settings and you keep access through the billing period.",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="container-page py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          FAQ
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
          Questions, answered.
        </h2>
        <p className="mt-3 text-muted text-base md:text-lg">
          Everything you need to know before snapping your first photo.
        </p>
      </motion.div>

      <div className="mx-auto mt-12 max-w-3xl divide-y divide-border rounded-lg border border-border bg-surface shadow-subtle">
        {faqs.map((f, i) => {
          const open = openIdx === i;
          return (
            <div key={f.q}>
              <button
                type="button"
                onClick={() => setOpenIdx(open ? null : i)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-background"
              >
                <span className="text-base md:text-lg font-semibold text-foreground">
                  {f.q}
                </span>
                <motion.span
                  animate={{ rotate: open ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border bg-background text-foreground",
                    open && "border-primary text-primary",
                  )}
                >
                  <Plus className="h-4 w-4" strokeWidth={2.4} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-sm md:text-base text-muted leading-relaxed">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
