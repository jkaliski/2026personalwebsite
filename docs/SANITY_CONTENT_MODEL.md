# Sanity Content Model

Sanity is the source of truth for the live website. The app does not use local fallback content.

## Core Documents

- `siteSettings`: metadata, logo text, contact information, and external links.
- `homePage`: singleton page document with an ordered `sections[]` page-builder array.
- Supporting documents: `production`, `appointment`, `videoFeature`, `lyricCourse`, `repertoireGroup`, `educationItem`, `award`, `languageSkill`, and `testimonial`.

## Homepage Sections

`homePage.sections[]` accepts these modular section objects:

- `heroSection`
- `biographySection`
- `upcomingSection`
- `productionsSection`
- `appointmentsSection`
- `coachingSection`
- `lyricLabSection`
- `repertoireSection`
- `educationSection`
- `contactSection`

Every section includes:

- `enabled`: controls whether the section renders.
- `anchor`: page fragment used for in-page navigation.
- `navLabel`: label shown in the header when enabled.
- `showInNav`: controls whether the section appears in the header navigation.

Sections can be reordered in Studio. Repeated content inside sections stays as referenced documents, so visual editing can open the precise card/document while page-level section ordering remains editable from `homePage`.

## Visual Editing

Studio uses the Presentation Tool at `/studio/presentation`.

Draft mode is enabled through:

```text
/api/draft/enable
```

Draft mode is disabled through:

```text
/api/draft/disable
```

The frontend adds `data-sanity` attributes to section roots, headings, images, rich text blocks, referenced cards, and contact fields. These attributes let Presentation overlays open the corresponding Studio field.

## Revalidation

Webhook endpoint:

```text
/api/revalidate
```

Send `SANITY_REVALIDATE_SECRET` as the `x-sanity-webhook-secret` header.
