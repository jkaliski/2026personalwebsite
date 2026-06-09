import {cookies, draftMode} from 'next/headers'
import {defineLive, resolvePerspectiveFromCookies, type LivePerspective} from 'next-sanity/live'

import {client} from './client'

const readToken = process.env.SANITY_API_READ_TOKEN

export const hasSanityReadToken = Boolean(readToken)

export type LiveFetchOptions = {
  perspective: LivePerspective
  stega: boolean
}

export const {SanityLive, sanityFetch} = defineLive({
  client,
  serverToken: readToken || false,
  browserToken: readToken || false,
  strict: true,
})

export async function getLiveFetchOptions(): Promise<LiveFetchOptions> {
  const {isEnabled} = await draftMode()

  if (!isEnabled) {
    return {perspective: 'published', stega: false}
  }

  if (!hasSanityReadToken) {
    return {perspective: 'published', stega: true}
  }

  const perspective = await resolvePerspectiveFromCookies({cookies: await cookies()})

  return {
    perspective: perspective ?? 'drafts',
    stega: true,
  }
}
