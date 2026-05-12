"use client";

import { motion } from "framer-motion";
import { Camera, Sparkles, CalendarCheck, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
  accent: "primary" | "secondary" | "success";
};

const features: Feature[] = [
  {
    icon: Camera,
    title: "Snap it",
    body: "Point, shoot, done. One photo of the leak, crack, or mess — no forms, no jargon, no diagnosing on your own.",
    accent: "primary",
  },
  {
    icon: Sparkles,
    title: "AI identifies it",
    body: "Our model spots the problem, classifies severity, and pulls the right specialist trade in seconds.",
    accent: "secondary",
  },
  {
    icon: CalendarCheck,
    title: "Book a local pro",
    body: "Compare vetted pros nearby — ratings, fixed quotes, next-day slots. Tap once to book.",
    accent: "success",
  },
];

const accentMap: Record<Feature["accent"], string> = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  success: "bg-success/10 text-success",
};

export function Features() {
  return (
    <section id="features" className="container-page py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          How it works
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          From photo to fixed in three taps.
        </h2>
        <p className="mt-3 text-muted text-base md:text-lg">
          Skip the back-and-forth. SnapFix handles diagnosis, matching, and
          booking — you just confirm.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.08,
              ease: "easeOut",
            }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="group rounded-lg border border-border bg-surface p-6 shadow-subtle transition-shadow hover:shadow-medium"
          >
            <div
              className={cn(
                "grid h-12 w-12 place-items-center rounded-md",
                accentMap[f.accent],
              )}
            >
              <f.icon className="h-6 w-6" strokeWidth={2.2} />
            </div>
            <div className="mt-5 flex items-center gap-3">
              <span className="text-xs font-semibold text-muted">
                0{i + 1}
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">
              {f.title}
            </h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">{f.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
