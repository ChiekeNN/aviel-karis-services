import { CREDENTIALS } from "@/lib/content";
import { Marquee } from "./ui";

export default function Ticker() {
  return (
    <section
      aria-label="Accreditations and capabilities"
      className="relative border-y border-line-dark bg-ink py-5"
    >
      <Marquee items={CREDENTIALS} />
    </section>
  );
}
