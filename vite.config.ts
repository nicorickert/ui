import { defineConfig } from 'vite'
import { resolve } from 'path'
import { peerDependencies, dependencies } from './package.json'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/**/*'],
    })
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
        ...Object.keys(dependencies)
      ],
      output: {
        preserveModules: true,
        exports: 'named',
        entryFileNames: '[name].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'chunks/[name]-[hash].js'
      }
    },
    target: 'esnext',
    sourcemap: true
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      }
    ],
  },
})
