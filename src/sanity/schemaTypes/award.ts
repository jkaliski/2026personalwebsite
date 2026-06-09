import {defineField, defineType} from 'sanity'

export const award = defineType({
  name: 'award',
  title: 'Award',
  type: 'document',
  fields: [
    defineField({name: 'year', title: 'Year', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'year'},
  },
})
