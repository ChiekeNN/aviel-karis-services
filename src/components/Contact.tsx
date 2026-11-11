"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Clock, Paperclip, Send, CheckCircle2, Loader2, Radio, Mail } from "lucide-react";
import { rfqSchema, SERVICE_CATEGORIES, type RfqInput } from "@/lib/rfq";
import { ADDRESS } from "@/lib/content";
import { Eyebrow, Reveal } from "./ui";

const inputCls =
  "mt-1.5 w-full rounded-lg border border-brand-line bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-crimson focus:ring-4 focus:ring-brand-crimson/10";

export default function Contact() {
  const [status, setStatus] = useState<{ kind: "idle" | "ok" | "error"; msg?: string }>({ kind: "idle" });
  const [fileName, setFileName] = useState<string>("");
  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm<RfqInput>({
    resolver: zodResolver(rfqSchema),
  });

  const onSubmit = async (data: RfqInput) => {
    setStatus({ kind: "idle" });
    try {
      const res = await fetch("/api/rfq", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = (await res.json()) as { ok: boolean; reference?: string; error?: string };
      if (!json.ok) throw new Error(json.error ?? "Submission failed");
      setStatus({ kind: "ok", msg: json.reference });
      reset(); setFileName("");
    } catch (e) {
      setStatus({ kind: "error", msg: e instanceof Error ? e.message : "Submission failed" });
    }
  };

  const Err = ({ m }: { m?: string }) => (m ? <p role="alert" className="mt-1 text-xs text-brand-crimson">{m}</p> : null);

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-brand-steel py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-12 flex flex-col items-center justify-between gap-4 rounded-xl bg-brand-crimson px-6 py-4 text-white sm:flex-row">
            <p className="flex items-center gap-3 font-semibold"><Radio className="animate-pulse" size={20} aria-hidden /> Inquiry lines monitored 7 days a week</p>
            <p className="text-sm text-white/85">Procurement requests are acknowledged within one business day.</p>
          </div>
        </Reveal>
        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <Eyebrow>RFQ &amp; Contact</Eyebrow>
            <h2 id="contact-title" className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Request a quotation or procurement inquiry</h2>
            <p className="mt-4 text-slate-600">Share your specifications and our CIPSMN-certified procurement and engineering teams will respond with a competitive, compliant quotation.</p>
            <address className="mt-8 space-y-4 not-italic">
              <div className="flex gap-4 rounded-xl bg-white p-5">
                <MapPin className="shrink-0 text-brand-crimson" aria-hidden />
                <div><p className="font-semibold">Head Office</p><p className="text-sm text-slate-600">{ADDRESS}</p></div>
              </div>
              <div className="flex gap-4 rounded-xl bg-white p-5">
                <Clock className="shrink-0 text-brand-crimson" aria-hidden />
                <div><p className="font-semibold">Working Hours</p><p className="text-sm text-slate-600">Monday – Friday: 8:00 AM – 5:00 PM (WAT)<br />Saturday: 9:00 AM – 2:00 PM · Supply logistics desk 24/7</p></div>
              </div>
              <div className="flex gap-4 rounded-xl bg-white p-5">
                <Mail className="shrink-0 text-brand-crimson" aria-hidden />
                <div><p className="font-semibold">Service Area</p><p className="text-sm text-slate-600">Niger Delta region, nationwide, and Sub-Saharan Africa.</p></div>
              </div>
            </address>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Request for quotation form" className="rounded-2xl border border-brand-line bg-white p-6 shadow-xl sm:p-8">
              {status.kind === "ok" && (
                <div role="status" className="mb-6 flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
                  <CheckCircle2 className="shrink-0" size={20} aria-hidden />
                  <span>Thank you — your request has been received. Reference: <strong>{status.msg}</strong>. Our team will be in touch shortly.</span>
                </div>
              )}
              {status.kind === "error" && <div role="alert" className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-brand-crimson">{status.msg}</div>}
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-medium">Full Name *<input {...register("name")} className={inputCls} autoComplete="name" aria-invalid={!!errors.name} /><Err m={errors.name?.message} /></label>
                <label className="text-sm font-medium">Corporate Email *<input {...register("email")} type="email" className={inputCls} autoComplete="email" aria-invalid={!!errors.email} /><Err m={errors.email?.message} /></label>
                <label className="text-sm font-medium">Phone *<input {...register("phone")} type="tel" className={inputCls} autoComplete="tel" placeholder="+234" aria-invalid={!!errors.phone} /><Err m={errors.phone?.message} /></label>
                <label className="text-sm font-medium">Company<input {...register("company")} className={inputCls} autoComplete="organization" /></label>
                <label className="text-sm font-medium">Service Category *
                  <select {...register("category")} defaultValue="" className={inputCls} aria-invalid={!!errors.category}>
                    <option value="" disabled>Select a service</option>
                    {SERVICE_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <Err m={errors.category?.message} />
                </label>
                <label className="text-sm font-medium">Project Location *<input {...register("location")} className={inputCls} placeholder="e.g. Onne, Rivers State" aria-invalid={!!errors.location} /><Err m={errors.location?.message} /></label>
              </div>
              <label className="mt-5 block text-sm font-medium">Specification Notes *
                <textarea {...register("notes")} rows={5} className={inputCls} placeholder="Item descriptions, quantities, standards, delivery timelines…" aria-invalid={!!errors.notes} />
                <Err m={errors.notes?.message} />
              </label>
              <div className="mt-5">
                <span className="text-sm font-medium">Attachment (specs, drawings, MTO)</span>
                <label className="mt-1.5 flex cursor-pointer items-center gap-3 rounded-lg border-2 border-dashed border-brand-line px-4 py-4 text-sm text-slate-500 transition hover:border-brand-orange">
                  <Paperclip size={18} aria-hidden />
                  <span className="truncate">{fileName || "Click to attach a file (PDF, DOCX, XLSX)"}</span>
                  <input
                    type="file" className="sr-only" accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg"
                    onChange={(e) => { const n = e.target.files?.[0]?.name ?? ""; setFileName(n); setValue("attachmentName", n || undefined); }}
                  />
                </label>
                <p className="mt-1 text-xs text-slate-400">File name is logged with your RFQ; our team will request the document by email.</p>
              </div>
              <button type="submit" disabled={isSubmitting} className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-crimson px-6 py-3.5 font-semibold text-white transition hover:bg-brand-red disabled:opacity-60">
                {isSubmitting ? <Loader2 className="animate-spin" size={18} aria-hidden /> : <Send size={18} aria-hidden />}
                {isSubmitting ? "Submitting…" : "Submit RFQ"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
