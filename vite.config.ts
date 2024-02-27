import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
        // Add other PostCSS plugins here
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    }
  }
})
