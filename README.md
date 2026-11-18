# Aviel Karis Services Ltd — Corporate Website

Website for **Aviel Karis Services Ltd**, an indigenous Nigerian upstream and
midstream oil & gas services, marine and industrial engineering contractor
headquartered in Port Harcourt, Rivers State.

The site is a single, editorial-grade landing page covering the company,
capabilities, sectors, standards, governance and contact. **Quotations are
handled by phone, WhatsApp and email — there is no contact form, no database and
no runtime environment configuration to maintain.**

## Stack

| Layer      | Technology                                |
| ---------- | ----------------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack)        |
| UI         | React 19, Tailwind CSS v4, Framer Motion  |
| Icons      | Lucide                                    |
| Typography | Manrope, Instrument Serif, JetBrains Mono |

Fonts are self-hosted through Fontsource packages, so the site renders with its
real typefaces without third-party font requests.

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. No environment variables are required.

### Optional environment variables

| Variable               | Required | Purpose                                                                 |
| ---------------------- | -------- | ----------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | No       | Override the canonical URL for metadata, `sitemap.xml` and `robots.txt`. Production defaults to `https://www.avielkarisservices.com`; Vercel previews use their deployment URL, and local development uses `http://localhost:3000`. If set in production, this variable must be the public custom domain. |

### Link previews

The page supplies a title, description, canonical URL and a 1200 × 630 Open
Graph image (`public/images/og-aviel-karis.jpg`), as well as Twitter card and
favicon metadata. Messaging apps choose their own preview layout: some show the
image as a thumbnail, while others display a larger card or no image at all.
After deploying changes, cached previews may take time to refresh. Use the
sharing platform's preview debugger or cache refresh tool where available; an
existing message may continue to show the old preview.

## Contact model

All quotation traffic goes directly to the procurement desk:

- **WhatsApp** — [+234 902 033 4832](https://wa.me/2349020334832) with a
  pre-filled message template, opened from the hero, contact section, footer and
  a floating action button.
- **Email** — [info@avielkarisservices.com](mailto:info@avielkarisservices.com)
  with a pre-filled quotation subject and body, for formal tenders and documents.
- **Phone** — [+234 902 033 4832](tel:+2349020334832) during working hours
  (8:00 AM – 5:00 PM WAT).
- **Head office** — No 19 Obudu Street, Mile 1 Rumuwoji, Port Harcourt, with a
  live Google Maps embed and a directions link.

Update the number, email, hours and address once in `src/lib/content.ts`
(`PHONE_DISPLAY`, `PHONE_TEL`, `WHATSAPP_NUMBER`, `EMAIL`, `WORKING_HOURS`,
`ADDRESS`) and every link across the site follows — including the map embed and
the directions URL.

## Scripts

| Command             | Description                 |
| ------------------- | --------------------------- |
| `npm run dev`       | Development server          |
| `npm run build`     | Production build            |
| `npm run start`     | Serve the production build  |
| `npm run lint`      | ESLint (Next core vitals)   |
| `npm run typecheck` | TypeScript, no emit         |

## Design system

The visual language is "quiet industrial luxury": deep ink surfaces, warm ivory
paper, a single scarlet signal colour and restrained gold detailing, with mono
labels for technical precision.

- **Palette tokens** live in `src/app/globals.css` (`--ink`, `--ivory`,
  `--scarlet`, `--gold`, …) and are exposed to Tailwind through `@theme inline`.
- **Type** — `font-sans` (Manrope) for everything structural, `font-display`
  (Instrument Serif, italic) for editorial emphasis, `font-mono` (JetBrains
  Mono) for eyebrows, labels and references.
- **Motion** — scroll reveals, an interactive sector switcher, an org-chart
  accordion and honouring of `prefers-reduced-motion` via `MotionProvider`.
- **Imagery** — cinematic photography in `public/images`, rendered through
  `next/image` (AVIF/WebP).
- **Brand** — the official Aviel Karis wordmark lives in `public/brand`, with the
  white background removed and two colourways: the supplied red lettering on
  light surfaces (`aviel-karis-logo.png`) and white lettering on ink surfaces
  (`aviel-karis-logo-white.png`), while the copper keyline stays copper in both.
  Header, mobile drawer and footer render it through the `Logo` component in
  `src/components/ui.tsx`, which takes `theme="dark" | "light"` for the surface
  it sits on. The favicon and Apple touch icon are crops of the same artwork. Do
  not redraw or re-letter the mark.

## Project structure

```
src/
  app/
    globals.css             # design tokens, texture, motion utilities
    layout.tsx              # fonts, metadata, JSON-LD
    page.tsx                # page composition
    robots.ts / sitemap.ts  # crawler metadata
  components/
    Header, Hero, About, Services, Sectors, Process, Quality,
    Structure, Faq, Contact, Footer, FloatingWhatsApp,
    BackToTop, Ticker, ui
  lib/
    content.ts              # all copy, contact details and structured content
    site.ts                 # canonical URL resolution
    icon.png / apple-icon.png  # favicon + touch icon (crops of the wordmark)
public/images/              # site photography
public/brand/               # official logo (transparent PNG) + tile for schema
```

## Editing content

Almost all copy lives in `src/lib/content.ts` — services, pillars, sectors,
process steps, FAQs, statistics, navigation, contact details and the head-office
address. Update it there rather than inside presentational components.

## Deployment (Vercel)

The repository is connected to Vercel through the GitHub integration, so every
push to `main` produces a production deployment and every pull request produces
a preview deployment. No CLI token is required.

- No environment variables are needed for the site to build or run.
- Optionally add `NEXT_PUBLIC_SITE_URL` if you use a custom domain; otherwise
  canonical URLs, Open Graph images and `sitemap.xml` are derived from Vercel's
  `VERCEL_PROJECT_PRODUCTION_URL` automatically.
- Node.js 20.9 or newer is required (`engines` and `.nvmrc` pin this).

## Repository hygiene

`.gitignore` covers dependencies, Next.js build output, local environment files
and TypeScript build info.
