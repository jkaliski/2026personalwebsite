import type {PortableTextBlock} from 'sanity'

export type RichText = string[] | PortableTextBlock[]

export type SanityDocumentMeta<TType extends string = string> = {
  _id?: string
  _type?: TType
}

export type SanityArrayMeta<TType extends string = string> = {
  _key?: string
  _type: TType
}

export type CmsImage = {
  _type?: 'image'
  asset?: {
    _ref?: string
    url?: string
  }
  alt?: string
  caption?: string
  fallbackSrc?: string
  hotspot?: unknown
  crop?: unknown
}

export type MetaPair = SanityArrayMeta<'metaPair'> & {
  label: string
  value: string
}

export type LinkItem = Partial<SanityArrayMeta<'linkItem'>> & {
  label: string
  href: string
}

export type RoleCredit = SanityArrayMeta<'roleCredit'> & {
  name: string
  role: string
}

export type FeaturedProduction = {
  eyebrow: string
  title: string
  subtitle: string
  body: RichText
  quote?: string
  quoteAttribution?: string
  credits: RoleCredit[]
  creative: string[]
  dates: string
  personalRole: string
  link: LinkItem
}

export type Production = SanityDocumentMeta<'production'> & {
  year: string
  title: string
  meta: string
  roles: string[]
  venue: string
}

export type Appointment = SanityDocumentMeta<'appointment'> & {
  label: string
  title: string
  institution: string
  span: string
  body: RichText
  bullets?: string[]
}

export type VideoFeature = SanityDocumentMeta<'videoFeature'> & {
  title: string
  description: string
  tag: string
  vimeoUrl?: string
  archiveLinks?: LinkItem[]
}

export type LyricCourse = SanityDocumentMeta<'lyricCourse'> & {
  order: string
  title: string
  launch: string
  body: string
}

export type Testimonial = SanityDocumentMeta<'testimonial'> & {
  label: string
  quote: string
  attribution: string
}

export type RepertoireGroup = SanityDocumentMeta<'repertoireGroup'> & {
  title: string
  items: string[]
}

export type EducationItem = SanityDocumentMeta<'educationItem'> & {
  year: string
  title: string
  institution: string
  detail: string
}

export type Award = SanityDocumentMeta<'award'> & {
  year: string
  title: string
}

export type LanguageSkill = SanityDocumentMeta<'languageSkill'> & {
  name: string
  level: string
  value: number
}

export type SiteSettings = SanityDocumentMeta<'siteSettings'> & {
  title: string
  description: string
  logoText: string
  logoSuffix: string
  email: string
  phone: string
  basedIn: string
  faculty: string
  representation: string
  links: LinkItem[]
}

export type HomeSectionBase<TType extends string> = SanityArrayMeta<TType> & {
  enabled?: boolean
  anchor: string
  navLabel?: string
  showInNav?: boolean
}

export type SectionHeaderContent = {
  eyebrow: string
  title: string
  kicker?: string
}

export type HeroSection = HomeSectionBase<'heroSection'> & {
  firstName: string
  lastName: string
  lede: string
  meta: MetaPair[]
  image: CmsImage
}

export type BiographySection = HomeSectionBase<'biographySection'> &
  SectionHeaderContent & {
    image: CmsImage
    body: RichText
  }

export type UpcomingSection = HomeSectionBase<'upcomingSection'> &
  SectionHeaderContent & {
    featured: FeaturedProduction
  }

export type ProductionsSection = HomeSectionBase<'productionsSection'> &
  SectionHeaderContent & {
    items: Production[]
  }

export type AppointmentsSection = HomeSectionBase<'appointmentsSection'> &
  SectionHeaderContent & {
    items: Appointment[]
  }

export type CoachingSection = HomeSectionBase<'coachingSection'> &
  SectionHeaderContent & {
    videos: VideoFeature[]
  }

export type LyricLabSection = HomeSectionBase<'lyricLabSection'> &
  SectionHeaderContent & {
    courses: LyricCourse[]
    testimonial: Testimonial
    link: LinkItem
  }

export type RepertoireSection = HomeSectionBase<'repertoireSection'> &
  SectionHeaderContent & {
    groups: RepertoireGroup[]
  }

export type EducationSection = HomeSectionBase<'educationSection'> & {
  eyebrow: string
  title: string
  items: EducationItem[]
  awards: Award[]
  languages: LanguageSkill[]
}

export type ContactSection = HomeSectionBase<'contactSection'> &
  SectionHeaderContent & {
    image: CmsImage
  }

export type HomeSection =
  | HeroSection
  | BiographySection
  | UpcomingSection
  | ProductionsSection
  | AppointmentsSection
  | CoachingSection
  | LyricLabSection
  | RepertoireSection
  | EducationSection
  | ContactSection

export type HomeContent = SanityDocumentMeta<'homePage'> & {
  sections: HomeSection[]
}

export type SiteContent = {
  site: SiteSettings
  home: HomeContent
}
