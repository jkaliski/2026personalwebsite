# Sanity Content Model And Seed Notes

The page is intentionally structured instead of stored as static HTML.

## First Documents To Create

Create these documents in Studio:

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

Use `src/content/fallback.ts` as the source of truth for the first entry pass. That file mirrors the original `prototype-static/index.html` content in structured form.

## Images

Starter web images are in `public/images/`:

- `portrait-hero.jpg`
- `portrait-harpsichord.jpg`
- `portrait-headshot.jpg`
- `portrait-crossed.jpg`
- `hero.jpg`

Upload the final chosen images into Sanity image fields. The local fallback path can stay in each image field while migrating.

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
