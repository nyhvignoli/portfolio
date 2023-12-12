import React, { useContext } from 'react'
import { Wrapper } from './styles'
import { InlineLink } from '../../../../global/styles'
import { Space } from '../../../Space'
import { LanguageContext } from '../../../../global/LanguagesContext'
import { Chevron } from '../../../Icons'

export const CardFooter = ({ ctas = [], onFocus }) => {
  const { dictionary } = useContext(LanguageContext)

  return (
    <Wrapper data-testid="gallery-card-footer">
      {ctas.map((cta, index) => {
        return (
          !!cta.href && (
            <Space key={`${cta.href}-${index}`} mobile={{ marginTop: 'auto' }}>
              <InlineLink
                flex
                href={cta.href}
                aria-label={cta.ariaLabel}
                onFocus={onFocus}
              >
                {cta.text || dictionary.viewWebsite}
                <Chevron />
              </InlineLink>
            </Space>
          )
        )
      })}
    </Wrapper>
  )
}
