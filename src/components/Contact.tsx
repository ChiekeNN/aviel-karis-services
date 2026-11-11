import { ArrowUpRight, Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import {
  ADDRESS,
  EMAIL,
  EMAIL_URL,
  MAPS_URL,
  MAP_EMBED_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
  WORKING_HOURS,
} from "@/lib/content";
import { ActionLink, Eyebrow, Reveal, WhatsAppIcon } from "./ui";

const CHECKLIST = [
  "Item descriptions, quantities and units",
  "Applicable standards (OCTG, GRE, GRP, HDPE, EN)",
  "Delivery location and required timeline",
  "Drawings, data sheets or material take-off",
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden bg-ink py-24 text-ivory grain lg:py-32"
    >
      <div className="grid-lines absolute inset-0 opacity-40" aria-hidden />
      <div
        className="absolute -bottom-40 left-1/3 h-[480px] w-[480px] rounded-full bg-scarlet/10 blur-[160px]"
        aria-hidden
      />

      <div className="shell relative">
        <div className="flex flex-col justify-between gap-4 border-b border-line-dark pb-5 sm:flex-row sm:items-center">
          <p className="eyebrow-mono flex items-center gap-3 text-ivory/60">
            <Clock size={13} className="text-gold" aria-hidden />
            Call or WhatsApp · {WORKING_HOURS}
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-gold/90 transition-colors hover:text-gold-soft"
          >
            Procurement desk · {PHONE_DISPLAY}
            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </a>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <Eyebrow index="08" tone="light">
              Contact &amp; Quotations
            </Eyebrow>
            <h2
              id="contact-title"
              className="display mt-5 text-[clamp(2rem,4.2vw,3.35rem)] text-ivory"
            >
              Talk to our{" "}
              <em className="text-gold-soft">procurement desk.</em>
            </h2>
            <p className="mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-ivory/65">
              Call, email or send us a WhatsApp message with your requirement —
              item descriptions, quantities, standards, delivery location and
              timeline. Our team will respond with a competitive, compliant
              quotation.
            </p>

            <div className="mt-10 border-t border-line-dark">
              {/* WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Chat with Aviel Karis Services on WhatsApp at ${PHONE_DISPLAY}`}
                className="group flex items-start gap-5 border-b border-line-dark py-6 transition-colors duration-500 hover:bg-white/[0.025] sm:gap-6"
              >
                <span className="mt-0.5 grid h-12 w-12 shrink-0 place-items-center border border-gold/40 text-gold transition-colors duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-gold/90">
                      WhatsApp · fastest response
                    </p>
                    <ArrowUpRight
                      size={16}
                      className="text-ivory/30 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold"
                      aria-hidden
                    />
                  </div>
                  <p className="mt-2 text-lg font-semibold tracking-tight text-ivory">
                    {PHONE_DISPLAY}
                  </p>
                  <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-ivory/55">
                    Send your specification and attach drawings or a material
                    take-off directly in the chat.
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={EMAIL_URL}
                aria-label={`Email Aviel Karis Services at ${EMAIL}`}
                className="group flex items-start gap-5 border-b border-line-dark py-6 transition-colors duration-500 hover:bg-white/[0.025] sm:gap-6"
              >
                <span className="mt-0.5 grid h-12 w-12 shrink-0 place-items-center border border-ivory/15 text-gold-soft transition-colors duration-500 group-hover:border-gold/60">
                  <Mail size={19} strokeWidth={1.5} aria-hidden />
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-ivory/50">
                      Email · tenders &amp; documents
                    </p>
                    <ArrowUpRight
                      size={16}
                      className="text-ivory/30 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold"
                      aria-hidden
                    />
                  </div>
                  <p className="mt-2 break-all text-lg font-semibold tracking-tight text-ivory">
                    {EMAIL}
                  </p>
                  <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-ivory/55">
                    Formal requests, drawings and tender documents — quoting
                    starts automatically.
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${PHONE_TEL}`}
                aria-label={`Call Aviel Karis Services at ${PHONE_DISPLAY}`}
                className="group flex items-start gap-5 border-b border-line-dark py-6 transition-colors duration-500 hover:bg-white/[0.025] sm:gap-6"
              >
                <span className="mt-0.5 grid h-12 w-12 shrink-0 place-items-center border border-ivory/15 text-gold-soft transition-colors duration-500 group-hover:border-gold/60">
                  <Phone size={19} strokeWidth={1.5} aria-hidden />
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-ivory/50">
                      Call the desk
                    </p>
                    <ArrowUpRight
                      size={16}
                      className="text-ivory/30 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold"
                      aria-hidden
                    />
                  </div>
                  <p className="mt-2 text-lg font-semibold tracking-tight text-ivory">
                    {PHONE_DISPLAY}
                  </p>
                  <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-ivory/55">
                    {WORKING_HOURS}
                  </p>
                </div>
              </a>

              {/* Office */}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open the Aviel Karis head office in Google Maps"
                className="group flex items-start gap-5 border-b border-line-dark py-6 transition-colors duration-500 hover:bg-white/[0.025] sm:gap-6"
              >
                <span className="mt-0.5 grid h-12 w-12 shrink-0 place-items-center border border-ivory/15 text-gold-soft transition-colors duration-500 group-hover:border-gold/60">
                  <MapPin size={19} strokeWidth={1.5} aria-hidden />
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-ivory/50">
                      Head office
                    </p>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ivory/40 transition-colors group-hover:text-gold">
                      <Navigation size={11} aria-hidden /> Directions
                    </span>
                  </div>
                  <p className="mt-2 max-w-md text-[0.875rem] leading-relaxed text-ivory/75">
                    {ADDRESS}
                  </p>
                </div>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-5">
            <div className="relative bg-ivory p-7 text-ink shadow-[0_40px_120px_-50px_rgba(0,0,0,0.8)] sm:p-8">
              <span className="absolute left-0 top-0 h-12 w-px bg-gold" aria-hidden />
              <p className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-gold-deep">
                Request for quotation
              </p>
              <h3 className="display mt-4 text-[1.6rem] leading-tight">
                One message is all it takes.
              </h3>
              <p className="mt-4 text-[0.8125rem] leading-relaxed text-muted">
                No forms to fill. Send the requirement on WhatsApp — with your
                drawings or material take-off attached — and our procurement team
                will take it from there.
              </p>

              <ActionLink
                href={WHATSAPP_URL}
                variant="scarlet"
                external
                className="mt-6 w-full"
              >
                <span className="flex items-center gap-2.5">
                  <WhatsAppIcon className="h-4 w-4" />
                  Message us on WhatsApp
                </span>
              </ActionLink>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${PHONE_TEL}`}
                  aria-label={`Call Aviel Karis Services at ${PHONE_DISPLAY}`}
                  className="inline-flex items-center justify-center gap-2 border border-ink/20 px-4 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-ivory"
                >
                  <Phone size={14} aria-hidden />
                  Call
                </a>
                <a
                  href={EMAIL_URL}
                  aria-label={`Email Aviel Karis Services at ${EMAIL}`}
                  className="inline-flex items-center justify-center gap-2 border border-ink/20 px-4 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-ivory"
                >
                  <Mail size={14} aria-hidden />
                  Email
                </a>
              </div>

              <div className="mt-7 border-t border-line pt-6">
                <p className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-muted">
                  What to include
                </p>
                <ul className="mt-4 space-y-2.5">
                  {CHECKLIST.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-3 text-[0.8125rem] leading-relaxed text-ink/75"
                    >
                      <span
                        className="mt-[0.45rem] h-px w-3 shrink-0 bg-gold-deep/70"
                        aria-hidden
                      />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 border-t border-line pt-4 font-mono text-[0.5625rem] uppercase leading-relaxed tracking-[0.16em] text-muted/80">
                Phone · WhatsApp · Email · {WORKING_HOURS}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Location map */}
        <Reveal className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4 border-t border-line-dark pt-8">
            <div>
              <p className="eyebrow-mono text-gold/90">Find us</p>
              <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-ivory/70">
                {ADDRESS}
              </p>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-ivory/20 px-5 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-ivory transition-colors hover:border-gold hover:bg-gold hover:text-ink"
            >
              <Navigation size={14} aria-hidden />
              Get directions
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </a>
          </div>

          <div className="relative mt-6 border border-line-dark bg-ink-800 p-2 sm:p-3">
            <div className="relative h-[300px] w-full overflow-hidden sm:h-[380px] lg:h-[420px]">
              <iframe
                title="Google Map showing the Aviel Karis Services Ltd head office at No 19 Obudu Street, Mile 1 Rumuwoji, Port Harcourt"
                src={MAP_EMBED_URL}
                className="absolute inset-0 h-full w-full border-0 grayscale-[0.15] contrast-[1.02]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <span
              className="pointer-events-none absolute left-0 top-0 h-10 w-px bg-gold/70"
              aria-hidden
            />
            <span
              className="pointer-events-none absolute bottom-0 right-0 h-10 w-px bg-gold/70"
              aria-hidden
            />
            <div className="flex flex-wrap items-center justify-between gap-2 px-2 pb-1 pt-3 sm:px-3">
              <p className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ivory/40">
                Mile 1 Rumuwoji · Port Harcourt · Rivers State
              </p>
              <p className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-gold/70">
                No 19 Obudu Street
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
