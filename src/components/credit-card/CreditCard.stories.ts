import type { Meta, StoryObj } from '@storybook/react'

import CreditCard from './CreditCard'

const meta = {
  title: 'CreditCard',
  component: CreditCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CreditCard>

export default meta
type Story = StoryObj<typeof meta>

enum CardFace {
  FRONT,
  BACK,
}

const commonArgs = {
  cvv: '331',
  name: 'Jane Doe',
  number: '1234 5678 9012 3456',
  validThru: '12/34',
}

export const Front: Story = {
  args: {
    ...commonArgs,
    face: CardFace.FRONT,
  },
}

export const Back: Story = {
  args: {
    ...commonArgs,
    face: CardFace.BACK,
  },
}