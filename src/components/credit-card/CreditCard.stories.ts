import type { Meta, StoryObj } from '@storybook/react'

import CreditCard from './CreditCard'
import { CardFace, FrontFields } from './types.ts'

const meta = {
  argTypes: {
    focus: {
      control: 'select',
      options: [FrontFields.NUMBER, FrontFields.NAME, FrontFields.VALID_THRU],
    },
  },
  component: CreditCard,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'CreditCard',
} satisfies Meta<typeof CreditCard>

export default meta
type Story = StoryObj<typeof meta>

const commonArgs = {
  cvv: '331',
  focus: FrontFields.NUMBER,
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
