import type {Metadata} from 'next'

import {HomePage} from '@/components/HomePage'
import {getSiteContent} from '@/sanity/lib/fetch'

export async function generateMetadata(): Promise<Metadata> {
  const content = await getSiteContent()

  return {
    title: content.site.title,
    description: content.site.description,
    openGraph: {
      title: content.site.title,
      description: content.site.description,
      type: 'website',
    },
  }
}

export default async function Page() {
  const content = await getSiteContent()

  return <HomePage content={content} />
}
