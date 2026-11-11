# Aviel Karis Services Ltd — Corporate Website

Website for **Aviel Karis Services Ltd**, an indigenous Nigerian upstream and
midstream oil & gas services, marine and industrial engineering contractor
headquartered in Port Harcourt, Rivers State.

The site is a single, editorial-grade landing page: capabilities, sectors,
standards, governance and a working Request-for-Quotation (RFQ) desk.

## Stack

| Layer      | Technology                                     |
| ---------- | ---------------------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack)             |
| UI         | React 19, Tailwind CSS v4, Framer Motion       |
| Icons      | Lucide                                         |
| Forms      | React Hook Form + Zod                          |
| Data       | PostgreSQL via Drizzle ORM                     |
| Typography | Manrope, Instrument Serif, JetBrains Mono      |

Fonts are self-hosted through Fontsource packages, so the site renders with its
real typefaces without third-party font requests.

## Getting started

```bash
npm install
printf 'DATABASE_URL="postgresql://postgres:postgres@127.0.0.1:5432/app_db"\n' > .env.local
npm run dev
```

Open <http://localhost:3000>.

### Environment variables

| Variable               | Required | Purpose                                                     |
| ---------------------- | -------- | ----------------------------------------------------------- |
| `DATABASE_URL`         | Yes      | PostgreSQL connection used by the RFQ and health endpoints. |
| `NEXT_PUBLIC_SITE_URL` | No       | Canonical site URL for metadata, `sitemap.xml` and `robots.txt`. Defaults to `http://localhost:3000`. |

### Database

```bash
npx drizzle-kit push     # create/update the rfq_requests table
```

The `rfq_requests` table stores each inquiry and returns a reference such as
`AKS-RFQ-00042`. Only the attachment **file name** is logged; documents are
requested by email rather than uploaded.

## Scripts

| Command             | Description                        |
| ------------------- | ---------------------------------- |
| `npm run dev`       | Development server                 |
| `npm run build`     | Production build                   |
| `npm run start`     | Serve the production build         |
| `npm run lint`      | ESLint (Next core web vitals)      |
| `npm run typecheck` | TypeScript, no emit                |

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

## Project structure

```
src/
  app/
    api/health/route.ts     # DB liveness probe
    api/rfq/route.ts        # RFQ intake + validation
    globals.css             # design tokens, texture, motion utilities
    layout.tsx              # fonts, metadata, JSON-LD
    page.tsx                # page composition
    robots.ts / sitemap.ts  # crawler metadata
  components/               # Header, Hero, About, Services, Sectors, Process,
                            # Quality, Structure, Faq, Contact, Footer, ui
  db/                       # Drizzle client + schema
  lib/content.ts            # all copy and structured content
  lib/rfq.ts                # Zod schema + service categories
public/images/              # site photography
```

## Editing content

Almost all copy lives in `src/lib/content.ts` — services, pillars, sectors,
process steps, FAQs, statistics, navigation and the head-office address. Update
it there rather than inside presentational components.

## Deployment (Vercel)

The repository is connected to Vercel through the GitHub integration, so every
push to `main` produces a production deployment and every pull request produces
a preview deployment. No CLI token is required.

Before the first production deployment:

1. Add `DATABASE_URL` to the Vercel project (Production and Preview) so the RFQ
   desk can persist requests. Without it the site still builds and runs; the RFQ
   endpoint returns a readable `503`.
2. Add `NEXT_PUBLIC_SITE_URL` with the production domain so canonical URLs, Open
   Graph images and `sitemap.xml` resolve correctly.
3. Keep the Vercel Node.js version at 20.9 or newer (`engines` and `.nvmrc` pin
   this in the repository).

## Repository hygiene

`.gitignore` covers dependencies, Next.js build output, local environment files
and TypeScript build info. If you clone an older revision that still tracks
`node_modules/` or `.next/`, untrack them once:

```bash
git rm -r --cached node_modules .next
```
