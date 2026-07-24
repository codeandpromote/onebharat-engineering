import Link from "next/link";
import Icon from "@/components/Icon";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-x flex min-h-[50vh] flex-col items-center justify-center text-center">
        <span className="font-display text-7xl font-extrabold text-saffron-200">
          404
        </span>
        <h1 className="mt-4 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-navy-600">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back on track.
        </p>
        <Link href="/" className="btn-primary mt-8">
          <Icon name="arrow" size={18} className="rotate-180" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
