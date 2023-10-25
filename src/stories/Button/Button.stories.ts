import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultButton: Story = {
  args: {
    children: 'Hello world'
  }
}

export const BlueButton: Story = {
  args: {
    children: 'Hello world',
    customStyles: {
      backgroundColor: 'blue_600',
      borderColor: 'blue_200',
      fontFamily: 'poppins',
      hovBackgroundColor: 'error_600'
    }
  }
}

export const ButtonXs: Story = {
  args: {
    children: 'Hello world',
    customStyles: {
      backgroundColor: 'pink_600',
      borderColor: 'pink_200',
      fontFamily: 'poppins',
      size: 'xs'
    }
  }
}

export const ButtonSm: Story = {
  args: {
    children: 'Hello world',
    customStyles: {
      backgroundColor: 'pink_600',
      borderColor: 'pink_200',
      fontFamily: 'poppins',
      size: 'sm'
    }
  }
}
