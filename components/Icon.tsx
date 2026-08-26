import { SVGProps } from "react";

type IconName =
  | "chart"
  | "wrench"
  | "blueprint"
  | "conveyor"
  | "bolt"
  | "people"
  | "factory"
  | "beam"
  | "flame"
  | "gem"
  | "drum"
  | "leaf"
  | "shield"
  | "clock"
  | "handshake"
  | "check"
  | "arrow"
  | "phone"
  | "mail"
  | "pin"
  | "menu"
  | "close"
  | "whatsapp"
  | "linkedin"
  | "twitter"
  | "facebook"
  | "instagram";

const paths: Record<IconName, JSX.Element> = {
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 15l3-4 3 2 4-6" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8 6.2 21l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.1-.5-.5-2.1 2.6-2.6z" />
  ),
  blueprint: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M3 9h6v11M15 4v7h6" />
    </>
  ),
  conveyor: (
    <>
      <circle cx="6" cy="16" r="2.5" />
      <circle cx="18" cy="16" r="2.5" />
      <path d="M6 13.5h12M4 19h16M9 13.5V8h6v5.5" />
    </>
  ),
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />,
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 5.5a3 3 0 0 1 0 5.5M21 20a6 6 0 0 0-4-5.7" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V9l6 4V9l6 4V6l6 3v12z" />
      <path d="M3 21h18" />
    </>
  ),
  beam: (
    <>
      <path d="M3 6h18M3 18h18" />
      <path d="M6 6l12 12M18 6 6 18" />
    </>
  ),
  flame: (
    <path d="M12 2s5 4 5 9a5 5 0 0 1-10 0c0-2 1-3 1-3s0 2 1.5 2S12 8 12 6c0 0 2 1 2 3" />
  ),
  gem: (
    <>
      <path d="M6 3h12l4 6-10 12L2 9z" />
      <path d="M2 9h20M9 3 6 9l6 12 6-12-3-6" />
    </>
  ),
  drum: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12a7 3 0 0 0 14 0V6" />
    </>
  ),
  leaf: (
    <path d="M4 20s0-9 8-13c4-2 8-2 8-2s0 4-2 8c-4 8-13 8-13 8zM4 20 12 12" />
  ),
  shield: <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  handshake: (
    <path d="M8 12 5 9l4-4 3 3 3-3 4 4-6 6-2-2-3 3-3-3 2-2" />
  ),
  check: <path d="M4 12l5 5L20 6" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  phone: (
    <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  whatsapp: (
    <>
      <path d="M3 21l1.65-4.05A8.5 8.5 0 1 1 7.5 19.4L3 21z" />
      <path d="M8.7 8.4c-.2 0-.5.05-.7.3-.25.3-.9.85-.9 2s.9 2.35 1.05 2.5c.15.2 1.7 2.7 4.25 3.7 2.1.8 2.55.65 3 .6.45-.05 1.45-.6 1.65-1.15.2-.55.2-1.05.15-1.15-.05-.1-.2-.15-.45-.3l-1.6-.75c-.2-.1-.4-.05-.55.15l-.65.85c-.15.15-.3.2-.55.05a5.9 5.9 0 0 1-2.85-2.5c-.15-.25 0-.4.1-.55l.45-.55c.1-.15.1-.3.05-.45L9.9 8.9c-.2-.5-.4-.45-.55-.45z" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 17v-7" />
    </>
  ),
  twitter: (
    <path d="M22 5.8a8 8 0 0 1-2.3.6 4 4 0 0 0 1.8-2.2 8 8 0 0 1-2.5 1 4 4 0 0 0-6.8 3.6A11 11 0 0 1 4 4.8a4 4 0 0 0 1.2 5.3 4 4 0 0 1-1.8-.5 4 4 0 0 0 3.2 3.9 4 4 0 0 1-1.8.1 4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18a11 11 0 0 0 6 1.8c7.2 0 11.2-6 11.2-11.2v-.5A8 8 0 0 0 22 5.8z" />
  ),
  facebook: (
    <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8a1 1 0 0 1 1-1z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17 7v.01" />
    </>
  ),
};

type Props = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export default function Icon({ name, size = 24, ...props }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
