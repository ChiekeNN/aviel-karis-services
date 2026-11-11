"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Clock, Mail, MapPin, Menu, Navigation, Phone, X } from "lucide-react";
import {
  ADDRESS,
  EMAIL,
  EMAIL_URL,
  MAPS_URL,
  NAV,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
  WORKING_HOURS,
} from "@/lib/content";
import { Logo, WhatsAppIcon } from "./ui";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV.map((n) => n.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* Utility bar */}
        <div
          className={`hidden overflow-hidden border-b bg-ink text-ivory/65 transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] lg:block ${
            scrolled
              ? "max-h-0 border-transparent opacity-0"
              : "max-h-12 border-line-dark opacity-100"
          }`}
        >
          <div className="shell flex h-9 items-center justify-between font-mono text-[0.625rem] uppercase tracking-[0.2em]">
            <p className="flex items-center gap-2">
              <MapPin size={12} className="text-gold" aria-hidden />
              Port Harcourt, Nigeria
              <span className="mx-2 h-1 w-1 rotate-45 bg-ivory/25" aria-hidden />
              Incorporated 2015
            </p>
            <div className="flex items-center gap-6">
              <p className="hidden items-center gap-2 xl:flex">
                <Clock size={12} className="text-gold" aria-hidden />
                {WORKING_HOURS}
              </p>
              <a
                href={EMAIL_URL}
                className="hidden items-center gap-2 normal-case tracking-[0.1em] text-ivory/80 transition-colors hover:text-gold-soft lg:flex"
              >
                <Mail size={12} className="text-gold" aria-hidden />
                {EMAIL}
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-2 text-ivory/80 transition-colors hover:text-gold-soft"
              >
                <Phone size={12} className="text-gold" aria-hidden />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        {/* Main bar */}
        <div
          className={`transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
            scrolled
              ? "border-b border-ink/10 bg-ivory/85 shadow-[0_10px_40px_-24px_rgba(6,11,18,0.5)] backdrop-blur-xl"
              : "border-b border-transparent bg-transparent"
          }`}
        >
          <nav
            aria-label="Primary"
            className={`shell flex items-center justify-between transition-all duration-500 ${
              scrolled ? "h-[68px]" : "h-[88px]"
            }`}
          >
            <a href="#home" aria-label="Aviel Karis Services Ltd — home" className="shrink-0">
              <Logo
                className={scrolled ? "h-9" : "h-10"}
                alt=""
                priority
              />
            </a>

            <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
              {NAV.map((n) => {
                const isActive = active === n.href;
                return (
                  <li key={n.href}>
                    <a
                      href={n.href}
                      aria-current={isActive ? "location" : undefined}
                      className={`group relative block py-2 text-[0.8125rem] font-medium tracking-[0.01em] transition-colors ${
                        scrolled
                          ? isActive
                            ? "text-ink"
                            : "text-ink/70 hover:text-ink"
                          : isActive
                            ? "text-ivory"
                            : "text-ivory/70 hover:text-ivory"
                      }`}
                    >
                      {n.label}
                      <span
                        aria-hidden
                        className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className={`group hidden items-center gap-3 px-5 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition-all duration-300 lg:inline-flex ${
                  scrolled
                    ? "bg-ink text-ivory hover:bg-scarlet"
                    : "bg-scarlet text-ivory hover:bg-scarlet-deep"
                }`}
              >
                Request RFQ
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </a>
              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
                className={`grid h-11 w-11 place-items-center border transition-colors lg:hidden ${
                  scrolled
                    ? "border-ink/15 text-ink"
                    : "border-ivory/25 text-ivory"
                }`}
              >
                <Menu size={19} aria-hidden />
              </button>
            </div>
          </nav>
          <motion.div
            style={{ scaleX: progress }}
            className="h-px origin-left bg-gradient-to-r from-scarlet via-gold to-gold-soft"
            aria-hidden
          />
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-ink grain lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="relative z-10 shell flex min-h-full flex-col py-6">
              <div className="flex items-center justify-between">
                <Logo className="h-10" />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-11 w-11 place-items-center border border-ivory/20 text-ivory transition-colors hover:border-gold hover:text-gold"
                >
                  <X size={19} aria-hidden />
                </button>
              </div>

              <nav aria-label="Mobile" className="mt-14 flex-1">
                <ul className="divide-y divide-line-dark border-y border-line-dark">
                  {NAV.map((n, i) => (
                    <motion.li
                      key={n.href}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.05, duration: 0.5 }}
                    >
                      <a
                        href={n.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-baseline justify-between py-5"
                      >
                        <span className="flex items-baseline gap-5">
                          <span className="font-mono text-[0.625rem] tracking-[0.2em] text-gold/85">
                            0{i + 1}
                          </span>
                          <span className="display text-3xl text-ivory transition-colors group-hover:text-gold-soft">
                            {n.label}
                          </span>
                        </span>
                        <ArrowUpRight
                          size={18}
                          className="text-ivory/30 transition-colors group-hover:text-gold"
                          aria-hidden
                        />
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="mt-10 border-t border-line-dark pt-7">
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.24em] text-gold">
                  Head Office
                </p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/60">
                  {ADDRESS}
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center gap-2.5 border border-gold/50 px-3 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ivory transition-colors hover:bg-gold hover:text-ink"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center gap-2.5 border border-ivory/20 px-3 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ivory transition-colors hover:border-gold hover:text-gold-soft"
                  >
                    <Phone size={14} aria-hidden />
                    Call
                  </a>
                  <a
                    href={EMAIL_URL}
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center gap-2.5 border border-ivory/20 px-3 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ivory transition-colors hover:border-gold hover:text-gold-soft"
                  >
                    <Mail size={14} aria-hidden />
                    Email
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center gap-2.5 border border-ivory/20 px-3 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ivory transition-colors hover:border-gold hover:text-gold-soft"
                  >
                    <Navigation size={14} aria-hidden />
                    Directions
                  </a>
                </div>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full items-center justify-between border border-ivory/15 px-6 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ivory/80 transition-colors hover:border-gold/60 hover:text-gold-soft"
                >
                  Request a quotation
                  <ArrowUpRight size={16} aria-hidden />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
