import { defineConfig, mergeConfig } from 'vitest/config'

import viteConfig from './vite.config.ts'

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            include: ['**/*.test.ts', '**/*.test.tsx'],
            exclude: ['**/node_modules/**', '**/dist/**'],
            environment: 'jsdom',
            globals: true,
            setupFiles: ['tests/setup.ts'],
            coverage: {
                include: ['src'],
                exclude: ['**/index.ts', '**/*.stories.tsx'],
            },
        },
    }),
)
