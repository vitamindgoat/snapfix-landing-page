"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Camera } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#features", label: "Features" },
  { href: "#proof", label: "Reviews" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-lg">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-fg shadow-subtle">
            <Camera className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <span className="tracking-tight">SnapFix</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#download"
            className={cn(
              "inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-fg shadow-medium",
              "transition-transform duration-150 hover:scale-[1.02]",
            )}
          >
            Get the app
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden grid h-10 w-10 place-items-center rounded-md border border-border"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-border bg-surface"
          >
            <div className="container-page py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-base text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#download"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-fg shadow-medium"
              >
                Get the app
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
