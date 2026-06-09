import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {presentationTool, type DocumentLocationResolvers} from 'sanity/presentation'
import {structureTool} from 'sanity/structure'

import {schemaTypes} from './src/sanity/schemaTypes'

const envProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const projectId = envProjectId && !envProjectId.startsWith('replace-') ? envProjectId : 'abc123'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

const documentLocations: DocumentLocationResolvers = {
  homePage: {
    select: {},
    resolve: () => ({locations: [{title: 'Home page', href: '/'}]}),
  },
  siteSettings: {
    select: {},
    resolve: () => ({locations: [{title: 'Site settings', href: '/#contact'}]}),
  },
  production: {
    select: {title: 'title'},
    resolve: (value) => ({
      locations: [{title: value?.title || 'Production', href: '/#productions'}],
    }),
  },
  appointment: {
    select: {title: 'title'},
    resolve: (value) => ({
      locations: [{title: value?.title || 'Appointment', href: '/#teaching'}],
    }),
  },
  videoFeature: {
    select: {title: 'title'},
    resolve: (value) => ({
      locations: [{title: value?.title || 'Video', href: '/#coaching'}],
    }),
  },
  lyricCourse: {
    select: {title: 'title'},
    resolve: (value) => ({
      locations: [{title: value?.title || 'Course', href: '/#lyric-lab'}],
    }),
  },
  testimonial: {
    select: {label: 'label'},
    resolve: (value) => ({
      locations: [{title: value?.label || 'Testimonial', href: '/#lyric-lab'}],
    }),
  },
  repertoireGroup: {
    select: {title: 'title'},
    resolve: (value) => ({
      locations: [{title: value?.title || 'Repertoire group', href: '/#repertoire'}],
    }),
  },
  educationItem: {
    select: {title: 'title'},
    resolve: (value) => ({
      locations: [{title: value?.title || 'Education item', href: '/#education'}],
    }),
  },
  award: {
    select: {title: 'title'},
    resolve: (value) => ({
      locations: [{title: value?.title || 'Award', href: '/#education'}],
    }),
  },
  languageSkill: {
    select: {name: 'name'},
    resolve: (value) => ({
      locations: [{title: value?.name || 'Language', href: '/#education'}],
    }),
  },
}

export default defineConfig({
  name: 'jaroslaw-kaliski-website',
  title: 'Jaroslaw Kaliski Website',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    structureTool(),
    presentationTool({
      previewUrl: {
        initial: siteUrl,
        previewMode: {
          enable: '/api/draft/enable',
        },
      },
      allowOrigins: [siteUrl, 'http://localhost:3000', 'http://127.0.0.1:3000'],
      resolve: {
        mainDocuments: [{route: '/', type: 'homePage'}],
        locations: documentLocations,
      },
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
