import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  build: {
    // Adjust the include option based on your file structure
    // For example, if your JSX files are in the "src" directory:
    // include: 'src/**/*.jsx',
    assetsDir: 'assets',
    outDir: 'build',
  },
})
