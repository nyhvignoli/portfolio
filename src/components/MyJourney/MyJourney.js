import React, { useContext } from 'react'
import { Body, Heading2, Heading3 } from '../../global/styles'
import { Wrapper } from './styles'
import { LanguageContext, Text } from '../../global/LanguagesContext'
import { DATA_TYPE, getData } from '../../data'
import { CalloutCard } from '../Cards'
import { Space } from '../Space'
import { Color, Spacing } from '../../theme'
import { GridItem, GridLayout } from '../GridLayout'
import { JSONFormatter } from '../../utils'

const MyJourney = () => {
  const { dictionary } = useContext(LanguageContext)
  const steps = getData(dictionary, DATA_TYPE.myJourneySteps)

  return (
    <Wrapper data-testid="my-journey">
      <Space
        mobile={{ marginBottom: Spacing.MOBILE.LARGE }}
        tablet={{ marginBottom: Spacing.TABLET.LARGE }}
        desktop={{ marginBottom: Spacing.DESKTOP.LARGE }}
      >
        <Heading2>
          <Text tid="myJourney" />
        </Heading2>
      </Space>
      <GridLayout>
        {steps.map(({ title, icon, description }, index) => {
          const isEven = index % 2 === 0
          const key = `${title}-${index}`

          return (
            <GridItem
              key={key}
              gridColumn={{
                mobile: 'span 6',
                tablet: { small: 'span 6', regular: 'span 7' },
                desktop: 'span 10'
              }}
              marginRightOverflow={{ mobile: `-${Spacing.MOBILE.X_SMALL}` }}
            >
              <CalloutCard
                alignment="start"
                border={{ color: isEven ? Color.VIOLET_PINK_600 : '' }}
                backgroundColor={Color.GREY_700}
                color={Color.GREY_200}
              >
                <Space mobile={{ marginBottom: Spacing.MOBILE.SMALL }}>
                  <Heading3>{title}</Heading3>
                </Space>
                <Body>{JSONFormatter.toJSX(description)}</Body>
              </CalloutCard>
            </GridItem>
          )
        })}
      </GridLayout>
    </Wrapper>
  )
}

export default MyJourney
