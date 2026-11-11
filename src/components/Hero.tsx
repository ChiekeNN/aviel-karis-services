"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { BadgeCheck, Mail, MapPin, MoveDown } from "lucide-react";
import { EMAIL, EMAIL_URL, PHONE_DISPLAY, STATS, WHATSAPP_URL } from "@/lib/content";
import { ActionLink, WhatsAppIcon } from "./ui";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      ref={ref}
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink text-ivory grain"
    >
      {/* Backdrop */}
      <motion.div
        style={reduce ? undefined : { y: imageY }}
        className="absolute inset-0 -top-10 h-[112%]"
        aria-hidden
      >
        <Image
          src="/images/hero-offshore.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center]"
        />
      </motion.div>
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/25"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/70"
        aria-hidden
      />
      <div className="grid-lines absolute inset-0 opacity-40" aria-hidden />

      <div className="relative z-10 flex flex-1 flex-col">
        <div className="shell flex flex-1 flex-col justify-center pb-16 pt-[132px] lg:pt-[168px]">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-3"
            >
              <span className="eyebrow-mono inline-flex items-center gap-2 border border-ivory/15 bg-ivory/[0.04] px-3.5 py-2 text-ivory/70 backdrop-blur">
                <MapPin size={12} className="text-gold" aria-hidden />
                Port Harcourt · Nigeria
              </span>
              <span className="eyebrow-mono text-gold-soft/80">
                Est. 2015 — Oil &amp; Gas · Marine · Industrial
              </span>
            </motion.div>

            <h1
              id="hero-title"
              className="display mt-8 text-[clamp(2.6rem,6.6vw,5.5rem)] text-ivory"
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                Indigenous capacity.{" "}
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                World-class <em className="text-gold-soft">execution.</em>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.52 }}
              className="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-ivory/70"
            >
              Upstream and midstream oil &amp; gas services, marine and industrial
              engineering — delivered from the Niger Delta to Sub-Saharan Africa
              under international oilfield standards.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.64 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <ActionLink href="#contact" variant="scarlet">
                Request a quotation
              </ActionLink>
              <ActionLink href="#services" variant="ghost">
                Explore capabilities
              </ActionLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.74 }}
              className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-[0.8125rem] text-ivory/60 transition-colors hover:text-ivory"
              >
                <span className="grid h-8 w-8 place-items-center border border-gold/40 text-gold transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                  <WhatsAppIcon className="h-4 w-4" />
                </span>
                <span>
                  WhatsApp{" "}
                  <span className="font-semibold text-ivory/90">{PHONE_DISPLAY}</span>
                </span>
              </a>
              <a
                href={EMAIL_URL}
                className="group inline-flex items-center gap-3 text-[0.8125rem] text-ivory/60 transition-colors hover:text-ivory"
              >
                <span className="grid h-8 w-8 place-items-center border border-gold/40 text-gold transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                  <Mail size={15} aria-hidden />
                </span>
                <span className="font-semibold text-ivory/90">{EMAIL}</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Credential aside */}
        <div className="shell relative pb-10">
          <div className="flex items-end justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="hidden items-center gap-3 lg:flex"
            >
              <span className="grid h-9 w-9 place-items-center border border-gold/40 text-gold">
                <BadgeCheck size={17} aria-hidden />
              </span>
              <p className="max-w-[15rem] font-mono text-[0.625rem] uppercase leading-relaxed tracking-[0.16em] text-ivory/70">
                CIPSMN-certified supply chain · EN-registered PPE
              </p>
            </motion.div>

            <a
              href="#about"
              aria-label="Scroll to the company section"
              className="group ml-auto hidden flex-col items-center gap-3 text-ivory/60 transition-colors hover:text-gold sm:flex"
            >
              <span className="font-mono text-[0.5625rem] uppercase tracking-[0.3em]">
                Scroll
              </span>
              <MoveDown
                size={15}
                className="animate-float transition-transform group-hover:translate-y-1"
                aria-hidden
              />
            </a>
          </div>
        </div>

        {/* Stat rail */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="relative border-t border-ivory/10 bg-ink/45 backdrop-blur-md"
        >
          <dl className="shell grid grid-cols-2 divide-x divide-ivory/10 lg:grid-cols-4 [&>div:nth-child(n+3)]:border-t [&>div:nth-child(n+3)]:border-ivory/10 lg:[&>div]:border-t-0">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="group px-5 py-6 sm:px-7 lg:py-7 lg:first:pl-0 lg:last:pr-0"
              >
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <p className="display text-2xl text-ivory transition-colors duration-500 group-hover:text-gold-soft sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-[0.7rem] font-medium uppercase tracking-[0.15em] text-ivory/65">
                    {s.label}
                  </p>
                  <p className="mt-1 font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-gold/85">
                    {s.note}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
