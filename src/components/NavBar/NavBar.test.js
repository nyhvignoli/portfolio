import { fireEvent, render, screen } from '@testing-library/react'
import { Color } from '../../theme'
import NavBar from './NavBar'

describe('NavBar', () => {
  test('renders a nav tag', () => {
    render(<NavBar />)
    const navElement = screen.getByRole('navigation')
    expect(navElement).toBeInTheDocument()
    expect(navElement.nodeName.toLowerCase()).toEqual('nav')
  })

  test('renders LanguageSelector component', () => {
    render(<NavBar />)
    const menuElement = screen.getByLabelText('language-menu')
    expect(menuElement).toBeInTheDocument()
    expect(menuElement.nodeName.toLowerCase()).toEqual('div')
  })

  test('renders an Unordered List', () => {
    render(<NavBar />)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
    expect(listElement.nodeName.toLowerCase()).toEqual('ul')
  })

  describe('renders menu items with appropriate texts', () => {
    test('# About Me item', () => {
      render(<NavBar />)
      const item = screen.getByText('Sobre mim')
      expect(item).toBeInTheDocument()
      expect(item.nodeName.toLowerCase()).toEqual('li')
    })

    test('# Projects item', () => {
      render(<NavBar />)
      const item = screen.getByText('Projetos')
      expect(item).toBeInTheDocument()
      expect(item.nodeName.toLowerCase()).toEqual('li')
    })

    test('# Contact item', () => {
      render(<NavBar />)
      const item = screen.getByText('Contato')
      expect(item).toBeInTheDocument()
      expect(item.nodeName.toLowerCase()).toEqual('li')
    })
  })

  describe('should have the correct references', () => {
    test('"About Me" menu item should reference to #top', () => {
      render(<NavBar />)
      const aboutMeMenuItem = screen.getByTestId('about-me-item')
      expect(aboutMeMenuItem).toHaveAttribute('href', '#top')
    })

    test('"Projects" menu item should reference to #projects', () => {
      render(<NavBar />)
      const projectsMenuItem = screen.getByTestId('projects-item')
      expect(projectsMenuItem).toHaveAttribute('href', '#projects')
    })

    test('"Contact" menu item should reference to #contact', () => {
      render(<NavBar />)
      const contactMeMenuItem = screen.getByTestId('contact-me-item')
      expect(contactMeMenuItem).toHaveAttribute('href', '#contact')
    })
  })

  describe('should change item style if is active', () => {
    const beforeStyle = { 'border-bottom': 'none' }
    const afterStyle = {
      'border-bottom': `2px solid ${Color.JADE_GREEN_400}`
    }

    test('# About Me item', () => {
      render(<NavBar />)
      const item = screen.getByTestId('about-me-item')
      expect(item).toHaveStyle(beforeStyle)

      fireEvent.click(item)

      expect(item).toHaveStyle(afterStyle)
    })

    test('# Projects item', () => {
      render(<NavBar />)
      const item = screen.getByTestId('projects-item')
      expect(item).toHaveStyle(beforeStyle)

      fireEvent.click(item)

      expect(item).toHaveStyle(afterStyle)
    })

    test('# Contact item', () => {
      render(<NavBar />)
      const item = screen.getByTestId('contact-me-item')
      expect(item).toHaveStyle(beforeStyle)

      fireEvent.click(item)

      expect(item).toHaveStyle(afterStyle)
    })
  })

  describe('shows/hides languages selector on mouse interaction', () => {
    test('# should show language selector on mouse over', () => {
      render(<NavBar />)
      const languageMenuButton = screen.getByLabelText('Language menu button')
      const languageMenu = screen.getByLabelText('language-menu')

      fireEvent.mouseOver(languageMenuButton)

      expect(languageMenu).toHaveStyle({
        display: 'block',
        visibility: 'visible'
      })
    })

    test('# should hide language selector on mouse leave', () => {
      render(<NavBar />)
      const languageMenuButton = screen.getByLabelText('Language menu button')
      const languageMenu = screen.getByLabelText('language-menu')

      fireEvent.mouseLeave(languageMenuButton)

      expect(languageMenu).toHaveStyle({
        visibility: 'hidden',
        opacity: '0'
      })
    })
  })
})
