import {defineField, defineType} from 'sanity'

export const imageWithCaption = defineType({
  name: 'imageWithCaption',
  title: 'Image with caption',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'fallbackSrc',
      title: 'Local fallback path',
      type: 'string',
      description: 'Optional path such as /images/portrait-hero.jpg used before a Sanity image is uploaded.',
    }),
  ],
})
