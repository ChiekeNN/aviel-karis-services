"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Building2,
  Cylinder,
  FireExtinguisher,
  Flame,
  Gauge,
  Ship,
  ShieldCheck,
  Truck,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/lib/content";

export const ICONS: Record<IconKey, LucideIcon> = {
  truck: Truck,
  pipe: Cylinder,
  gauge: Gauge,
  flame: Flame,
  zap: Zap,
  building: Building2,
  ship: Ship,
  extinguisher: FireExtinguisher,
  shield: ShieldCheck,
  wrench: Wrench,
};

/* ── Motion ─────────────────────────────────────────────────────── */
export function Reveal({
  children,
  delay = 0,
  className,
  y = 26,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  as?: "div" | "li" | "article";
}) {
  const reduce = useReducedMotion();
  const Tag = as;
  if (reduce) return <Tag className={className}>{children}</Tag>;

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/* ── Editorial primitives ───────────────────────────────────────── */
export function Eyebrow({
  children,
  index,
  tone = "dark",
}: {
  children: ReactNode;
  index?: string;
  tone?: "dark" | "light";
}) {
  return (
    <p
      className={`eyebrow-mono flex items-center gap-3 ${
        tone === "light" ? "text-gold-soft/90" : "text-gold-deep"
      }`}
    >
      {index && (
        <span
          className={`tabular-nums ${
            tone === "light" ? "text-ivory/55" : "text-ink/55"
          }`}
        >
          {index}
        </span>
      )}
      <span
        aria-hidden
        className={`h-px w-7 ${
          tone === "light" ? "bg-gold/60" : "bg-gold-deep/50"
        }`}
      />
      {children}
    </p>
  );
}

export function SectionHead({
  index,
  eyebrow,
  title,
  lead,
  tone = "dark",
  align = "left",
  action,
  className = "",
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-8 ${
        action ? "lg:flex-row lg:items-end lg:justify-between" : ""
      } ${align === "center" ? "items-center text-center" : ""} ${className}`}
    >
      <div className={align === "center" ? "max-w-3xl" : "max-w-3xl"}>
        <Eyebrow index={index} tone={tone}>
          {eyebrow}
        </Eyebrow>
        <h2
          className={`display mt-5 text-[clamp(2rem,4.4vw,3.5rem)] ${
            tone === "light" ? "text-ivory" : "text-ink"
          }`}
        >
          {title}
        </h2>
        {lead && (
          <p
            className={`mt-6 measure text-[0.975rem] leading-relaxed ${
              tone === "light" ? "text-ivory/65" : "text-muted"
            } ${align === "center" ? "mx-auto" : ""}`}
          >
            {lead}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}

/* ── Buttons ────────────────────────────────────────────────────── */
type ActionProps = {
  href: string;
  children: ReactNode;
  variant?: "scarlet" | "ivory" | "ghost" | "ghost-dark";
  className?: string;
  icon?: ReactNode;
  external?: boolean;
};

export function ActionLink({
  href,
  children,
  variant = "scarlet",
  className = "",
  icon,
  external,
}: ActionProps) {
  const base =
    "group inline-flex items-center justify-between gap-6 px-6 py-3.5 text-[0.8125rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-300";
  const variants: Record<string, string> = {
    scarlet: "bg-scarlet text-ivory hover:bg-scarlet-deep btn-sheen",
    ivory: "bg-ivory text-ink hover:bg-gold-soft btn-sheen",
    ghost: "border border-ivory/25 text-ivory hover:border-gold hover:text-gold-soft",
    "ghost-dark": "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-ivory",
  };
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{children}</span>
      <span className="transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-1 group-hover:-translate-y-0.5">
        {icon ?? <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden />}
      </span>
    </a>
  );
}

/* ── Marquee ────────────────────────────────────────────────────── */
export function Marquee({
  items,
  speed = "normal",
}: {
  items: string[];
  speed?: "normal" | "slow";
}) {
  const row = [...items, ...items];
  return (
    <div className="marquee-host relative flex overflow-hidden">
      <div
        className={`flex w-max shrink-0 items-center ${
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee"
        }`}
      >
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-8 pr-8"
            aria-hidden={i >= items.length}
          >
            <span className="eyebrow-mono whitespace-nowrap text-ivory/70">
              {item}
            </span>
            <span className="h-1 w-1 rotate-45 bg-gold/70" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── WhatsApp glyph ─────────────────────────────────────────────── */
export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.05-.52-.099-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ── Brand mark ─────────────────────────────────────────────────── */
export function Logo({
  theme = "light",
  className = "",
}: {
  theme?: "light" | "dark";
  className?: string;
}) {
  const light = theme === "light";
  return (
    <span className={`group flex items-center gap-3.5 ${className}`}>
      <span
        className={`relative grid h-11 w-11 place-items-center border transition-colors duration-500 ${
          light
            ? "border-ivory/25 group-hover:border-gold/70"
            : "border-ink/20 group-hover:border-gold-deep"
        }`}
        aria-hidden
      >
        <svg viewBox="0 0 40 40" className="h-7 w-7" fill="none">
          <path
            d="M9 30.5 20 9.5l11 21"
            stroke={light ? "#f8f5ef" : "#060b12"}
            strokeWidth="2.1"
            strokeLinecap="square"
          />
          <path
            d="M14.4 23.2h11.2"
            stroke={light ? "#f8f5ef" : "#060b12"}
            strokeWidth="2.1"
          />
          <circle cx="20" cy="9.5" r="2.6" fill="#d42a1f" />
        </svg>
      </span>
      <span className="leading-none">
        <span
          className={`block text-[0.9rem] font-extrabold uppercase tracking-[0.2em] ${
            light ? "text-ivory" : "text-ink"
          }`}
        >
          Aviel Karis
        </span>
        <span
          className={`mt-1.5 block font-mono text-[0.5625rem] uppercase tracking-[0.34em] ${
            light ? "text-ivory/60" : "text-ink/60"
          }`}
        >
          Services Ltd
        </span>
      </span>
    </span>
  );
}
