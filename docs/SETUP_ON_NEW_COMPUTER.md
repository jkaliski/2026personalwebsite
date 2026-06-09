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

Add the Sanity project values for the dataset that already contains the migrated production content. The site does not render from local fallback content.

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
```

Use the existing project and dataset. The embedded Studio in this repo is already configured for `/studio`.

8. Verify visual editing:

- Open `http://localhost:3000/studio/presentation`.
- Confirm the homepage loads in the preview iframe.
- Click section headings, images, text blocks, and referenced cards to open the matching Studio field.
- Reorder `homePage.sections[]` and confirm the preview follows the Studio order.

9. Vercel deployment:

- Create a Git repository for this folder.
- Push it to GitHub/GitLab/Bitbucket.
- Import it into Vercel as a Next.js project.
- Add the `.env.local` values as Vercel environment variables.
- Add a Sanity webhook pointing to `/api/revalidate`.
