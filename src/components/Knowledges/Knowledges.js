import React, { useContext } from 'react'
import { LanguageContext, Text } from '../../global/LanguagesContext'
import { Wrapper } from './styles'
import { Heading2 } from '../../global/styles'
import { GridLayout } from '../GridLayout'
import { BaseCard } from '../Cards'
import { getData, DATA_TYPE } from '../../data'
import { Technologies } from '../Technologies'
import { stacks } from '../../data/stacks'
import { Space } from '../Space'
import { Spacing } from '../../theme'
import { List } from '../List'

const Knowledges = () => {
  const { dictionary } = useContext(LanguageContext)
  const knowledges = getData(dictionary, DATA_TYPE.knowledges)

  return (
    <Wrapper id="knowledges" data-testid="knowledges-wrapper">
      <Space
        mobile={{ marginBottom: Spacing.MOBILE.LARGE }}
        tablet={{ marginBottom: Spacing.TABLET.LARGE }}
        desktop={{ marginBottom: Spacing.DESKTOP.LARGE }}
      >
        <Heading2>
          <Text tid="knowledges" />
        </Heading2>
      </Space>
      <GridLayout width="100%">
        {knowledges.map(({ title, icon, list }, index) => {
          return (
            <BaseCard
              key={`${title}-${index}`}
              headerProps={{ title, icon }}
              contentProps={{ list }}
            >
              {!!list.length && (
                <List>
                  {list.map((item, index) => {
                    return <li key={index}>{item}</li>
                  })}
                </List>
              )}
            </BaseCard>
          )
        })}
        <Technologies title={dictionary.technologies} list={stacks} />
      </GridLayout>
    </Wrapper>
  )
}

export default Knowledges
