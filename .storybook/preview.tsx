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
        layout: 'fullscreen',
    },
    decorators: [
        (Story) => (
            <div className="dark flex h-screen items-center justify-center p-4">
                <Story />
            </div>
        ),
    ],
}

export default preview
