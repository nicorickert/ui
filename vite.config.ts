import react from '@vitejs/plugin-react-swc'
import { glob } from 'glob'
import { fileURLToPath } from 'node:url'
import { extname, relative, resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

import { dependencies, peerDependencies } from './package.json'

export default defineConfig({
    plugins: [
        react(),
        dts({
            include: ['src/**/*'],
            exclude: ['src/**/*.stories.tsx', 'src/**/*.test.tsx'],
        }),
    ],
    build: {
        outDir: 'dist',
        lib: {
            entry: resolve(__dirname, 'src', 'index.ts'),
            formats: ['es'],
            fileName: (ext) => `index.${ext}.js`,
        },
        rollupOptions: {
            external: [
                'react',
                'react/jsx-runtime',
                ...Object.keys(peerDependencies),
                ...Object.keys(dependencies),
            ],
            input: Object.fromEntries(
                glob
                    .sync('src/**/*.{ts,tsx}', {
                        ignore: ['**/*.stories.tsx', '**/*.test.tsx'],
                    })
                    .map((file) => [
                        // The name of the entry point
                        // src/nested/foo.ts becomes nested/foo
                        relative('src', file.slice(0, file.length - extname(file).length)),
                        // The absolute path to the entry file
                        // src/nested/foo.ts becomes /project/lib/nested/foo.ts
                        fileURLToPath(new URL(file, import.meta.url)),
                    ]),
            ),
            output: {
                preserveModules: true,
                exports: 'named',
                entryFileNames: '[name].js',
                assetFileNames: 'assets/[name]-[hash][extname]',
                chunkFileNames: 'chunks/[name]-[hash].js',
            },
        },
        target: 'esnext',
        sourcemap: true,
    },
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, 'src'),
            },
        ],
    },
})
