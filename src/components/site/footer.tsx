"use client";

import { motion } from "framer-motion";
import { Camera, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      {/* CTA band */}
      <div className="container-page py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-lg border border-border bg-background px-8 py-12 shadow-medium md:px-14 md:py-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(55% 120% at 100% 100%, rgba(232,93,4,0.14), transparent 60%)",
            }}
          />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">
                Got a home problem? Start with a photo.
              </h3>
              <p className="mt-3 text-muted">
                See how SnapFix turns one photo into a clear next step.
              </p>
            </div>
            <a
              href="#features"
              className="inline-flex h-12 w-fit items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-fg shadow-medium hover:-translate-y-0.5"
            >
              <Camera className="h-4 w-4" />
              See how it works
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-sm">
            <a href="#" className="flex items-center gap-2 text-lg font-bold">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-fg shadow-subtle">
                <Camera className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <span className="tracking-tight">SnapFix</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Snap the problem. Fix the problem. Take a photo of a home problem
              and SnapFix helps you figure out what is wrong and who can fix it.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="#features" className="text-muted hover:text-foreground">
              How it works
            </a>
            <a href="#faq" className="text-muted hover:text-foreground">
              FAQ
            </a>
            <a
              href="https://github.com/vitamindgoat/snapfix-landing-page"
              target="_blank"
              rel="noopener"
              className="text-muted hover:text-foreground"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page py-6 text-xs text-muted">
          © {new Date().getFullYear()} SnapFix. A project by Oleksandr Rybitskyi.
        </div>
      </div>
    </footer>
  );
}
