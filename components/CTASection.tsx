import Link from "next/link";
import Icon from "./Icon";
import { company } from "@/lib/site";

export default function CTASection() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-14 text-center sm:px-12 lg:py-20">
          <div className="absolute inset-0 bg-grid opacity-50" />
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-saffron-500/25 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-saffron-600/20 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to optimize your plant?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-200 sm:text-lg">
              Tell us about your challenge — a technical study, a shutdown, a
              greenfield project or an efficiency target. Our engineers will get
              back to you within one business day.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary w-full sm:w-auto">
                Request a Consultation
                <Icon name="arrow" size={18} />
              </Link>
              <a
                href={`tel:${company.phonePrimary.replace(/\s/g, "")}`}
                className="btn-outline w-full sm:w-auto"
              >
                <Icon name="phone" size={18} />
                {company.phonePrimary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
