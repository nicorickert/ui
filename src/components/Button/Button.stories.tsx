import { useState } from 'react'
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

export const Loading: Story = {
    args: {
        children: 'Click me',
    },
    render: (args: ButtonProps) => {
        const [loading, setLoading] = useState(false)

        function handleClick() {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
            }, 2000)
        }

        return <Button {...args} onClick={handleClick} loading={loading} />
    },
}
