import { Flag } from "lucide-react";
import { NAV, SERVICES, ADDRESS } from "@/lib/content";
import { Logo } from "./ui";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-400" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-5 text-sm">Upstream and midstream oil &amp; gas services, marine and industrial engineering contractor. Incorporated in Nigeria, 2015.</p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#008751]/50 bg-[#008751]/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
            <Flag size={14} aria-hidden /> Proudly Nigerian Content
          </div>
        </div>
        <nav aria-label="Footer quick links">
          <p className="text-sm font-semibold uppercase tracking-widest text-white">Quick Links</p>
          <ul className="mt-4 space-y-2 text-sm">{NAV.map((n) => <li key={n.href}><a href={n.href} className="hover:text-brand-orange">{n.label}</a></li>)}</ul>
        </nav>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-white">Services</p>
          <ul className="mt-4 space-y-2 text-sm">{SERVICES.slice(0, 6).map((s) => <li key={s.id}><a href="#services" className="hover:text-brand-orange">{s.title}</a></li>)}</ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-white">Compliance</p>
          <p className="mt-4 text-sm">Services delivered in line with our Quality Policy and zero-incident Safety Policy, conforming to international oil field client specifications. Supply chain certified by CIPSMN; PPE registered to EN standards.</p>
          <address className="mt-4 text-sm not-italic">{ADDRESS}</address>
        </div>
      </div>
      <div className="border-t border-brand-line-dark">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-6 py-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Aviel Karis Services Ltd. All rights reserved.</p>
          <p>Designed &amp; engineered by the Aviel Karis Digital Team.</p>
        </div>
      </div>
    </footer>
  );
}
