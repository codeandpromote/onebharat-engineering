import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with One Bharat Engineering Services for technical studies, maintenance, projects, audits and manpower.",
};

export default function ContactPage() {
  const cards = [
    {
      icon: "phone" as const,
      title: "Call us",
      lines: [company.phonePrimary, company.phoneSecondary],
      hrefs: [
        `tel:${company.phonePrimary.replace(/\s/g, "")}`,
        `tel:${company.phoneSecondary.replace(/\s/g, "")}`,
      ],
    },
    {
      icon: "mail" as const,
      title: "Email us",
      lines: [company.email, company.emailAlt],
      hrefs: [`mailto:${company.email}`, `mailto:${company.emailAlt}`],
    },
    {
      icon: "pin" as const,
      title: "Visit us",
      lines: [
        company.address.line2,
        `${company.address.city} — ${company.address.pin}`,
        company.address.country,
      ],
    },
    {
      icon: "clock" as const,
      title: "Working hours",
      lines: [company.hours],
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your plant"
        description="Whether it's a quick technical question or a full project brief, our engineers are ready to help. Reach out and we'll respond within one business day."
        crumbs={[{ label: "Contact" }]}
        image="/images/meeting.jpg"
      />

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          {/* Info column */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-navy-900">
              Get in touch
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-navy-600">
              Prefer to reach us directly? Use any of the channels below — or
              fill in the form and we&apos;ll get back to you.
            </p>

            <div className="mt-8 space-y-4">
              {cards.map((c) => (
                <div
                  key={c.title}
                  className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-navy-100"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron-50 text-saffron-600 ring-1 ring-saffron-100">
                    <Icon name={c.icon} size={22} />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-navy-900">
                      {c.title}
                    </h3>
                    <div className="mt-1 space-y-0.5">
                      {c.lines.map((line, i) =>
                        c.hrefs?.[i] ? (
                          <a
                            key={line}
                            href={c.hrefs[i]}
                            className="block break-all text-sm text-navy-600 hover:text-saffron-600"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={line} className="text-sm text-navy-600">
                            {line}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-16 sm:pb-20 lg:pb-28">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-navy-900 ring-1 ring-navy-800">
            <div className="bg-grid absolute inset-0 opacity-40" />
            <div className="relative flex min-h-[280px] flex-col items-center justify-center p-10 text-center text-white">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-saffron-500/20 text-saffron-400">
                <Icon name="pin" size={28} />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">
                {company.address.city}
              </h3>
              <p className="mt-2 max-w-md text-sm text-navy-200">
                {company.address.line2}, {company.address.city} —{" "}
                {company.address.pin}, {company.address.country}
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${company.address.line2}, ${company.address.city}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6"
              >
                Open in Google Maps
                <Icon name="arrow" size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
