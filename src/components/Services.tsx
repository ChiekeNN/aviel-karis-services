"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X, ArrowUpRight } from "lucide-react";
import { SERVICES, SERVICE_GROUPS, type Service } from "@/lib/content";
import { Eyebrow, ICONS, Reveal } from "./ui";

export default function Services() {
  const [filter, setFilter] = useState<(typeof SERVICE_GROUPS)[number]>("All");
  const [active, setActive] = useState<Service | null>(null);
  const list = useMemo(() => (filter === "All" ? SERVICES : SERVICES.filter((s) => s.group === filter)), [filter]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [active]);

  return (
    <section id="services" aria-labelledby="services-title" className="bg-brand-steel py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Eyebrow>Core Services</Eyebrow>
            <h2 id="services-title" className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">Ten integrated capabilities across the oil &amp; gas value chain</h2>
          </div>
          <div role="tablist" aria-label="Filter services" className="flex flex-wrap gap-2">
            {SERVICE_GROUPS.map((g) => (
              <button
                key={g} role="tab" aria-selected={filter === g} onClick={() => setFilter(g)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  filter === g ? "border-brand-dark bg-brand-dark text-white" : "border-brand-line bg-white text-slate-600 hover:border-brand-crimson hover:text-brand-crimson"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.ul layout className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((s, i) => {
              const Icon = ICONS[s.icon];
              return (
                <motion.li
                  layout key={s.id}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: i * 0.04 } }} exit={{ opacity: 0, scale: 0.96 }}
                  className="group flex flex-col rounded-2xl border border-brand-line bg-white p-7 transition hover:border-brand-crimson/50 hover:shadow-2xl"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand-dark text-white transition group-hover:bg-brand-crimson"><Icon size={22} aria-hidden /></span>
                    <span className="text-xs font-bold text-slate-300">{String(SERVICES.indexOf(s) + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-widest text-brand-orange">{s.group}</p>
                  <h3 className="mt-1 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.summary}</p>
                  <ul className="mt-4 space-y-1.5">
                    {s.bullets.slice(0, 3).map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-slate-700"><Check size={16} className="mt-0.5 shrink-0 text-brand-crimson" aria-hidden />{b}</li>
                    ))}
                  </ul>
                  {s.detail && (
                    <button onClick={() => setActive(s)} className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-brand-crimson hover:gap-2 transition-all" aria-haspopup="dialog">
                      View capability details <ArrowUpRight size={16} aria-hidden />
                    </button>
                  )}
                </motion.li>
              );
            })}
          </AnimatePresence>
        </motion.ul>
      </div>

      <AnimatePresence>
        {active?.detail && (
          <motion.div className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-dark/70 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)}>
            <motion.div
              role="dialog" aria-modal="true" aria-labelledby="svc-modal-title"
              initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            >
              <div className="bg-brand-dark p-8 text-white">
                <button onClick={() => setActive(null)} aria-label="Close details" className="absolute right-4 top-4 rounded-md p-2 text-slate-300 hover:bg-white/10"><X /></button>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange">{active.title}</p>
                <h3 id="svc-modal-title" className="mt-2 text-2xl font-bold">{active.detail.heading}</h3>
              </div>
              <div className="p-8">
                <p className="text-slate-600">{active.detail.body}</p>
                <dl className="mt-6 grid gap-3 sm:grid-cols-3">
                  {active.detail.highlights.map((h) => (
                    <div key={h.label} className="rounded-lg border border-brand-line bg-brand-steel p-4">
                      <dt className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">{h.label}</dt>
                      <dd className="mt-1 font-bold">{h.value}</dd>
                    </div>
                  ))}
                </dl>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {active.bullets.map((b) => <li key={b} className="flex gap-2 text-sm"><Check size={16} className="mt-0.5 text-brand-crimson" aria-hidden />{b}</li>)}
                </ul>
                <a href="#contact" onClick={() => setActive(null)} className="mt-8 inline-flex rounded-md bg-brand-crimson px-5 py-3 text-sm font-semibold text-white hover:bg-brand-red">Request a quote for this service</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
