export const apiVersion = '2026-05-19'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const studioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || 'http://localhost:3000/studio'

export const placeholderProjectIds = new Set([
  'replace-with-your-sanity-project-id',
  'replace-with-your-project-id',
  'abc123',
])

export const isSanityConfigured =
  Boolean(projectId) &&
  !placeholderProjectIds.has(projectId || '')
