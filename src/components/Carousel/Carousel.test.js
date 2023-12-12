import { fireEvent, render, screen } from '@testing-library/react'
import Carousel from './Carousel'

describe('Carousel', () => {
  afterEach(() => {
    jest.useRealTimers()
  })

  const projects = [
    {
      title: 'MusiCatchers',
      type: 'Full Stack',
      images: [
        {
          src: 'src-1',
          alt: 'alt-1',
          caption: 'caption-1'
        }
      ],
      description: 'foo',
      githubLink: {
        frontend: 'https://github.com/nyhvignoli/musicatchers-frontend',
        backend: 'https://github.com/nyhvignoli/musicatchers-backend'
      },
      url: '',
      tags: ['react', 'axios']
    },
    {
      title: 'Labeddit',
      type: 'Front-end',
      images: [
        {
          src: 'src-2',
          alt: 'alt-2',
          caption: 'caption-2'
        }
      ],
      description: 'bar',
      githubLink: 'https://github.com/nyhvignoli/labeddit',
      url: 'http://nyhv-labeddit.surge.sh',
      tags: ['react', 'axios', 'styled-components', 'material-ui']
    }
  ]

  test('renders a Carousel Wrapper', () => {
    const props = {
      projects: [],
      imageDetailsOpen: false,
      handleGalleryOpen: jest.fn()
    }

    render(<Carousel {...props} />)
    const carouselWrapper = screen.getByTestId('carousel-wrapper')
    expect(carouselWrapper).toBeInTheDocument()
  })

  test('should disable previous button by default', () => {
    const props = {
      projects,
      imageDetailsOpen: false,
      handleGalleryOpen: jest.fn()
    }

    render(<Carousel {...props} />)
    const previousButton = screen.getByTestId('previous')
    expect(previousButton).toHaveProperty('disabled', true)
  })

  test('should enable next button when projects length is greater than 1', () => {
    const props = {
      projects,
      imageDetailsOpen: false,
      handleGalleryOpen: jest.fn()
    }

    render(<Carousel {...props} />)
    const nextButton = screen.getByTestId('next')
    expect(nextButton).toHaveProperty('disabled', false)
  })

  test('should handle the disabled property of buttons based on active step', () => {
    const props = {
      projects,
      imageDetailsOpen: false,
      handleGalleryOpen: jest.fn()
    }

    render(<Carousel {...props} />)
    const previousButton = screen.getByTestId('previous')
    const nextButton = screen.getByTestId('next')

    expect(previousButton).toHaveProperty('disabled', true)
    expect(nextButton).toHaveProperty('disabled', false)

    fireEvent.click(nextButton)

    expect(previousButton).toHaveProperty('disabled', false)
    expect(nextButton).toHaveProperty('disabled', true)

    fireEvent.click(previousButton)

    expect(previousButton).toHaveProperty('disabled', true)
    expect(nextButton).toHaveProperty('disabled', false)
  })

  test('should call handleGalleryOpen function', () => {
    const props = {
      projects,
      imageDetailsOpen: false,
      handleGalleryOpen: jest.fn()
    }

    render(<Carousel {...props} />)
    const viewGalleryButton = screen.getAllByRole('button', {
      name: /ver galeria/i
    })[0]

    fireEvent.click(viewGalleryButton)

    expect(props.handleGalleryOpen).toHaveBeenCalled()
    expect(props.handleGalleryOpen).toHaveBeenCalledWith(0)
  })
})
