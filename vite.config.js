import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  optimizeDeps: {
    include: ['jwt-decode']
  },
  server: {
    port: 4000, // Altere para a porta desejada
  },
  base: '/',
})
