import {defineField, defineType} from 'sanity'

export const metaPair = defineType({
  name: 'metaPair',
  title: 'Metadata pair',
  type: 'object',
  fields: [
    defineField({name: 'label', title: 'Label', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'value', title: 'Value', type: 'string', validation: (rule) => rule.required()}),
  ],
})
