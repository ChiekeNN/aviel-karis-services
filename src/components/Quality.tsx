import Image from "next/image";
import {
  BadgeCheck,
  Coins,
  Factory,
  HardHat,
  Link2,
  ShieldCheck,
  Timer,
  Warehouse,
} from "lucide-react";
import { ActionLink, Eyebrow, Reveal, SectionHead } from "./ui";

const STANDARDS = [
  {
    icon: BadgeCheck,
    tag: "QMS",
    title: "Quality Policy Statement",
    text: "Committed to services that meet or exceed client expectations, serve the public good, and comply with all applicable statutory regulations.",
  },
  {
    icon: HardHat,
    tag: "Zero incident",
    title: "Safety Protocols",
    text: "A zero-incident commitment across every site and vessel, with strict conformance to international oil field client specifications.",
  },
  {
    icon: Link2,
    tag: "Accredited",
    title: "CIPSMN Supply Chain",
    text: "Our supply chain team is certified by the Chartered Institute of Purchasing and Supply Management of Nigeria (CIPSMN).",
  },
  {
    icon: ShieldCheck,
    tag: "EN > ANSI",
    title: "EN Standards Compliance",
    text: "PPE registered to European (EN) standards that surpass US ANSI baselines, sourced via direct OEM partnerships.",
  },
];

const GUARANTEE = [
  {
    icon: Factory,
    title: "Direct OEM Partnerships",
    text: "Buying direct from manufacturers removes intermediary mark-ups.",
  },
  {
    icon: Coins,
    title: "Bulk & Inventory Financing",
    text: "Bulk discount capability and inventory financing protect project budgets.",
  },
  {
    icon: Warehouse,
    title: "Warehousing & Clearing",
    text: "In-house warehousing, global forwarding and clearing shorten lead times.",
  },
  {
    icon: Timer,
    title: "7-Day Responsiveness",
    text: "Communication monitored seven days a week for urgent field requirements.",
  },
];

export default function Quality() {
  return (
    <section
      id="quality"
      aria-labelledby="quality-title"
      className="relative overflow-hidden bg-ink py-24 text-ivory grain lg:py-32"
    >
      <div className="grid-lines absolute inset-0 opacity-40" aria-hidden />
      <div
        className="absolute -right-32 top-24 h-[420px] w-[420px] rounded-full bg-gold/10 blur-[150px]"
        aria-hidden
      />

      <div className="shell relative">
        <SectionHead
          index="05"
          eyebrow="Quality, Safety & Standards"
          tone="light"
          title={
            <>
              Compliance that oilfield clients{" "}
              <em className="text-gold-soft">can audit.</em>
            </>
          }
          lead="Documented policies, accredited supply chains and standards-led sourcing — the assurance layer behind every scope we accept."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <figure className="group relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-800">
                <Image
                  src="/images/crew.jpg"
                  alt="Aviel Karis engineers in high-visibility PPE and hard hats inside an industrial facility"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.03]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent"
                  aria-hidden
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-gold">
                    Safety first
                  </p>
                  <p className="mt-2 max-w-xs text-[0.9375rem] leading-snug text-ivory/85">
                    Every site and vessel operates to a zero-incident commitment.
                  </p>
                </figcaption>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-line-dark pt-4">
                <span className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-ivory/60">
                  Standards reference
                </span>
                <span className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-ivory/70">
                  QMS · HSE · CIPSMN · EN
                </span>
              </div>
            </figure>
          </Reveal>

          <div className="lg:col-span-7">
            <ul className="border-t border-line-dark">
              {STANDARDS.map((s, i) => (
                <Reveal
                  as="li"
                  key={s.title}
                  delay={i * 0.06}
                  className="group border-b border-line-dark py-6 transition-colors duration-500 hover:bg-white/[0.025]"
                >
                  <div className="flex items-start gap-5 px-1 sm:gap-6">
                    <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center border border-ivory/12 text-gold-soft transition-colors duration-500 group-hover:border-gold/50">
                      <s.icon size={19} strokeWidth={1.5} aria-hidden />
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-[1.0625rem] font-bold tracking-tight text-ivory">
                          {s.title}
                        </h3>
                        <span className="font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-gold/85">
                          {s.tag}
                        </span>
                      </div>
                      <p className="mt-2 max-w-xl text-[0.8125rem] leading-relaxed text-ivory/60">
                        {s.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.15}>
              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-3 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-ivory/70 transition-colors hover:text-gold-soft"
              >
                Request our quality &amp; HSE documentation
                <span className="h-px w-8 bg-current transition-all duration-500 group-hover:w-12" aria-hidden />
              </a>
            </Reveal>
          </div>
        </div>

        {/* Cost discipline panel */}
        <Reveal className="mt-16">
          <div className="relative overflow-hidden bg-ivory p-8 text-ink sm:p-10">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="eyebrow-mono text-scarlet">
                  Competitive Pricing &amp; Logistics
                </p>
                <h3 className="display mt-4 max-w-xl text-[clamp(1.5rem,2.6vw,2.1rem)]">
                  Quickly, and in the cheapest possible way.
                </h3>
              </div>
              <p className="max-w-xs text-[0.8125rem] leading-relaxed text-muted">
                How our operating model keeps costs down without compromising on
                quality or safety.
              </p>
            </div>
            <ul className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
              {GUARANTEE.map((g, i) => (
                <li key={g.title} className="group bg-ivory p-5 transition-colors hover:bg-white">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.5625rem] tracking-[0.2em] text-gold-deep">
                      0{i + 1}
                    </span>
                    <g.icon size={17} strokeWidth={1.5} className="text-ink/40 transition-colors group-hover:text-scarlet" aria-hidden />
                  </div>
                  <p className="mt-8 text-[0.875rem] font-bold tracking-tight">{g.title}</p>
                  <p className="mt-2 text-[0.75rem] leading-relaxed text-muted">{g.text}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
              <p className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-muted/80">
                Procurement · Warehousing · Forwarding · Clearing
              </p>
              <ActionLink href="#contact" variant="ghost-dark">
                Request pricing
              </ActionLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
