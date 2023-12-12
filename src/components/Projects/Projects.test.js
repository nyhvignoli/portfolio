import { fireEvent, render, screen } from '@testing-library/react'
import Projects from './Projects'

/* TODO
 * Uncomment the wrapper tests after new Project Gallery be developed
 */

describe('Projects', () => {
  test('renders a Projects Wrapper', () => {
    render(<Projects />)
    const projectsWrapper = screen.getByTestId('projects')
    expect(projectsWrapper).toBeInTheDocument()
  })

  test('should display ScreenShotsGallery when click on project image', () => {
    render(<Projects />)
    const galleryButtons = screen.getAllByRole('button', {
      name: /ver galeria/i
    })

    fireEvent.click(galleryButtons[0])

    //const wrapper = screen.getByTestId('projects')
    const screenShotsGalleryWrapper = screen.getByTestId(
      'screenshot-gallery-bg'
    )

    expect(screenShotsGalleryWrapper).toBeInTheDocument()
    //expect(wrapper.childElementCount).toEqual(8)
  })

  test('should hide ScreenShotsGallery when click on close button', () => {
    render(<Projects />)
    const galleryButtons = screen.getAllByRole('button', {
      name: /ver galeria/i
    })

    fireEvent.click(galleryButtons[0])
    const closeButton = screen.getByTestId('sg-close-button')

    fireEvent.click(closeButton)

    const wrapper = screen.getByTestId('projects')
    expect(wrapper).toBeInTheDocument()
    //expect(wrapper.childElementCount).toEqual(7)
  })
})
