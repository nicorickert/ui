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
