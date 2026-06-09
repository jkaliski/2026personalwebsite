import {defineArrayMember, defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Site title', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'description', title: 'Meta description', type: 'text', rows: 3}),
    defineField({name: 'logoText', title: 'Logo text', type: 'string'}),
    defineField({name: 'logoSuffix', title: 'Logo suffix', type: 'string'}),
    defineField({name: 'email', title: 'Email', type: 'string'}),
    defineField({name: 'phone', title: 'Phone', type: 'string'}),
    defineField({name: 'basedIn', title: 'Based in', type: 'string'}),
    defineField({name: 'faculty', title: 'Faculty', type: 'string'}),
    defineField({name: 'representation', title: 'Representation', type: 'string'}),
    defineField({
      name: 'links',
      title: 'External links',
      type: 'array',
      of: [defineArrayMember({type: 'linkItem'})],
    }),
  ],
  preview: {
    select: {title: 'title'},
  },
})
