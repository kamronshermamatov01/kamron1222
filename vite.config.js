import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 0.0.0.0 bilan LAN orqali kirish mumkin bo'ladi
  server: { host: '0.0.0.0', port: 5173, strictPort: true },
})