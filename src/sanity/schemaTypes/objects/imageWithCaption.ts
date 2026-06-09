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
      title: 'Legacy local image path',
      type: 'string',
      description: 'Optional legacy path such as /images/portrait-hero.jpg. Prefer uploading the image asset to Sanity.',
    }),
  ],
})
