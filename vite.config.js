import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root : "src",
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        about: resolve(__dirname, 'about/index.html'),
        new: resolve(__dirname, 'new/index.html'),
      },
    },
  },
}) 