import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const InputFile: Story = {
  args: {
    type: 'file'
  }
}

export const InputText: Story = {
  args: {
    type: 'text',
    id: 'input-text',
    placeholder: 'Type something...'
  }
}

export const InputEmail: Story = {
  args: {
    type: 'email',
    id: 'input-email',
    customStyles: {
      borderColor: 'blue_300',
      borderFocusColor: 'blue_500',
      fontWeight: '600'
    }
  }
}

export const InputPassword: Story = {
  args: {
    type: 'password',
    id: 'input-password',
    customStyles: {
      borderColor: 'error_300',
      borderFocusColor: 'error_500'
    }
  }
}
