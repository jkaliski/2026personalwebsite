import {defineField, defineType} from 'sanity'

export const linkItem = defineType({
  name: 'linkItem',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({name: 'label', title: 'Label', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'href', title: 'URL or anchor', type: 'string', validation: (rule) => rule.required()}),
  ],
})
