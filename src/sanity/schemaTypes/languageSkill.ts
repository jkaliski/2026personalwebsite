import {defineField, defineType} from 'sanity'

export const languageSkill = defineType({
  name: 'languageSkill',
  title: 'Language skill',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Language', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'level', title: 'Level label', type: 'string'}),
    defineField({
      name: 'value',
      title: 'Level value',
      type: 'number',
      validation: (rule) => rule.min(1).max(5),
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'level'},
  },
})
