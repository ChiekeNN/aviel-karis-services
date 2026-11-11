"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Crown, Landmark, TrendingUp, HardHat, Briefcase, ChevronDown } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";

const DIRECTORS = [
  { icon: Landmark, title: "Exec. Director Finance", remit: "Financial control, accounting integrity and procurement governance.", reports: ["Chief Accountant", "Procurement Manager"] },
  { icon: TrendingUp, title: "Exec. Director Business Development", remit: "Client acquisition, tendering and market expansion across Sub-Saharan Africa.", reports: ["Business Development Executives"] },
  { icon: HardHat, title: "Exec. Director Projects", remit: "Project execution, field operations and quality assurance.", reports: ["Quality Control Manager"] },
  { icon: Briefcase, title: "Exec. Director Admin", remit: "Corporate administration, human resources and facilities.", reports: ["Administrative Manager"] },
];

export default function Structure() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="structure" aria-labelledby="structure-title" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <Eyebrow>Corporate Governance</Eyebrow>
          <h2 id="structure-title" className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Organizational Structure</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">Clear lines of accountability from executive oversight to field delivery. Select a directorate to view its reporting lines.</p>
        </Reveal>

        <div className="mt-14 flex flex-col items-center">
          <Reveal>
            <div className="flex items-center gap-4 rounded-2xl bg-brand-dark px-8 py-6 text-white shadow-xl ring-4 ring-brand-crimson/20">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand-crimson"><Crown aria-hidden /></span>
              <div>
                <p className="text-lg font-bold">Managing Director</p>
                <p className="text-sm text-slate-400">Executive Oversight</p>
              </div>
            </div>
          </Reveal>
          <div className="h-10 w-px bg-brand-line" aria-hidden />
          <div className="hidden h-px w-[76%] bg-brand-line lg:block" aria-hidden />

          <ul className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {DIRECTORS.map((d, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={d.title} delay={i * 0.08}>
                  <li className="flex flex-col items-center">
                    <div className="hidden h-6 w-px bg-brand-line lg:block" aria-hidden />
                    <button
                      onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} aria-controls={`dir-${i}`}
                      className={`w-full rounded-xl border p-5 text-left transition ${isOpen ? "border-brand-crimson shadow-lg" : "border-brand-line hover:border-brand-orange"}`}
                    >
                      <div className="flex items-center justify-between">
                        <d.icon className="text-brand-crimson" aria-hidden />
                        <ChevronDown size={18} className={`text-slate-400 transition ${isOpen ? "rotate-180" : ""}`} aria-hidden />
                      </div>
                      <p className="mt-3 font-bold">{d.title}</p>
                      <p className="mt-1 text-sm text-slate-600">{d.remit}</p>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.ul id={`dir-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="w-full overflow-hidden">
                          {d.reports.map((r) => (
                            <li key={r} className="flex flex-col items-center">
                              <div className="h-4 w-px bg-brand-crimson/40" aria-hidden />
                              <div className="w-full rounded-lg bg-brand-steel px-4 py-3 text-center text-sm font-semibold">{r}</div>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
