import React, { useContext, useState, useEffect } from 'react'
import { Wrapper, Content, BackgroundWrapper } from './styles'
import { Title, Subhead, Body, ButtonLink } from '../../global/styles'
import { resumePT, resumeEN } from '../../assets/resume'
import { LanguageContext, Text } from '../../global/LanguagesContext'
import { GridLayout } from '../GridLayout'
import { BackgroundImages } from '../BackgroundImages'
import { createBGImagesStyle } from '../../data/aboutMe'
import client from '../../services/contentful'
import { GET_HERO } from '../../graphql/queries'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { renderOptions } from '../../utils/rtf'

const AboutMe = () => {
  const { dictionary, userLanguage } = useContext(LanguageContext)
  const UserLanguageMap = {
    en: 'en-US',
    pt: 'pt-BR'
  }

  const locale = UserLanguageMap[userLanguage]

  const [heroData, setHeroData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { heroCollection } = await client.request(GET_HERO, {
        locale
      })
      setHeroData(heroCollection.items)
    }
    fetchData()
  }, [locale])

  const { ariaLabels } = dictionary
  const heroImages = heroData[0]?.imagesCollection?.items || []
  const backgroundImages = createBGImagesStyle(heroImages[0]?.url)

  return (
    <BackgroundWrapper id="about-me" data-testid="about-me">
      <BackgroundImages images={backgroundImages} />
      <GridLayout position="relative">
        <Wrapper>
          {heroData.length > 0 ? (
            <Content key={heroData[0].title}>
              <Title>{heroData[0].title}</Title>
              <Subhead>{heroData[0].subtitle}</Subhead>
              <Body align="center">
                {documentToReactComponents(
                  heroData[0].bodyCopy.json,
                  renderOptions
                )}
              </Body>
            </Content>
          ) : (
            <div>Loading...</div>
          )}
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
