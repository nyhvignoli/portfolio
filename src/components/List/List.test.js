import { render, screen } from '@testing-library/react'
import { List, LIST_VARIANTS } from './List'

describe('List', () => {
  const items = [<li key="foo">foo</li>, <li key="bar">bar</li>]

  test('renders an unordered list by default', () => {
    render(<List>{items}</List>)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
    expect(listElement.nodeName.toLowerCase()).toBe('ul')
  })

  test('renders an ordered list', () => {
    render(<List variant={LIST_VARIANTS.ordered}>{items}</List>)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
    expect(listElement.nodeName.toLowerCase()).toBe('ol')
  })
})
