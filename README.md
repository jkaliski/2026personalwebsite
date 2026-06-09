# Jaroslaw Kaliski Website

Next.js + Sanity website for Jaroslaw Kaliski.

The original static prototype is preserved in `prototype-static/`. The live app is a TypeScript Next.js App Router project whose editable content comes from the Sanity `production` dataset.

## Current Shape

- Public site: `src/app/page.tsx`
- Sanity Studio and Presentation Tool: `/studio`
- Main editable content contract: `src/types/site.ts`
- Sanity schemas: `src/sanity/schemaTypes/`
- Sanity client/query/live helpers: `src/sanity/lib/`
- Static public assets: `public/images/`
- Original prototype archive: `prototype-static/`
- Work log: `docs/IMPLEMENTATION_LOG.md`

## Requirements

Use Node 22 LTS or newer. The current dependency set also works on newer Node versions, but some packages warn unless Node is at least `22.12.0`.

## Setup

```bash
cd "/Users/jaroslaw.kaliski/Library/Mobile Documents/com~apple~CloudDocs/2026 Websites/Jaroslaw Kaliski Website"
npm install
cp .env.example .env.local
npm run dev
```

Open:

- Public site: `http://localhost:3000`
- Sanity Studio: `http://localhost:3000/studio`

## Sanity

Fill `.env.local` with the project that contains the migrated production content:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_STUDIO_URL=http://localhost:3000/studio
NEXT_PUBLIC_SITE_URL=http://localhost:3000
SANITY_API_READ_TOKEN=your-read-token
SANITY_REVALIDATE_SECRET=long-random-secret
```

The site no longer renders from local fallback content. It expects these Sanity documents to exist:

- `siteSettings`
- singleton `homePage` with `sections[]`
- referenced documents for productions, appointments, videos, courses, repertoire, education, awards, languages, and testimonials

Use `/studio/presentation` to preview the live page inside Studio and click page elements into the matching document fields.

## Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run start
npm run sanity
```

## Vercel

Deploy by pushing this folder to a Git provider and importing it into Vercel as a Next.js project. Add the same environment variables in Vercel for Production and Preview.

Create a Sanity webhook that calls:

```text
https://your-domain.com/api/revalidate
```

Send the secret as `x-sanity-webhook-secret` with the value of `SANITY_REVALIDATE_SECRET`.
