import type {
  AppointmentsSection,
  BiographySection,
  CoachingSection,
  ContactSection,
  EducationSection,
  HeroSection,
  HomeContent,
  HomeSection,
  LyricLabSection,
  ProductionsSection,
  RepertoireSection,
  SiteContent,
  UpcomingSection,
} from '@/types/site'

import {isSanityConfigured} from './env'
import {getLiveFetchOptions, sanityFetch} from './live'
import {HOME_PAGE_QUERY} from './queries'

type LegacyHomeContent = Partial<HomeContent> & {
  hero?: Omit<HeroSection, '_key' | '_type' | 'enabled' | 'anchor' | 'navLabel' | 'showInNav'>
  biography?: Omit<BiographySection, '_key' | '_type' | 'enabled' | 'anchor' | 'navLabel' | 'showInNav'>
  upcoming?: Omit<UpcomingSection, '_key' | '_type' | 'enabled' | 'anchor' | 'navLabel' | 'showInNav'>
  productions?: Omit<ProductionsSection, '_key' | '_type' | 'enabled' | 'anchor' | 'navLabel' | 'showInNav'>
  appointments?: Omit<AppointmentsSection, '_key' | '_type' | 'enabled' | 'anchor' | 'navLabel' | 'showInNav'>
  coaching?: Omit<CoachingSection, '_key' | '_type' | 'enabled' | 'anchor' | 'navLabel' | 'showInNav'>
  lyricLab?: Omit<LyricLabSection, '_key' | '_type' | 'enabled' | 'anchor' | 'navLabel' | 'showInNav'>
  repertoire?: Omit<RepertoireSection, '_key' | '_type' | 'enabled' | 'anchor' | 'navLabel' | 'showInNav'>
  education?: Omit<EducationSection, '_key' | '_type' | 'enabled' | 'anchor' | 'navLabel' | 'showInNav'>
  contact?: Omit<ContactSection, '_key' | '_type' | 'enabled' | 'anchor' | 'navLabel' | 'showInNav'>
}

function legacySections(home: LegacyHomeContent): HomeSection[] {
  const sections: HomeSection[] = []

  if (home.hero) {
    sections.push({
      _key: 'hero',
      _type: 'heroSection',
      enabled: true,
      anchor: 'top',
      navLabel: 'Top',
      showInNav: false,
      ...home.hero,
      meta: home.hero.meta || [],
    })
  }

  if (home.biography) {
    sections.push({
      _key: 'biography',
      _type: 'biographySection',
      enabled: true,
      anchor: 'biography',
      navLabel: 'Biography',
      showInNav: true,
      ...home.biography,
    })
  }

  if (home.upcoming) {
    sections.push({
      _key: 'upcoming',
      _type: 'upcomingSection',
      enabled: true,
      anchor: 'upcoming',
      navLabel: 'Upcoming',
      showInNav: true,
      ...home.upcoming,
    })
  }

  if (home.productions) {
    sections.push({
      _key: 'productions',
      _type: 'productionsSection',
      enabled: true,
      anchor: 'productions',
      navLabel: 'Productions',
      showInNav: true,
      ...home.productions,
      items: home.productions.items || [],
    })
  }

  if (home.appointments) {
    sections.push({
      _key: 'appointments',
      _type: 'appointmentsSection',
      enabled: true,
      anchor: 'teaching',
      navLabel: 'Teaching',
      showInNav: true,
      ...home.appointments,
      items: home.appointments.items || [],
    })
  }

  if (home.coaching) {
    sections.push({
      _key: 'coaching',
      _type: 'coachingSection',
      enabled: true,
      anchor: 'coaching',
      navLabel: 'Coaching',
      showInNav: true,
      ...home.coaching,
      videos: home.coaching.videos || [],
    })
  }

  if (home.lyricLab) {
    sections.push({
      _key: 'lyric-lab',
      _type: 'lyricLabSection',
      enabled: true,
      anchor: 'lyric-lab',
      navLabel: 'Lyric LAB',
      showInNav: true,
      ...home.lyricLab,
      courses: home.lyricLab.courses || [],
    })
  }

  if (home.repertoire) {
    sections.push({
      _key: 'repertoire',
      _type: 'repertoireSection',
      enabled: true,
      anchor: 'repertoire',
      navLabel: 'Repertoire',
      showInNav: false,
      ...home.repertoire,
      groups: home.repertoire.groups || [],
    })
  }

  if (home.education) {
    sections.push({
      _key: 'education',
      _type: 'educationSection',
      enabled: true,
      anchor: 'education',
      navLabel: 'Education',
      showInNav: false,
      ...home.education,
      items: home.education.items || [],
      awards: home.education.awards || [],
      languages: home.education.languages || [],
    })
  }

  if (home.contact) {
    sections.push({
      _key: 'contact',
      _type: 'contactSection',
      enabled: true,
      anchor: 'contact',
      navLabel: 'Contact',
      showInNav: true,
      ...home.contact,
    })
  }

  return sections
}

function normalizeHome(home: LegacyHomeContent): HomeContent {
  const sections = Array.isArray(home.sections) && home.sections.length > 0 ? home.sections : legacySections(home)

  if (!sections.length) {
    throw new Error('Sanity homePage document has no page-builder sections.')
  }

  return {
    _id: home._id,
    _type: 'homePage',
    sections: sections.filter((section): section is HomeSection => Boolean(section?._type)),
  }
}

function assertSiteContent(data: Partial<SiteContent> | null): SiteContent {
  if (!data?.site) {
    throw new Error('Missing Sanity siteSettings document.')
  }

  if (!data.home) {
    throw new Error('Missing Sanity homePage document.')
  }

  return {
    site: {
      ...data.site,
      links: data.site.links || [],
    },
    home: normalizeHome(data.home),
  }
}

export async function getSiteContent(): Promise<SiteContent> {
  if (!isSanityConfigured) {
    throw new Error(
      'Sanity is not configured. Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET to render the site.',
    )
  }

  const {perspective, stega} = await getLiveFetchOptions()
  const {data} = await sanityFetch({
    query: HOME_PAGE_QUERY,
    perspective,
    stega,
    tags: ['sanity', 'home'],
    requestTag: 'home-page',
  })

  return assertSiteContent(data as Partial<SiteContent>)
}
