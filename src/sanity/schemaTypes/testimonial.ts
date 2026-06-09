import {defineField, defineType} from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({name: 'label', title: 'Label', type: 'string'}),
    defineField({name: 'quote', title: 'Quote', type: 'text', rows: 4, validation: (rule) => rule.required()}),
    defineField({name: 'attribution', title: 'Attribution', type: 'string'}),
  ],
  preview: {
    select: {title: 'label', subtitle: 'attribution'},
  },
})
