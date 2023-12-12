import React from 'react'
import { Image } from './styles'

export const BackgroundImages = ({ images }) => {
  return (
    <>
      {images.map(({ src, alt = '', ariaHidden = true, styles }, index) => {
        return (
          <Image
            key={`${src}-${index}`}
            src={src}
            alt={alt}
            aria-hidden={ariaHidden}
            styles={styles}
          />
        )
      })}
    </>
  )
}
