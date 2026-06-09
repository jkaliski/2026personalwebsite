import {draftMode} from 'next/headers'

import {fallbackContent} from '@/content/fallback'
import type {SiteContent} from '@/types/site'

import {client} from './client'
import {isSanityConfigured} from './env'
import {HOME_PAGE_QUERY} from './queries'

function mergeDefined<T extends object>(base: T, override: Partial<T> | null | undefined): T {
  const result = {...base} as Record<string, unknown>

  for (const [key, value] of Object.entries(override || {})) {
    if (value !== null && value !== undefined) {
      result[key] = value
    }
  }

  return result as T
}

function withFallback(result: Partial<SiteContent> | null | undefined): SiteContent {
  if (!result?.home && !result?.site) {
    return fallbackContent
  }

  const home = result.home as Partial<SiteContent['home']> | null | undefined
  const hero = mergeDefined(fallbackContent.home.hero, home?.hero)
  const biography = mergeDefined(fallbackContent.home.biography, home?.biography)
  const upcoming = mergeDefined(fallbackContent.home.upcoming, home?.upcoming)
  const featured = mergeDefined(fallbackContent.home.upcoming.featured, home?.upcoming?.featured)
  const contact = mergeDefined(fallbackContent.home.contact, home?.contact)

  return {
    site: mergeDefined(fallbackContent.site, {
      ...(result.site || {}),
      links: result.site?.links?.length ? result.site.links : fallbackContent.site.links,
    }),
    home: {
      ...fallbackContent.home,
      ...home,
      nav: home?.nav?.length ? home.nav : fallbackContent.home.nav,
      hero: {
        ...hero,
        meta: home?.hero?.meta?.length ? home.hero.meta : fallbackContent.home.hero.meta,
        image: mergeDefined(fallbackContent.home.hero.image, home?.hero?.image),
      },
      biography: {
        ...biography,
        image: mergeDefined(fallbackContent.home.biography.image, home?.biography?.image),
        body: home?.biography?.body?.length ? home.biography.body : fallbackContent.home.biography.body,
      },
      upcoming: {
        ...upcoming,
        featured: {
          ...featured,
          body: home?.upcoming?.featured?.body?.length
            ? home.upcoming.featured.body
            : fallbackContent.home.upcoming.featured.body,
          credits: home?.upcoming?.featured?.credits?.length
            ? home.upcoming.featured.credits
            : fallbackContent.home.upcoming.featured.credits,
          creative: home?.upcoming?.featured?.creative?.length
            ? home.upcoming.featured.creative
            : fallbackContent.home.upcoming.featured.creative,
          link: mergeDefined(fallbackContent.home.upcoming.featured.link, home?.upcoming?.featured?.link),
        },
      },
      productions: {
        ...fallbackContent.home.productions,
        ...home?.productions,
        items: home?.productions?.items?.length ? home.productions.items : fallbackContent.home.productions.items,
      },
      appointments: {
        ...fallbackContent.home.appointments,
        ...home?.appointments,
        items: home?.appointments?.items?.length ? home.appointments.items : fallbackContent.home.appointments.items,
      },
      coaching: {
        ...fallbackContent.home.coaching,
        ...home?.coaching,
        videos: home?.coaching?.videos?.length ? home.coaching.videos : fallbackContent.home.coaching.videos,
      },
      lyricLab: {
        ...fallbackContent.home.lyricLab,
        ...home?.lyricLab,
        courses: home?.lyricLab?.courses?.length ? home.lyricLab.courses : fallbackContent.home.lyricLab.courses,
        testimonial: home?.lyricLab?.testimonial || fallbackContent.home.lyricLab.testimonial,
      },
      repertoire: {
        ...fallbackContent.home.repertoire,
        ...home?.repertoire,
        groups: home?.repertoire?.groups?.length ? home.repertoire.groups : fallbackContent.home.repertoire.groups,
      },
      education: {
        ...fallbackContent.home.education,
        ...home?.education,
        items: home?.education?.items?.length ? home.education.items : fallbackContent.home.education.items,
        awards: home?.education?.awards?.length ? home.education.awards : fallbackContent.home.education.awards,
        languages: home?.education?.languages?.length
          ? home.education.languages
          : fallbackContent.home.education.languages,
      },
      contact: {
        ...contact,
        image: mergeDefined(fallbackContent.home.contact.image, home?.contact?.image),
      },
    },
  }
}

export async function getSiteContent(): Promise<SiteContent> {
  if (!isSanityConfigured) {
    return fallbackContent
  }

  const {isEnabled} = await draftMode()
  const token = process.env.SANITY_API_READ_TOKEN

  try {
    const data = await client.fetch<Partial<SiteContent>>(HOME_PAGE_QUERY, {}, {
      cache: isEnabled ? 'no-store' : 'force-cache',
      next: isEnabled ? undefined : {tags: ['sanity', 'home']},
      perspective: isEnabled && token ? 'drafts' : 'published',
      token: isEnabled ? token : undefined,
      stega: isEnabled,
    })

    return withFallback(data)
  } catch (error) {
    console.warn('Sanity fetch failed; using fallback content.', error)
    return fallbackContent
  }
}
