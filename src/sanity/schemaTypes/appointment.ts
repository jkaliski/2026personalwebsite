import {defineArrayMember, defineField, defineType} from 'sanity'

export const appointment = defineType({
  name: 'appointment',
  title: 'Appointment',
  type: 'document',
  fields: [
    defineField({name: 'label', title: 'Label', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'institution', title: 'Institution', type: 'string'}),
    defineField({name: 'span', title: 'Span', type: 'string'}),
    defineField({name: 'body', title: 'Body', type: 'richText'}),
    defineField({
      name: 'bullets',
      title: 'Bullets',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'institution'},
  },
})
