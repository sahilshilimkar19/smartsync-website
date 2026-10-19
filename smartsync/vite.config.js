import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Local dev/preview: forward the contact form's /api requests to the backend (Nginx does this in production)
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
})
