import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      
      '/signin':'http://localhost:3500',
    },

  },
  plugins: [react()],
})
