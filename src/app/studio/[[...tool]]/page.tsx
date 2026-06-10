'use client'

import {NextStudio} from 'next-sanity/studio'
import {preloadModule} from 'react-dom'

import config from '../../../../sanity.config'

const dashboardBridgeScript = 'https://core.sanity-cdn.com/bridge.js'

export default function StudioPage() {
  preloadModule(dashboardBridgeScript, {as: 'script'})

  return (
    <>
      <script src={dashboardBridgeScript} async type="module" />
      <NextStudio config={config} />
    </>
  )
}
