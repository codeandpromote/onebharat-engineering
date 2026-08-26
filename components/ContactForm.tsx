"use client";

import { FormEvent, useState } from "react";
import Icon from "./Icon";
import { company, services } from "@/lib/site";

type Status = "idle" | "submitting" | "success";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const update =
    (field: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Send the enquiry as a pre-filled WhatsApp message. Opens WhatsApp
    // (app on mobile, web on desktop) addressed to the company number.
    const text = encodeURIComponent(
      `Hello One Bharat Engineering Services,\n\n` +
        `Name: ${form.name}\n` +
        `Company: ${form.company}\n` +
        `Email: ${form.email}\n` +
        `Phone: ${form.phone}\n` +
        `Service: ${form.service || "General enquiry"}\n\n` +
        `Message:\n${form.message}`
    );

    if (typeof window !== "undefined") {
      window.open(
        `https://wa.me/${company.whatsapp}?text=${text}`,
        "_blank",
        "noopener,noreferrer"
      );
    }

    setTimeout(() => setStatus("success"), 600);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl bg-white p-10 text-center shadow-sm ring-1 ring-navy-100">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366]/15 text-[#128C7E]">
          <Icon name="whatsapp" size={32} />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold text-navy-900">
          Thank you!
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-navy-600">
          Your enquiry has been opened in WhatsApp — just press send to reach
          us. If WhatsApp didn&apos;t open, message us directly at{" "}
          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-saffron-600"
          >
            {company.phonePrimary}
          </a>
          . We typically respond within one business day.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm({
              name: "",
              company: "",
              email: "",
              phone: "",
              service: "",
              message: "",
            });
            setStatus("idle");
          }}
          className="btn-ghost mt-6"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:border-saffron-400 focus:outline-none focus:ring-2 focus:ring-saffron-100";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-navy-100 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-navy-800">
            Full name <span className="text-saffron-600">*</span>
          </label>
          <input
            required
            type="text"
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-navy-800">
            Company
          </label>
          <input
            type="text"
            value={form.company}
            onChange={update("company")}
            placeholder="Company / plant name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-navy-800">
            Email <span className="text-saffron-600">*</span>
          </label>
          <input
            required
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-navy-800">
            Phone
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="+91 ..."
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-semibold text-navy-800">
          Service of interest
        </label>
        <select
          value={form.service}
          onChange={update("service")}
          className={inputClass}
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other">Other / General enquiry</option>
        </select>
      </div>

      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-semibold text-navy-800">
          How can we help? <span className="text-saffron-600">*</span>
        </label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Briefly describe your plant, the challenge and any timeline."
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn mt-6 w-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/25 hover:-translate-y-0.5 hover:bg-[#1ebe5b] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          "Opening WhatsApp…"
        ) : (
          <>
            <Icon name="whatsapp" size={20} />
            Send via WhatsApp
          </>
        )}
      </button>
      <p className="mt-3 text-center text-xs text-navy-400">
        This opens WhatsApp with your message pre-filled — just press send. We
        respect your privacy and use your details only to respond.
      </p>
    </form>
  );
}
