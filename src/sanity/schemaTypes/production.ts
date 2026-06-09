import {defineArrayMember, defineField, defineType} from 'sanity'

export const production = defineType({
  name: 'production',
  title: 'Production',
  type: 'document',
  fields: [
    defineField({name: 'year', title: 'Year', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'meta', title: 'Details', type: 'text', rows: 3}),
    defineField({
      name: 'roles',
      title: 'Role tags',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({name: 'venue', title: 'Venue', type: 'string'}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'year'},
  },
})
