import { FontSize } from './../../types/types'
import type { Meta, StoryObj } from '@storybook/react'

import { Text } from './Text'

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const MainTitle: Story = {
  args: {
    variant: 'h1',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quisquam.',
    customStyles: {
      fontSize: '2xl'
    }
  }
}

export const Subtitle: Story = {
  args: {
    variant: 'h2',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quisquam.',
    customStyles: {
      fontSize: 'xl'
    }
  }
}

export const Paragraph: Story = {
  args: {
    variant: 'p',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quisquam.'
  }
}

export const Label: Story = {
  args: {
    variant: 'label',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quisquam.'
  }
}

export const Strong: Story = {
  args: {
    variant: 'strong',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quisquam.'
  }
}

export const Em: Story = {
  args: {
    variant: 'em',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quisquam.'
  }
}

export const U: Story = {
  args: {
    variant: 'u',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quisquam.'
  }
}

export const S: Story = {
  args: {
    variant: 's',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quisquam.'
  }
}

export const Sup: Story = {
  args: {
    variant: 'sup',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quisquam.'
  }
}

export const Sub: Story = {
  args: {
    variant: 'sub',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quisquam.'
  }
}

export const Blockquote: Story = {
  args: {
    variant: 'blockquote',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quisquam.'
  }
}

export const Pre: Story = {
  args: {
    variant: 'pre',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quisquam.'
  }
}

export const Code: Story = {
  args: {
    variant: 'code',
    children: 'function saludar() { alert("Hola, mundo!"); }',
    customStyles: {
      fontSize: 'xs',
      fontFamily: 'notosans',
      color: 'blue_700'
    }
  }
}
