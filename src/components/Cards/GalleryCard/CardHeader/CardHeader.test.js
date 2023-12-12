import { render, screen, fireEvent } from '@testing-library/react'
import { CardHeader } from './CardHeader'

describe('CardHeader', () => {
  const headerProps = {
    title: 'foo',
    subtitle: 'bar',
    cover: { src: 'foo', alt: 'bar' }
  }

  test('renders with the correct Title', () => {
    render(<CardHeader {...headerProps} />)
    const title = screen.getByText('foo')
    expect(title).toBeInTheDocument()
    expect(title.nodeName.toLowerCase()).toEqual('h3')
  })

  test('renders with Cover', () => {
    render(<CardHeader {...headerProps} />)
    const cover = screen.getByRole('img')
    expect(cover).toBeInTheDocument()
    expect(cover).toHaveAttribute('src', headerProps.cover.src)
    expect(cover).toHaveAttribute('alt', headerProps.cover.alt)
  })

  test('renders without Cover', () => {
    render(<CardHeader {...headerProps} cover={{ src: '' }} />)
    expect(() => screen.getByRole('img')).toThrow()
  })

  test('renders with the correct Subtitle', () => {
    render(<CardHeader {...headerProps} />)
    const subtitle = screen.getByText('{ bar }')
    expect(subtitle).toBeInTheDocument()
    expect(subtitle.nodeName.toLowerCase()).toEqual('h4')
  })

  test('renders with CTA if has cta text', () => {
    render(<CardHeader {...headerProps} cta={{ text: 'foo' }} />)
    const cta = screen.getByRole('button', { name: /foo/i })
    expect(cta).toBeInTheDocument()
    expect(() => fireEvent.click(cta)).not.toThrow()
  })

  test('should fire onClick with params', () => {
    const onClickMock = jest.fn()
    render(
      <CardHeader
        {...headerProps}
        cta={{ text: 'foo', onClick: () => onClickMock('bar') }}
      />
    )
    const cta = screen.getByRole('button', { name: /foo/i })
    fireEvent.click(cta)
    expect(cta).toBeInTheDocument()
    expect(onClickMock).toHaveBeenCalledWith('bar')
  })
})
