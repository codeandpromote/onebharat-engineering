import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { services, process } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Technical studies, plant maintenance, project management, material handling, energy audits and trained manpower for cement and heavy industries.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Comprehensive engineering across the plant lifecycle"
        description="Six focused service lines that cover everything from feasibility and greenfield projects to daily optimization, major maintenance and manpower."
        crumbs={[{ label: "Services" }]}
        image="/images/welding.jpg"
      />

      {/* Quick index */}
      <section className="border-b border-navy-100 bg-white py-6">
        <div className="container-x flex flex-wrap gap-2">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-full border border-navy-200 px-4 py-2 text-xs font-semibold text-navy-700 transition-colors hover:border-saffron-400 hover:text-saffron-600"
            >
              {s.title}
            </a>
          ))}
        </div>
      </section>

      {/* Detailed services */}
      <section className="section">
        <div className="container-x space-y-8">
          {services.map((s, idx) => (
            <div
              key={s.slug}
              id={s.slug}
              className="scroll-mt-24 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-navy-100"
            >
              <div className="grid lg:grid-cols-12">
                <div className="relative overflow-hidden bg-navy-900 p-8 text-white lg:col-span-4">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/85 to-navy-900/60" />
                  <div className="relative">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-saffron-500/20 text-saffron-400 ring-1 ring-saffron-400/30">
                      <Icon name={s.icon as any} size={28} />
                    </span>
                    <span className="mt-6 block font-display text-5xl font-extrabold text-white/15">
                      0{idx + 1}
                    </span>
                    <h2 className="mt-2 font-display text-2xl font-bold">
                      {s.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-navy-200">
                      {s.summary}
                    </p>
                  </div>
                </div>
                <div className="p-8 lg:col-span-8">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-saffron-600">
                    What&apos;s included
                  </h3>
                  <ul className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-saffron-100 text-saffron-700">
                          <Icon name="check" size={14} strokeWidth={2.5} />
                        </span>
                        <span className="text-sm leading-relaxed text-navy-700">
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-saffron-600 hover:text-saffron-700"
                  >
                    Discuss this service <Icon name="arrow" size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process recap */}
      <section className="section bg-navy-50/60">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Delivery Method</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              How every engagement runs
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="card h-full">
                <span className="font-display text-4xl font-extrabold text-saffron-200">
                  {p.step}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-navy-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
