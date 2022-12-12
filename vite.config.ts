import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssScss from 'postcss-scss'
import autoprefixer from 'autoprefixer'
import postcssNesting from 'postcss-nesting'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '',
  css: {
    devSourcemap: true,
    postcss: {
      map: true,
      parser: postcssScss,
      plugins: [
        autoprefixer({}),
        postcssNesting({})
      ]
    }
  },
  plugins: [react()],
})
