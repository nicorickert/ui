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
    },
    decorators: [
        (Story) => (
            <div className="flex items-center justify-center">
                <Story />
            </div>
        ),
    ],
}

export default preview
