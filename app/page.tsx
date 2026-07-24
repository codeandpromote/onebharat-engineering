import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import {
  company,
  stats,
  services,
  industries,
  process,
  values,
  testimonials,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <Image
          src="/images/plant-refinery.jpg"
          alt="Heavy industrial process plant"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-900/75" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute -left-32 -top-24 h-96 w-96 rounded-full bg-saffron-500/20 blur-3xl" />
        <div className="absolute -right-24 top-40 h-96 w-96 rounded-full bg-navy-500/50 blur-3xl" />
        <div className="container-x relative grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-saffron-300 ring-1 ring-inset ring-white/15">
              <span className="h-1.5 w-1.5 rounded-full bg-saffron-400" />
              {company.foundedExperience} Years of Industry Expertise
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Engineering excellence for{" "}
              <span className="bg-gradient-to-r from-saffron-300 to-saffron-500 bg-clip-text text-transparent">
                cement &amp; heavy industries
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-200 sm:text-lg">
              {company.intro}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Request a Consultation
                <Icon name="arrow" size={18} />
              </Link>
              <Link href="/services" className="btn-outline">
                Explore Services
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl font-extrabold text-saffron-400">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-navy-300">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Hero card cluster */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
                <h3 className="text-sm font-bold uppercase tracking-widest text-saffron-300">
                  What we deliver
                </h3>
                <ul className="mt-5 space-y-4">
                  {services.slice(0, 4).map((s) => (
                    <li key={s.slug} className="flex items-start gap-4">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron-500/15 text-saffron-300">
                        <Icon name={s.icon as any} size={22} />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {s.title}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-saffron-400 hover:text-saffron-300"
                >
                  View all services <Icon name="arrow" size={16} />
                </Link>
              </div>
              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-saffron-500 px-5 py-4 shadow-xl sm:block">
                <p className="font-display text-2xl font-extrabold text-white">
                  150+
                </p>
                <p className="text-xs font-medium text-white/90">
                  Projects delivered
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ Trust / intro */}
      <section className="border-b border-navy-100 bg-navy-50/50 py-10">
        <div className="container-x">
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-navy-400">
            Trusted across cement, power, steel &amp; process industries
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-semibold text-navy-500">
            {industries.slice(0, 6).map((i) => (
              <span key={i.name} className="whitespace-nowrap">
                {i.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Services */}
      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Our Services</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              End-to-end engineering across the plant lifecycle
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-600">
              From the first feasibility study to daily operations, we bring
              deep domain expertise to every stage of your project.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services#${s.slug}`}
                className="card group flex flex-col"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-saffron-50 text-saffron-600 ring-1 ring-saffron-100 transition-colors group-hover:bg-saffron-500 group-hover:text-white">
                  <Icon name={s.icon as any} size={28} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
                  {s.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-saffron-600">
                  Learn more <Icon name="arrow" size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Process */}
      <section className="section bg-navy-50/60">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">How We Work</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              A disciplined, four-step approach
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p, idx) => (
              <div key={p.step} className="relative">
                <div className="card h-full">
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
                {idx < process.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-saffron-300 lg:block">
                    <Icon name="arrow" size={22} />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ Why choose us */}
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Why One Bharat</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Plant-floor experience you can rely on
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-600">
              Our team has run and rebuilt cement and process plants across
              India and abroad. That first-hand experience is what separates a
              report that sits on a shelf from an improvement you can measure on
              the control screen.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron-50 text-saffron-600 ring-1 ring-saffron-100">
                    <Icon name={v.icon as any} size={22} />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-navy-900">
                      {v.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy-600">
                      {v.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 to-navy-950 p-8 text-white shadow-xl">
              <Image
                src="/images/engineers-team.jpg"
                alt="Engineering team reviewing a project site"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 to-navy-950/90" />
              <div className="bg-grid absolute inset-0 opacity-40" />
              <div className="relative">
                <h3 className="font-display text-2xl font-bold">
                  Measurable outcomes
                </h3>
                <p className="mt-2 text-sm text-navy-200">
                  Typical results our clients see after an engagement.
                </p>
                <div className="mt-8 space-y-6">
                  {[
                    { label: "Reduction in specific heat consumption", value: "Up to 8%" },
                    { label: "Improvement in mill throughput", value: "Up to 12%" },
                    { label: "Unplanned downtime reduction", value: "Up to 30%" },
                    { label: "Faster shutdown turnaround", value: "2–4 days" },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="text-sm text-navy-200">
                          {row.label}
                        </span>
                        <span className="font-display text-lg font-bold text-saffron-400">
                          {row.value}
                        </span>
                      </div>
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-saffron-400 to-saffron-600" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Industries */}
      <section className="section bg-navy-50/60">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Industries</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Sectors we serve
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((i) => (
              <div
                key={i.name}
                className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-navy-100"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-saffron-400">
                  <Icon name={i.icon as any} size={24} />
                </span>
                <span className="text-sm font-semibold text-navy-900">
                  {i.name}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/industries" className="btn-ghost">
              See how we help each industry
              <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ Testimonials */}
      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Client Voices</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              What plant leaders say
            </h2>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.author}
                className="flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy-100"
              >
                <span className="font-display text-5xl leading-none text-saffron-300">
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-navy-700">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-navy-100 pt-4">
                  <p className="text-sm font-bold text-navy-900">{t.author}</p>
                  <p className="text-xs text-navy-500">{t.org}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
