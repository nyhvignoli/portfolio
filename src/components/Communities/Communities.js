import React, { useContext } from 'react'
import { Body, Heading2, InlineLink } from '../../global/styles'
import { Wrapper } from './styles'
import { BaseCard } from '../../components/Cards'
import { LanguageContext, Text } from '../../global/LanguagesContext'
import { DATA_TYPE, getData } from '../../data'
import { GridItem, GridLayout } from '../GridLayout'
import { Space } from '../Space'
import { Spacing } from '../../theme'
import { Chevron } from '../Icons'

const Communities = () => {
  const { dictionary } = useContext(LanguageContext)
  const communities = getData(dictionary, DATA_TYPE.communities)

  return (
    <Wrapper data-testid="communities">
      <Space
        mobile={{ marginBottom: Spacing.MOBILE.LARGE }}
        tablet={{ marginBottom: Spacing.TABLET.LARGE }}
        desktop={{ marginBottom: Spacing.DESKTOP.LARGE }}
      >
        <Heading2>
          <Text tid="communities" />
        </Heading2>
      </Space>
      <GridLayout width="100%">
        {communities.map(
          ({ name, description, logo, href, ariaLabel }, index) => {
            const isEven = index % 2 === 0
            return (
              <GridItem
                key={`${name}-${index}`}
                gridColumn={{
                  mobile: 'auto / span 6',
                  tablet: { small: '2 / span 4', regular: 'auto / span 4' },
                  desktop: isEven ? '2 / span 5' : 'auto / span 5'
                }}
              >
                <BaseCard
                  noBackground
                  headerProps={{
                    title: name,
                    icon: { src: logo.image, alt: logo.alt },
                    flexDirection: 'column'
                  }}
                  name={name}
                  footerChildren={
                    <Space
                      mobile={{ marginTop: Spacing.MOBILE.XX_SMALL }}
                      tablet={{ marginTop: Spacing.TABLET.TINY }}
                      desktop={{ marginTop: Spacing.DESKTOP.X_TINY }}
                    >
                      <InlineLink
                        flex
                        href={href}
                        aria-label={`${ariaLabel} (${dictionary.ariaLabels.opensInANewTab})`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {dictionary.cta.learnMore}
                        <Chevron />
                      </InlineLink>
                    </Space>
                  }
                >
                  <Body>{description}</Body>
                </BaseCard>
              </GridItem>
            )
          }
        )}
      </GridLayout>
    </Wrapper>
  )
}
export default Communities
