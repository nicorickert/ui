import { StoryObj } from '@storybook/react'

import { Input, InputProps } from './Input'

export default {
    component: Input,
    tags: ['autodocs'],
    argTypes: {},
    render: (args: InputProps) => {
        return (
            <div className="w-full max-w-80">
                <Input {...args} />
            </div>
        )
    },
}

type Story = StoryObj<InputProps>

export const Default: Story = {
    args: {},
}

export const Placeholder: Story = {
    args: {
        placeholder: 'Type something...',
    },
}

export const Disabled: Story = {
    args: {
        disabled: true,
    },
}

export const Password: Story = {
    args: {
        type: 'password',
    },
}
