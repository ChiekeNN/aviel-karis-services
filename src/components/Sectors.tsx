"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SECTORS } from "@/lib/content";
import { Eyebrow, ICONS, Reveal } from "./ui";

const IMAGES: Record<string, { src: string; alt: string; caption: string }> = {
  "01": {
    src: "/images/hero-offshore.jpg",
    alt: "Offshore production platform illuminated at dusk",
    caption: "Upstream production support",
  },
  "02": {
    src: "/images/fabrication.jpg",
    alt: "Welder fabricating a steel pipeline spool",
    caption: "Pipeline fabrication & laying",
  },
  "03": {
    src: "/images/marine.jpg",
    alt: "Offshore support vessel navigating a mangrove creek at sunrise",
    caption: "Marine logistics, Niger Delta",
  },
  "04": {
    src: "/images/crew.jpg",
    alt: "Engineers in PPE standing inside an industrial process facility",
    caption: "Industrial facility services",
  },
  "05": {
    src: "/images/civil.jpg",
    alt: "Aerial view of road and civil infrastructure construction",
    caption: "Civil & structural works",
  },
};

export default function Sectors() {
  const [current, setCurrent] = useState(0);
  const sector = SECTORS[current];
  const image = IMAGES[sector.index];

  return (
    <section
      id="sectors"
      aria-labelledby="sectors-title"
      className="relative overflow-hidden bg-ivory py-24 lg:py-32"
    >
      <div className="shell">
        <Reveal className="max-w-3xl">
          <Eyebrow index="03">Sectors We Serve</Eyebrow>
          <h2
            id="sectors-title"
            className="display mt-5 text-[clamp(2rem,4.4vw,3.5rem)]"
          >
            Built for the terrains and standards of{" "}
            <em className="text-scarlet">the Niger Delta.</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Changing visual */}
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink">
              <AnimatePresence mode="wait">
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-ivory/75">
                  {image.caption}
                </p>
                <span className="font-mono text-[0.625rem] tracking-[0.2em] text-gold">
                  {sector.index} / 05
                </span>
              </div>
              <span
                className="absolute left-0 top-0 h-10 w-px bg-gold/70"
                aria-hidden
              />
            </div>
            <p className="mt-5 max-w-md text-[0.8125rem] leading-relaxed text-muted">
              From swamp terrain pipeline spreads to offshore support and heavy
              civil works, our delivery model adapts to the environment — not the
              other way around.
            </p>
          </Reveal>

          {/* Sector list */}
          <div className="lg:col-span-6">
            <ul className="border-t border-line">
              {SECTORS.map((s, i) => {
                const Icon = ICONS[s.icon];
                const selected = i === current;
                return (
                  <Reveal
                    as="li"
                    key={s.name}
                    delay={i * 0.05}
                    className="border-b border-line"
                  >
                      <button
                        onClick={() => setCurrent(i)}
                        onMouseEnter={() => setCurrent(i)}
                        onFocus={() => setCurrent(i)}
                        aria-pressed={selected}
                        className="group w-full py-6 text-left"
                      >
                        <div className="flex items-start gap-5">
                          <span
                            className={`mt-1 font-mono text-[0.625rem] tracking-[0.2em] transition-colors ${
                              selected ? "text-scarlet" : "text-muted/70"
                            }`}
                          >
                            {s.index}
                          </span>
                          <div className="flex-1">
                            <div className="flex items-center justify-between gap-4">
                              <h3
                                className={`text-[1.05rem] font-bold tracking-tight transition-colors duration-300 sm:text-[1.15rem] ${
                                  selected ? "text-ink" : "text-ink/70 group-hover:text-ink"
                                }`}
                              >
                                {s.name}
                              </h3>
                              <span
                                className={`grid h-9 w-9 shrink-0 place-items-center border transition-all duration-500 ${
                                  selected
                                    ? "border-gold/60 bg-gold/10 text-gold-deep"
                                    : "border-line text-ink/30 group-hover:border-gold/40 group-hover:text-gold-deep"
                                }`}
                              >
                                <Icon size={16} strokeWidth={1.6} aria-hidden />
                              </span>
                            </div>
                            <AnimatePresence initial={false}>
                              {selected && (
                                <motion.p
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                  className="overflow-hidden pr-10 text-[0.8125rem] leading-relaxed text-muted"
                                >
                                  <span className="block pt-2">{s.text}</span>
                                </motion.p>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </button>
                  </Reveal>
                );
              })}
            </ul>
            <div className="mt-8 flex items-center justify-between gap-4">
              <p className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-muted/70">
                05 sectors · One supply chain
              </p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:text-scarlet"
              >
                Discuss your project
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
