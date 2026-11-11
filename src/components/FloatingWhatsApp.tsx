import { PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/content";
import { WhatsAppIcon } from "./ui";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with Aviel Karis Services on WhatsApp at ${PHONE_DISPLAY}`}
      className="group fixed bottom-6 right-5 z-40 grid h-12 w-12 place-items-center rounded-full border border-gold/40 bg-ink/90 text-gold shadow-[0_18px_40px_-18px_rgba(0,0,0,0.8)] backdrop-blur-md transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-ink sm:bottom-8 sm:right-8"
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap border border-line-dark bg-ink px-3 py-2 font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-ivory/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
        WhatsApp us
      </span>
    </a>
  );
}
