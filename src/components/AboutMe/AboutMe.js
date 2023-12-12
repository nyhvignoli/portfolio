import React, { useContext } from 'react'
import { Wrapper, Content, BackgroundWrapper } from './styles'
import {
  Title,
  Subhead,
  Body,
  ButtonLink,
  InlineLink
} from '../../global/styles'
import { resumePT, resumeEN } from '../../assets/resume'
import { LanguageContext, Text } from '../../global/LanguagesContext'
import { GridLayout } from '../GridLayout'
import { BackgroundImages } from '../BackgroundImages'
import { getBackgroundImages } from '../../data/aboutMe'

const AboutMe = () => {
  const { dictionary, userLanguage } = useContext(LanguageContext)
  const { aboutMeDescription, ariaLabels } = dictionary
  const backgroundImages = getBackgroundImages()
  const phrases = (string) => string.split('\n')

  return (
    <BackgroundWrapper id="about-me" data-testid="about-me">
      <BackgroundImages images={backgroundImages} />
      <GridLayout position="relative">
        <Wrapper>
          <Content>
            <Title>Aline Vignoli</Title>
            <Subhead>
              <Text tid="professionTitle" />
            </Subhead>
            <Body align="center">
              {phrases(aboutMeDescription)[0]}
              <br />
              <br />
              {phrases(aboutMeDescription)[1]}
              <br />
              <br />
              {phrases(aboutMeDescription)[2]}
              <InlineLink
                href="https://www.questrade.com/home"
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${ariaLabels.questrade} (${ariaLabels.opensInANewTab})`}
              >
                Questrade Financial Group
              </InlineLink>
              .<br />
              <br />
              {phrases(aboutMeDescription)[3]}
            </Body>
          </Content>
          <ButtonLink
            href={userLanguage === 'pt' ? resumePT : resumeEN}
            target="_blank"
            aria-label={`${ariaLabels.viewResume} (${ariaLabels.opensAPDFDocumentInANewTab})`}
          >
            <Text tid="viewResume" />
          </ButtonLink>
        </Wrapper>
      </GridLayout>
    </BackgroundWrapper>
  )
}

export default AboutMe
