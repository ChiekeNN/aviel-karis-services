import { Target, Eye, Flag, Handshake, Award, ShieldCheck, Timer, Star } from "lucide-react";
import { PILLARS } from "@/lib/content";
import { Eyebrow, Reveal } from "./ui";

const pillarIcons = [Handshake, Award, ShieldCheck, Timer, Star];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>About Us</Eyebrow>
            <h2 id="about-title" className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              An indigenous operational hub in the heart of Port Harcourt
            </h2>
            <p className="mt-6 text-slate-600">
              Incorporated in Nigeria in 2015, Aviel Karis Services Ltd operates from No 19 Obudu Street, Mile 1 Rumuwoji, Port Harcourt, Rivers State. From this hub we serve upstream and midstream operators across the Niger Delta region, nationwide, and throughout Sub-Saharan Africa.
            </p>
            <p className="mt-4 text-slate-600">
              Our work spans procurement and logistics, pipeline construction, flow control, process equipment, electrical and instrumentation, civil engineering, offshore marine support, fire safety, PPE, and equipment leasing and manpower — all delivered by well-trained and highly motivated professionals.
            </p>
            <blockquote className="mt-8 border-l-4 border-brand-crimson bg-brand-steel p-5 text-lg font-semibold italic text-brand-navy">
              “Deliver what the customer wants, quickly and in the cheapest possible way.”
              <footer className="mt-2 text-xs font-semibold not-italic uppercase tracking-widest text-slate-500">Operational Motto</footer>
            </blockquote>
          </Reveal>
          <div className="grid gap-5">
            <Reveal delay={0.1}>
              <article className="rounded-2xl bg-brand-dark p-8 text-white">
                <Target className="text-brand-crimson" aria-hidden />
                <h3 className="mt-4 text-xl font-bold">Mission</h3>
                <p className="mt-2 text-slate-300">To be a world-class oil and gas company providing clients quality, efficient, and cost-effective service, delivered by well-trained and highly motivated professionals.</p>
              </article>
            </Reveal>
            <Reveal delay={0.2}>
              <article className="rounded-2xl border border-brand-line p-8">
                <Eye className="text-brand-orange" aria-hidden />
                <h3 className="mt-4 text-xl font-bold">Vision</h3>
                <p className="mt-2 text-slate-600">To be the foremost indigenous company providing quality and unrivaled services to the Oil and Gas Industry worldwide.</p>
              </article>
            </Reveal>
          </div>
        </div>

        <div className="mt-20">
          <Reveal><h3 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Core Pillars</h3></Reveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PILLARS.map((p, i) => {
              const Icon = pillarIcons[i];
              return (
                <Reveal key={p.name} delay={i * 0.07}>
                  <li className="group h-full rounded-xl border border-brand-line bg-white p-6 transition hover:-translate-y-1 hover:border-brand-crimson hover:shadow-xl">
                    <Icon className="text-brand-crimson transition group-hover:scale-110" aria-hidden />
                    <p className="mt-4 font-bold">{p.name}</p>
                    <p className="mt-1 text-sm text-slate-600">{p.text}</p>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>

        <Reveal className="mt-20">
          <div className="relative overflow-hidden rounded-2xl bg-brand-dark p-8 text-white sm:p-12">
            <div className="absolute right-0 top-0 h-full w-2 bg-gradient-to-b from-[#008751] via-white to-[#008751]" aria-hidden />
            <div className="grid items-center gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange"><Flag size={14} aria-hidden /> Local Content Mandate</p>
                <h3 className="mt-3 text-2xl font-bold sm:text-3xl">Indigenous empowerment, built into how we work</h3>
                <p className="mt-4 text-slate-300">
                  As a 100% indigenous Nigerian company, Aviel Karis champions local content in line with the growth of the Nigerian oil &amp; gas industry — developing Nigerian technical talent, engaging local supply chains, and retaining value within the Niger Delta communities where we operate.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
                <p className="text-5xl font-extrabold text-brand-crimson">100%</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-slate-300">Indigenous Nigerian Content</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
