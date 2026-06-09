import type {PortableTextBlock} from 'sanity'

export type RichText = string[] | PortableTextBlock[]

export type CmsImage = {
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

export type MetaPair = {
  label: string
  value: string
}

export type LinkItem = {
  label: string
  href: string
}

export type RoleCredit = {
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

export type Production = {
  year: string
  title: string
  meta: string
  roles: string[]
  venue: string
}

export type Appointment = {
  label: string
  title: string
  institution: string
  span: string
  body: RichText
  bullets?: string[]
}

export type VideoFeature = {
  title: string
  description: string
  tag: string
  vimeoUrl?: string
  archiveLinks?: LinkItem[]
}

export type LyricCourse = {
  order: string
  title: string
  launch: string
  body: string
}

export type Testimonial = {
  label: string
  quote: string
  attribution: string
}

export type RepertoireGroup = {
  title: string
  items: string[]
}

export type EducationItem = {
  year: string
  title: string
  institution: string
  detail: string
}

export type Award = {
  year: string
  title: string
}

export type LanguageSkill = {
  name: string
  level: string
  value: number
}

export type SiteSettings = {
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

export type HomeContent = {
  nav: LinkItem[]
  hero: {
    firstName: string
    lastName: string
    lede: string
    meta: MetaPair[]
    image: CmsImage
  }
  biography: {
    eyebrow: string
    title: string
    kicker: string
    image: CmsImage
    body: RichText
  }
  upcoming: {
    eyebrow: string
    title: string
    kicker: string
    featured: FeaturedProduction
  }
  productions: {
    eyebrow: string
    title: string
    kicker: string
    items: Production[]
  }
  appointments: {
    eyebrow: string
    title: string
    kicker: string
    items: Appointment[]
  }
  coaching: {
    eyebrow: string
    title: string
    kicker: string
    videos: VideoFeature[]
  }
  lyricLab: {
    eyebrow: string
    title: string
    kicker: string
    courses: LyricCourse[]
    testimonial: Testimonial
    link: LinkItem
  }
  repertoire: {
    eyebrow: string
    title: string
    kicker: string
    groups: RepertoireGroup[]
  }
  education: {
    eyebrow: string
    title: string
    items: EducationItem[]
    awards: Award[]
    languages: LanguageSkill[]
  }
  contact: {
    eyebrow: string
    title: string
    kicker: string
    image: CmsImage
  }
}

export type SiteContent = {
  site: SiteSettings
  home: HomeContent
}
