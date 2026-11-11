"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { FAQS, WHATSAPP_URL } from "@/lib/content";
import { ActionLink, Eyebrow, Reveal } from "./ui";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-ivory-2 py-24 lg:py-32"
    >
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow index="07">Due Diligence</Eyebrow>
              <h2
                id="faq-title"
                className="display mt-5 text-[clamp(2rem,4vw,3.1rem)]"
              >
                Questions procurement teams{" "}
                <em className="text-scarlet">usually ask.</em>
              </h2>
              <p className="mt-6 text-[0.875rem] leading-relaxed text-muted">
                Short answers on standards, coverage and how our supply chain
                works. For anything specific to your scope, our team responds
                within one business day.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-9">
              <ActionLink href={WHATSAPP_URL} variant="ghost-dark" external>
                Ask on WhatsApp
              </ActionLink>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-12 border-t border-ink/10 pt-6">
                <p className="font-mono text-[0.5625rem] uppercase tracking-[0.22em] text-muted/70">
                  Head office
                </p>
                <p className="mt-3 max-w-xs text-[0.8125rem] leading-relaxed text-ink/70">
                  No 19 Obudu Street, Mile 1 Rumuwoji, Port Harcourt, Rivers State,
                  Nigeria.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <ul className="border-t border-ink/12">
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <Reveal
                    as="li"
                    key={f.q}
                    delay={i * 0.04}
                    className="border-b border-ink/12"
                  >
                      <h3>
                        <button
                          onClick={() => setOpen(isOpen ? null : i)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-${i}`}
                          className="group flex w-full items-start justify-between gap-6 py-6 text-left"
                        >
                          <span className="flex items-start gap-5">
                            <span className="mt-1 font-mono text-[0.5625rem] tracking-[0.18em] text-gold-deep">
                              0{i + 1}
                            </span>
                            <span
                              className={`text-[0.9375rem] font-semibold leading-snug tracking-tight transition-colors duration-300 sm:text-base ${
                                isOpen ? "text-ink" : "text-ink/70 group-hover:text-ink"
                              }`}
                            >
                              {f.q}
                            </span>
                          </span>
                          <span
                            className={`grid h-8 w-8 shrink-0 place-items-center border transition-all duration-500 ${
                              isOpen
                                ? "border-ink bg-ink text-ivory"
                                : "border-ink/15 text-ink/50 group-hover:border-gold/70 group-hover:text-gold-deep"
                            }`}
                          >
                            {isOpen ? (
                              <Minus size={14} aria-hidden />
                            ) : (
                              <Plus size={14} aria-hidden />
                            )}
                          </span>
                        </button>
                      </h3>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`faq-${i}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="max-w-2xl pb-7 pl-10 pr-12 text-[0.8438rem] leading-relaxed text-muted">
                              {f.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
