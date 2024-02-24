import React from 'react'
import type { Preview } from '@storybook/react'

import '../src/index.css'

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: 'dark',
            values: [
                {
                    name: 'light',
                    className: 'light',
                    value: 'hsl(var(--foreground))',
                },
                {
                    name: 'dark',
                    value: 'hsl(var(--background))',
                },
            ],
        },
        layout: 'fullscreen',
    },
    decorators: [
        (Story) => (
            <div className="flex h-screen items-center justify-center">
                <Story />
            </div>
        ),
    ],
}

export default preview
