import {createClient} from 'next-sanity'

import {apiVersion, dataset, isSanityConfigured, projectId, studioUrl} from './env'

export const client = createClient({
  projectId: isSanityConfigured && projectId ? projectId : 'abc123',
  dataset,
  apiVersion,
  useCdn: true,
  perspective: 'published',
  stega: {
    studioUrl,
  },
})
