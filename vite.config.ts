import path from "path"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import tailwind from "tailwindcss"
import autoprefixer from "autoprefixer"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: [".mdx", ".mjs", ".js", ".ts", ".vue"],
    alias: {
      "@": path.resolve(process.cwd(), "./src"),
    },
  },
})