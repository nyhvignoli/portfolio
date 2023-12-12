import React, { useEffect } from 'react'
import { Wrapper, Content } from './styles'
import AboutMe from '../../components/AboutMe/AboutMe'
import Footer from '../../components/Footer/Footer'
import Knowledges from '../../components/Knowledges/Knowledges'
import NavBar from '../../components/NavBar/NavBar'
import Projects from '../../components/Projects/Projects'
import MyJourney from '../../components/MyJourney/MyJourney'
import Communities from '../../components/Communities/Communities'
import Certificate from '../../components/Certificate/Certificate'

const MainScreen = () => {
  const smoothScroll = () => {
    window.document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (event) {
        event.preventDefault()

        window.document
          .querySelector(this.getAttribute('href'))
          .scrollIntoView({
            behavior: 'smooth'
          })
      })
    })
  }

  useEffect(() => {
    smoothScroll()
  }, [])

  return (
    <Wrapper id="top" data-testid="main-screen-wrapper">
      <NavBar />
      <Content>
        <AboutMe />
        <Knowledges />
        <Certificate />
        <Projects />
        <MyJourney />
        <Communities />
      </Content>
      <Footer />
    </Wrapper>
  )
}

export default MainScreen
