# Sanity Content Model And Seed Notes

The page is intentionally structured instead of stored as static HTML.

## First Documents To Create

You do not need to type all prototype content manually. Generate and import the seed documents first, then edit them in Studio.

```bash
npm run seed:create
npx sanity@latest datasets import sanity-seed.ndjson production --replace
```

The generator reads `src/content/fallback.ts`, writes `sanity-seed.ndjson`, and creates:

- `siteSettings`
- `homePage`
- `production`
- `appointment`
- `videoFeature`
- `lyricCourse`
- `repertoireGroup`
- `educationItem`
- `award`
- `languageSkill`
- `testimonial`

The import uses stable document IDs, so rerunning it with `--replace` refreshes the seeded documents. After import, use Studio to polish, replace, add, reorder, or delete content.

`src/content/fallback.ts` remains the source of truth for the first seed pass. That file mirrors the original `prototype-static/index.html` content in structured form.

## Images

Starter web images are in `public/images/`:

- `portrait-hero.jpg`
- `portrait-harpsichord.jpg`
- `portrait-headshot.jpg`
- `portrait-crossed.jpg`
- `hero.jpg`

The seed generator references the hero, biography, and contact starter images with Sanity's `_sanityAsset` import format. The Sanity CLI uploads those files during import.

Upload or replace the final chosen images in Studio afterwards. The local fallback path can stay in each image field while migrating.

Large originals and screenshots remain in `prototype-static/uploads/` and `prototype-static/screenshots/`.

## Preview And Revalidation

Draft mode:

```text
/api/draft/enable?secret=SANITY_REVALIDATE_SECRET&redirect=/
```

Disable draft mode:

```text
/api/draft/disable
```

Webhook endpoint:

```text
/api/revalidate
```

Send `SANITY_REVALIDATE_SECRET` as the `x-sanity-webhook-secret` header.
