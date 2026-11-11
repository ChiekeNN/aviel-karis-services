import { BadgeCheck, HardHat, Link2, ShieldCheck, Coins, Factory, Warehouse, Clock } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";

const CARDS = [
  { icon: BadgeCheck, title: "Quality Policy Statement", tag: "QMS", text: "Aviel Karis is committed to providing services that meet or exceed client expectations, serve the public good, and comply with all applicable statutory regulations." },
  { icon: HardHat, title: "Safety Protocols", tag: "Zero Incident", text: "A zero-incident commitment across every site and vessel, with strict conformance to international oil field client specifications." },
  { icon: Link2, title: "CIPSMN Supply Chain", tag: "Accredited", text: "Our supply chain team is certified by the Chartered Institute of Purchasing and Supply Management of Nigeria (CIPSMN)." },
  { icon: ShieldCheck, title: "EN Standards Compliance", tag: "EN > ANSI", text: "PPE registered to European (EN) standards that surpass US ANSI baselines, sourced via direct OEM partnerships." },
];

const GUARANTEE = [
  { icon: Factory, title: "Direct OEM Partnerships", text: "Buying direct from manufacturers removes intermediary mark-ups." },
  { icon: Coins, title: "Bulk & Inventory Financing", text: "Bulk discount capability and inventory financing protect project budgets." },
  { icon: Warehouse, title: "Warehousing & Clearing", text: "In-house warehousing, global forwarding and clearing shorten lead times." },
  { icon: Clock, title: "7-Day Responsiveness", text: "Communication monitored seven days a week for urgent field requirements." },
];

export default function Quality() {
  return (
    <section id="quality" aria-labelledby="quality-title" className="relative overflow-hidden bg-brand-dark py-24 text-white">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow dark>Quality, Safety &amp; Standards</Eyebrow>
          <h2 id="quality-title" className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">Compliance that oilfield clients can audit</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <article className="group h-full rounded-2xl border border-brand-line-dark bg-white/[0.03] p-8 backdrop-blur transition hover:border-brand-crimson/60 hover:bg-white/[0.06]">
                <div className="flex items-center justify-between">
                  <c.icon className="text-brand-crimson" size={28} aria-hidden />
                  <span className="rounded-full border border-brand-orange/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-brand-orange">{c.tag}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold">{c.title}</h3>
                <p className="mt-2 text-slate-400">{c.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="rounded-2xl bg-white p-8 text-brand-navy sm:p-10">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-crimson">Competitive Pricing &amp; Logistics Guarantee</p>
                <h3 className="mt-2 text-2xl font-bold">Quickly, and in the cheapest possible way</h3>
              </div>
              <p className="max-w-sm text-sm text-slate-600">How our operating model keeps costs down without compromising on quality or safety.</p>
            </div>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {GUARANTEE.map((g, i) => (
                <li key={g.title} className="border-t-2 border-brand-line pt-5 transition hover:border-brand-crimson">
                  <span className="text-xs font-bold text-brand-orange">0{i + 1}</span>
                  <g.icon className="mt-2 text-brand-navy" aria-hidden />
                  <p className="mt-3 font-bold">{g.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{g.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
