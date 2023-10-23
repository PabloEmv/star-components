import type { Meta, StoryObj } from '@storybook/react'

import { Container } from './Container'

const meta = {
  title: 'Components/Container',
  component: Container,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

export const ContainerRed: Story = {
  args: {
    variant: 'section',
    customStyles: {
      backgroundColor: 'error_400',
      hovBackgroundColor: 'brand_600'
    },
    style: {
      width: '300px',
      height: '300px'
    },
    children: 'Hello world'
  }
}

export const ContainerBlue: Story = {
  args: {
    variant: 'section',
    customStyles: {
      backgroundColor: 'blue_700',
      hovBackgroundColor: 'brand_600'
    },
    style: {
      width: '300px',
      height: '300px'
    },
    children: 'Hello world'
  }
}
