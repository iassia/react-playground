import App from './App'
import { act, screen, render, fireEvent } from '@testing-library/react'

describe('App', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('renders the credit card', () => {
    expect(screen.getByRole('img')).toHaveAccessibleName('Credit Card')
  })

  it('toggles the card face based on the cvv state', () => {
    const cardFace = screen.getByRole('img').querySelector('div')

    expect(getComputedStyle(cardFace as HTMLDivElement).transform).toBe('')

    act(() => screen.getByPlaceholderText('CVV').focus())
    expect(getComputedStyle(cardFace as HTMLDivElement).transform).toBe(
      'rotateY(180deg)',
    )

    act(() => screen.getByPlaceholderText('CVV').blur())
    expect(getComputedStyle(cardFace as HTMLDivElement).transform).toBe('')
  })

  describe('Input handlers', () => {
    it('formats the number', () => {
      const input = screen.getByPlaceholderText<HTMLInputElement>('Number')
      fireEvent.change(input, { target: { value: 'abc' } })
      expect(input.value).toBe('')

      fireEvent.change(input, { target: { value: '123' } })
      expect(input.value).toBe('123')

      fireEvent.change(input, { target: { value: '1234' } })
      expect(input.value).toBe('1234')

      fireEvent.change(input, { target: { value: '1234567890123456' } })
      expect(input.value).toBe('1234 5678 9012 3456')

      fireEvent.change(input, { target: { value: '123456789012345678' } })
      expect(input.value).toBe('1234 5678 9012 345678')
    })

    it('presents', () => {
      const input = screen.getByPlaceholderText('Number')
      fireEvent.change(input, { target: { value: '123456789012345678' } })
      expect(screen.getByText('1234 5678 9012 345678')).toBeInTheDocument()
    })

    it('formats the valid thru date', () => {
      const input = screen.getByPlaceholderText<HTMLInputElement>('Valid Thru')
      fireEvent.change(input, { target: { value: 'abc' } })
      expect(input.value).toBe('')

      fireEvent.change(input, { target: { value: '1020' } })
      expect(screen.getByText('10/20')).toBeInTheDocument()
    })

    it('formats the cvv number', () => {
      const input = screen.getByPlaceholderText('CVV')
      fireEvent.change(input, { target: { value: ' 123 ' } })
      expect(screen.getByText('123')).toBeInTheDocument()
    })

    it('presents the name without transformation', () => {
      const input = screen.getByPlaceholderText('Name')
      fireEvent.change(input, { target: { value: 'John Doe' } })
      expect(screen.getByText('John Doe')).toBeInTheDocument()
    })
  })
})
