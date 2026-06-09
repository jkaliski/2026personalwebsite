import {defineField, defineType} from 'sanity'

export const educationItem = defineType({
  name: 'educationItem',
  title: 'Education item',
  type: 'document',
  fields: [
    defineField({name: 'year', title: 'Year', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'institution', title: 'Institution', type: 'string'}),
    defineField({name: 'detail', title: 'Detail', type: 'text', rows: 4}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'year'},
  },
})
