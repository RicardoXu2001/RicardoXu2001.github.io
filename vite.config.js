import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // 如果你的仓库名就是 RicardoXu2001.github.io，这里用 '/'
})
