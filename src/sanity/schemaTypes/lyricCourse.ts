import {defineField, defineType} from 'sanity'

export const lyricCourse = defineType({
  name: 'lyricCourse',
  title: 'Lyric LAB course',
  type: 'document',
  fields: [
    defineField({name: 'order', title: 'Order label', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'launch', title: 'Launch note', type: 'string'}),
    defineField({name: 'body', title: 'Body', type: 'text', rows: 4}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'launch'},
  },
})
