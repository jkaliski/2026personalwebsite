import type {QueryResponseInitial} from '@sanity/react-loader'

import type {SiteContent} from '@/types/site'

import {isSanityConfigured} from './env'
import {getLiveFetchOptions, sanityFetch} from './live'
import {loadQuery} from './loader.server'
import {assertSiteContent, type RawSiteContent} from './normalize'
import {HOME_PAGE_QUERY} from './queries'

function assertSanityConfigured() {
  if (!isSanityConfigured) {
    throw new Error(
      'Sanity is not configured. Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET to render the site.',
    )
  }
}

async function getSiteContentForOptions({
  perspective,
  stega,
}: {
  perspective: Awaited<ReturnType<typeof getLiveFetchOptions>>['perspective']
  stega: boolean
}): Promise<SiteContent> {
  assertSanityConfigured()

  const {data} = await sanityFetch({
    query: HOME_PAGE_QUERY,
    perspective,
    stega,
    tags: ['sanity', 'home'],
    requestTag: 'home-page',
  })

  return assertSiteContent(data as Partial<SiteContent>)
}

export async function getPublishedSiteContent(): Promise<SiteContent> {
  return getSiteContentForOptions({perspective: 'published', stega: false})
}

export async function getSiteContent(): Promise<SiteContent> {
  return getSiteContentForOptions(await getLiveFetchOptions())
}

export async function getDraftSiteContentInitial(): Promise<QueryResponseInitial<RawSiteContent>> {
  assertSanityConfigured()

  const {perspective, stega} = await getLiveFetchOptions()

  return loadQuery<RawSiteContent>(HOME_PAGE_QUERY, {}, {perspective, stega, tag: 'home-page.preview'})
}
