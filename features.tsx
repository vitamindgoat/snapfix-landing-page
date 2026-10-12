"use client";

import { motion } from "framer-motion";
import { Camera, Sparkles, Wrench, ArrowRight, type LucideIcon } from "lucide-react";

type Step = { n: string; icon: LucideIcon; title: string; body: string };

const steps: Step[] = [
  {
    n: "01",
    icon: Camera,
    title: "Snap a photo",
    body: "Point your camera at the leak, crack, or mess. No forms, no trying to describe it in words.",
  },
  {
    n: "02",
    icon: Sparkles,
    title: "AI identifies it",
    body: "SnapFix looks at the photo, works out what the problem is, and which kind of pro handles it.",
  },
  {
    n: "03",
    icon: Wrench,
    title: "Find a local pro",
    body: "Get pointed to the right trade near you, so you know exactly who to call to get it fixed.",
  },
];

export function Features() {
  return (
    <>
      <section id="features" className="container-page py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-foreground">
            From a photo to a plan, in three steps.
          </h2>
          <p className="mt-4 text-lg text-muted">
            SnapFix handles the confusing part: figuring out what is wrong and
            who can fix it.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-lg border border-border bg-surface p-7 shadow-subtle transition-shadow duration-300 hover:shadow-strong"
            >
              <span className="pointer-events-none absolute -right-2 -top-5 select-none text-[96px] font-bold leading-none text-[#F3E7D7]">
                {s.n}
              </span>
              <span className="relative grid h-14 w-14 place-items-center rounded-md bg-primary text-primary-fg shadow-medium">
                <s.icon className="h-7 w-7" strokeWidth={2.2} />
              </span>
              <h3 className="relative mt-6 text-xl font-bold tracking-tight text-foreground">
                {s.title}
              </h3>
              <p className="relative mt-2 leading-relaxed text-muted">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Highlight band */}
      <section className="container-page pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-lg bg-[#1A1A1A] px-8 py-14 shadow-strong md:px-16 md:py-20"
        >
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(62% 130% at 100% 0%, rgba(232,93,4,0.38), transparent 60%)",
            }}
          />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-[#FFF8F0]">
              Built around an AI that actually sees the problem.
            </h2>
            <p className="mt-4 text-lg text-white/70">
              SnapFix is powered by a vision model that reads your photo, so you
              can skip the guesswork and the back-and-forth.
            </p>
            <a
              href="#faq"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-fg shadow-medium hover:-translate-y-0.5"
            >
              Learn more
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
