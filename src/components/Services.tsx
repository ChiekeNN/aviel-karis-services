"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Plus, X } from "lucide-react";
import { SERVICES, SERVICE_GROUPS, type Service } from "@/lib/content";
import { ActionLink, Eyebrow, ICONS, Reveal } from "./ui";

export default function Services() {
  const [filter, setFilter] = useState<(typeof SERVICE_GROUPS)[number]>("All");
  const [active, setActive] = useState<Service | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const list = useMemo(
    () => (filter === "All" ? SERVICES : SERVICES.filter((s) => s.group === filter)),
    [filter],
  );

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative overflow-hidden bg-ink py-24 text-ivory grain lg:py-32"
    >
      <div className="grid-lines absolute inset-0 opacity-50" aria-hidden />
      <div
        className="absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-scarlet/10 blur-[140px]"
        aria-hidden
      />

      <div className="shell relative">
        <Reveal>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <Eyebrow index="02" tone="light">
                Core Services
              </Eyebrow>
              <h2
                id="services-title"
                className="display mt-5 text-[clamp(2rem,4.4vw,3.5rem)] text-ivory"
              >
                Ten integrated capabilities across the{" "}
                <em className="text-gold-soft">oil &amp; gas value chain.</em>
              </h2>
              <p className="mt-6 measure text-[0.975rem] leading-relaxed text-ivory/60">
                One contract, one point of accountability — from OEM sourcing and
                pipeline fabrication to offshore support, safety systems and
                technical manpower.
              </p>
            </div>

            <div className="shrink-0">
              <p className="font-mono text-[0.5625rem] uppercase tracking-[0.24em] text-ivory/55">
                Filter by discipline
              </p>
              <div
                role="tablist"
                aria-label="Filter services"
                className="mt-4 flex flex-wrap gap-2"
              >
                {SERVICE_GROUPS.map((g) => {
                  const selected = filter === g;
                  return (
                    <button
                      key={g}
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setFilter(g)}
                      className={`border px-4 py-2.5 font-mono text-[0.625rem] uppercase tracking-[0.14em] transition-all duration-300 ${
                        selected
                          ? "border-ivory bg-ivory text-ink"
                          : "border-ivory/15 text-ivory/70 hover:border-gold/50 hover:text-gold-soft"
                      }`}
                    >
                      {g}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        <motion.ul layout className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          <AnimatePresence mode="popLayout">
            {list.map((s, i) => {
              const Icon = ICONS[s.icon];
              return (
                <motion.li
                  layout
                  key={s.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: i * 0.04 } }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="group relative flex flex-col border border-line-dark bg-ink p-7 transition-colors duration-500 hover:border-gold/35 hover:bg-ink-800 sm:p-8"
                >
                  <span
                    className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold via-gold-soft to-transparent transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100"
                    aria-hidden
                  />

                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center border border-ivory/15 text-gold-soft transition-colors duration-500 group-hover:border-gold/60 group-hover:text-gold">
                      <Icon size={21} strokeWidth={1.5} aria-hidden />
                    </span>
                    <span className="font-mono text-[0.6875rem] tracking-[0.18em] text-ivory/20 transition-colors group-hover:text-ivory/40">
                      {String(SERVICES.indexOf(s) + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-7 font-mono text-[0.5625rem] uppercase tracking-[0.22em] text-gold/85">
                    {s.group}
                  </p>
                  <h3 className="mt-3 text-[1.1875rem] font-bold leading-snug tracking-tight text-ivory">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[0.8125rem] leading-relaxed text-ivory/60">
                    {s.summary}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {s.bullets.slice(0, 3).map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-[0.75rem] leading-relaxed text-ivory/65"
                      >
                        <span
                          className="mt-[0.45rem] h-px w-2.5 shrink-0 bg-gold/60"
                          aria-hidden
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-7">
                    {s.detail ? (
                      <button
                        onClick={() => setActive(s)}
                        aria-haspopup="dialog"
                        className="inline-flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-gold-soft transition-colors hover:text-gold"
                      >
                        Capability detail
                        <Plus
                          size={13}
                          className="transition-transform duration-500 group-hover:rotate-90"
                          aria-hidden
                        />
                      </button>
                    ) : (
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ivory/55 transition-colors hover:text-gold-soft"
                      >
                        Request scope
                        <ArrowUpRight size={13} aria-hidden />
                      </a>
                    )}
                  </div>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </motion.ul>

        <Reveal className="mt-14">
          <div className="flex flex-col items-start justify-between gap-6 border border-line-dark bg-white/[0.025] p-7 sm:flex-row sm:items-center sm:p-8">
            <p className="max-w-xl text-[0.9rem] leading-relaxed text-ivory/65">
              <span className="font-semibold text-ivory">
                Not sure which capability applies?
              </span>{" "}
              Send the specification, drawings or material take-off — our
              procurement and engineering teams will scope it together.
            </p>
            <ActionLink href="#contact" variant="ivory" className="shrink-0">
              Request RFQ
            </ActionLink>
          </div>
        </Reveal>
      </div>

      {/* Capability dialog */}
      <AnimatePresence>
        {active?.detail && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-md sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="svc-modal-title"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto bg-ivory shadow-2xl"
            >
              <div className="relative bg-ink p-8 text-ivory sm:p-10">
                <button
                  ref={closeRef}
                  onClick={() => setActive(null)}
                  aria-label="Close capability detail"
                  className="absolute right-4 top-4 grid h-10 w-10 place-items-center border border-ivory/15 text-ivory/70 transition-colors hover:border-gold hover:text-gold"
                >
                  <X size={17} aria-hidden />
                </button>
                <Eyebrow tone="light">{active.group}</Eyebrow>
                <h3
                  id="svc-modal-title"
                  className="display mt-4 max-w-md pr-8 text-[clamp(1.6rem,3vw,2.15rem)]"
                >
                  {active.detail.heading}
                </h3>
              </div>
              <div className="p-8 sm:p-10">
                <p className="text-[0.9375rem] leading-relaxed text-muted">
                  {active.detail.body}
                </p>
                <dl className="mt-8 grid gap-px bg-line sm:grid-cols-3">
                  {active.detail.highlights.map((h) => (
                    <div key={h.label} className="bg-ivory p-4">
                      <dt className="font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-muted/70">
                        {h.label}
                      </dt>
                      <dd className="mt-2 text-[0.875rem] font-bold text-ink">
                        {h.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
                  {active.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[0.8125rem] text-ink/75">
                      <Check size={15} className="mt-0.5 shrink-0 text-scarlet" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <ActionLink href="#contact" variant="scarlet" className="flex-1">
                    Request a quote
                  </ActionLink>
                  <button
                    onClick={() => setActive(null)}
                    className="eyebrow-mono px-2 py-3 text-muted transition-colors hover:text-ink"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
