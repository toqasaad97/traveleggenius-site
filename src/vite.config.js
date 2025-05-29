import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/travelgate': {
        target: 'http://localhost:1937',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
