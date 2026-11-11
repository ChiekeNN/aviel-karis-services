import { PROCESS_STEPS } from "@/lib/content";
import { ActionLink, Eyebrow, Reveal } from "./ui";

export default function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="relative overflow-hidden bg-ivory-2 py-24 lg:py-32"
    >
      <div className="shell">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal className="max-w-2xl">
            <Eyebrow index="04">How We Engage</Eyebrow>
            <h2
              id="process-title"
              className="display mt-5 text-[clamp(2rem,4.4vw,3.5rem)]"
            >
              A disciplined route from{" "}
              <em className="text-scarlet">specification to site.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ActionLink href="#contact" variant="ghost-dark">
              Start an engagement
            </ActionLink>
          </Reveal>
        </div>

        <ol className="mt-16 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((s, i) => (
            <Reveal
              as="li"
              key={s.step}
              delay={i * 0.08}
              className="group relative h-full bg-ivory-2 p-7 transition-colors duration-500 hover:bg-ivory lg:p-8"
            >
              <span
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-scarlet to-gold transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100"
                aria-hidden
              />
              <div className="flex items-baseline justify-between">
                <span className="display text-4xl text-ink/15 transition-colors duration-500 group-hover:text-gold-deep/40">
                  {s.step}
                </span>
                <span className="h-1.5 w-1.5 rotate-45 bg-gold/70" aria-hidden />
              </div>
              <h3 className="mt-10 text-[1.0625rem] font-bold tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted">
                {s.text}
              </p>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col justify-between gap-5 border-t border-ink/10 pt-6 sm:flex-row sm:items-center">
            <p className="max-w-xl text-[0.8125rem] leading-relaxed text-muted">
              Every engagement is priced through direct OEM channels and delivered
              under our Quality and zero-incident Safety policies.
            </p>
            <p className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-gold-deep">
              RFQ acknowledged within one business day
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
