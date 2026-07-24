import Link from "next/link";
import { company } from "@/lib/site";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-saffron-400 to-saffron-600 shadow-md">
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21V9l6 4V9l6 4V6l6 3v12z" />
          <path d="M3 21h18" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-base font-extrabold tracking-tight ${
            light ? "text-white" : "text-navy-900"
          }`}
        >
          One Bharat
        </span>
        <span
          className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
            light ? "text-saffron-300" : "text-saffron-600"
          }`}
        >
          Engineering Services
        </span>
      </span>
    </Link>
  );
}
