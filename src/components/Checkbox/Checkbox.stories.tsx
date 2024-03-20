import { StoryObj } from '@storybook/react'

import { Checkbox, CheckboxProps } from './Checkbox'

export default {
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {},
}

type Story = StoryObj<CheckboxProps>

export const Default: Story = {
    args: {},
}

export const Label: Story = {
    args: {
        label: 'Check this',
    },
}

export const LineThrough: Story = {
    args: {
        label: 'Buy bananas',
        defaultChecked: true,
        lineThrough: true,
    },
}

export const Disabled: Story = {
    args: {
        disabled: true,
        label: "You can't change me",
    },
}
