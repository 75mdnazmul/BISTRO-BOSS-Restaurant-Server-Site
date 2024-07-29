import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/Foods': {
        target: 'https://bistro-boss-restaurant-server-site-ds6sdw8uo.vercel.app',
        changeOrigin: true,
        secure: false, // যদি API সার্ভার self-signed SSL ব্যবহার করে
        rewrite: (path) => path.replace(/^\/Foods/, '/Foods'),
      },
    },
  },
});
