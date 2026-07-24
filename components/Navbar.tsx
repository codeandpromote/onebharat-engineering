"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, company } from "@/lib/site";
import Logo from "./Logo";
import Icon from "./Icon";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80"
          : "bg-white"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between lg:h-20">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                isActive(item.href)
                  ? "text-saffron-600"
                  : "text-navy-700 hover:bg-navy-50 hover:text-navy-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${company.phonePrimary.replace(/\s/g, "")}`}
            className="text-sm font-semibold text-navy-700 hover:text-saffron-600"
          >
            {company.phonePrimary}
          </a>
          <Link href="/contact" className="btn-primary">
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-navy-800 hover:bg-navy-50 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} size={26} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-0 top-16 z-40 bg-navy-950/40 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <nav
          className={`fixed inset-x-0 top-16 z-40 origin-top overflow-y-auto border-t border-navy-100 bg-white px-5 pb-8 pt-4 shadow-xl transition-all duration-300 ${
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                  isActive(item.href)
                    ? "bg-saffron-50 text-saffron-700"
                    : "text-navy-800 hover:bg-navy-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-5 flex flex-col gap-3 border-t border-navy-100 pt-5">
            <a
              href={`tel:${company.phonePrimary.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-sm font-semibold text-navy-700"
            >
              <Icon name="phone" size={18} className="text-saffron-500" />
              {company.phonePrimary}
            </a>
            <Link href="/contact" className="btn-primary w-full">
              Get a Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
