"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { NAV } from "@/lib/content";
import { Logo } from "./ui";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
      <motion.nav
        aria-label="Primary"
        animate={{ maxWidth: scrolled ? 1180 : 1320 }}
        className={`mx-auto flex items-center justify-between rounded-xl px-4 py-3 transition-colors duration-300 ${
          scrolled ? "border border-white/10 bg-brand-dark/80 shadow-xl backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <a href="#home" aria-label="Aviel Karis Services Ltd — home"><Logo light /></a>
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden items-center gap-2 rounded-md bg-brand-crimson px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-crimson/20 transition hover:bg-brand-red lg:inline-flex">
          <FileText size={16} aria-hidden /> Request RFQ / Procurement Inquiry
        </a>
        <button
          className="rounded-md p-2 text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </motion.nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-2 max-w-[1180px] rounded-xl border border-white/10 bg-brand-dark/95 p-4 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a onClick={() => setOpen(false)} href={n.href} className="block rounded-md px-3 py-3 text-slate-200 hover:bg-white/5">{n.label}</a>
                </li>
              ))}
            </ul>
            <a onClick={() => setOpen(false)} href="#contact" className="mt-3 block rounded-md bg-brand-crimson px-4 py-3 text-center text-sm font-semibold text-white">
              Request RFQ / Procurement Inquiry
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
