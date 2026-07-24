import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Cement, thermal power, steel, lime, minerals, petrochemical and process industries served by One Bharat Engineering Services.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Deep expertise across heavy and process industries"
        description="Cement is our core, but decades of rotating-equipment, thermal and material-handling experience let us add value across a broad range of sectors."
        crumbs={[{ label: "Industries" }]}
        image="/images/process-pipes.jpg"
      />

      <section className="section">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <div
              key={i.name}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-saffron-200"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={i.image}
                  alt={i.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                <span className="absolute bottom-3 left-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-saffron-600 shadow-md backdrop-blur">
                  <Icon name={i.icon as any} size={24} />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display text-xl font-bold text-navy-900">
                  {i.name}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
                  {i.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Value band */}
      <section className="section bg-navy-50/60">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Cross-Industry Strengths</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Capabilities that travel across sectors
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "wrench",
                title: "Rotating Equipment",
                text: "Kilns, mills, fans, gearboxes, compressors and blowers — alignment, overhaul and reliability.",
              },
              {
                icon: "bolt",
                title: "Thermal & Energy",
                text: "Heat & mass balances, thermal audits and specific-energy reduction across fuel-fired processes.",
              },
              {
                icon: "conveyor",
                title: "Material Handling",
                text: "Bulk conveying, classification, blending and packing for ash, clinker, cement and minerals.",
              },
              {
                icon: "chart",
                title: "Process Optimization",
                text: "Data-driven diagnostics that lift capacity, quality and yield without major capex.",
              },
              {
                icon: "blueprint",
                title: "Projects & EPC",
                text: "Owner's-engineer support from feasibility through commissioning and performance runs.",
              },
              {
                icon: "people",
                title: "People & Training",
                text: "Skilled deputation and structured training that builds capability inside your plant.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-100"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-saffron-50 text-saffron-600 ring-1 ring-saffron-100">
                  <Icon name={c.icon as any} size={22} />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {c.text}
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
