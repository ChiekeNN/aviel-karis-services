"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, ChevronDown, Crown, HardHat, Landmark, TrendingUp } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";

const DIRECTORS = [
  {
    icon: Landmark,
    title: "Exec. Director Finance",
    remit: "Financial control, accounting integrity and procurement governance.",
    reports: ["Chief Accountant", "Procurement Manager"],
  },
  {
    icon: TrendingUp,
    title: "Exec. Director Business Development",
    remit: "Client acquisition, tendering and market expansion across Sub-Saharan Africa.",
    reports: ["Business Development Executives"],
  },
  {
    icon: HardHat,
    title: "Exec. Director Projects",
    remit: "Project execution, field operations and quality assurance.",
    reports: ["Quality Control Manager"],
  },
  {
    icon: Briefcase,
    title: "Exec. Director Admin",
    remit: "Corporate administration, human resources and facilities.",
    reports: ["Administrative Manager"],
  },
];

export default function Structure() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="structure"
      aria-labelledby="structure-title"
      className="relative overflow-hidden bg-ivory py-24 lg:py-32"
    >
      <div className="shell">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal className="max-w-2xl">
            <Eyebrow index="06">Corporate Governance</Eyebrow>
            <h2
              id="structure-title"
              className="display mt-5 text-[clamp(2rem,4.4vw,3.5rem)]"
            >
              Clear authority from{" "}
              <em className="text-scarlet">boardroom to field.</em>
            </h2>
          </Reveal>
          <p className="max-w-sm text-[0.8125rem] leading-relaxed text-muted">
            Direct reporting lines from executive oversight to project delivery.
            Select a directorate to see its reporting structure.
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center">
          <Reveal>
            <div className="relative flex items-center gap-5 border border-ink/10 bg-ink px-8 py-6 text-ivory shadow-[0_30px_70px_-40px_rgba(6,11,18,0.8)]">
              <span className="absolute -left-px top-0 h-full w-px bg-gold" aria-hidden />
              <span className="grid h-12 w-12 place-items-center border border-ivory/15 text-gold">
                <Crown size={21} strokeWidth={1.5} aria-hidden />
              </span>
              <div>
                <p className="text-lg font-bold tracking-tight">Managing Director</p>
                <p className="mt-1 font-mono text-[0.5625rem] uppercase tracking-[0.22em] text-ivory/60">
                  Executive oversight
                </p>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col items-center" aria-hidden>
            <div className="h-10 w-px bg-ink/20" />
            <div className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <div className="hidden h-px w-[84%] bg-ink/15 lg:block" />
          </div>

          <ul className="grid w-full gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {DIRECTORS.map((d, i) => {
              const isOpen = open === i;
              return (
                <Reveal
                  as="li"
                  key={d.title}
                  delay={i * 0.07}
                  className="h-full bg-ivory"
                >
                    <div className="hidden justify-center lg:flex" aria-hidden>
                      <div className="h-6 w-px bg-ink/15" />
                    </div>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`dir-${i}`}
                      className={`group flex w-full items-start justify-between gap-4 p-6 text-left transition-colors duration-500 ${
                        isOpen ? "bg-white" : "bg-ivory hover:bg-white"
                      }`}
                    >
                      <div>
                        <span
                          className={`grid h-10 w-10 place-items-center border transition-colors duration-500 ${
                            isOpen
                              ? "border-gold/70 text-scarlet"
                              : "border-line text-ink/50 group-hover:border-gold/50 group-hover:text-gold-deep"
                          }`}
                        >
                          <d.icon size={18} strokeWidth={1.6} aria-hidden />
                        </span>
                        <p className="mt-5 text-[0.9375rem] font-bold leading-snug tracking-tight">
                          {d.title}
                        </p>
                        <p className="mt-2 text-[0.75rem] leading-relaxed text-muted">
                          {d.remit}
                        </p>
                      </div>
                      <ChevronDown
                        size={16}
                        className={`mt-1 shrink-0 text-ink/30 transition-transform duration-500 ${
                          isOpen ? "rotate-180 text-gold-deep" : ""
                        }`}
                        aria-hidden
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`dir-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden bg-white"
                        >
                          <ul className="space-y-0 px-6 pb-6">
                            {d.reports.map((r) => (
                              <li
                                key={r}
                                className="flex items-center gap-3 border-t border-line py-3 text-[0.75rem] font-semibold text-ink/70"
                              >
                                <span className="h-px w-4 bg-gold/70" aria-hidden />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <span
                      className={`block h-px origin-left bg-gold transition-transform duration-700 ${
                        isOpen ? "scale-x-100" : "scale-x-0"
                      }`}
                      aria-hidden
                    />
                </Reveal>
              );
            })}
          </ul>
        </div>

        <Reveal className="mt-14">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
            <p className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-muted/80">
              Managing Director · Four executive directorates · Field delivery
            </p>
            <p className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-gold-deep">
              Indigenous leadership · Nigerian talent
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
