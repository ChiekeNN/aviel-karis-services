import { ArrowUpRight, Flag, Phone } from "lucide-react";
import {
  ADDRESS,
  NAV,
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICES,
  WHATSAPP_URL,
} from "@/lib/content";
import { Logo, WhatsAppIcon } from "./ui";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-ivory/60" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Closing call to action */}
      <div className="relative border-t border-line-dark">
        <div className="shell grid gap-8 py-16 lg:grid-cols-12 lg:items-center lg:py-20">
          <div className="lg:col-span-8">
            <p className="eyebrow-mono text-gold/80">Next step</p>
            <p id="footer-cta" className="display mt-4 text-[clamp(1.9rem,4vw,3.1rem)] text-ivory">
              Have a specification ready?{" "}
              <em className="text-gold-soft">Let&rsquo;s price it properly.</em>
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <a
              href="#contact"
              className="group inline-flex items-center gap-6 border border-ivory/20 px-7 py-5 transition-colors duration-500 hover:border-gold hover:bg-gold hover:text-ink"
            >
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em]">
                Request a quotation
              </span>
              <ArrowUpRight
                size={18}
                strokeWidth={1.5}
                className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden
              />
            </a>
          </div>
        </div>
        <div className="gold-rule" aria-hidden />
      </div>

      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo theme="light" />
          <p className="mt-6 max-w-xs text-[0.8125rem] leading-relaxed">
            Upstream and midstream oil &amp; gas services, marine and industrial
            engineering contractor. Incorporated in Nigeria, 2015.
          </p>
          <div className="mt-6 inline-flex items-center gap-2.5 border border-emerald-400/25 bg-emerald-400/[0.06] px-3 py-2 font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-emerald-300/90">
            <Flag size={12} aria-hidden /> Proudly Nigerian content
          </div>
        </div>

        <nav aria-label="Footer quick links" className="lg:col-span-2">
          <p className="font-mono text-[0.5625rem] uppercase tracking-[0.22em] text-ivory">
            Navigate
          </p>
          <ul className="mt-5 space-y-3 text-[0.8125rem]">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="link-underline transition-colors hover:text-gold-soft">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <p className="font-mono text-[0.5625rem] uppercase tracking-[0.22em] text-ivory">
            Capabilities
          </p>
          <ul className="mt-5 space-y-3 text-[0.8125rem]">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.id}>
                <a href="#services" className="link-underline transition-colors hover:text-gold-soft">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="font-mono text-[0.5625rem] uppercase tracking-[0.22em] text-ivory">
            Head Office
          </p>
          <address className="mt-5 max-w-[16rem] text-[0.8125rem] not-italic leading-relaxed">
            {ADDRESS}
          </address>
          <div className="mt-4 space-y-2.5 text-[0.75rem]">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-2.5 transition-colors hover:text-gold-soft"
            >
              <Phone size={13} className="text-gold/80" aria-hidden />
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 transition-colors hover:text-gold-soft"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 text-gold/80" />
              WhatsApp us
            </a>
          </div>
          <p className="mt-4 text-[0.75rem] leading-relaxed">
            Services delivered in line with our Quality Policy and zero-incident
            Safety Policy, conforming to international oilfield client
            specifications.
          </p>
          <p className="mt-4 font-mono text-[0.5625rem] uppercase leading-relaxed tracking-[0.14em] text-gold/85">
            CIPSMN supply chain · EN-registered PPE
          </p>
        </div>
      </div>

      {/* Wordmark */}
      <div className="shell relative">
        <p
          aria-hidden
          className="select-none border-t border-line-dark pt-8 text-center text-[clamp(2.5rem,11vw,9rem)] font-extrabold uppercase leading-none tracking-[-0.03em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.07)]"
        >
          Aviel Karis
        </p>
      </div>

      <div className="border-t border-line-dark">
        <div className="shell flex flex-col justify-between gap-3 py-6 font-mono text-[0.5625rem] uppercase tracking-[0.16em] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Aviel Karis Services Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <p>Incorporated 2015 · Rivers State, Nigeria</p>
            <a href="#home" className="text-ivory/70 transition-colors hover:text-gold">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
