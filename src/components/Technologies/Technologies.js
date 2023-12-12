import React, { useContext } from 'react'
import { LanguageContext } from '../../global/LanguagesContext'
import { Body, InlineLink, Subhead2 } from '../../global/styles'
import { Spacing } from '../../theme'
import { Pill } from '../Pill'
import { Space } from '../Space'
import { ListWrapper, Wrapper } from './styles'

export const Technologies = ({ title, list = [] }) => {
  const { dictionary } = useContext(LanguageContext)

  return (
    <Wrapper data-testid="technologies-wrapper">
      <Space
        mobile={{
          marginBottom: Spacing.MOBILE.SMALL,
          marginTop: Spacing.MOBILE.LARGE
        }}
      >
        <Subhead2 styles={`text-align: left;`}>{title}</Subhead2>
      </Space>
      <Space mobile={{ marginBottom: Spacing.MOBILE.SMALL }}>
        <ListWrapper>
          {list.map((item, index) => {
            return <Pill key={`${item}-${index}`} text={item} />
          })}
        </ListWrapper>
      </Space>
      <Body small>
        {dictionary.viewSkillsClockwork}
        <InlineLink
          href="https://nyhdevignoli-hsc.surge.sh/"
          target="_blank"
          aria-label={`${dictionary.ariaLabels.skillsClockworkLink} (${dictionary.ariaLabels.opensInANewTab})`}
        >
          Nyh Vignoli - Hard Skills Clockwork
        </InlineLink>
      </Body>
    </Wrapper>
  )
}
