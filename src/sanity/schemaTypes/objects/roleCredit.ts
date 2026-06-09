import {defineField, defineType} from 'sanity'

export const roleCredit = defineType({
  name: 'roleCredit',
  title: 'Role credit',
  type: 'object',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'role', title: 'Role', type: 'string', validation: (rule) => rule.required()}),
  ],
})
