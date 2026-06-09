# Implementation Log

## 2026-06-09

Goal: Port the static prototype into a Vercel-ready Next.js App Router project with Sanity editing support and handoff documentation.

Files and folders changed:

- Archived the original static site under `prototype-static/`.
- Copied selected web-sized starter images into `public/images/`.
- Added Next.js project configuration: `package.json`, `tsconfig.json`, `next.config.ts`, `eslint.config.mjs`, `sanity.config.ts`, `sanity.cli.ts`, `.env.example`, `.gitignore`.
- Added public app files under `src/app/`.
- Added React components under `src/components/`.
- Added structured fallback content in `src/content/fallback.ts`.
- Added Sanity client/query helpers under `src/sanity/lib/`.
- Added Sanity schemas under `src/sanity/schemaTypes/`.
- Added handoff docs under `docs/`.

Commands run:

- `node --version` returned `v24.14.0`.
- `npm --version`, `pnpm --version`, `yarn --version`, `bun --version`, and `corepack --version` were not available on this work computer.
- File inspection and archive commands were run with shell utilities.

Verification:

- Full dependency installation, linting, typechecking, and production build could not be run here because no package manager is available on PATH.
- The project is prepared so those checks can be run on another computer after `npm install`.
- `package.json` and `tsconfig.json` parse successfully.
- `scripts/seed-note.mjs` and `eslint.config.mjs` pass `node --check`.
- Static scan found no inline image-data references in runtime source files.

Next step:

- On a computer with npm, run `npm install`, then `npm run lint`, `npm run typecheck`, and `npm run build`.
- Create/link the Sanity project and enter the first `siteSettings` and `homePage` documents using `src/content/fallback.ts` as the source.

## 2026-06-09 Local Environment Setup

Goal: Add local environment values for the Sanity project and production domain.

Files changed:

- Added `.env.local` locally. This file is ignored by git and should not be committed.
- Updated this implementation log.

Commands run:

- `openssl rand -hex 32`

Verification:

- Confirmed `.env.local` is covered by `.gitignore`.
- Added public Sanity/Vercel values for project `l0gug3t1`, dataset `production`, and `https://www.jaroslawkaliski.com`.
- Generated a private `SANITY_REVALIDATE_SECRET`.

Next step:

- Add the same environment values in Vercel, then create a Sanity read token when draft preview is needed.

## 2026-06-09 Sanity Read Token

Goal: Add the local Sanity read token for draft/preview reads.

Files changed:

- Updated `.env.local` locally with `SANITY_API_READ_TOKEN`. This file is ignored by git and should not be committed.
- Added swap-file ignore patterns to `.gitignore`.
- Updated this implementation log.

Commands run:

- Checked git status to confirm `.env.local` remains ignored.
- Removed temporary local swap/macOS metadata files.

Verification:

- Confirmed `SANITY_API_READ_TOKEN` is present in `.env.local`.
- Confirmed the secret value is not written into tracked documentation.

Next step:

- Add the same `SANITY_API_READ_TOKEN` value in Vercel environment variables for draft preview support.

## 2026-06-09 Vercel Build Fix

Goal: Fix the TypeScript and lint failures behind the Vercel `npm run build` error.

Files changed:

- Updated `src/app/api/revalidate/route.ts` for the current Next.js `revalidateTag` API.
- Replaced internal Sanity image-url type imports with a local exported type from `src/sanity/lib/image.ts`.
- Tightened the Sanity fallback merge helper in `src/sanity/lib/fetch.ts`.
- Updated `eslint.config.mjs` to the current Next.js flat config style.
- Pinned package versions in `package.json` and added `package-lock.json`.
- Updated this implementation log.

Commands run:

- Downloaded npm into `/tmp` because npm is not available on this work computer.
- Installed dependencies in `/tmp/jk-build-check` rather than in the iCloud project folder.
- `./node_modules/.bin/tsc --noEmit`
- `npm run lint`
- `npm install --package-lock-only --ignore-scripts`

Verification:

- TypeScript passed in the temporary install.
- ESLint passed in the temporary install.
- `package.json` and `package-lock.json` parse successfully.
- A full local `next build` is still blocked by this machine's locked-down macOS/Node runtime failing to load Next's native SWC binary; Vercel should not hit that local-only code-signing issue.

Next step:

- Redeploy on Vercel. If it still fails, copy the first error block above `Command "npm run build" exited with 1`.

## 2026-06-09 Sanity Seed Import

Goal: Avoid manual recreation of the prototype content in Sanity Studio.

Files changed:

- Added `scripts/create-sanity-seed.mjs`.
- Added `seed:create` and `seed:import` scripts to `package.json`.
- Added `sanity-seed.ndjson` to `.gitignore` because it contains local image file paths.
- Updated `README.md`, `docs/SANITY_CONTENT_MODEL.md`, `docs/SETUP_ON_NEW_COMPUTER.md`, and `scripts/seed-note.mjs`.
- Updated this implementation log.

Commands run:

- `node --check scripts/create-sanity-seed.mjs`
- `node scripts/create-sanity-seed.mjs`
- `wc -l sanity-seed.ndjson`

Verification:

- Seed generation created 58 Sanity documents.
- The generated import includes stable references from `homePage` to the supporting documents.
- The generated import includes `_sanityAsset` references for the starter hero, biography, and contact images.
- `sanity-seed.ndjson` remains ignored by git.

Next step:

- On a computer with npm/Sanity CLI access, run `npm run seed:create`, then `npx sanity@latest datasets import sanity-seed.ndjson production --replace`.

## 2026-06-09 Visual Editing Page Builder

Goal: Make the migrated Sanity production dataset the only runtime content source and enable Studio Presentation visual editing.

Files changed:

- Converted `homePage` to an ordered `sections[]` page-builder schema.
- Added Sanity Presentation Tool configuration.
- Added live-preview helpers and official draft-mode enable route.
- Refactored the homepage renderer into section components with `data-sanity` annotations.
- Removed local fallback content and seed scripts because production Sanity content is already migrated.
- Updated README and setup/content-model docs.

Verification:

- Run `npm run lint`, `npm run typecheck`, and `npm run build`.
- Run `npm run dev` with real Sanity environment values, then verify `/studio/presentation`.
