"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const stats = [
  { value: "120k+", label: "Problems solved" },
  { value: "4.9", label: "Avg. rating" },
  { value: "8 min", label: "Avg. match time" },
  { value: "97%", label: "Booked same week" },
];

const testimonials = [
  {
    name: "Maya R.",
    role: "Homeowner · Austin, TX",
    quote:
      "Snapped a photo of a weeping pipe under the sink at 9pm. Had a licensed plumber here by 11am next morning. No phone tag.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&h=160&fit=crop&crop=faces",
  },
  {
    name: "Devon L.",
    role: "Renter · Brooklyn, NY",
    quote:
      "Thought my fence was a goner. The AI flagged it as a quick repair, not a replace. Saved me about $1,400.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=160&h=160&fit=crop&crop=faces",
  },
  {
    name: "Priya S.",
    role: "Homeowner · Seattle, WA",
    quote:
      "Three quotes, transparent pricing, fixed slot. This is what hiring a tradesperson should have felt like the whole time.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=faces",
  },
];

export function SocialProof() {
  return (
    <section
      id="proof"
      className="border-y border-border bg-surface py-16 md:py-24"
    >
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
            Trusted by neighbors
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            People stop dreading the &ldquo;home stuff&rdquo;.
          </h2>
          <p className="mt-3 text-muted text-base md:text-lg">
            Real fixes, real people. Here&apos;s what SnapFix gets done while
            you make coffee.
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px rounded-lg border border-border bg-border overflow-hidden"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-surface px-6 py-6 text-center"
            >
              <div className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                {s.value}
              </div>
              <div className="mt-1 text-xs md:text-sm text-muted">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: "easeOut",
              }}
              whileHover={{ y: -4 }}
              className="relative rounded-lg border border-border bg-background p-6 shadow-subtle"
            >
              <Quote
                className="absolute right-5 top-5 h-6 w-6 text-primary/30"
                strokeWidth={2.4}
              />
              <div className="flex gap-1 text-primary">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star
                    key={k}
                    className="h-4 w-4 fill-current"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <blockquote className="mt-4 text-foreground leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover border border-border"
                />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
