import {client} from './client'
import {loadQuery, setServerClient} from './loader'

const readToken = process.env.SANITY_API_READ_TOKEN

setServerClient(
  client.withConfig({
    token: readToken || undefined,
    useCdn: !readToken,
  }),
)

export {loadQuery}
