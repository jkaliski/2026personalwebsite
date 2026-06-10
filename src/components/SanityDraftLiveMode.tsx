'use client'

import {useMemo} from 'react'
import {createClient} from 'next-sanity'

import {apiVersion, dataset, isSanityConfigured, projectId, studioUrl} from '@/sanity/lib/env'
import {useLiveMode} from '@/sanity/lib/loader'

export function SanityDraftLiveMode() {
  const liveClient = useMemo(
    () =>
      createClient({
        projectId: isSanityConfigured && projectId ? projectId : 'abc123',
        dataset,
        apiVersion,
        useCdn: true,
        perspective: 'drafts',
        stega: {
          enabled: true,
          studioUrl,
        },
      }),
    [],
  )

  useLiveMode({client: liveClient, studioUrl})

  return null
}
