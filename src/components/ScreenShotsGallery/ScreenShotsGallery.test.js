import { fireEvent, render, screen } from '@testing-library/react'
import ScreenShotsGallery from './ScreenShotsGallery'

describe('ScreenShotsGallery', () => {
  const images = [
    {
      src: 'src',
      alt: 'alt',
      caption: 'caption'
    },
    {
      src: 'foo',
      alt: 'bar',
      caption: 'foo bar'
    }
  ]

  test('renders a ScreenShotsGallery with Background as wrapper', () => {
    const props = {
      images,
      handleGalleryClose: () => {}
    }

    render(<ScreenShotsGallery {...props} />)
    const screenShotsGalleryWrapper = screen.getByTestId(
      'screenshot-gallery-bg'
    )
    expect(screenShotsGalleryWrapper).toBeInTheDocument()
  })

  test('should disable back button by default', () => {
    const props = {
      images,
      handleGalleryClose: () => {}
    }

    render(<ScreenShotsGallery {...props} />)
    const backButton = screen.getByTestId('sg-back-button')
    expect(backButton).toHaveProperty('disabled', true)
  })

  test('should enable next button when images length is greater than 1', () => {
    const props = {
      images,
      handleGalleryClose: () => {}
    }

    render(<ScreenShotsGallery {...props} />)
    const nextButton = screen.getByTestId('sg-next-button')
    expect(nextButton).toHaveProperty('disabled', false)
  })

  test('should handle the disabled property of buttons based on active step', () => {
    const props = {
      images,
      handleGalleryClose: jest.fn()
    }

    render(<ScreenShotsGallery {...props} />)
    const backButton = screen.getByTestId('sg-back-button')
    const nextButton = screen.getByTestId('sg-next-button')

    expect(backButton).toHaveProperty('disabled', true)
    expect(nextButton).toHaveProperty('disabled', false)

    fireEvent.click(nextButton)

    expect(backButton).toHaveProperty('disabled', false)
    expect(nextButton).toHaveProperty('disabled', true)

    fireEvent.click(backButton)

    expect(backButton).toHaveProperty('disabled', true)
    expect(nextButton).toHaveProperty('disabled', false)
  })

  test('should call handleGalleryClose function', () => {
    const props = {
      images,
      handleGalleryClose: jest.fn()
    }

    render(<ScreenShotsGallery {...props} />)
    const closeButton = screen.getByTestId('sg-close-button')

    fireEvent.click(closeButton)

    expect(props.handleGalleryClose).toHaveBeenCalled()
    expect(props.handleGalleryClose).toHaveBeenCalledTimes(1)
  })
})
