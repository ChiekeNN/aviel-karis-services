"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

function Counter({ to, suffix = "", from = 0 }: { to: number; suffix?: string; from?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(from);
  useEffect(() => {
    if (!inView) return;
    const c = animate(from, to, { duration: 1.6, ease: "easeOut", onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to, from]);
  return <span ref={ref}>{v}{suffix}</span>;
}

const KPIS = [
  { node: <Counter from={1990} to={2015} />, label: "Year Founded" },
  { node: <Counter to={100} suffix="%" />, label: "Indigenous Nigerian Content" },
  { node: <span>EN &amp; CIPSMN</span>, label: "Standards" },
  { node: <span><Counter to={24} />/7</span>, label: "Supply Logistics" },
];

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden bg-brand-dark pt-32 text-white">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-brand-crimson/20 blur-[120px]" aria-hidden />
      <div className="absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-brand-orange/10 blur-[120px]" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 lg:grid-cols-12 lg:pb-28">
        <div className="lg:col-span-7">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur">
            <MapPin size={14} className="text-brand-orange" aria-hidden /> Port Harcourt · Niger Delta · Sub-Saharan Africa
          </motion.p>
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Indigenous engineering capacity.<br />
            <span className="text-brand-crimson">Niger Delta</span> roots.<br />
            <span className="text-slate-300">Global procurement power.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mt-6 max-w-xl text-lg text-slate-400">
            Aviel Karis Services Ltd is an upstream and midstream oil &amp; gas services, marine and industrial engineering contractor — delivering what the customer wants, quickly and in the cheapest possible way.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-9 flex flex-wrap gap-3">
            <a href="#services" className="group inline-flex items-center gap-2 rounded-md bg-brand-crimson px-6 py-3.5 font-semibold transition hover:bg-brand-red">
              Explore Services <ArrowRight size={18} className="transition group-hover:translate-x-1" aria-hidden />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3.5 font-semibold transition hover:border-brand-orange hover:text-brand-orange">
              Get in Touch
            </a>
          </motion.div>
        </div>
        <motion.aside
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.7 }}
          className="lg:col-span-5" aria-label="Key performance indicators"
        >
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur">
            {KPIS.map((k) => (
              <div key={k.label} className="bg-brand-dark/80 p-6 sm:p-8">
                <p className="text-3xl font-extrabold tracking-tight sm:text-4xl">{k.node}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-brand-orange">{k.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-400 backdrop-blur">
            <span className="font-semibold text-white">Incorporated in Nigeria, 2015.</span> Headquartered at No 19 Obudu Street, Mile 1 Rumuwoji, Port Harcourt.
          </div>
        </motion.aside>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-brand-crimson via-brand-orange to-brand-crimson" aria-hidden />
    </section>
  );
}
