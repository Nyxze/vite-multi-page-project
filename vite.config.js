import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about/index.html'),
        new: resolve(__dirname, 'src/new/index.html'),
      },
    },
  },
}) 