import fs from 'node:fs'
import path from 'node:path'
import vm from 'node:vm'
import {fileURLToPath, pathToFileURL} from 'node:url'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(scriptDir, '..')
const fallbackPath = path.join(projectRoot, 'src/content/fallback.ts')
const outputPath = path.join(projectRoot, 'sanity-seed.ndjson')

let keyCounter = 0

function key(prefix = 'k') {
  keyCounter += 1
  return `${prefix}${keyCounter.toString(36)}`
}

function idFor(prefix, index) {
  return `${prefix}-${String(index + 1).padStart(2, '0')}`
}

function readFallbackContent() {
  const source = fs.readFileSync(fallbackPath, 'utf8')
  const executable = source
    .replace(/^import type .*?\n\n/s, '')
    .replace('export const fallbackContent: SiteContent =', 'const fallbackContent =')

  return vm.runInNewContext(`${executable}\nfallbackContent`, {}, {filename: fallbackPath})
}

function linkItems(items = [], prefix = 'link') {
  return items.map((item) => ({
    _key: key(prefix),
    _type: 'linkItem',
    ...item,
  }))
}

function metaPairs(items = []) {
  return items.map((item) => ({
    _key: key('meta'),
    _type: 'metaPair',
    ...item,
  }))
}

function roleCredits(items = []) {
  return items.map((item) => ({
    _key: key('role'),
    _type: 'roleCredit',
    ...item,
  }))
}

function refs(items = [], prefix = 'ref') {
  return items.map((item) => ({
    _key: key(prefix),
    _type: 'reference',
    _ref: item._id,
  }))
}

function imageValue(image) {
  if (!image) {
    return undefined
  }

  const value = {
    _type: 'image',
    alt: image.alt,
    caption: image.caption,
    fallbackSrc: image.fallbackSrc,
  }

  if (image.fallbackSrc) {
    const localPath = path.join(projectRoot, 'public', image.fallbackSrc.replace(/^\//, ''))

    if (fs.existsSync(localPath)) {
      value._sanityAsset = `image@${pathToFileURL(localPath).href}`
    }
  }

  return value
}

function portableTextFromHtmlLine(line) {
  const children = []
  const regex = /<em>(.*?)<\/em>/g
  let cursor = 0
  let match

  while ((match = regex.exec(line)) !== null) {
    if (match.index > cursor) {
      children.push({
        _key: key('span'),
        _type: 'span',
        text: line.slice(cursor, match.index),
        marks: [],
      })
    }

    children.push({
      _key: key('span'),
      _type: 'span',
      text: match[1],
      marks: ['em'],
    })

    cursor = match.index + match[0].length
  }

  if (cursor < line.length) {
    children.push({
      _key: key('span'),
      _type: 'span',
      text: line.slice(cursor),
      marks: [],
    })
  }

  return {
    _key: key('block'),
    _type: 'block',
    style: 'normal',
    markDefs: [],
    children,
  }
}

function portableText(value) {
  if (!Array.isArray(value)) {
    return []
  }

  return value.map((line) => portableTextFromHtmlLine(line))
}

function sectionFields(section) {
  return {
    eyebrow: section.eyebrow,
    title: section.title,
    kicker: section.kicker,
  }
}

function removeUndefined(value) {
  if (Array.isArray(value)) {
    return value.map(removeUndefined)
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([, entry]) => entry !== undefined)
        .map(([entryKey, entryValue]) => [entryKey, removeUndefined(entryValue)]),
    )
  }

  return value
}

function buildDocuments(content) {
  const productions = content.home.productions.items.map((item, index) => ({
    _id: idFor('production', index),
    _type: 'production',
    ...item,
  }))

  const appointments = content.home.appointments.items.map((item, index) => ({
    _id: idFor('appointment', index),
    _type: 'appointment',
    ...item,
    body: portableText(item.body),
  }))

  const videos = content.home.coaching.videos.map((item, index) => ({
    _id: idFor('video-feature', index),
    _type: 'videoFeature',
    ...item,
    archiveLinks: linkItems(item.archiveLinks || [], 'archive'),
  }))

  const courses = content.home.lyricLab.courses.map((item, index) => ({
    _id: idFor('lyric-course', index),
    _type: 'lyricCourse',
    ...item,
  }))

  const repertoireGroups = content.home.repertoire.groups.map((item, index) => ({
    _id: idFor('repertoire-group', index),
    _type: 'repertoireGroup',
    ...item,
  }))

  const educationItems = content.home.education.items.map((item, index) => ({
    _id: idFor('education-item', index),
    _type: 'educationItem',
    ...item,
  }))

  const awards = content.home.education.awards.map((item, index) => ({
    _id: idFor('award', index),
    _type: 'award',
    ...item,
  }))

  const languages = content.home.education.languages.map((item, index) => ({
    _id: idFor('language-skill', index),
    _type: 'languageSkill',
    ...item,
  }))

  const testimonial = {
    _id: 'testimonial-lyric-lab',
    _type: 'testimonial',
    ...content.home.lyricLab.testimonial,
  }

  const siteSettings = {
    _id: 'siteSettings',
    _type: 'siteSettings',
    ...content.site,
    links: linkItems(content.site.links, 'siteLink'),
  }

  const homePage = {
    _id: 'homePage',
    _type: 'homePage',
    nav: linkItems(content.home.nav, 'nav'),
    hero: {
      ...content.home.hero,
      meta: metaPairs(content.home.hero.meta),
      image: imageValue(content.home.hero.image),
    },
    biography: {
      ...sectionFields(content.home.biography),
      image: imageValue(content.home.biography.image),
      body: portableText(content.home.biography.body),
    },
    upcoming: {
      ...sectionFields(content.home.upcoming),
      featured: {
        ...content.home.upcoming.featured,
        body: portableText(content.home.upcoming.featured.body),
        credits: roleCredits(content.home.upcoming.featured.credits),
        link: {
          _type: 'linkItem',
          ...content.home.upcoming.featured.link,
        },
      },
    },
    productions: {
      ...sectionFields(content.home.productions),
      items: refs(productions, 'productionRef'),
    },
    appointments: {
      ...sectionFields(content.home.appointments),
      items: refs(appointments, 'appointmentRef'),
    },
    coaching: {
      ...sectionFields(content.home.coaching),
      videos: refs(videos, 'videoRef'),
    },
    lyricLab: {
      ...sectionFields(content.home.lyricLab),
      courses: refs(courses, 'courseRef'),
      testimonial: {
        _type: 'reference',
        _ref: testimonial._id,
      },
      link: {
        _type: 'linkItem',
        ...content.home.lyricLab.link,
      },
    },
    repertoire: {
      ...sectionFields(content.home.repertoire),
      groups: refs(repertoireGroups, 'repertoireRef'),
    },
    education: {
      eyebrow: content.home.education.eyebrow,
      title: content.home.education.title,
      items: refs(educationItems, 'educationRef'),
      awards: refs(awards, 'awardRef'),
      languages: refs(languages, 'languageRef'),
    },
    contact: {
      ...sectionFields(content.home.contact),
      image: imageValue(content.home.contact.image),
    },
  }

  return [
    siteSettings,
    ...productions,
    ...appointments,
    ...videos,
    ...courses,
    ...repertoireGroups,
    ...educationItems,
    ...awards,
    ...languages,
    testimonial,
    homePage,
  ].map(removeUndefined)
}

const content = readFallbackContent()
const documents = buildDocuments(content)
const ndjson = documents.map((document) => JSON.stringify(document)).join('\n')

fs.writeFileSync(outputPath, `${ndjson}\n`)

console.log(`Created ${path.relative(projectRoot, outputPath)} with ${documents.length} documents.`)
console.log('Import with: npx sanity@latest datasets import sanity-seed.ndjson production --replace')
