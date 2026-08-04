import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Use relative asset paths so the built site works from a subfolder or shared hosting.
  base: './athena',
  plugins: [react()],
})
