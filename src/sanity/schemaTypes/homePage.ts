import {defineArrayMember, defineField, defineType} from 'sanity'

function sectionControls(anchor: string, navLabel: string, showInNav = true) {
  return [
    defineField({
      name: 'enabled',
      title: 'Show section',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'anchor',
      title: 'Page anchor',
      type: 'string',
      initialValue: anchor,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'navLabel',
      title: 'Navigation label',
      type: 'string',
      initialValue: navLabel,
    }),
    defineField({
      name: 'showInNav',
      title: 'Show in navigation',
      type: 'boolean',
      initialValue: showInNav,
    }),
  ]
}

const sectionHeaderFields = [
  defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string'}),
  defineField({name: 'title', title: 'Title', type: 'string'}),
  defineField({name: 'kicker', title: 'Kicker', type: 'text', rows: 3}),
]

const basePreview = {
  select: {
    title: 'title',
    subtitle: 'navLabel',
  },
  prepare: ({title, subtitle}: {title?: string; subtitle?: string}) => ({
    title: title || subtitle || 'Section',
    subtitle,
  }),
}

const heroSection = defineArrayMember({
  name: 'heroSection',
  title: 'Hero',
  type: 'object',
  fields: [
    ...sectionControls('top', 'Top', false),
    defineField({name: 'firstName', title: 'First name', type: 'string'}),
    defineField({name: 'lastName', title: 'Last name', type: 'string'}),
    defineField({name: 'lede', title: 'Lede', type: 'text', rows: 4}),
    defineField({
      name: 'meta',
      title: 'Metadata',
      type: 'array',
      of: [defineArrayMember({type: 'metaPair'})],
    }),
    defineField({name: 'image', title: 'Image', type: 'imageWithCaption'}),
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      subtitle: 'navLabel',
    },
    prepare: ({firstName, lastName, subtitle}: {firstName?: string; lastName?: string; subtitle?: string}) => ({
      title: [firstName, lastName].filter(Boolean).join(' ') || 'Hero',
      subtitle,
    }),
  },
})

const biographySection = defineArrayMember({
  name: 'biographySection',
  title: 'Biography',
  type: 'object',
  fields: [
    ...sectionControls('biography', 'Biography'),
    ...sectionHeaderFields,
    defineField({name: 'image', title: 'Image', type: 'imageWithCaption'}),
    defineField({name: 'body', title: 'Body', type: 'richText'}),
  ],
  preview: basePreview,
})

const upcomingSection = defineArrayMember({
  name: 'upcomingSection',
  title: 'Upcoming',
  type: 'object',
  fields: [
    ...sectionControls('upcoming', 'Upcoming'),
    ...sectionHeaderFields,
    defineField({
      name: 'featured',
      title: 'Featured production',
      type: 'object',
      fields: [
        defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string'}),
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
        defineField({name: 'body', title: 'Body', type: 'richText'}),
        defineField({name: 'quote', title: 'Quote', type: 'text', rows: 3}),
        defineField({name: 'quoteAttribution', title: 'Quote attribution', type: 'string'}),
        defineField({
          name: 'credits',
          title: 'Cast credits',
          type: 'array',
          of: [defineArrayMember({type: 'roleCredit'})],
        }),
        defineField({
          name: 'creative',
          title: 'Creative team',
          type: 'array',
          of: [defineArrayMember({type: 'string'})],
        }),
        defineField({name: 'dates', title: 'Performance dates', type: 'text', rows: 3}),
        defineField({name: 'personalRole', title: 'J. Kaliski role', type: 'string'}),
        defineField({name: 'link', title: 'Link', type: 'linkItem'}),
      ],
    }),
  ],
  preview: basePreview,
})

const productionsSection = defineArrayMember({
  name: 'productionsSection',
  title: 'Productions',
  type: 'object',
  fields: [
    ...sectionControls('productions', 'Productions'),
    ...sectionHeaderFields,
    defineField({
      name: 'items',
      title: 'Productions',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'production'}]})],
    }),
  ],
  preview: basePreview,
})

const appointmentsSection = defineArrayMember({
  name: 'appointmentsSection',
  title: 'Appointments',
  type: 'object',
  fields: [
    ...sectionControls('teaching', 'Teaching'),
    ...sectionHeaderFields,
    defineField({
      name: 'items',
      title: 'Appointments',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'appointment'}]})],
    }),
  ],
  preview: basePreview,
})

const coachingSection = defineArrayMember({
  name: 'coachingSection',
  title: 'Coaching',
  type: 'object',
  fields: [
    ...sectionControls('coaching', 'Coaching'),
    ...sectionHeaderFields,
    defineField({
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'videoFeature'}]})],
    }),
  ],
  preview: basePreview,
})

const lyricLabSection = defineArrayMember({
  name: 'lyricLabSection',
  title: 'Lyric LAB',
  type: 'object',
  fields: [
    ...sectionControls('lyric-lab', 'Lyric LAB'),
    ...sectionHeaderFields,
    defineField({
      name: 'courses',
      title: 'Courses',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'lyricCourse'}]})],
    }),
    defineField({name: 'testimonial', title: 'Testimonial', type: 'reference', to: [{type: 'testimonial'}]}),
    defineField({name: 'link', title: 'Link', type: 'linkItem'}),
  ],
  preview: basePreview,
})

const repertoireSection = defineArrayMember({
  name: 'repertoireSection',
  title: 'Repertoire',
  type: 'object',
  fields: [
    ...sectionControls('repertoire', 'Repertoire'),
    ...sectionHeaderFields,
    defineField({
      name: 'groups',
      title: 'Groups',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'repertoireGroup'}]})],
    }),
  ],
  preview: basePreview,
})

const educationSection = defineArrayMember({
  name: 'educationSection',
  title: 'Education',
  type: 'object',
  fields: [
    ...sectionControls('education', 'Education'),
    defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({
      name: 'items',
      title: 'Education items',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'educationItem'}]})],
    }),
    defineField({
      name: 'awards',
      title: 'Awards',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'award'}]})],
    }),
    defineField({
      name: 'languages',
      title: 'Languages',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'languageSkill'}]})],
    }),
  ],
  preview: basePreview,
})

const contactSection = defineArrayMember({
  name: 'contactSection',
  title: 'Contact',
  type: 'object',
  fields: [
    ...sectionControls('contact', 'Contact'),
    ...sectionHeaderFields,
    defineField({name: 'image', title: 'Image', type: 'imageWithCaption'}),
  ],
  preview: basePreview,
})

export const homePage = defineType({
  name: 'homePage',
  title: 'Home page',
  type: 'document',
  fields: [
    defineField({
      name: 'sections',
      title: 'Page sections',
      type: 'array',
      of: [
        heroSection,
        biographySection,
        upcomingSection,
        productionsSection,
        appointmentsSection,
        coachingSection,
        lyricLabSection,
        repertoireSection,
        educationSection,
        contactSection,
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    prepare: () => ({title: 'Home page'}),
  },
})
