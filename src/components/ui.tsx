"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  Truck, Cylinder, Gauge, Flame, Zap, Building2, Ship, FireExtinguisher, ShieldCheck, Wrench, type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/lib/content";

export const ICONS: Record<IconKey, LucideIcon> = {
  truck: Truck, pipe: Cylinder, gauge: Gauge, flame: Flame, zap: Zap, building: Building2,
  ship: Ship, extinguisher: FireExtinguisher, shield: ShieldCheck, wrench: Wrench,
};

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "text-brand-orange" : "text-brand-crimson"}`}>
      <span className="h-px w-8 bg-current" aria-hidden />
      {children}
    </p>
  );
}

export function Logo({ light }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span className="relative grid h-10 w-10 place-items-center rounded-md bg-brand-crimson ring-2 ring-brand-orange/70" aria-hidden>
        <span className="text-lg font-black text-white">AK</span>
      </span>
      <span className="leading-tight">
        <span className={`block text-sm font-extrabold tracking-wide ${light ? "text-white" : "text-brand-navy"}`}>AVIEL KARIS</span>
        <span className={`block text-[10px] font-semibold uppercase tracking-[0.25em] ${light ? "text-slate-400" : "text-slate-500"}`}>Services Ltd</span>
      </span>
    </span>
  );
}
