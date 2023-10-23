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
    width: '300px',
    height: '300px',
    children: 'Hello world',
    bgColor: 'error_400',
    hovBgColor: 'brand_600'
  }
}

export const ContainerBlue: Story = {
  args: {
    variant: 'section',
    width: '300px',
    height: '300px',
    children: 'Hello world',
    bgColor: 'blue_700',
    hovBgColor: 'brand_600'
  }
}
