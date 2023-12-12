import React, { useContext } from 'react'
import { LanguageContext } from '../../global/LanguagesContext'
import { getData, DATA_TYPE } from '../../data'
import { DarkBox, GreyBox, Wrapper } from './styles'
import { GridLayout } from '../GridLayout'
import { CalloutCard } from '../Cards'
import { List, LIST_VARIANTS } from '../List'
import { InlineLink, Subhead2 } from '../../global/styles'
import { Color, Spacing } from '../../theme'
import { Space } from '../Space'
import { GridItem } from '../GridLayout'

const Certification = () => {
  const { dictionary } = useContext(LanguageContext)
  const certificates = getData(dictionary, DATA_TYPE.certificates)

  return (
    <Wrapper data-testid="certificates-wrapper">
      <DarkBox />
      <GridLayout width="100%" position="absolute">
        <GridItem
          gridColumn={{
            mobile: 'span 6',
            tablet: { small: 'span 6', regular: '2 / span 6' },
            desktop: '2 / span 10'
          }}
        >
          <CalloutCard>
            <Space mobile={{ marginBottom: Spacing.MOBILE.SMALL }}>
              <Subhead2>{dictionary.certificates}</Subhead2>
            </Space>
            <List
              variant={LIST_VARIANTS.checkmark}
              color={Color.JADE_GREEN_300}
              paddingInlineStartSmall
            >
              {certificates.map(({ text, href, ariaLabel }) => {
                return (
                  <li key={href}>
                    <InlineLink
                      href={href}
                      aria-label={`${ariaLabel} (${dictionary.ariaLabels.opensInANewTab})`}
                      target="_blank"
                    >
                      {text}
                    </InlineLink>
                  </li>
                )
              })}
            </List>
          </CalloutCard>
        </GridItem>
      </GridLayout>
      <GreyBox />
    </Wrapper>
  )
}

export default Certification
