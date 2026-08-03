import Link from "next/link";
import { company, nav, services } from "@/lib/site";
import Logo from "./Logo";
import Icon from "./Icon";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:pr-6">
          <Logo light />
          <p className="mt-5 text-sm leading-relaxed text-navy-300">
            {company.intro}
          </p>
          <div className="mt-6 flex gap-3">
            {(
              [
                ["linkedin", company.social.linkedin],
                ["twitter", company.social.twitter],
                ["facebook", company.social.facebook],
                ["instagram", company.social.instagram],
              ] as const
            ).map(([name, href]) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-navy-200 transition-colors hover:bg-saffron-500 hover:text-white"
              >
                <Icon name={name} size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">
            Company
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-navy-300 transition-colors hover:text-saffron-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">
            Services
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services#${s.slug}`}
                  className="text-navy-300 transition-colors hover:text-saffron-400"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">
            Get in Touch
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <Icon name="pin" size={18} className="mt-0.5 shrink-0 text-saffron-400" />
              <span className="text-navy-300">
                {company.address.line2}, {company.address.city} —{" "}
                {company.address.pin}, {company.address.country}
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="phone" size={18} className="mt-0.5 shrink-0 text-saffron-400" />
              <span className="flex flex-col text-navy-300">
                <a href={`tel:${company.phonePrimary.replace(/\s/g, "")}`} className="hover:text-saffron-400">
                  {company.phonePrimary}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" size={18} className="mt-0.5 shrink-0 text-saffron-400" />
              <a
                href={`mailto:${company.email}`}
                className="break-all text-navy-300 hover:text-saffron-400"
              >
                {company.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="clock" size={18} className="mt-0.5 shrink-0 text-saffron-400" />
              <span className="text-navy-300">{company.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-navy-400 sm:flex-row">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p>
            {company.domain} · Cement & Heavy-Industry Engineering Consultancy
          </p>
        </div>
      </div>
    </footer>
  );
}
