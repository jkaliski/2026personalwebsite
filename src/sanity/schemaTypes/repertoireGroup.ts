import {defineArrayMember, defineField, defineType} from 'sanity'

export const repertoireGroup = defineType({
  name: 'repertoireGroup',
  title: 'Repertoire group',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
  ],
  preview: {
    select: {title: 'title'},
  },
})
