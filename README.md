# One Bharat Engineering Services — Website

A professional, fully responsive multipage marketing website for **One Bharat
Engineering Services**, a cement & heavy-industry engineering consultancy.

Built with **Next.js 14 (App Router)**, **TypeScript** and **Tailwind CSS**.

## Pages

| Route          | Description                                              |
| -------------- | -------------------------------------------------------- |
| `/`            | Home — hero, services, process, results, industries, testimonials |
| `/about`       | Story, mission/vision, values, leadership                |
| `/services`    | Six detailed service lines with inclusions               |
| `/industries`  | Sectors served + cross-industry strengths                |
| `/projects`    | Selected project track record                            |
| `/contact`     | Contact details + enquiry form                           |

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Editing content

All site content — company details, contact info, services, industries,
projects, leadership and testimonials — lives in a single file:

```
lib/site.ts
```

Update values there and every page reflects the change. No hard-coded content
is scattered across components.

## Images

Real industrial photography lives in `public/images/` (downloaded locally — no
external image requests at runtime). They are served through Next.js'
`next/image` optimizer (automatic resizing + WebP). Each photo is mapped to a
service/industry in `lib/site.ts`, so swapping an image is a one-line change.
Sources and licensing are listed in `public/images/CREDITS.md` (all from
Unsplash, free for commercial use).

## Design notes

- **Responsive first** — mobile hamburger menu, fluid grids, works from small
  phones up to large desktops.
- **Brand palette** — deep industrial `navy` + `saffron` accent (see
  `tailwind.config.ts`).
- **Icons** — self-contained inline SVGs (`components/Icon.tsx`); no external
  icon library or network images, so the site works fully offline.
- **Fonts** — Inter (body) + Sora (display) via `next/font`.
- **SEO** — per-page metadata, Open Graph tags, `sitemap.xml` and `robots.txt`.

## Wiring up the contact form

The contact form (`components/ContactForm.tsx`) currently opens the visitor's
email client via `mailto:` as a no-backend fallback. To capture submissions
server-side, replace the submit handler with a call to a form service
(Formspree, Resend, HubSpot) or a Next.js API route / server action.

## Deployment

Deploy to **Vercel** (recommended for Next.js), Netlify, or any Node host:

```bash
npm run build && npm run start
```

Point the domain `onebharatengineeringservices.com` at the deployment.
