import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { company, values, leadership, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "One Bharat Engineering Services brings decades of cement and heavy-industry expertise to plants across India and abroad.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Decades of plant-floor expertise, focused on your results"
        description="One Bharat Engineering Services was founded by veteran cement and process engineers to give plant owners direct access to senior technical talent — without the overhead of a large consultancy."
        crumbs={[{ label: "About" }]}
        image="/images/engineers-team.jpg"
      />

      {/* Story */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Built by engineers who have run the plants
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-navy-600">
              <p>
                Our founders spent their careers commissioning, operating and
                troubleshooting cement plants across India, Africa and South
                Asia — from control rooms and kiln platforms to boardrooms and
                greenfield sites.
              </p>
              <p>
                One Bharat Engineering Services was created to channel that
                hands-on experience into focused, senior-led engagements. When
                you work with us, you work directly with the specialists who
                have solved the same problem many times before — not a junior
                team learning on your equipment.
              </p>
              <p>
                Today we support cement, power, steel and process plants with
                technical studies, maintenance, project management, efficiency
                audits and trained manpower — always with a bias toward
                measurable, sustained results.
              </p>
            </div>
          </div>

          <div>
            <div className="relative mb-4 h-56 overflow-hidden rounded-2xl shadow-lg sm:h-64">
              <Image
                src="/images/construction-site.jpg"
                alt="Engineers on an active construction site"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-navy-900 p-6 text-white"
                >
                  <p className="font-display text-4xl font-extrabold text-saffron-400">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm text-navy-200">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section bg-navy-50/60">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-navy-100">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-saffron-50 text-saffron-600">
              <Icon name="bolt" size={24} />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold text-navy-900">
              Our Mission
            </h3>
            <p className="mt-3 text-base leading-relaxed text-navy-600">
              To help industrial plants run safer, cleaner and more efficiently
              by delivering senior-level engineering expertise with honesty,
              precision and accountability.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-navy-100">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-saffron-50 text-saffron-600">
              <Icon name="gem" size={24} />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold text-navy-900">
              Our Vision
            </h3>
            <p className="mt-3 text-base leading-relaxed text-navy-600">
              To be the most trusted independent engineering partner for the
              Indian cement and heavy industries — known for technical integrity
              and results that last.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Our Values</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              What guides every engagement
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="card">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-saffron-50 text-saffron-600 ring-1 ring-saffron-100">
                  <Icon name={v.icon as any} size={24} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section bg-navy-50/60">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Leadership</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Senior engineers leading every project
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-600">
              Backed by a network of 15+ specialists with 30–50 years of
              experience each across process, mechanical, electrical and civil
              disciplines.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {leadership.map((l) => (
              <div
                key={l.name}
                className="rounded-2xl bg-white p-7 text-center shadow-sm ring-1 ring-navy-100"
              >
                <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-navy-700 to-navy-950 font-display text-2xl font-extrabold text-saffron-400">
                  {l.name
                    .replace(/^Mr\.\s/, "")
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900">
                  {l.name}
                </h3>
                <p className="text-sm font-semibold text-saffron-600">
                  {l.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">
                  {l.bio}
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
