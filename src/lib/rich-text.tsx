import {PortableText} from '@portabletext/react'
import type {ReactNode} from 'react'

import type {RichText} from '@/types/site'

type LinkMarkProps = {
  children?: ReactNode
  value?: {
    href?: string
  }
}

function isStringBlocks(value: RichText): value is string[] {
  return Array.isArray(value) && (value.length === 0 || typeof value[0] === 'string')
}

export function RichTextRenderer({
  value,
  className,
  dataSanity,
}: {
  value?: RichText
  className?: string
  dataSanity?: string
}) {
  if (!value?.length) {
    return null
  }

  if (isStringBlocks(value)) {
    return (
      <div className={className} data-sanity={dataSanity}>
        {value.map((block) => (
          <p key={block} dangerouslySetInnerHTML={{__html: block}} />
        ))}
      </div>
    )
  }

  return (
    <div className={className} data-sanity={dataSanity}>
      <PortableText
        value={value}
        components={{
          marks: {
            link: ({children, value: mark}: LinkMarkProps) => {
              const href = mark?.href || '#'
              const isExternal = href.startsWith('http')

              return (
                <a href={href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noopener' : undefined}>
                  {children}
                </a>
              )
            },
          },
        }}
      />
    </div>
  )
}
