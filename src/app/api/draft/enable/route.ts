import {defineEnableDraftMode} from 'next-sanity/draft-mode'

import {client} from '@/sanity/lib/client'

const readToken = process.env.SANITY_API_READ_TOKEN

export const GET = readToken
  ? defineEnableDraftMode({
      client: client.withConfig({token: readToken, useCdn: false}),
    }).GET
  : async () =>
      Response.json(
        {message: 'SANITY_API_READ_TOKEN is required to enable Sanity draft mode.'},
        {status: 500},
      )
