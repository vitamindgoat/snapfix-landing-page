"use client";

import { motion } from "framer-motion";
import { ArrowRight, Camera, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { PhoneMockup } from "@/components/site/phone-mockup";

export function Hero() {
  return (
    <section className="container-page pt-12 pb-16 md:pt-16 md:pb-24">
      <Card className="relative w-full overflow-hidden rounded-lg border-0 shadow-strong bg-gradient-to-br from-[#A04A14] via-[#7A3208] to-[#4A1D04]">
        {/* Warm radial accents */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(45% 55% at 88% 8%, rgba(255,184,107,0.35), transparent 70%), radial-gradient(40% 55% at 8% 92%, rgba(232,93,4,0.32), transparent 70%)",
          }}
        />
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#FFB37A"
        />

        <div className="flex flex-col lg:flex-row min-h-[560px] lg:min-h-[600px]">
          {/* Left: copy */}
          <div className="relative z-10 flex flex-1 flex-col justify-center px-6 py-12 md:px-12 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#FFB37A]" />
              AI-matched local pros
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.6, ease: "easeOut" }}
              className="mt-5 text-4xl md:text-5xl lg:text-[60px] font-bold leading-[1.05] tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#FFF8F0] via-[#FFE4CC] to-[#FFB37A]"
            >
              Snap the problem.
              <br />
              Fix the problem.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.6, ease: "easeOut" }}
              className="mt-5 max-w-lg text-base md:text-lg text-white/75"
            >
              Leaking pipe, broken fence, overgrown lawn — snap a photo. Our AI
              identifies the issue and instantly matches you with qualified
              local pros. See pricing, ratings, and book in seconds.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#download"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-fg shadow-medium transition-transform duration-150 hover:scale-[1.02]"
              >
                <Camera className="h-4 w-4" />
                Get the app
              </a>
              <a
                href="#features"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                See how it works
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-10 flex items-center gap-6 text-xs text-white/65"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-success" />
                Vetted pros
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-secondary" />
                Same-day quotes
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                Transparent pricing
              </div>
            </motion.div>
          </div>

          {/* Right: 3D phone mockup */}
          <div className="relative flex-1 min-h-[420px] lg:min-h-0 py-8 lg:py-0">
            <PhoneMockup />
          </div>
        </div>
      </Card>
    </section>
  );
}
