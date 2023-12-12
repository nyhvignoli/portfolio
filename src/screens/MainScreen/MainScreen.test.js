import { render, screen } from '@testing-library/react'
import MainScreen from './MainScreen'

describe('MainScreen', () => {
  test('renders a NavBar', () => {
    render(<MainScreen />)
    const navbarComponent = screen.getByRole('navigation')
    expect(navbarComponent).toBeInTheDocument()
  })

  test('renders a Footer', () => {
    render(<MainScreen />)
    const footer = screen.getByTestId('footer')
    expect(footer).toBeInTheDocument()
  })

  describe('Content', () => {
    test('renders Main section', () => {
      render(<MainScreen />)
      const content = screen.getByRole('main')
      expect(content).toBeInTheDocument()
    })

    test('renders AboutMe section', () => {
      render(<MainScreen />)
      const aboutMeSection = screen.getByTestId('about-me')
      expect(aboutMeSection).toBeInTheDocument()
    })

    test('renders Knowledges section', () => {
      render(<MainScreen />)
      const knowledgesSection = screen.getByTestId('knowledges-wrapper')
      expect(knowledgesSection).toBeInTheDocument()
    })

    test('renders Projects section', () => {
      render(<MainScreen />)
      const projectsSection = screen.getByTestId('projects')
      expect(projectsSection).toBeInTheDocument()
    })

    test('renders MyJourney section', () => {
      render(<MainScreen />)
      const myJourneySection = screen.getByTestId('my-journey')
      expect(myJourneySection).toBeInTheDocument()
    })

    test('renders Communities section', () => {
      render(<MainScreen />)
      const communitiesSection = screen.getByTestId('communities')
      expect(communitiesSection).toBeInTheDocument()
    })
  })
})
