import { fireEvent, render, screen } from '@testing-library/react'
import { IconButton } from './IconButton'

describe('IconButton', () => {
  test('renders correctly', () => {
    render(<IconButton />)
    const iconButton = screen.getByRole('button')
    expect(iconButton).toBeInTheDocument()
    expect(() => fireEvent.click(iconButton)).not.toThrow()
  })

  test('should fire onClick', () => {
    const onClickMock = jest.fn()
    render(<IconButton onClick={onClickMock} />)
    const iconButton = screen.getByRole('button')
    fireEvent.click(iconButton)
    expect(iconButton).toBeInTheDocument()
    expect(onClickMock).toHaveBeenCalled()
  })
})
