import {defineLive} from 'next-sanity/live'

import {client} from './client'

const readToken = process.env.SANITY_API_READ_TOKEN

export const hasSanityReadToken = Boolean(readToken)

export const {SanityLive, sanityFetch} = defineLive({
  client,
  serverToken: readToken || false,
  browserToken: readToken || false,
  strict: true,
})
