import { render, screen } from '@testing-library/react'
import { CardHeader } from './CardHeader'

describe('CardHeader', () => {
  const headerProps = {
    title: 'foo',
    subtitle: 'bar',
    icon: { src: 'foo', alt: 'bar' }
  }

  test('renders with the correct Title', () => {
    render(<CardHeader {...headerProps} />)
    const title = screen.getByText('bar')
    expect(title).toBeInTheDocument()
    expect(title.nodeName.toLowerCase()).toEqual('h4')
  })

  test('renders with Icon', () => {
    render(<CardHeader {...headerProps} />)
    const icon = screen.getByRole('img')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('src', headerProps.icon.src)
    expect(icon).toHaveAttribute('alt', headerProps.icon.alt)
  })

  test('renders without Icon', () => {
    render(<CardHeader {...headerProps} icon={{ src: '' }} />)
    expect(() => screen.getByRole('img')).toThrow()
  })

  test('renders with the correct Subtitle', () => {
    render(<CardHeader {...headerProps} />)
    const subtitle = screen.getByText('bar')
    expect(subtitle).toBeInTheDocument()
    expect(subtitle.nodeName.toLowerCase()).toEqual('h4')
  })
})
