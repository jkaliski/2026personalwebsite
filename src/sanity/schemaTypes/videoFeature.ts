import {defineArrayMember, defineField, defineType} from 'sanity'

export const videoFeature = defineType({
  name: 'videoFeature',
  title: 'Video feature',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'description', title: 'Description', type: 'string'}),
    defineField({name: 'tag', title: 'Tag', type: 'string'}),
    defineField({
      name: 'vimeoUrl',
      title: 'Vimeo embed URL',
      type: 'url',
      description: 'Use the player.vimeo.com embed URL when this is a video.',
    }),
    defineField({
      name: 'archiveLinks',
      title: 'Archive links',
      type: 'array',
      of: [defineArrayMember({type: 'linkItem'})],
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'tag'},
  },
})
