import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {schemaTypes} from './src/sanity/schemaTypes'

const envProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const projectId = envProjectId && !envProjectId.startsWith('replace-') ? envProjectId : 'abc123'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'jaroslaw-kaliski-website',
  title: 'Jaroslaw Kaliski Website',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
