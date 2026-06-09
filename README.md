# Jaroslaw Kaliski Website

Next.js + Sanity port of the static Jaroslaw Kaliski website prototype.

The original prototype has been preserved in `prototype-static/`. The live app source is now a TypeScript Next.js App Router project that renders from local fallback content until Sanity environment variables are configured.

## Current Shape

- Public site: `src/app/page.tsx`
- Sanity Studio: `/studio`
- Main editable content contract: `src/types/site.ts`
- Local fallback/seed content: `src/content/fallback.ts`
- Sanity schemas: `src/sanity/schemaTypes/`
- Static starter images: `public/images/`
- Original prototype archive: `prototype-static/`
- Work log: `docs/IMPLEMENTATION_LOG.md`

## Requirements

Use a computer with Node.js and a package manager available. Node 22 LTS or newer is recommended.

This work computer had Node available but no `npm`, `pnpm`, `yarn`, or `bun` on PATH, so dependency installation and full build verification are expected to happen on the next machine.

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

Create or link a Sanity project, then fill `.env.local`:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_STUDIO_URL=http://localhost:3000/studio
NEXT_PUBLIC_SITE_URL=http://localhost:3000
SANITY_API_READ_TOKEN=your-read-token
SANITY_REVALIDATE_SECRET=long-random-secret
```

The site uses local fallback content until Sanity has real `siteSettings` and `homePage` documents. See `docs/SANITY_CONTENT_MODEL.md` for the first content-entry pass.

## Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run start
npm run sanity
npm run seed:note
```

## Vercel

Deploy by pushing this folder to a Git provider and importing it into Vercel as a Next.js project. Add the same environment variables in Vercel for Production and Preview.

Create a Sanity webhook that calls:

```text
https://your-domain.com/api/revalidate
```

Send the secret as `x-sanity-webhook-secret` with the value of `SANITY_REVALIDATE_SECRET`.
