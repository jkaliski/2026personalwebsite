import {defineCliConfig} from 'sanity/cli'

const envProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const projectId = envProjectId && !envProjectId.startsWith('replace-') ? envProjectId : 'abc123'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
})
