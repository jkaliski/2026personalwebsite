console.log(`
Sanity seed note
================

The initial structured content lives in:

  src/content/fallback.ts

Generate a Sanity NDJSON import from it with:

  npm run seed:create

Then import it into the production dataset with:

  npx sanity@latest datasets import sanity-seed.ndjson production --replace

The generated import creates:

  siteSettings, homePage, production, appointment, videoFeature,
  lyricCourse, repertoireGroup, educationItem, award, languageSkill,
  testimonial

It also references the starter images in public/images/ so the Sanity CLI
can upload them as image assets during import.

The site renders fallback content automatically until real Sanity documents
are available.
`)
