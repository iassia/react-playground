import FrontFace from './FrontFace'
import { screen, render } from '@testing-library/react'

describe('App', () => {
  it('renders the credit card', () => {
    const { rerender } = render(<FrontFace name='' number='' validThru='' />)

    let name = screen.getByText('your name here')
    expect(getComputedStyle(name).opacity).toBe('0.5')

    rerender(<FrontFace name='John' number='' validThru='' />)

    name = screen.getByText('John')
    expect(getComputedStyle(name).opacity).toBe('1')
  })
})
