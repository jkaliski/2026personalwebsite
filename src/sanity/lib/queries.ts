import {defineQuery} from 'next-sanity'

export const HOME_PAGE_QUERY = defineQuery(`{
  "site": *[_type == "siteSettings"][0]{
    title,
    description,
    logoText,
    logoSuffix,
    email,
    phone,
    basedIn,
    faculty,
    representation,
    links[]{label, href}
  },
  "home": *[_type == "homePage"][0]{
    nav[]{label, href},
    hero{
      firstName,
      lastName,
      lede,
      meta[]{label, value},
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
        credits[]{name, role},
        creative,
        dates,
        personalRole,
        link{label, href}
      }
    },
    productions{
      eyebrow,
      title,
      kicker,
      "items": items[]->{year, title, meta, roles, venue}
    },
    appointments{
      eyebrow,
      title,
      kicker,
      "items": items[]->{label, title, institution, span, body, bullets}
    },
    coaching{
      eyebrow,
      title,
      kicker,
      "videos": videos[]->{title, description, tag, vimeoUrl, archiveLinks[]{label, href}}
    },
    lyricLab{
      eyebrow,
      title,
      kicker,
      "courses": courses[]->{order, title, launch, body},
      testimonial->{label, quote, attribution},
      link{label, href}
    },
    repertoire{
      eyebrow,
      title,
      kicker,
      "groups": groups[]->{title, items}
    },
    education{
      eyebrow,
      title,
      "items": items[]->{year, title, institution, detail},
      "awards": awards[]->{year, title},
      "languages": languages[]->{name, level, value}
    },
    contact{
      eyebrow,
      title,
      kicker,
      image{..., asset->}
    }
  }
}`)
