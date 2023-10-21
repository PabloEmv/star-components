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
    elementType: 'section',
    width: '300px',
    height: '300px',
    children: 'Hello world',
    hovBgColor: 'bg_brand_600'
  }
}

export const ContainerBlue: Story = {
  args: {
    elementType: 'section',
    width: '300px',
    height: '300px',
    children: 'Hello world',
    hovBgColor: 'bg_brand_600'
  }
}
