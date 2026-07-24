import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

type Crumb = { label: string; href?: string };

export default function PageHeader({
  eyebrow,
  title,
  description,
  crumbs = [],
  image,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/70" />
        </>
      )}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-saffron-500/20 blur-3xl" />
      <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-navy-500/40 blur-3xl" />
      <div className="container-x relative py-16 sm:py-20 lg:py-24">
        <nav className="mb-5 flex flex-wrap items-center gap-2 text-xs font-medium text-navy-300">
          <Link href="/" className="hover:text-saffron-400">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-2">
              <span className="text-navy-500">/</span>
              {c.href ? (
                <Link href={c.href} className="hover:text-saffron-400">
                  {c.label}
                </Link>
              ) : (
                <span className="text-saffron-400">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-saffron-300 ring-1 ring-inset ring-white/15">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-200 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
