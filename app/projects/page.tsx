import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { projects, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of cement, power and process-industry projects delivered by One Bharat Engineering Services across India and abroad.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="A track record built on the plant floor"
        description="From greenfield cement lines to critical shutdowns and efficiency studies, here is a selection of the work our team has delivered."
        crumbs={[{ label: "Projects" }]}
        image="/images/construction-site.jpg"
      />

      {/* Stats strip */}
      <section className="border-b border-navy-100 bg-white py-10">
        <div className="container-x grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-extrabold text-saffron-500">
                {s.value}
              </p>
              <p className="mt-1 text-xs leading-snug text-navy-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Project cards */}
      <section className="section">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.client}
              className="group flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-saffron-200"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-saffron-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-saffron-700 ring-1 ring-inset ring-saffron-200">
                  {p.category}
                </span>
                <span className="font-display text-sm font-bold text-navy-400">
                  {p.year}
                </span>
              </div>
              <h2 className="mt-4 font-display text-xl font-bold text-navy-900">
                {p.client}
              </h2>
              <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-navy-500">
                <Icon name="pin" size={16} className="text-saffron-500" />
                {p.location}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-navy-600">
                {p.scope}
              </p>
            </article>
          ))}
        </div>

        <div className="container-x mt-10">
          <p className="rounded-2xl bg-navy-50 p-6 text-center text-sm text-navy-600">
            Client names and figures shown are representative of the type and
            scale of work delivered. Detailed references are available on
            request during evaluation.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
