import React from 'react'
import { StoryObj } from '@storybook/react'

export default {
    title: 'Basic/Accesibility',
    argTypes: {},
}

type Story = StoryObj<object>

export const Colors: Story = {
    args: {},
    render: () => (
        <div className="grid grid-cols-2 items-center justify-center gap-8 sm:grid-cols-3 md:grid-cols-4">
            <div className="flex h-32 w-32 items-center justify-center bg-primary">bg-primary</div>
            <div className="flex h-32 w-32 items-center justify-center bg-secondary">
                bg-secondary
            </div>
            <div className="flex h-32 w-32 items-center justify-center bg-card"> bg-card </div>
            <div className="flex h-32 w-32 items-center justify-center bg-destructive text-destructive-foreground">
                bg-destructive
            </div>
            <div className="flex h-32 w-32 items-center justify-center border bg-background">
                bg-background
            </div>

            <div className="flex h-32 w-32 items-center justify-center bg-card text-primary">
                text-primary
            </div>
            <div className="flex h-32 w-32 items-center justify-center bg-card text-destructive">
                text-destructive
            </div>
        </div>
    ),
}
