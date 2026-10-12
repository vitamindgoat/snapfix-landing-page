"use client";

import { motion } from "framer-motion";
import { ArrowRight, Camera } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { PhoneMockup } from "@/components/site/phone-mockup";

export function Hero() {
  return (
    <section className="container-page pt-10 pb-16 md:pt-14 md:pb-24">
      <div className="relative overflow-hidden rounded-lg shadow-strong">
        {/* Warm layered field */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(152deg, #A8440E 0%, #7A3208 44%, #351604 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(48% 56% at 86% 4%, rgba(255,184,107,0.42), transparent 66%), radial-gradient(44% 56% at 4% 96%, rgba(232,93,4,0.42), transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#FFB37A" />

        <div className="relative z-10 grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr] min-h-[560px] lg:min-h-[620px]">
          {/* Left: copy */}
          <div className="px-6 py-12 md:px-12 md:py-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-bold tracking-tight leading-[0.98] text-5xl md:text-6xl lg:text-[76px] text-[#FFF8F0]"
            >
              Snap the problem.
              <br />
              <span className="text-[#FFC79A]">Fix the problem.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-md text-lg md:text-xl text-white/80 leading-relaxed"
            >
              Take a photo of what is broken at home. SnapFix uses AI to
              identify the problem and point you to the right local pro.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a
                href="#features"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-[#FFF8F0] px-6 text-sm font-semibold text-[#2A1304] shadow-medium hover:-translate-y-0.5"
              >
                <Camera className="h-4 w-4" />
                See how it works
              </a>
              <a
                href="#faq"
                className="inline-flex h-12 items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 text-sm font-semibold text-white hover:bg-white/10"
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium uppercase tracking-wider text-white/60"
            >
              <span>Photo diagnosis</span>
              <span className="text-white/25">/</span>
              <span>AI problem ID</span>
              <span className="text-white/25">/</span>
              <span>Local pros</span>
            </motion.div>
          </div>

          {/* Right: phone mockup */}
          <div className="relative min-h-[440px] pb-10 lg:min-h-0 lg:pb-0">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
