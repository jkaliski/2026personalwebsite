'use client'

import {useMemo} from 'react'

import {HomePage} from '@/components/HomePage'
import {useQuery, type QueryResponseInitial} from '@/sanity/lib/loader'
import {assertSiteContent, type RawSiteContent} from '@/sanity/lib/normalize'
import {HOME_PAGE_QUERY} from '@/sanity/lib/queries'

const params = {}

export function HomePagePreview({initial}: {initial: QueryResponseInitial<RawSiteContent>}) {
  const {data} = useQuery<RawSiteContent>(HOME_PAGE_QUERY, params, {initial})
  const content = useMemo(() => assertSiteContent(data), [data])

  return <HomePage content={content} />
}
