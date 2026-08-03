import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import {
  company,
  careerAreas,
  hiringDisciplines,
  careerBenefits,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Build your career with One Bharat Engineering Services. Join our GET/DET graduate trainee program and work across cement, RMC batching plants, clinkerisation, grinding and packing.",
};

const applyHref = `mailto:${company.email}?subject=${encodeURIComponent(
  "Career Application — One Bharat Engineering Services"
)}&body=${encodeURIComponent(
  "Name:\nDiscipline of interest:\nQualification:\nYears of experience:\nCurrent location:\n\n(Please attach your CV)"
)}`;

export default function CareerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Grow your career in cement & heavy industry"
        description="We are always looking for driven engineers and technicians — from fresh graduate trainees to seasoned specialists — who want to learn from the best and make a real impact on the plant floor."
        crumbs={[{ label: "Career" }]}
        image="/images/factory-robots.jpg"
      />

      {/* Why join */}
      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Why Join Us</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              A place to learn, build and lead
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-600">
              At One Bharat Engineering Services you work alongside industry
              veterans on live plants across India — gaining the kind of
              hands-on experience that accelerates a career.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {careerBenefits.map((b) => (
              <div key={b.title} className="card">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-saffron-50 text-saffron-600 ring-1 ring-saffron-100">
                  <Icon name={b.icon as any} size={24} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET / DET program highlight */}
      <section className="section bg-navy-50/60">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-12 text-white sm:px-12">
            <div className="bg-grid absolute inset-0 opacity-40" />
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-saffron-500/20 blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-saffron-300 ring-1 ring-inset ring-white/15">
                  Graduate & Diploma Trainees
                </span>
                <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                  GET / DET Trainee Program
                </h2>
                <p className="mt-4 text-base leading-relaxed text-navy-200">
                  Our master trainers mentor young Graduate Engineer Trainees
                  (GET) and Diploma Engineer Trainees (DET) in operations &amp;
                  maintenance and a culture of innovation — building the next
                  generation of plant leaders.
                </p>
                <Link href={applyHref} className="btn-primary mt-8">
                  Apply for the Trainee Program
                  <Icon name="arrow" size={18} />
                </Link>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {[
                  "Structured on-the-job O&M training",
                  "Mentorship by 30–50 year veterans",
                  "Live plant rotations across disciplines",
                  "Innovation & improvement projects",
                  "Clear path to responsibility",
                  "Pan-India site exposure",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-xl bg-white/5 p-4 ring-1 ring-white/10"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-saffron-500 text-white">
                      <Icon name="check" size={14} strokeWidth={2.5} />
                    </span>
                    <span className="text-sm leading-snug text-navy-100">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What you'll work on (company scope) */}
      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">What You&apos;ll Work On</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Real projects across our core scope
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {careerAreas.map((a) => (
              <div
                key={a.title}
                className="flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy-100"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-saffron-400">
                  <Icon name={a.icon as any} size={24} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900">
                  {a.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {a.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-saffron-100 text-saffron-700">
                        <Icon name="check" size={13} strokeWidth={2.5} />
                      </span>
                      <span className="text-sm leading-snug text-navy-600">
                        {it}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disciplines we hire for */}
      <section className="section bg-navy-50/60">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Openings</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Disciplines we hire for
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-600">
              We regularly recruit engineers, operators and technicians across
              the following functions for permanent roles and site deputation.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hiringDisciplines.map((d) => (
              <div
                key={d.title}
                className="group flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-saffron-200"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-saffron-50 text-saffron-600 ring-1 ring-saffron-100 transition-colors group-hover:bg-saffron-500 group-hover:text-white">
                  <Icon name={d.icon as any} size={24} />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-navy-900">
                    {d.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy-600">
                    {d.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="section">
        <div className="container-x">
          <div className="grid items-center gap-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-navy-100 sm:p-12 lg:grid-cols-2">
            <div>
              <span className="eyebrow">How to Apply</span>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900">
                Send us your CV
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-600">
                Interested in joining our team? Email your CV mentioning your
                preferred discipline and we&apos;ll be in touch when a matching
                role opens up. Fresh graduates are welcome to apply for the
                GET/DET program.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={applyHref} className="btn-primary">
                  <Icon name="mail" size={18} />
                  Email Your CV
                </Link>
                <Link href="/contact" className="btn-ghost">
                  Contact HR
                  <Icon name="arrow" size={16} />
                </Link>
              </div>
            </div>
            <div className="rounded-2xl bg-navy-50 p-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-saffron-600">
                Application details
              </h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3">
                  <Icon name="mail" size={18} className="mt-0.5 shrink-0 text-saffron-500" />
                  <a
                    href={`mailto:${company.email}`}
                    className="break-all font-medium text-navy-800 hover:text-saffron-600"
                  >
                    {company.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Icon name="phone" size={18} className="mt-0.5 shrink-0 text-saffron-500" />
                  <a
                    href={`tel:${company.phonePrimary.replace(/\s/g, "")}`}
                    className="font-medium text-navy-800 hover:text-saffron-600"
                  >
                    {company.phonePrimary}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Icon name="pin" size={18} className="mt-0.5 shrink-0 text-saffron-500" />
                  <span className="text-navy-700">
                    {company.address.line2}, {company.address.city} —{" "}
                    {company.address.pin}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
