import {defineArrayMember, defineField, defineType} from 'sanity'

const sectionFields = [
  defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string'}),
  defineField({name: 'title', title: 'Title', type: 'string'}),
  defineField({name: 'kicker', title: 'Kicker', type: 'text', rows: 3}),
]

export const homePage = defineType({
  name: 'homePage',
  title: 'Home page',
  type: 'document',
  fields: [
    defineField({
      name: 'nav',
      title: 'Navigation',
      type: 'array',
      of: [defineArrayMember({type: 'linkItem'})],
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
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
    }),
    defineField({
      name: 'biography',
      title: 'Biography',
      type: 'object',
      fields: [...sectionFields, defineField({name: 'image', title: 'Image', type: 'imageWithCaption'}), defineField({name: 'body', title: 'Body', type: 'richText'})],
    }),
    defineField({
      name: 'upcoming',
      title: 'Upcoming',
      type: 'object',
      fields: [
        ...sectionFields,
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
    }),
    defineField({
      name: 'productions',
      title: 'Productions section',
      type: 'object',
      fields: [
        ...sectionFields,
        defineField({
          name: 'items',
          title: 'Productions',
          type: 'array',
          of: [defineArrayMember({type: 'reference', to: [{type: 'production'}]})],
        }),
      ],
    }),
    defineField({
      name: 'appointments',
      title: 'Appointments section',
      type: 'object',
      fields: [
        ...sectionFields,
        defineField({
          name: 'items',
          title: 'Appointments',
          type: 'array',
          of: [defineArrayMember({type: 'reference', to: [{type: 'appointment'}]})],
        }),
      ],
    }),
    defineField({
      name: 'coaching',
      title: 'Coaching section',
      type: 'object',
      fields: [
        ...sectionFields,
        defineField({
          name: 'videos',
          title: 'Videos',
          type: 'array',
          of: [defineArrayMember({type: 'reference', to: [{type: 'videoFeature'}]})],
        }),
      ],
    }),
    defineField({
      name: 'lyricLab',
      title: 'Lyric LAB section',
      type: 'object',
      fields: [
        ...sectionFields,
        defineField({
          name: 'courses',
          title: 'Courses',
          type: 'array',
          of: [defineArrayMember({type: 'reference', to: [{type: 'lyricCourse'}]})],
        }),
        defineField({name: 'testimonial', title: 'Testimonial', type: 'reference', to: [{type: 'testimonial'}]}),
        defineField({name: 'link', title: 'Link', type: 'linkItem'}),
      ],
    }),
    defineField({
      name: 'repertoire',
      title: 'Repertoire section',
      type: 'object',
      fields: [
        ...sectionFields,
        defineField({
          name: 'groups',
          title: 'Groups',
          type: 'array',
          of: [defineArrayMember({type: 'reference', to: [{type: 'repertoireGroup'}]})],
        }),
      ],
    }),
    defineField({
      name: 'education',
      title: 'Education section',
      type: 'object',
      fields: [
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
    }),
    defineField({
      name: 'contact',
      title: 'Contact section',
      type: 'object',
      fields: [...sectionFields, defineField({name: 'image', title: 'Image', type: 'imageWithCaption'})],
    }),
  ],
  preview: {
    prepare: () => ({title: 'Home page'}),
  },
})
