import { render, screen } from '@testing-library/react'
import { Chevron } from './Chevron'

describe('Chevron', () => {
  test('renders chevron right by default', () => {
    render(<Chevron />)
    const chevron = screen.getByTitle(/right/i)
    expect(chevron).toBeInTheDocument()
  })

  test('renders chevron left', () => {
    render(<Chevron direction="left" />)
    const chevron = screen.getByTitle(/left/i)
    expect(chevron).toBeInTheDocument()
  })

  test('renders chevron top', () => {
    render(<Chevron direction="top" />)
    const chevron = screen.getByTitle(/top/i)
    expect(chevron).toBeInTheDocument()
  })

  test('renders chevron bottom', () => {
    render(<Chevron direction="bottom" />)
    const chevron = screen.getByTitle(/bottom/i)
    expect(chevron).toBeInTheDocument()
  })
})
