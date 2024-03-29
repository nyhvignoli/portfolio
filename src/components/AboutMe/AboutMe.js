import React, { useContext } from 'react'
import SocialMedia from '../SocialMedia/SocialMedia'
import {
  Wrapper,
  InfoSection,
  ImageSection,
  Filter,
  ButtonsLockup
} from './styles'
import {
  Title,
  StackList,
  ListItem,
  Anchor,
  StyledButton
} from '../../global/styles'
import { resumePT, resumeEN } from '../../assets/resume'
import { LanguageContext, Text } from '../../global/LanguagesContext'
import { stacks } from '../../data/stacks'

const AboutMe = () => {
  const { dictionary, userLanguage } = useContext(LanguageContext)
  const phrases = (string) => string.split('\n')

  return (
    <Wrapper id="about-me" data-testid="about-me">
      <InfoSection>
        <Title
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          Aline "Nyh" Vignoli
        </Title>
        <h2
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <Text tid="professionTitle" />
        </h2>
        <p data-aos="fade-out" data-aos-duration="3000">
          {phrases(dictionary.aboutMeDescription)[0]}
          <br />
          {phrases(dictionary.aboutMeDescription)[1]}
          <br />
          {phrases(dictionary.aboutMeDescription)[2]}
          <strong>
            <Anchor
              orange
              href="https://www.questrade.com/home"
              target="_blank"
              rel="noreferrer"
            >
              Questrade Financial Group
            </Anchor>
          </strong>
          .<br />
          {phrases(dictionary.aboutMeDescription)[3]}
        </p>
        <StackList>
          {stacks.map((stack, index) => {
            return (
              <ListItem
                key={index}
                data-aos="flip-right"
                data-aos-duration="2000"
                data-aos-easing="ease-out-cubic"
                data-aos-delay="100"
              >
                {stack}
              </ListItem>
            )
          })}
        </StackList>
        <ButtonsLockup>
          <Anchor
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            data-aos-delay="500"
            href={userLanguage === 'pt' ? resumePT : resumeEN}
            target="_blank"
            rel="noreferrer"
          >
            <StyledButton orange>
              <Text tid="viewResume" />
            </StyledButton>
          </Anchor>
          <Anchor
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            data-aos-delay="500"
            href="https://nyhdevignoli-hsc.surge.sh/"
            target="_blank"
            rel="noreferrer"
          >
            <StyledButton>
              <Text tid="viewSkillsClockwork" />
            </StyledButton>
          </Anchor>
        </ButtonsLockup>
      </InfoSection>
      <Filter>
        <ImageSection />
        <SocialMedia vertical />
      </Filter>
    </Wrapper>
  )
}

export default AboutMe
