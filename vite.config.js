import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //base: '/personalwebsite/',
  plugins: [react()],
  build: {
    outDir: 'dist', // or any other directory you wish to output your build files
  }
})
