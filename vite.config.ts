import { resolve } from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/nrw4912/',
  build:{
    rollupOptions:{
      input:{
        main: resolve(__dirname,'index.html'),
        resume: resolve(__dirname,'resume/index.html'),
        portfolio: resolve(__dirname,'portfolio/index.html')
      }
    }
  }
})
