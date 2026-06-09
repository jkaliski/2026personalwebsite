import {CmsImage} from '@/components/CmsImage'
import {Header} from '@/components/Header'
import {SectionHeader} from '@/components/SectionHeader'
import {RichTextRenderer} from '@/lib/rich-text'
import type {SiteContent} from '@/types/site'
import type {CSSProperties} from 'react'

export function HomePage({content}: {content: SiteContent}) {
  const {site, home} = content

  return (
    <>
      <Header settings={site} nav={home.nav} />
      <main id="top">
        <section className="hero">
          <div className="wrap">
            <h1 className="hero-title">
              {home.hero.firstName}
              <br />
              <span>{home.hero.lastName}</span>
            </h1>
            <div className="hero-sub">
              <p className="lede">{home.hero.lede}</p>
              <dl className="hero-meta">
                {home.hero.meta.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <figure className="hero-image">
              <CmsImage image={home.hero.image} width={2400} height={1350} sizes="100vw" priority />
              {home.hero.image.caption ? <figcaption>{home.hero.image.caption}</figcaption> : null}
            </figure>
          </div>
        </section>

        <section className="ed" id="biography">
          <div className="wrap">
            <SectionHeader {...home.biography} />
            <div className="bio-grid">
              <aside className="bio-portrait">
                <figure>
                  <CmsImage image={home.biography.image} width={865} height={1154} sizes="(max-width: 860px) 100vw, 34vw" />
                  {home.biography.image.caption ? <figcaption>{home.biography.image.caption}</figcaption> : null}
                </figure>
              </aside>
              <RichTextRenderer value={home.biography.body} className="bio-text" />
            </div>
          </div>
        </section>

        <section className="ed upcoming" id="upcoming">
          <div className="wrap">
            <SectionHeader {...home.upcoming} />
            <div className="featured">
              <div>
                <div className="eyebrow">{home.upcoming.featured.eyebrow}</div>
                <h3>{home.upcoming.featured.title}</h3>
                <div className="sub">{home.upcoming.featured.subtitle}</div>
                <RichTextRenderer value={home.upcoming.featured.body} className="body" />
                {home.upcoming.featured.quote ? (
                  <blockquote className="quote">
                    {home.upcoming.featured.quote}
                    {home.upcoming.featured.quoteAttribution ? (
                      <cite>{home.upcoming.featured.quoteAttribution}</cite>
                    ) : null}
                  </blockquote>
                ) : null}
              </div>
              <aside className="perf-card">
                <div className="smallcaps">Cast & Creative</div>
                <ul className="role-list">
                  {home.upcoming.featured.credits.map((credit) => (
                    <li key={`${credit.name}-${credit.role}`}>
                      <span className="name">{credit.name}</span>
                      <span className="role">{credit.role}</span>
                    </li>
                  ))}
                </ul>
                <div className="dates">
                  <strong>Music · Direction · Design</strong>
                  {home.upcoming.featured.creative.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </div>
                <div className="dates">
                  <strong>Performance dates · Ulriksdal</strong>
                  <span>{home.upcoming.featured.dates}</span>
                </div>
                <div className="dates">
                  <strong>J. Kaliski · role</strong>
                  <span>{home.upcoming.featured.personalRole}</span>
                </div>
                <a href={home.upcoming.featured.link.href} target="_blank" rel="noopener" className="text-link">
                  {home.upcoming.featured.link.label}
                </a>
              </aside>
            </div>
          </div>
        </section>

        <section className="ed" id="productions">
          <div className="wrap">
            <SectionHeader {...home.productions} />
            <div className="timeline">
              {home.productions.items.map((item) => (
                <article className="prod" key={`${item.year}-${item.title}`}>
                  <div className="year">{item.year}</div>
                  <div>
                    <h3 className="title">{item.title}</h3>
                    <div className="meta">{item.meta}</div>
                    <div className="tags">
                      {item.roles.map((role) => (
                        <span className="role-tag" key={role}>
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="venue">{item.venue}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ed compact-top" id="teaching">
          <div className="wrap">
            <SectionHeader {...home.appointments} />
            <div className="positions">
              {home.appointments.items.map((item) => (
                <article className="pos" key={`${item.title}-${item.institution}`}>
                  <div className="smallcaps">{item.label}</div>
                  <h3>{item.title}</h3>
                  <div className="inst">{item.institution}</div>
                  <div className="span">{item.span}</div>
                  <RichTextRenderer value={item.body} />
                  {item.bullets?.length ? (
                    <ul>
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

        <section className="ed compact-top" id="coaching">
          <div className="wrap">
            <SectionHeader {...home.coaching} />
            <div className="videos">
              {home.coaching.videos.map((video) => (
                <article className="vid" key={video.title}>
                  <div className="frame">
                    {video.vimeoUrl ? (
                      <iframe
                        src={video.vimeoUrl}
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title={video.title}
                      />
                    ) : (
                      <div className="archive-card">
                        <div className="smallcaps">Further coaching archive</div>
                        <p>French baroque ornamentation · German role study · Italian opera — a catalogue of working sessions.</p>
                        <div className="archive-links">
                          {video.archiveLinks?.map((link) => (
                            <a key={link.href} href={link.href} target="_blank" rel="noopener">
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="cap">
                    <div>
                      <h4>{video.title}</h4>
                      <div className="who">{video.description}</div>
                    </div>
                    <div className="tag">{video.tag}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ed lyric" id="lyric-lab">
          <div className="wrap">
            <SectionHeader {...home.lyricLab} />
            <div className="lyric-grid">
              {home.lyricLab.courses.map((course) => (
                <article className="lang" key={course.title}>
                  <div className="ord">{course.order}</div>
                  <h3>{course.title}</h3>
                  <div className="launch">{course.launch}</div>
                  <p>{course.body}</p>
                </article>
              ))}
            </div>
            <div className="quote-block">
              <div className="smallcaps">{home.lyricLab.testimonial.label}</div>
              <div>
                <blockquote>{home.lyricLab.testimonial.quote}</blockquote>
                <cite>{home.lyricLab.testimonial.attribution}</cite>
              </div>
            </div>
            <div className="center-link">
              <a href={home.lyricLab.link.href} target="_blank" rel="noopener">
                {home.lyricLab.link.label}
              </a>
            </div>
          </div>
        </section>

        <section className="ed" id="repertoire">
          <div className="wrap">
            <SectionHeader {...home.repertoire} />
            <div className="repertoire-grid">
              {home.repertoire.groups.map((group) => (
                <div className="rep" key={group.title}>
                  <h4>{group.title}</h4>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ed" id="education">
          <div className="wrap">
            <SectionHeader eyebrow={home.education.eyebrow} title={home.education.title} />
            <div className="two-col">
              <div>
                <div className="smallcaps block-label">Education</div>
                {home.education.items.map((item) => (
                  <article className="ed-item" key={`${item.year}-${item.title}`}>
                    <div className="year">{item.year}</div>
                    <h4>{item.title}</h4>
                    <div className="inst">{item.institution}</div>
                    <div className="det">{item.detail}</div>
                  </article>
                ))}
              </div>
              <div>
                <div className="smallcaps block-label">Scholarships & Awards</div>
                <ul className="awards-list">
                  {home.education.awards.map((item) => (
                    <li key={`${item.year}-${item.title}`}>
                      <span className="y">{item.year}</span>
                      <span>{item.title}</span>
                    </li>
                  ))}
                </ul>
                <div className="smallcaps block-label languages-label">Languages</div>
                <div className="languages">
                  {home.education.languages.map((item) => (
                    <div className="lng" key={item.name} style={{'--level': item.value} as CSSProperties}>
                      <div className="n">{item.name}</div>
                      <div className="bar" />
                      <div className="p">{item.level}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="wrap">
            <SectionHeader {...home.contact} />
            <div className="contact-body">
              <figure className="contact-portrait">
                <CmsImage image={home.contact.image} width={800} height={1200} sizes="(max-width: 860px) 100vw, 32vw" />
                {home.contact.image.caption ? <figcaption>{home.contact.image.caption}</figcaption> : null}
              </figure>
              <div className="contact-main">
                <a className="cta-email" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
                <div className="contact-links">
                  {site.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener">
                      {link.label}
                    </a>
                  ))}
                </div>
                <dl className="contact-meta">
                  <div>
                    <dt>Telephone</dt>
                    <dd>{site.phone}</dd>
                  </div>
                  <div>
                    <dt>Based in</dt>
                    <dd>{site.basedIn}</dd>
                  </div>
                  <div>
                    <dt>Faculty</dt>
                    <dd>{site.faculty}</dd>
                  </div>
                  <div>
                    <dt>Representation</dt>
                    <dd>{site.representation}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>
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
