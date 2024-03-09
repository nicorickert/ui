import { StoryObj } from '@storybook/react'

import { LoadingSpinner, LoadingSpinnerProps } from './LoadingSpinner'

export default {
    component: LoadingSpinner,
    tags: ['autodocs'],
    argTypes: {},
}

type Story = StoryObj<LoadingSpinnerProps>

export const Default: Story = {
    args: {},
}

export const Size: Story = {
    args: {
        size: 48,
        strokeWidth: 1,
    },
}

export const Stop: Story = {
    args: {
        stop: true,
    },
}
