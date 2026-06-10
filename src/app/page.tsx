import type {Metadata} from 'next'
import {draftMode} from 'next/headers'

import {HomePage} from '@/components/HomePage'
import {HomePagePreview} from '@/components/HomePagePreview'
import {getDraftSiteContentInitial, getPublishedSiteContent} from '@/sanity/lib/fetch'

export async function generateMetadata(): Promise<Metadata> {
  const content = await getPublishedSiteContent()

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
  const {isEnabled} = await draftMode()

  if (isEnabled) {
    const initial = await getDraftSiteContentInitial()

    return <HomePagePreview initial={initial} />
  }

  const content = await getPublishedSiteContent()

  return <HomePage content={content} />
}
