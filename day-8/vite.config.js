import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwind(),
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
