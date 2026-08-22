import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel zero-config: `vite build` outputs to dist/, and everything under
// /api is picked up automatically as Node.js serverless functions.
export default defineConfig({
  plugins: [react()],
})
