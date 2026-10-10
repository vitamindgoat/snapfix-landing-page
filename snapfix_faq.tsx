"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What is SnapFix?",
    a: "SnapFix is an app that lets you take a photo of a problem around your home and uses AI to identify what is likely wrong, so you know what kind of help you need.",
  },
  {
    q: "How does it work?",
    a: "You snap a photo of the issue, like a leak, a broken fence, or an overgrown yard. An image model looks at the photo, identifies the type of problem, and points you toward the kind of pro who handles it.",
  },
  {
    q: "What kinds of problems can it handle?",
    a: "Everyday home issues such as plumbing leaks, broken fixtures, fences, and yard work. The goal is to cover the common things people are not sure how to describe or who to call for.",
  },
  {
    q: "Why build SnapFix?",
    a: "Fixing things around the house is confusing when you do not know what you are looking at or who to call. SnapFix is meant to make that first step simple: snap a photo and get a clear answer.",
  },
  {
    q: "Is SnapFix finished?",
    a: "SnapFix is a project in active development. Parts of it are still being built and improved.",
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
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Questions, answered.
        </h2>
        <p className="mt-3 text-muted text-base md:text-lg">
          A few things worth knowing about SnapFix.
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
