import Image from "next/image";
import { Award, Eye, Handshake, ShieldCheck, Star, Target, Timer } from "lucide-react";
import { PILLARS } from "@/lib/content";
import { Eyebrow, Reveal } from "./ui";

const PILLAR_ICONS = [Handshake, Award, ShieldCheck, Timer, Star];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden bg-ivory py-24 lg:py-32">
      <div className="grid-lines-ink pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="shell relative">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-14">
          {/* Visual column */}
          <div className="lg:col-span-5">
            <Reveal>
              <figure className="group relative">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-800">
                  <Image
                    src="/images/fabrication.jpg"
                    alt="Welder fabricating a large-diameter steel pipeline spool in an industrial yard"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" aria-hidden />
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ivory/70">
                      Pipeline fabrication
                    </span>
                    <span className="font-mono text-[0.625rem] tracking-[0.2em] text-gold">
                      Nigeria
                    </span>
                  </figcaption>
                </div>

                <div className="absolute -bottom-10 right-4 w-48 border border-line bg-ivory p-5 shadow-[0_24px_60px_-30px_rgba(6,11,18,0.45)] sm:right-6 sm:w-56">
                  <p className="display text-4xl text-ink">100%</p>
                  <p className="mt-2 font-mono text-[0.5625rem] uppercase leading-relaxed tracking-[0.16em] text-muted">
                    Indigenous Nigerian content
                  </p>
                  <span className="mt-4 block h-px w-full bg-gradient-to-r from-gold to-transparent" aria-hidden />
                </div>
              </figure>
            </Reveal>
            <Reveal delay={0.15} className="mt-20 flex items-center gap-4">
              <Image
                src="/images/crew.jpg"
                alt="Nigerian oil and gas engineers in PPE on an industrial facility walkway"
                width={96}
                height={96}
                className="h-16 w-16 object-cover"
              />
              <p className="max-w-[15rem] text-[0.8125rem] leading-relaxed text-muted">
                Well-trained, highly motivated professionals — the operating
                standard behind every engagement.
              </p>
            </Reveal>
          </div>

          {/* Editorial column */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <Eyebrow index="01">The Company</Eyebrow>
              <h2
                id="about-title"
                className="display mt-5 text-[clamp(2rem,4vw,3.35rem)]"
              >
                An indigenous operational hub in the{" "}
                <em className="text-scarlet">heart of Port Harcourt.</em>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 text-[0.975rem] leading-relaxed text-muted">
                Incorporated in Nigeria in 2015, Aviel Karis Services Ltd operates
                from No 19 Obudu Street, Mile 1 Rumuwoji, Port Harcourt, Rivers
                State. From this hub we serve upstream and midstream operators
                across the Niger Delta region, nationwide, and throughout
                Sub-Saharan Africa.
              </p>
              <p className="mt-4 text-[0.975rem] leading-relaxed text-muted">
                Our work spans procurement and logistics, pipeline construction,
                flow control, process equipment, electrical and instrumentation,
                civil engineering, offshore marine support, fire safety, PPE, and
                equipment leasing and manpower — all delivered by well-trained and
                highly motivated professionals.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <blockquote className="relative mt-10 border-l border-gold/60 pl-7">
                <span
                  className="pointer-events-none absolute -left-1 -top-6 font-display text-7xl italic leading-none text-gold/25"
                  aria-hidden
                >
                  “
                </span>
                <p className="font-display text-2xl italic leading-snug text-ink sm:text-[1.75rem]">
                  Deliver what the customer wants, quickly and in the cheapest
                  possible way.
                </p>
                <footer className="mt-4 font-mono text-[0.5625rem] uppercase tracking-[0.26em] text-muted">
                  Operational Motto
                </footer>
              </blockquote>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Reveal delay={0.1}>
                <article className="group h-full border border-line bg-white/60 p-6 transition-colors duration-500 hover:border-gold/60">
                  <div className="flex items-center justify-between">
                    <Target className="text-scarlet" size={20} strokeWidth={1.6} aria-hidden />
                    <span className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-muted/80">
                      Mission
                    </span>
                  </div>
                  <p className="mt-5 text-[0.875rem] leading-relaxed text-ink/75">
                    To be a world-class oil and gas company providing clients
                    quality, efficient, and cost-effective service, delivered by
                    well-trained and highly motivated professionals.
                  </p>
                </article>
              </Reveal>
              <Reveal delay={0.18}>
                <article className="group h-full border border-line bg-white/60 p-6 transition-colors duration-500 hover:border-gold/60">
                  <div className="flex items-center justify-between">
                    <Eye className="text-gold-deep" size={20} strokeWidth={1.6} aria-hidden />
                    <span className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-muted/80">
                      Vision
                    </span>
                  </div>
                  <p className="mt-5 text-[0.875rem] leading-relaxed text-ink/75">
                    To be the foremost indigenous company providing quality and
                    unrivaled services to the Oil and Gas Industry worldwide.
                  </p>
                </article>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Core pillars */}
        <div className="mt-24 border-t border-line pt-10">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <Eyebrow>Core Pillars</Eyebrow>
            <p className="font-mono text-[0.5625rem] uppercase tracking-[0.22em] text-muted/70">
              Five commitments · One operating culture
            </p>
          </div>
          <ul className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-5">
            {PILLARS.map((p, i) => {
              const Icon = PILLAR_ICONS[i];
              return (
              <Reveal
                as="li"
                key={p.name}
                delay={i * 0.06}
                className="group relative h-full bg-ivory p-6 transition-colors duration-500 hover:bg-white"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.625rem] tracking-[0.2em] text-gold-deep">
                    0{i + 1}
                  </span>
                  <Icon
                    size={15}
                    className="text-ink/25 transition-colors group-hover:text-scarlet"
                    aria-hidden
                  />
                </div>
                <p className="mt-8 text-[0.95rem] font-bold tracking-tight text-ink">
                  {p.name}
                </p>
                <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted">
                  {p.text}
                </p>
                <span
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100"
                  aria-hidden
                />
              </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
