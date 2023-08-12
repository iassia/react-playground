import App from './App'
import { act, screen, render } from '@testing-library/react'

describe('App', () => {
  it('renders the credit card', () => {
    render(<App />)
    expect(screen.getByRole('img')).toHaveAccessibleName('Credit Card')
  })

  it('toggles the card face based on the cvv state', () => {
    render(<App />)
    const cardFace = screen.getByRole('img').querySelector('div')

    expect(getComputedStyle(cardFace as HTMLDivElement).transform).toBe('')

    act(() => screen.getByPlaceholderText('cvv').focus())
    expect(getComputedStyle(cardFace as HTMLDivElement).transform).toBe(
      'rotateY(180deg)',
    )

    act(() => screen.getByPlaceholderText('cvv').blur())
    expect(getComputedStyle(cardFace as HTMLDivElement).transform).toBe('')
  })
})
