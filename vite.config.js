import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    // emptyOutDir: true,
    // rollupOptions: {
    //   input: {
    //     App: resolve(root, 'index.html'),
    //     home: resolve(root, 'home', 'index.html'),
    //     landing: resolve(root, 'landing', 'index.html'),
    //     shop: resolve(root, 'shop', 'index.html')
    //   }
    // }
  }
})