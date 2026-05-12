"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Sparkles, Star, MapPin, Clock, Camera, Check } from "lucide-react";

function useTilt() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 14 });
  const sy = useSpring(y, { stiffness: 120, damping: 14 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-12, 12]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [10, -10]);
  return { x, y, rotateX, rotateY };
}

export function PhoneMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y, rotateX, rotateY } = useTilt();

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative flex h-full w-full items-center justify-center"
      style={{ perspective: 1200 }}
    >
      {/* Ambient glow — warm orange amber */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(50% 45% at 38% 45%, rgba(232,93,4,0.32), transparent 70%), radial-gradient(40% 40% at 72% 62%, rgba(255,179,122,0.22), transparent 70%)",
        }}
      />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <PhoneFrame rotateX={rotateX} rotateY={rotateY} />
      </motion.div>
    </div>
  );
}

function PhoneFrame({
  rotateX,
  rotateY,
}: {
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
}) {
  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-[520px] w-[260px] sm:h-[560px] sm:w-[280px] rounded-[44px] border border-[#E0D5C7]/50 bg-gradient-to-b from-[#FFF8F0] to-[#F0E4D2] p-2 shadow-[0_40px_80px_-20px_rgba(20,12,4,0.55),0_0_0_2px_rgba(255,255,255,0.6)_inset]"
    >
      {/* Side buttons */}
      <span className="absolute -left-[2px] top-24 h-12 w-[3px] rounded-l-md bg-[#C9B89E]" />
      <span className="absolute -left-[2px] top-40 h-16 w-[3px] rounded-l-md bg-[#C9B89E]" />
      <span className="absolute -right-[2px] top-32 h-20 w-[3px] rounded-r-md bg-[#C9B89E]" />

      {/* Screen — warm cream app */}
      <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-[#FFF8F0]">
        {/* Dynamic island */}
        <div className="absolute left-1/2 top-2.5 z-30 h-6 w-24 -translate-x-1/2 rounded-full bg-[#1A1A1A]" />

        {/* Status bar */}
        <div className="relative z-20 flex items-center justify-between px-6 pt-3 text-[10px] font-semibold text-[#1A1A1A]">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-[#1A1A1A]" />
            <span className="h-2 w-3 rounded-sm bg-[#1A1A1A]" />
            <span className="h-2 w-4 rounded-sm border border-[#1A1A1A]/60" />
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 mt-6 flex h-[calc(100%-32px)] flex-col gap-3 px-4 pb-4">
          <Header />
          <PhotoCard />
          <AIDetectCard />
          <MatchCard />
        </div>
      </div>

      {/* Edge highlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[44px]"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.6), transparent 30%, transparent 70%, rgba(255,255,255,0.25))",
        }}
      />
    </motion.div>
  );
}

function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-md bg-[#E85D04] text-white shadow-[0_4px_12px_rgba(232,93,4,0.4)]">
          <Camera className="h-3.5 w-3.5" strokeWidth={2.6} />
        </span>
        <span className="text-sm font-bold text-[#1A1A1A] tracking-tight">
          SnapFix
        </span>
      </div>
      <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#E85D04]/35 to-[#FFB37A]/40 ring-1 ring-[#E0D5C7]" />
    </div>
  );
}

function PhotoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#E0D5C7]"
    >
      <Image
        src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&q=80&auto=format&fit=crop"
        alt="Leaking pipe"
        fill
        sizes="280px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/85 px-2 py-1 text-[10px] font-medium text-[#1A1A1A] backdrop-blur shadow-subtle">
        <span className="h-1.5 w-1.5 rounded-full bg-[#D00000] animate-pulse" />
        Captured
      </div>
      {/* Detection bounding box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.55, duration: 0.4 }}
        className="absolute left-[28%] top-[35%] h-[34%] w-[44%] rounded-md border-2 border-[#E85D04] shadow-[0_0_0_2px_rgba(232,93,4,0.25)]"
      >
        <span className="absolute -top-5 left-0 rounded-sm bg-[#E85D04] px-1.5 py-[2px] text-[9px] font-semibold text-white">
          Leak · 96%
        </span>
      </motion.div>
    </motion.div>
  );
}

function AIDetectCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className="rounded-2xl border border-[#E0D5C7] bg-white p-3 shadow-subtle"
    >
      <div className="flex items-center gap-2">
        <span className="grid h-6 w-6 place-items-center rounded-md bg-[#D97706]/15 text-[#D97706]">
          <Sparkles className="h-3.5 w-3.5" />
        </span>
        <span className="text-[11px] font-semibold text-[#1A1A1A]">
          AI diagnosis
        </span>
        <span className="ml-auto rounded-full bg-[#D00000]/12 px-1.5 py-0.5 text-[9px] font-semibold text-[#D00000]">
          High urgency
        </span>
      </div>
      <p className="mt-2 text-[11px] leading-snug text-[#6B6B6B]">
        Leaking P-trap under sink. Recommend licensed plumber, ~45 min job.
      </p>
    </motion.div>
  );
}

function MatchCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.95, duration: 0.5 }}
      className="rounded-2xl border border-[#E0D5C7] bg-white p-3 shadow-subtle"
    >
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full ring-1 ring-[#E0D5C7]">
          <Image
            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=120&h=120&fit=crop&crop=faces"
            alt="Marcus T."
            width={40}
            height={40}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1 text-[11px] font-semibold text-[#1A1A1A]">
            Marcus T.
            <Check className="h-3 w-3 text-[#E85D04]" strokeWidth={3} />
          </div>
          <div className="flex items-center gap-2 text-[9px] text-[#6B6B6B]">
            <span className="inline-flex items-center gap-0.5">
              <Star
                className="h-2.5 w-2.5 fill-[#E85D04] text-[#E85D04]"
                strokeWidth={0}
              />
              4.9
            </span>
            <span className="inline-flex items-center gap-0.5">
              <MapPin className="h-2.5 w-2.5" />
              1.2 mi
            </span>
            <span className="inline-flex items-center gap-0.5">
              <Clock className="h-2.5 w-2.5" />
              Today 11am
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[12px] font-bold text-[#1A1A1A]">$120</div>
          <div className="text-[8px] text-[#6B6B6B]">fixed</div>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-3 inline-flex h-8 w-full items-center justify-center rounded-full bg-[#E85D04] text-[11px] font-semibold text-white shadow-[0_4px_14px_rgba(232,93,4,0.5)]"
      >
        Book now
      </motion.button>
    </motion.div>
  );
}
