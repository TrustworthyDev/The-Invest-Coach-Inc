"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { pillars } from "@/data/site";

type Errors = Partial<Record<"name" | "email" | "services" | "message", string>>;

const timelines = ["As soon as possible", "Within 1–3 months", "3–6 months", "Just exploring"];
const budgets = [
  "Not sure yet",
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
];

const fieldClass =
  "w-full rounded-xl border border-gold-400/20 bg-ink-950/60 px-4 py-3 text-[0.95rem] text-mist-100 placeholder:text-mist-500 transition-colors duration-200 hover:border-gold-400/35 focus:border-gold-300 focus:outline-none";

const labelClass = "mb-2 block text-[0.82rem] font-bold tracking-wide text-mist-300";

export default function ProjectForm() {
  const router = useRouter();
  const [services, setServices] = useState<string[]>([]);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  const toggleService = (name: string) =>
    setServices((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name],
    );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      website: String(data.get("website") ?? "").trim(),
      budget: String(data.get("budget") ?? ""),
      timeline: String(data.get("timeline") ?? ""),
      message: String(data.get("message") ?? "").trim(),
      services,
      // Honeypot — real visitors never fill this.
      company_url: String(data.get("company_url") ?? ""),
    };

    const nextErrors: Errors = {};
    if (payload.name.length < 2) nextErrors.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(payload.email))
      nextErrors.email = "Please enter a valid email address.";
    if (services.length === 0) nextErrors.services = "Select at least one area you'd like help with.";
    if (payload.message.length < 10)
      nextErrors.message = "A sentence or two about your goals helps us prepare.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      form.querySelector<HTMLElement>("[data-invalid='true']")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      router.push("/start-a-project/thank-you");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="panel rounded-3xl p-6 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div data-invalid={Boolean(errors.name)}>
          <label className={labelClass} htmlFor="name">
            Full name <span className="text-gold-300">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className={fieldClass}
            placeholder="Jane Alvarez"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-[0.8rem] font-semibold text-red-300">
              {errors.name}
            </p>
          )}
        </div>

        <div data-invalid={Boolean(errors.email)}>
          <label className={labelClass} htmlFor="email">
            Email <span className="text-gold-300">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            className={fieldClass}
            placeholder="jane@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-[0.8rem] font-semibold text-red-300">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className={fieldClass}
            placeholder="(305) 555-0142"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={fieldClass}
            placeholder="Company name"
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="website">
            Current website
          </label>
          <input
            id="website"
            name="website"
            type="url"
            inputMode="url"
            autoComplete="url"
            className={fieldClass}
            placeholder="https://"
          />
        </div>
      </div>

      <fieldset className="mt-8" data-invalid={Boolean(errors.services)}>
        <legend className={labelClass}>
          What can we help with? <span className="text-gold-300">*</span>
        </legend>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {pillars.map((p) => {
            const checked = services.includes(p.name);
            return (
              <label
                key={p.slug}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-[0.92rem] font-semibold transition-colors duration-200 ${
                  checked
                    ? "border-gold-300/70 bg-gold-400/12 text-gold-100"
                    : "border-gold-400/18 text-mist-300 hover:border-gold-400/40"
                }`}
              >
                <input
                  type="checkbox"
                  name="services"
                  value={p.name}
                  checked={checked}
                  onChange={() => toggleService(p.name)}
                  className="h-4 w-4 shrink-0 accent-[#e3b23c]"
                />
                {p.name}
              </label>
            );
          })}
        </div>
        {errors.services && (
          <p className="mt-2 text-[0.8rem] font-semibold text-red-300">{errors.services}</p>
        )}
      </fieldset>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="budget">
            Estimated budget
          </label>
          <select id="budget" name="budget" className={fieldClass} defaultValue={budgets[0]}>
            {budgets.map((b) => (
              <option key={b} value={b} className="bg-ink-900">
                {b}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="timeline">
            Timeline
          </label>
          <select id="timeline" name="timeline" className={fieldClass} defaultValue={timelines[0]}>
            {timelines.map((t) => (
              <option key={t} value={t} className="bg-ink-900">
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5" data-invalid={Boolean(errors.message)}>
        <label className={labelClass} htmlFor="message">
          Tell us about your goals <span className="text-gold-300">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${fieldClass} resize-y`}
          placeholder="What are you trying to grow, fix, or launch?"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-[0.8rem] font-semibold text-red-300">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company_url">Do not fill this in</label>
        <input id="company_url" name="company_url" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={status === "sending"} className="w-full sm:w-auto">
          {status === "sending" ? "Sending…" : "Book My Free Strategy Session"}
        </Button>
        <p className="text-[0.8rem] leading-relaxed text-mist-400">
          We reply within one business day. Your details are never sold or shared.
        </p>
      </div>

      <p aria-live="polite" className="sr-only">
        {status === "sending" ? "Sending your request" : ""}
      </p>

      {status === "error" && (
        <p className="mt-5 rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-[0.9rem] text-red-200">
          Something went wrong sending your request. Please email{" "}
          <a href="mailto:info@theinvestcoach.com" className="font-semibold underline">
            info@theinvestcoach.com
          </a>{" "}
          and we&apos;ll pick it up right away.
        </p>
      )}
    </form>
  );
}
