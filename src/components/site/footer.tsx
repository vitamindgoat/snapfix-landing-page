"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, ArrowUpRight, Mail, Check } from "lucide-react";
import {
  FaXTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import type { IconType } from "react-icons";

const cols = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Download", href: "#download" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Pros for SnapFix", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help center", href: "#" },
      { label: "Trust & safety", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Cookies", href: "/cookies" },
      { label: "Licenses", href: "#" },
    ],
  },
];

const socials: { icon: IconType; label: string; href: string }[] = [
  { icon: FaXTwitter, label: "X", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaGithub, label: "GitHub", href: "#" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
];

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mt-6 flex w-full max-w-sm items-center gap-2 rounded-full border border-border bg-surface p-1 shadow-subtle focus-within:border-primary"
    >
      <Mail className="ml-3 h-4 w-4 shrink-0 text-muted" />
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email for product updates"
        aria-label="Email"
        className="min-w-0 flex-1 bg-transparent text-sm text-foreground placeholder:text-muted focus:outline-none"
      />
      <button
        type="submit"
        className="inline-flex h-9 items-center justify-center gap-1 rounded-full bg-primary px-4 text-xs font-semibold text-primary-fg shadow-subtle hover:scale-[1.02]"
      >
        {submitted ? (
          <>
            <Check className="h-3.5 w-3.5" /> Subscribed
          </>
        ) : (
          "Subscribe"
        )}
      </button>
    </form>
  );
}

export function Footer() {
  return (
    <footer id="download" className="border-t border-border bg-surface">
      {/* CTA strip */}
      <div className="container-page py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-lg border border-border bg-background p-8 md:p-12 shadow-medium"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                Snap your first problem. Free.
              </h3>
              <p className="mt-2 text-muted">
                30 seconds to your first match. No card, no obligation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                aria-label="Download SnapFix for iOS"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-fg shadow-medium hover:scale-[1.02]"
              >
                <Camera className="h-4 w-4" />
                Download iOS
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Download SnapFix for Android"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 text-sm font-semibold text-foreground hover:bg-background"
              >
                Download Android
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Link columns */}
      <div className="container-page pb-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <a href="#" className="flex items-center gap-2 font-bold text-lg">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-fg shadow-subtle">
                <Camera className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <span className="tracking-tight">SnapFix</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted leading-relaxed">
              Snap the problem. Fix the problem. AI-matched local pros for
              every home headache.
            </p>
            <NewsletterForm />
            <div className="mt-6 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted hover:border-primary hover:text-primary"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold text-foreground">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-3 text-sm">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-muted hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container-page flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 py-6 text-xs text-muted">
          <p>
            © {new Date().getFullYear()} SnapFix Labs, Inc. All rights
            reserved.
          </p>
          <p>Made for homes that have had enough.</p>
        </div>
      </div>
    </footer>
  );
}
