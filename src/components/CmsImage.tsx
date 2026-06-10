import Image from 'next/image'

import {urlFor, type SanityImageSource} from '@/sanity/lib/image'
import type {CmsImage as CmsImageType} from '@/types/site'

type CmsImageProps = {
  image?: CmsImageType
  width: number
  height: number
  sizes: string
  sources?: Array<{
    media: string
    width: number
    height: number
    sizes?: string
  }>
  className?: string
  priority?: boolean
  dataSanity?: string
}

function hasSanityAsset(image: CmsImageType | undefined) {
  return Boolean(image?.asset?._ref || image?.asset?._id)
}

function imageSrc(image: CmsImageType | undefined, width: number, height: number) {
  if (!image) {
    return '/images/portrait-hero.jpg'
  }

  if (hasSanityAsset(image)) {
    return urlFor(image as unknown as SanityImageSource).width(width).height(height).fit('crop').auto('format').url()
  }

  return image.asset?.url || image.fallbackSrc || '/images/portrait-hero.jpg'
}

function imageSrcSet(image: CmsImageType | undefined, width: number, height: number) {
  if (!hasSanityAsset(image)) {
    return undefined
  }

  const widths = [width, width * 2]

  return widths
    .map((sourceWidth) => {
      const sourceHeight = Math.round((sourceWidth * height) / width)
      return `${imageSrc(image, sourceWidth, sourceHeight)} ${sourceWidth}w`
    })
    .join(', ')
}

export function CmsImage({image, width, height, sizes, sources, className, priority, dataSanity}: CmsImageProps) {
  const img = (
    <Image
      src={imageSrc(image, width, height)}
      alt={image?.alt || ''}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      className={className}
      data-sanity={dataSanity}
    />
  )

  if (!sources?.length) {
    return img
  }

  return (
    <picture>
      {sources.map((source) => {
        const srcSet = imageSrcSet(image, source.width, source.height)

        if (!srcSet) {
          return null
        }

        return <source key={source.media} media={source.media} sizes={source.sizes || sizes} srcSet={srcSet} />
      })}
      {img}
    </picture>
  )
}
