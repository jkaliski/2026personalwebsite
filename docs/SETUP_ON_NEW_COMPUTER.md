# Setup On A New Computer

1. Open this iCloud folder in Codex or a terminal:

```bash
cd "/Users/jaroslaw.kaliski/Library/Mobile Documents/com~apple~CloudDocs/2026 Websites/Jaroslaw Kaliski Website"
```

2. Confirm Node and npm:

```bash
node --version
npm --version
```

Use Node 22 LTS or newer.

3. Install dependencies:

```bash
npm install
```

4. Create local environment variables:

```bash
cp .env.example .env.local
```

Leave placeholder Sanity values if you only want to see the fallback-rendered site. Add real Sanity values when you are ready to edit content in Studio.

5. Run locally:

```bash
npm run dev
```

Open:

- `http://localhost:3000`
- `http://localhost:3000/studio`

6. Run checks:

```bash
npm run lint
npm run typecheck
npm run build
```

7. Sanity setup:

```bash
npx sanity@latest login
npx sanity@latest init
```

Choose or create a project, keep the dataset as `production`, and use the existing embedded Studio files in this repo.

8. Seed the Sanity dataset from the prototype content:

```bash
npm run seed:create
npx sanity@latest datasets import sanity-seed.ndjson production --replace
```

The generated `sanity-seed.ndjson` file is ignored by git because it contains local file paths for image upload. Regenerate it on each computer when needed.

9. Vercel deployment:

- Create a Git repository for this folder.
- Push it to GitHub/GitLab/Bitbucket.
- Import it into Vercel as a Next.js project.
- Add the `.env.local` values as Vercel environment variables.
- Add a Sanity webhook pointing to `/api/revalidate`.

10. After Sanity content exists:

- Edit the `siteSettings` document.
- Edit the `homePage` document and reference the supporting documents.
- Upload the hero, biography, and contact images to Sanity.
- Confirm edits appear on the deployed site.
