import type {Metadata} from 'next'
import {draftMode} from 'next/headers'
import {Inter, Inter_Tight, JetBrains_Mono} from 'next/font/google'
import {VisualEditing} from 'next-sanity/visual-editing'
import type {ReactNode} from 'react'

import {hasSanityReadToken, SanityLive} from '@/sanity/lib/live'
import {skipDraftLiveRefresh} from '@/sanity/lib/liveActions'

import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

const interTight = Inter_Tight({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-display',
  display: 'swap',
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Jarosław Kaliski — Pianist, Répétiteur, Harpsichordist',
  description:
    'Official site of Jarosław Kaliski — pianist, operarépétiteur, harpsichordist, and Assistant Professor of Musical Performance in Opera at Stockholm University of the Arts.',
}

export default async function RootLayout({children}: Readonly<{children: ReactNode}>) {
  const {isEnabled} = await draftMode()
  const includeDrafts = isEnabled && hasSanityReadToken

  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${jetBrainsMono.variable}`}>
      <body>
        {children}
        <SanityLive
          includeDrafts={includeDrafts}
          action={includeDrafts ? skipDraftLiveRefresh : undefined}
        />
        {isEnabled ? <VisualEditing /> : null}
      </body>
    </html>
  )
}
