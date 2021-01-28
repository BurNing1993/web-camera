import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    proxy:{
      '/api': {
        // target: 'http://192.168.100.202:8002/biz/platform/api/v1/rest/',
        target: 'http://izone.sichuanair.com/platform/rest',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
