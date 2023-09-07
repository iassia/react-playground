import type { Meta, StoryObj } from '@storybook/react'
import { CardFace } from './types.ts'

import CreditCard from './CreditCard'

const meta = {
  title: 'CreditCard',
  component: CreditCard,
  tags: ['autodocs'],
  argTypes: {
    focus: {
      control: 'select',
      options: ['number', 'name', 'valid-thru'],
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CreditCard>

export default meta
type Story = StoryObj<typeof meta>

const commonArgs = {
  focus: 'number',
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
