import {getCliClient} from 'sanity/cli'

const dryRun = process.argv.includes('--dry-run')

const LEGACY_FIELDS = [
  'nav',
  'hero',
  'biography',
  'upcoming',
  'productions',
  'appointments',
  'coaching',
  'lyricLab',
  'repertoire',
  'education',
  'contact',
]

const SECTION_DEFINITIONS = [
  ['hero', 'heroSection', 'top', 'Top', false, {meta: []}],
  ['biography', 'biographySection', 'biography', 'Biography', true],
  ['upcoming', 'upcomingSection', 'upcoming', 'Upcoming', true],
  ['productions', 'productionsSection', 'productions', 'Productions', true, {items: []}],
  ['appointments', 'appointmentsSection', 'teaching', 'Teaching', true, {items: []}],
  ['coaching', 'coachingSection', 'coaching', 'Coaching', true, {videos: []}],
  ['lyricLab', 'lyricLabSection', 'lyric-lab', 'Lyric LAB', true, {courses: []}],
  ['repertoire', 'repertoireSection', 'repertoire', 'Repertoire', false, {groups: []}],
  ['education', 'educationSection', 'education', 'Education', false, {items: [], awards: [], languages: []}],
  ['contact', 'contactSection', 'contact', 'Contact', true],
]

const client = getCliClient({apiVersion: '2026-05-19'}).withConfig({
  perspective: 'raw',
})

function sectionKey(fieldName) {
  return fieldName === 'lyricLab' ? 'lyric-lab' : fieldName
}

function createSection(doc, definition) {
  const [fieldName, sectionType, anchor, navLabel, showInNav, defaults = {}] = definition
  const value = doc[fieldName]

  if (!value) {
    return null
  }

  return {
    ...defaults,
    ...value,
    _key: sectionKey(fieldName),
    _type: sectionType,
    enabled: value.enabled ?? true,
    anchor: value.anchor ?? anchor,
    navLabel: value.navLabel ?? navLabel,
    showInNav: value.showInNav ?? showInNav,
  }
}

function buildSections(doc) {
  return SECTION_DEFINITIONS.map((definition) => createSection(doc, definition)).filter(Boolean)
}

function legacyFieldsIn(doc) {
  return LEGACY_FIELDS.filter((fieldName) => doc[fieldName] !== undefined)
}

async function migrateDocument(id) {
  const doc = await client.getDocument(id)

  if (!doc) {
    return {id, status: 'missing'}
  }

  const existingSections = Array.isArray(doc.sections) ? doc.sections : []
  const legacyFields = legacyFieldsIn(doc)
  const sections = existingSections.length > 0 ? existingSections : buildSections(doc)

  if (!sections.length) {
    return {id, status: 'skipped', reason: 'No sections or legacy fields found'}
  }

  if (existingSections.length > 0 && legacyFields.length === 0) {
    return {id, status: 'unchanged', sections: existingSections.length}
  }

  const action = {
    id,
    status: dryRun ? 'would-migrate' : 'migrated',
    sections: sections.map((section) => `${section._key}:${section._type}`),
    legacyFields,
  }

  if (!dryRun) {
    await client.patch(id).set({sections}).unset(legacyFields).commit({autoGenerateArrayKeys: true})
  }

  return action
}

const results = []

for (const id of ['homePage', 'drafts.homePage']) {
  results.push(await migrateDocument(id))
}

console.log(JSON.stringify({dryRun, results}, null, 2))
