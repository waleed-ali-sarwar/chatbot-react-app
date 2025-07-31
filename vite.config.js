import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/chatbot-react-app/', // Essential for correct asset paths
  plugins: [react()],
})
