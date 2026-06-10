import {createDataAttribute} from '@sanity/visual-editing/create-data-attribute'
import type {CSSProperties} from 'react'

import {CmsImage} from '@/components/CmsImage'
import {Header} from '@/components/Header'
import {SectionHeader} from '@/components/SectionHeader'
import {RichTextRenderer} from '@/lib/rich-text'
import {studioUrl} from '@/sanity/lib/env'
import type {
  AppointmentsSection,
  Award,
  BiographySection,
  CoachingSection,
  ContactSection,
  EducationItem,
  EducationSection,
  HeroSection,
  HomeContent,
  HomeSection,
  LanguageSkill,
  LinkItem,
  LyricCourse,
  LyricLabSection,
  Production,
  ProductionsSection,
  RepertoireGroup,
  RepertoireSection,
  SiteContent,
  Testimonial,
  UpcomingSection,
  VideoFeature,
} from '@/types/site'

type EditableDocument = {
  _id?: string
  _type?: string
}

function dataSanity(document: EditableDocument, path: string) {
  if (!document._id || !document._type || !path) {
    return undefined
  }

  return createDataAttribute({
    baseUrl: studioUrl,
    id: document._id,
    type: document._type,
    path,
  }).toString()
}

function sectionPath(section: HomeSection) {
  return `sections[_key=="${section._key}"]`
}

function sectionData(home: HomeContent, section: HomeSection, path = '') {
  return dataSanity(home, path ? `${sectionPath(section)}.${path}` : sectionPath(section))
}

function sectionHeaderData(home: HomeContent, section: HomeSection) {
  return {
    root: sectionData(home, section),
    eyebrow: sectionData(home, section, 'eyebrow'),
    title: sectionData(home, section, 'title'),
    kicker: sectionData(home, section, 'kicker'),
  }
}

function itemKey(item: {_id?: string; title?: string; name?: string; year?: string}, index: number) {
  return item._id || [item.year, item.title, item.name].filter(Boolean).join('-') || String(index)
}

function enabledSections(sections: HomeSection[]) {
  return sections.filter((section) => section.enabled !== false)
}

function navFromSections(sections: HomeSection[]): LinkItem[] {
  return enabledSections(sections)
    .filter((section) => section.showInNav !== false && section.navLabel && section.anchor)
    .map((section) => ({
      label: section.navLabel || section.anchor,
      href: `#${section.anchor}`,
    }))
}

export function HomePage({content}: {content: SiteContent}) {
  const {site, home} = content
  const sections = enabledSections(home.sections)

  return (
    <>
      <Header settings={site} nav={navFromSections(home.sections)} />
      <main id="top">
        {sections.map((section) => (
          <HomeSectionRenderer content={content} section={section} key={section._key || section._type} />
        ))}
      </main>
      <footer className="colophon">
        <div className="wrap">
          <span>© 2026 Jarosław Kaliski · All rights reserved</span>
          <span>Set in Inter Tight, Inter & JetBrains Mono</span>
          <span>
            <a href="#top">Return to top</a>
          </span>
        </div>
      </footer>
    </>
  )
}

function HomeSectionRenderer({content, section}: {content: SiteContent; section: HomeSection}) {
  switch (section._type) {
    case 'heroSection':
      return <Hero content={content} section={section} />
    case 'biographySection':
      return <Biography home={content.home} section={section} />
    case 'upcomingSection':
      return <Upcoming home={content.home} section={section} />
    case 'productionsSection':
      return <Productions home={content.home} section={section} />
    case 'appointmentsSection':
      return <Appointments home={content.home} section={section} />
    case 'coachingSection':
      return <Coaching home={content.home} section={section} />
    case 'lyricLabSection':
      return <LyricLab home={content.home} section={section} />
    case 'repertoireSection':
      return <Repertoire home={content.home} section={section} />
    case 'educationSection':
      return <Education home={content.home} section={section} />
    case 'contactSection':
      return <Contact content={content} section={section} />
  }
}

function sectionId(section: HomeSection) {
  return section.anchor === 'top' ? undefined : section.anchor
}

function Hero({content, section}: {content: SiteContent; section: HeroSection}) {
  const {home} = content

  return (
    <section className="hero" id={sectionId(section)} data-sanity={sectionData(home, section)}>
      <div className="wrap">
        <h1 className="hero-title" data-sanity={sectionData(home, section, 'firstName')}>
          {section.firstName}
          <br />
          <span data-sanity={sectionData(home, section, 'lastName')}>{section.lastName}</span>
        </h1>
        <div className="hero-sub">
          <p className="lede" data-sanity={sectionData(home, section, 'lede')}>
            {section.lede}
          </p>
          <dl className="hero-meta" data-sanity={sectionData(home, section, 'meta')}>
            {section.meta.map((item) => (
              <div
                key={item._key || `${item.label}-${item.value}`}
                data-sanity={item._key ? sectionData(home, section, `meta[_key=="${item._key}"]`) : undefined}
              >
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <figure className="hero-image">
          <CmsImage
            image={section.image}
            width={2400}
            height={1350}
            sizes="100vw"
            sources={[
              {
                media: '(max-width: 640px)',
                width: 760,
                height: 950,
                sizes: 'calc(100vw - 40px)',
              },
            ]}
            priority
            dataSanity={sectionData(home, section, 'image')}
          />
          {section.image.caption ? (
            <figcaption data-sanity={sectionData(home, section, 'image.caption')}>{section.image.caption}</figcaption>
          ) : null}
        </figure>
      </div>
    </section>
  )
}

function Biography({home, section}: {home: HomeContent; section: BiographySection}) {
  return (
    <section className="ed" id={sectionId(section)} data-sanity={sectionData(home, section)}>
      <div className="wrap">
        <SectionHeader {...section} dataSanity={sectionHeaderData(home, section)} />
        <div className="bio-grid">
          <aside className="bio-portrait">
            <figure>
              <CmsImage
                image={section.image}
                width={865}
                height={1154}
                sizes="(max-width: 860px) 100vw, 34vw"
                dataSanity={sectionData(home, section, 'image')}
              />
              {section.image.caption ? (
                <figcaption data-sanity={sectionData(home, section, 'image.caption')}>
                  {section.image.caption}
                </figcaption>
              ) : null}
            </figure>
          </aside>
          <RichTextRenderer value={section.body} className="bio-text" dataSanity={sectionData(home, section, 'body')} />
        </div>
      </div>
    </section>
  )
}

function Upcoming({home, section}: {home: HomeContent; section: UpcomingSection}) {
  const featured = section.featured

  return (
    <section className="ed upcoming" id={sectionId(section)} data-sanity={sectionData(home, section)}>
      <div className="wrap">
        <SectionHeader {...section} dataSanity={sectionHeaderData(home, section)} />
        <div className="featured" data-sanity={sectionData(home, section, 'featured')}>
          <div>
            <div className="eyebrow" data-sanity={sectionData(home, section, 'featured.eyebrow')}>
              {featured.eyebrow}
            </div>
            <h3 data-sanity={sectionData(home, section, 'featured.title')}>{featured.title}</h3>
            <div className="sub" data-sanity={sectionData(home, section, 'featured.subtitle')}>
              {featured.subtitle}
            </div>
            <RichTextRenderer
              value={featured.body}
              className="body"
              dataSanity={sectionData(home, section, 'featured.body')}
            />
            {featured.quote ? (
              <blockquote className="quote" data-sanity={sectionData(home, section, 'featured.quote')}>
                {featured.quote}
                {featured.quoteAttribution ? (
                  <cite data-sanity={sectionData(home, section, 'featured.quoteAttribution')}>
                    {featured.quoteAttribution}
                  </cite>
                ) : null}
              </blockquote>
            ) : null}
          </div>
          <aside className="perf-card">
            <div className="smallcaps">Cast & Creative</div>
            <ul className="role-list" data-sanity={sectionData(home, section, 'featured.credits')}>
              {featured.credits.map((credit) => (
                <li
                  key={credit._key || `${credit.name}-${credit.role}`}
                  data-sanity={
                    credit._key ? sectionData(home, section, `featured.credits[_key=="${credit._key}"]`) : undefined
                  }
                >
                  <span className="name">{credit.name}</span>
                  <span className="role">{credit.role}</span>
                </li>
              ))}
            </ul>
            <div className="dates" data-sanity={sectionData(home, section, 'featured.creative')}>
              <strong>Music · Direction · Design</strong>
              {featured.creative.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
            <div className="dates" data-sanity={sectionData(home, section, 'featured.dates')}>
              <strong>Performance dates · Ulriksdal</strong>
              <span>{featured.dates}</span>
            </div>
            <div className="dates" data-sanity={sectionData(home, section, 'featured.personalRole')}>
              <strong>J. Kaliski · role</strong>
              <span>{featured.personalRole}</span>
            </div>
            <a
              href={featured.link.href}
              target="_blank"
              rel="noopener"
              className="text-link"
              data-sanity={sectionData(home, section, 'featured.link')}
            >
              {featured.link.label}
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Productions({home, section}: {home: HomeContent; section: ProductionsSection}) {
  return (
    <section className="ed" id={sectionId(section)} data-sanity={sectionData(home, section)}>
      <div className="wrap">
        <SectionHeader {...section} dataSanity={sectionHeaderData(home, section)} />
        <div className="timeline" data-sanity={sectionData(home, section, 'items')}>
          {section.items.map((item: Production, index) => (
            <article className="prod" key={itemKey(item, index)} data-sanity={dataSanity(item, 'title')}>
              <div className="year" data-sanity={dataSanity(item, 'year')}>
                {item.year}
              </div>
              <div>
                <h3 className="title" data-sanity={dataSanity(item, 'title')}>
                  {item.title}
                </h3>
                <div className="meta" data-sanity={dataSanity(item, 'meta')}>
                  {item.meta}
                </div>
                <div className="tags" data-sanity={dataSanity(item, 'roles')}>
                  {item.roles.map((role) => (
                    <span className="role-tag" key={role}>
                      {role}
                    </span>
                  ))}
                </div>
              </div>
              <div className="venue" data-sanity={dataSanity(item, 'venue')}>
                {item.venue}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Appointments({home, section}: {home: HomeContent; section: AppointmentsSection}) {
  return (
    <section className="ed compact-top" id={sectionId(section)} data-sanity={sectionData(home, section)}>
      <div className="wrap">
        <SectionHeader {...section} dataSanity={sectionHeaderData(home, section)} />
        <div className="positions" data-sanity={sectionData(home, section, 'items')}>
          {section.items.map((item, index) => (
            <article className="pos" key={itemKey(item, index)} data-sanity={dataSanity(item, 'title')}>
              <div className="smallcaps" data-sanity={dataSanity(item, 'label')}>
                {item.label}
              </div>
              <h3 data-sanity={dataSanity(item, 'title')}>{item.title}</h3>
              <div className="inst" data-sanity={dataSanity(item, 'institution')}>
                {item.institution}
              </div>
              <div className="span" data-sanity={dataSanity(item, 'span')}>
                {item.span}
              </div>
              <RichTextRenderer value={item.body} dataSanity={dataSanity(item, 'body')} />
              {item.bullets?.length ? (
                <ul data-sanity={dataSanity(item, 'bullets')}>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Coaching({home, section}: {home: HomeContent; section: CoachingSection}) {
  return (
    <section className="ed compact-top" id={sectionId(section)} data-sanity={sectionData(home, section)}>
      <div className="wrap">
        <SectionHeader {...section} dataSanity={sectionHeaderData(home, section)} />
        <div className="videos" data-sanity={sectionData(home, section, 'videos')}>
          {section.videos.map((video: VideoFeature, index) => (
            <article className="vid" key={itemKey(video, index)} data-sanity={dataSanity(video, 'title')}>
              <div className={videoFrameClass(video)}>
                {video.vimeoUrl ? (
                  <iframe
                    src={video.vimeoUrl}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={video.title}
                    data-sanity={dataSanity(video, 'vimeoUrl')}
                  />
                ) : (
                  <div className="archive-card">
                    <div className="smallcaps" data-sanity={dataSanity(video, 'title')}>
                      {video.title}
                    </div>
                    {video.description ? <p data-sanity={dataSanity(video, 'description')}>{video.description}</p> : null}
                    <div className="archive-links" data-sanity={dataSanity(video, 'archiveLinks')}>
                      {video.archiveLinks?.map((link) => (
                        <a key={link.href} href={link.href} target="_blank" rel="noopener">
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {video.vimeoUrl ? (
                <div className="cap">
                  <div>
                    <h4 data-sanity={dataSanity(video, 'title')}>{video.title}</h4>
                    <div className="who" data-sanity={dataSanity(video, 'description')}>
                      {video.description}
                    </div>
                  </div>
                  <div className="tag" data-sanity={dataSanity(video, 'tag')}>
                    {video.tag}
                  </div>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function videoFrameClass(video: VideoFeature) {
  if (!video.vimeoUrl) {
    return 'frame archive-frame'
  }

  return isPortraitVideo(video) ? 'frame portrait-frame' : 'frame'
}

function isPortraitVideo(video: VideoFeature) {
  return video.vimeoUrl?.includes('/1173724748') || /arresta aminta/i.test(video.title)
}

function LyricLab({home, section}: {home: HomeContent; section: LyricLabSection}) {
  return (
    <section className="ed lyric" id={sectionId(section)} data-sanity={sectionData(home, section)}>
      <div className="wrap">
        <SectionHeader {...section} dataSanity={sectionHeaderData(home, section)} />
        <div className="lyric-grid" data-sanity={sectionData(home, section, 'courses')}>
          {section.courses.map((course: LyricCourse, index) => (
            <article className="lang" key={itemKey(course, index)} data-sanity={dataSanity(course, 'title')}>
              <div className="ord" data-sanity={dataSanity(course, 'order')}>
                {course.order}
              </div>
              <h3 data-sanity={dataSanity(course, 'title')}>{course.title}</h3>
              <div className="launch" data-sanity={dataSanity(course, 'launch')}>
                {course.launch}
              </div>
              <p data-sanity={dataSanity(course, 'body')}>{course.body}</p>
            </article>
          ))}
        </div>
        <TestimonialBlock testimonial={section.testimonial} />
        <div className="center-link" data-sanity={sectionData(home, section, 'link')}>
          <a href={section.link.href} target="_blank" rel="noopener">
            {section.link.label}
          </a>
        </div>
      </div>
    </section>
  )
}

function TestimonialBlock({testimonial}: {testimonial: Testimonial}) {
  return (
    <div className="quote-block" data-sanity={dataSanity(testimonial, 'quote')}>
      <div className="smallcaps" data-sanity={dataSanity(testimonial, 'label')}>
        {testimonial.label}
      </div>
      <div>
        <blockquote data-sanity={dataSanity(testimonial, 'quote')}>{testimonial.quote}</blockquote>
        <cite data-sanity={dataSanity(testimonial, 'attribution')}>{testimonial.attribution}</cite>
      </div>
    </div>
  )
}

function Repertoire({home, section}: {home: HomeContent; section: RepertoireSection}) {
  return (
    <section className="ed" id={sectionId(section)} data-sanity={sectionData(home, section)}>
      <div className="wrap">
        <SectionHeader {...section} dataSanity={sectionHeaderData(home, section)} />
        <div className="repertoire-grid" data-sanity={sectionData(home, section, 'groups')}>
          {section.groups.map((group: RepertoireGroup, index) => (
            <div className="rep" key={itemKey(group, index)} data-sanity={dataSanity(group, 'title')}>
              <h4 data-sanity={dataSanity(group, 'title')}>{group.title}</h4>
              <ul data-sanity={dataSanity(group, 'items')}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education({home, section}: {home: HomeContent; section: EducationSection}) {
  return (
    <section className="ed" id={sectionId(section)} data-sanity={sectionData(home, section)}>
      <div className="wrap">
        <SectionHeader eyebrow={section.eyebrow} title={section.title} dataSanity={sectionHeaderData(home, section)} />
        <div className="two-col">
          <div>
            <div className="smallcaps block-label">Education</div>
            {section.items.map((item: EducationItem, index) => (
              <article className="ed-item" key={itemKey(item, index)} data-sanity={dataSanity(item, 'title')}>
                <div className="year" data-sanity={dataSanity(item, 'year')}>
                  {item.year}
                </div>
                <h4 data-sanity={dataSanity(item, 'title')}>{item.title}</h4>
                <div className="inst" data-sanity={dataSanity(item, 'institution')}>
                  {item.institution}
                </div>
                <div className="det" data-sanity={dataSanity(item, 'detail')}>
                  {item.detail}
                </div>
              </article>
            ))}
          </div>
          <div>
            <div className="smallcaps block-label">Scholarships & Awards</div>
            <ul className="awards-list" data-sanity={sectionData(home, section, 'awards')}>
              {section.awards.map((item: Award, index) => (
                <li key={itemKey(item, index)} data-sanity={dataSanity(item, 'title')}>
                  <span className="y" data-sanity={dataSanity(item, 'year')}>
                    {item.year}
                  </span>
                  <span data-sanity={dataSanity(item, 'title')}>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="smallcaps block-label languages-label">Languages</div>
            <div className="languages" data-sanity={sectionData(home, section, 'languages')}>
              {section.languages.map((item: LanguageSkill, index) => (
                <div
                  className="lng"
                  key={itemKey(item, index)}
                  style={{'--level': item.value} as CSSProperties}
                  data-sanity={dataSanity(item, 'name')}
                >
                  <div className="n" data-sanity={dataSanity(item, 'name')}>
                    {item.name}
                  </div>
                  <div className="bar" data-sanity={dataSanity(item, 'value')} />
                  <div className="p" data-sanity={dataSanity(item, 'level')}>
                    {item.level}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact({content, section}: {content: SiteContent; section: ContactSection}) {
  const {home, site} = content

  return (
    <section className="contact" id={sectionId(section)} data-sanity={sectionData(home, section)}>
      <div className="wrap">
        <SectionHeader {...section} dataSanity={sectionHeaderData(home, section)} />
        <div className="contact-body">
          <figure className="contact-portrait">
            <CmsImage
              image={section.image}
              width={800}
              height={1200}
              sizes="(max-width: 860px) 100vw, 32vw"
              dataSanity={sectionData(home, section, 'image')}
            />
            {section.image.caption ? (
              <figcaption data-sanity={sectionData(home, section, 'image.caption')}>{section.image.caption}</figcaption>
            ) : null}
          </figure>
          <div className="contact-main">
            <a className="cta-email" href={`mailto:${site.email}`} data-sanity={dataSanity(site, 'email')}>
              {site.email}
            </a>
            <div className="contact-links" data-sanity={dataSanity(site, 'links')}>
              {site.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener">
                  {link.label}
                </a>
              ))}
            </div>
            <dl className="contact-meta">
              <div>
                <dt>Telephone</dt>
                <dd data-sanity={dataSanity(site, 'phone')}>{site.phone}</dd>
              </div>
              <div>
                <dt>Based in</dt>
                <dd data-sanity={dataSanity(site, 'basedIn')}>{site.basedIn}</dd>
              </div>
              <div>
                <dt>Faculty</dt>
                <dd data-sanity={dataSanity(site, 'faculty')}>{site.faculty}</dd>
              </div>
              <div>
                <dt>Representation</dt>
                <dd data-sanity={dataSanity(site, 'representation')}>{site.representation}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
