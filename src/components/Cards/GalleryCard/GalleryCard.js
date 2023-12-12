import React from 'react'
import { Wrapper } from './styles'
import { CardHeader, CardContent, CardFooter } from '.'

export const GalleryCard = ({
  id = '',
  headerProps = {
    title: '',
    subtitle: '',
    titleStyles: '',
    image: {},
    cta: {}
  },
  footerProps = { ctas: [], onFocus: null },
  children,
  active,
  noBackground,
  hasMarginLeftOnMobile,
  hasMarginRightOnMobile
}) => {
  return (
    <Wrapper
      id={id}
      data-testid="gallery-card-wrapper"
      noBackground={noBackground}
      hasMarginLeftOnMobile={hasMarginLeftOnMobile}
      hasMarginRightOnMobile={hasMarginRightOnMobile}
      active={active}
    >
      <CardHeader {...headerProps} />
      <CardContent>{children}</CardContent>
      <CardFooter {...footerProps} />
    </Wrapper>
  )
}
