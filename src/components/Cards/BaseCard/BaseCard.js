import React, { useContext } from 'react'
import { Wrapper } from './styles'
import { CardHeader, CardContent, CardFooter } from './'
import { CleanLink } from '../../../global/styles'
import { LanguageContext } from '../../../global/LanguagesContext'

export const BaseCard = ({
  headerProps = { title: '', subtitle: '', icon: {}, flexDirection: 'row' },
  align = 'start',
  linkProps = { href: '', target: '_blank', ariaLabel: '' },
  children,
  footerChildren,
  noBackground
}) => {
  const { dictionary } = useContext(LanguageContext)
  const { title, subtitle, icon, flexDirection } = headerProps
  const { href, target = '_blank', ariaLabel } = linkProps

  const BaseContent = () => (
    <Wrapper
      align={align}
      data-testid="base-card-wrapper"
      noBackground={noBackground}
    >
      <CardHeader
        title={title}
        subtitle={subtitle}
        icon={icon}
        flexDirection={flexDirection}
      />
      <CardContent>{children}</CardContent>
      <CardFooter>{footerChildren}</CardFooter>
    </Wrapper>
  )

  const isClickable = !!href
  const shouldOpenInANewTab = target === '_blank'

  if (isClickable) {
    return (
      <CleanLink
        href={href}
        aria-label={
          shouldOpenInANewTab
            ? `${ariaLabel} (${dictionary.ariaLabels.opensInANewTab})`
            : ariaLabel
        }
        target={target || '_blank'}
        rel="noreferrer noopener"
      >
        <BaseContent />
      </CleanLink>
    )
  }

  return <BaseContent />
}
