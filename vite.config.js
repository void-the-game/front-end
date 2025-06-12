import { sentryVitePlugin } from '@sentry/vite-plugin'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: 'void-n5',
      project: 'void-frontend',
    }),
  ],

  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    globals: true,
  },

  build: {
    sourcemap: true,
  },
})
