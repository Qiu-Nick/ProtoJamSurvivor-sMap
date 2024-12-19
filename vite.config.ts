import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Enregistre automatiquement le service worker
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'], // Assure-toi d'avoir ces fichiers dans ton public
      manifest: {
        name: 'Nom de ton App',
        short_name: 'Nom court',
        description: 'Description de ton application',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '.',
        icons: [
          {
            src: '/icon.png', // Remplace par le chemin vers ton icône
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
