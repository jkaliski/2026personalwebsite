import Image from 'next/image'
import type {SanityImageSource} from '@sanity/image-url/lib/types/types'

import {urlFor} from '@/sanity/lib/image'
import type {CmsImage as CmsImageType} from '@/types/site'

type CmsImageProps = {
  image?: CmsImageType
  width: number
  height: number
  sizes: string
  className?: string
  priority?: boolean
}

function imageSrc(image: CmsImageType | undefined, width: number, height: number) {
  if (!image) {
    return '/images/portrait-hero.jpg'
  }

  if (image.asset?._ref) {
    return urlFor(image as unknown as SanityImageSource).width(width).height(height).fit('crop').auto('format').url()
  }

  return image.asset?.url || image.fallbackSrc || '/images/portrait-hero.jpg'
}

export function CmsImage({image, width, height, sizes, className, priority}: CmsImageProps) {
  return (
    <Image
      src={imageSrc(image, width, height)}
      alt={image?.alt || ''}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  )
}
