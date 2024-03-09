import { StoryObj } from '@storybook/react'

import { Button, ButtonProps } from './Button'

export default {
    component: Button,
    tags: ['autodocs'],
    argTypes: {},
}

type Story = StoryObj<ButtonProps>

export const Default: Story = {
    args: {
        children: 'My button',
    },
}

export const Disabled: Story = {
    args: {
        children: "You can't click me",
        disabled: true,
    },
}
