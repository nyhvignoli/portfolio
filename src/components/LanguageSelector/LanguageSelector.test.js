import { fireEvent, render, screen } from '@testing-library/react'
import LanguageSelector from './LanguageSelector'
import { LanguageProvider } from '../../global/LanguagesContext'
import { Color } from '../../theme'

describe('LanguageSelector', () => {
  test('renders a LanguageSelector menu', () => {
    render(<LanguageSelector />)
    const menuElement = screen.getByLabelText('language-menu')
    expect(menuElement).toBeInTheDocument()
    expect(menuElement.nodeName.toLowerCase()).toEqual('div')
  })

  test('renders a PT language as default value', () => {
    render(<LanguageSelector />)
    const menuElement = screen.getByLabelText('language-menu')
    const ptMenuItem = screen.getByText('Português')

    expect(menuElement).toBeInTheDocument()
    expect(ptMenuItem).toBeInTheDocument()
    expect(ptMenuItem).toHaveStyle({
      color: Color.GREY_400
    })
  })

  test('should change the language to "English" when click on English option', () => {
    const hideSelect = jest.fn()
    render(
      <LanguageProvider>
        <LanguageSelector hideSelect={hideSelect} />
      </LanguageProvider>
    )

    const enMenuItem = screen.getByText('English')

    fireEvent.click(enMenuItem)

    expect(hideSelect).toHaveBeenCalled()
    expect(enMenuItem).toHaveStyle({
      color: Color.GREY_400
    })
  })

  test('should change the language to "Português" when click on Português option', () => {
    const hideSelect = jest.fn()
    render(
      <LanguageProvider>
        <LanguageSelector hideSelect={hideSelect} />
      </LanguageProvider>
    )

    const ptMenuItem = screen.getByText('Português')

    fireEvent.click(ptMenuItem)

    expect(hideSelect).toHaveBeenCalled()
    expect(ptMenuItem).toHaveStyle({
      color: Color.GREY_400
    })
  })
})
