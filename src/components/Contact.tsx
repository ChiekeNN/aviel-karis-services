"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Paperclip,
  Radio,
  Send,
} from "lucide-react";
import { rfqSchema, SERVICE_CATEGORIES, type RfqInput } from "@/lib/rfq";
import { ADDRESS } from "@/lib/content";
import { Eyebrow, Reveal } from "./ui";

const inputCls =
  "mt-2 w-full border border-line bg-white px-4 py-3 text-[0.875rem] text-ink outline-none transition placeholder:text-muted/70 focus:border-gold focus:ring-2 focus:ring-gold/20";

const labelCls = "block font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-muted";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1.5 text-[0.6875rem] text-scarlet">
      {message}
    </p>
  );
}

const CHECKLIST = [
  "Item descriptions, quantities and units",
  "Applicable standards (OCTG, GRE, GRP, HDPE, EN)",
  "Delivery location and required timeline",
  "Drawings, data sheets or material take-off",
];

export default function Contact() {
  const [status, setStatus] = useState<{ kind: "idle" | "ok" | "error"; msg?: string }>({
    kind: "idle",
  });
  const [fileName, setFileName] = useState<string>("");
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RfqInput>({ resolver: zodResolver(rfqSchema) });

  const onSubmit = async (data: RfqInput) => {
    setStatus({ kind: "idle" });
    try {
      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok: boolean; reference?: string; error?: string };
      if (!json.ok) throw new Error(json.error ?? "Submission failed");
      setStatus({ kind: "ok", msg: json.reference });
      reset();
      setFileName("");
    } catch (e) {
      setStatus({
        kind: "error",
        msg: e instanceof Error ? e.message : "Submission failed",
      });
    }
  };

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
          <p className="flex items-center gap-3 font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-ivory/60">
            <Radio className="text-scarlet" size={13} aria-hidden />
            Inquiry lines monitored 7 days a week
          </p>
          <p className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-gold/80">
            Procurement requests acknowledged within one business day
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <Eyebrow index="08" tone="light">
              RFQ &amp; Contact
            </Eyebrow>
            <h2
              id="contact-title"
              className="display mt-5 text-[clamp(2rem,4.2vw,3.35rem)] text-ivory"
            >
              Bring us the specification.{" "}
              <em className="text-gold-soft">We&rsquo;ll scope the rest.</em>
            </h2>
            <p className="mt-6 max-w-md text-[0.9375rem] leading-relaxed text-ivory/60">
              Share your requirements and our CIPSMN-certified procurement and
              engineering teams will respond with a competitive, compliant
              quotation.
            </p>

            <address className="mt-10 space-y-0 border-t border-line-dark not-italic">
              {[
                { icon: MapPin, label: "Head Office", body: ADDRESS },
                {
                  icon: Clock,
                  label: "Working Hours",
                  body: "Monday – Friday: 8:00 AM – 5:00 PM (WAT). Saturday: 9:00 AM – 2:00 PM. Supply logistics desk 24/7.",
                },
                {
                  icon: Mail,
                  label: "Service Area",
                  body: "Niger Delta region, nationwide, and Sub-Saharan Africa.",
                },
              ].map((row) => (
                <div key={row.label} className="flex gap-5 border-b border-line-dark py-5">
                  <row.icon
                    size={17}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-gold"
                    aria-hidden
                  />
                  <div>
                    <p className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-ivory/60">
                      {row.label}
                    </p>
                    <p className="mt-2 text-[0.8125rem] leading-relaxed text-ivory/75">
                      {row.body}
                    </p>
                  </div>
                </div>
              ))}
            </address>

            <div className="mt-8">
              <p className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-gold/80">
                Include in your RFQ
              </p>
              <ul className="mt-4 space-y-2.5">
                {CHECKLIST.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-[0.8125rem] text-ivory/60">
                    <span className="mt-[0.45rem] h-px w-3 shrink-0 bg-gold/60" aria-hidden />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-7">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              aria-label="Request for quotation form"
              className="relative bg-ivory p-6 text-ink shadow-[0_40px_120px_-50px_rgba(0,0,0,0.8)] sm:p-9"
            >
              <div className="flex items-start justify-between gap-4 border-b border-line pb-5">
                <div>
                  <p className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-gold-deep">
                    Request for Quotation
                  </p>
                  <p className="mt-2 text-[1.0625rem] font-bold tracking-tight">
                    Procurement &amp; engineering inquiry
                  </p>
                </div>
                <span className="border border-ink/10 px-2.5 py-1 font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-muted">
                  RFQ
                </span>
              </div>

              {status.kind === "ok" && (
                <div
                  role="status"
                  className="mt-6 flex items-start gap-3 border border-emerald-700/20 bg-emerald-50 p-4 text-[0.8125rem] leading-relaxed text-emerald-900"
                >
                  <CheckCircle2 className="mt-0.5 shrink-0" size={18} aria-hidden />
                  <span>
                    Thank you — your request has been received. Reference:{" "}
                    <strong className="font-mono">{status.msg}</strong>. Our team will
                    be in touch shortly.
                  </span>
                </div>
              )}
              {status.kind === "error" && (
                <div
                  role="alert"
                  className="mt-6 border border-scarlet/20 bg-scarlet/5 p-4 text-[0.8125rem] text-scarlet-deep"
                >
                  {status.msg}
                </div>
              )}

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className={labelCls}>
                  Full Name *
                  <input
                    {...register("name")}
                    className={inputCls}
                    autoComplete="name"
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                  />
                  <FieldError message={errors.name?.message} />
                </label>
                <label className={labelCls}>
                  Corporate Email *
                  <input
                    {...register("email")}
                    type="email"
                    className={inputCls}
                    autoComplete="email"
                    placeholder="name@company.com"
                    aria-invalid={!!errors.email}
                  />
                  <FieldError message={errors.email?.message} />
                </label>
                <label className={labelCls}>
                  Phone *
                  <input
                    {...register("phone")}
                    type="tel"
                    className={inputCls}
                    autoComplete="tel"
                    placeholder="+234"
                    aria-invalid={!!errors.phone}
                  />
                  <FieldError message={errors.phone?.message} />
                </label>
                <label className={labelCls}>
                  Company
                  <input
                    {...register("company")}
                    className={inputCls}
                    autoComplete="organization"
                    placeholder="Organisation"
                  />
                </label>
                <label className={labelCls}>
                  Service Category *
                  <select
                    {...register("category")}
                    defaultValue=""
                    className={`${inputCls} appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10`}
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%235b6572' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                    }}
                    aria-invalid={!!errors.category}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICE_CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <FieldError message={errors.category?.message} />
                </label>
                <label className={labelCls}>
                  Project Location *
                  <input
                    {...register("location")}
                    className={inputCls}
                    placeholder="e.g. Onne, Rivers State"
                    aria-invalid={!!errors.location}
                  />
                  <FieldError message={errors.location?.message} />
                </label>
              </div>

              <label className={`${labelCls} mt-5`}>
                Specification Notes *
                <textarea
                  {...register("notes")}
                  rows={5}
                  className={`${inputCls} resize-y`}
                  placeholder="Item descriptions, quantities, standards, delivery timelines…"
                  aria-invalid={!!errors.notes}
                />
                <FieldError message={errors.notes?.message} />
              </label>

              <div className="mt-5">
                <span className={labelCls}>Attachment — specs, drawings, MTO</span>
                <label className="mt-2 flex cursor-pointer items-center gap-3 border border-dashed border-ink/20 px-4 py-3.5 text-[0.75rem] text-muted transition-colors hover:border-gold hover:bg-white">
                  <Paperclip size={16} aria-hidden />
                  <span className="truncate">
                    {fileName || "Attach a file (PDF, DOCX, XLSX · max 1)"}
                  </span>
                  <input
                    type="file"
                    className="sr-only"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg"
                    onChange={(e) => {
                      const n = e.target.files?.[0]?.name ?? "";
                      setFileName(n);
                      setValue("attachmentName", n || undefined);
                    }}
                  />
                </label>
                <p className="mt-2 text-[0.625rem] leading-relaxed text-muted/70">
                  The file name is logged with your RFQ; our team will request the
                  document by email.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group mt-7 inline-flex w-full items-center justify-between gap-3 bg-scarlet px-6 py-4 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-scarlet-deep disabled:opacity-60 btn-sheen"
              >
                <span>{isSubmitting ? "Submitting…" : "Submit RFQ"}</span>
                {isSubmitting ? (
                  <Loader2 className="animate-spin" size={17} aria-hidden />
                ) : (
                  <Send
                    size={17}
                    className="transition-transform duration-500 group-hover:translate-x-1"
                    aria-hidden
                  />
                )}
              </button>
              <p className="mt-4 text-[0.625rem] leading-relaxed text-muted/70">
                By submitting, you agree that Aviel Karis Services Ltd may contact
                you regarding this inquiry. Required fields are marked *.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
