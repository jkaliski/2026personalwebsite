import {defineQuery} from 'next-sanity'

export const HOME_PAGE_QUERY = defineQuery(`{
  "site": *[_type == "siteSettings"][0]{
    _id,
    _type,
    title,
    description,
    logoText,
    logoSuffix,
    email,
    phone,
    basedIn,
    faculty,
    representation,
    links[]{_key, _type, label, href}
  },
  "home": *[_type == "homePage"][0]{
    _id,
    _type,
    nav[]{_key, _type, label, href},
    hero{
      firstName,
      lastName,
      lede,
      meta[]{_key, _type, label, value},
      image{..., asset->}
    },
    biography{
      eyebrow,
      title,
      kicker,
      image{..., asset->},
      body
    },
    upcoming{
      eyebrow,
      title,
      kicker,
      featured{
        eyebrow,
        title,
        subtitle,
        body,
        quote,
        quoteAttribution,
        credits[]{_key, _type, name, role},
        creative,
        dates,
        personalRole,
        link{_type, label, href}
      }
    },
    productions{
      eyebrow,
      title,
      kicker,
      "items": items[]->{_id, _type, year, title, meta, roles, venue}
    },
    appointments{
      eyebrow,
      title,
      kicker,
      "items": items[]->{_id, _type, label, title, institution, span, body, bullets}
    },
    coaching{
      eyebrow,
      title,
      kicker,
      "videos": videos[]->{_id, _type, title, description, tag, vimeoUrl, archiveLinks[]{_key, _type, label, href}}
    },
    lyricLab{
      eyebrow,
      title,
      kicker,
      "courses": courses[]->{_id, _type, order, title, launch, body},
      testimonial->{_id, _type, label, quote, attribution},
      link{_type, label, href}
    },
    repertoire{
      eyebrow,
      title,
      kicker,
      "groups": groups[]->{_id, _type, title, items}
    },
    education{
      eyebrow,
      title,
      "items": items[]->{_id, _type, year, title, institution, detail},
      "awards": awards[]->{_id, _type, year, title},
      "languages": languages[]->{_id, _type, name, level, value}
    },
    contact{
      eyebrow,
      title,
      kicker,
      image{..., asset->}
    },
    sections[]{
      _key,
      _type,
      enabled,
      anchor,
      navLabel,
      showInNav,
      _type == "heroSection" => {
        firstName,
        lastName,
        lede,
        meta[]{_key, _type, label, value},
        image{..., asset->}
      },
      _type == "biographySection" => {
        eyebrow,
        title,
        kicker,
        image{..., asset->},
        body
      },
      _type == "upcomingSection" => {
        eyebrow,
        title,
        kicker,
        featured{
          eyebrow,
          title,
          subtitle,
          body,
          quote,
          quoteAttribution,
          credits[]{_key, _type, name, role},
          creative,
          dates,
          personalRole,
          link{_type, label, href}
        }
      },
      _type == "productionsSection" => {
        eyebrow,
        title,
        kicker,
        "items": items[]->{_id, _type, year, title, meta, roles, venue}
      },
      _type == "appointmentsSection" => {
        eyebrow,
        title,
        kicker,
        "items": items[]->{_id, _type, label, title, institution, span, body, bullets}
      },
      _type == "coachingSection" => {
        eyebrow,
        title,
        kicker,
        "videos": videos[]->{_id, _type, title, description, tag, vimeoUrl, archiveLinks[]{_key, _type, label, href}}
      },
      _type == "lyricLabSection" => {
        eyebrow,
        title,
        kicker,
        "courses": courses[]->{_id, _type, order, title, launch, body},
        testimonial->{_id, _type, label, quote, attribution},
        link{_type, label, href}
      },
      _type == "repertoireSection" => {
        eyebrow,
        title,
        kicker,
        "groups": groups[]->{_id, _type, title, items}
      },
      _type == "educationSection" => {
        eyebrow,
        title,
        "items": items[]->{_id, _type, year, title, institution, detail},
        "awards": awards[]->{_id, _type, year, title},
        "languages": languages[]->{_id, _type, name, level, value}
      },
      _type == "contactSection" => {
        eyebrow,
        title,
        kicker,
        image{..., asset->}
      }
    }
  }
}`)
