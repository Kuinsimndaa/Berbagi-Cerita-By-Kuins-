import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Berbagi Cerita',
        short_name: 'Cerita',
        start_url: '.',
        display: 'standalone',
        background_color: '#f6f5f7',
        theme_color: '#a7c7e7',
        description: 'Aplikasi berbagi cerita dengan peta, SPA, dan PWA.',
        icons: [
          {
            src: 'icons/icon-144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: 'icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        shortcuts: [
          {
            name: 'Tambah Cerita Baru',
            short_name: 'Tambah Cerita',
            description: 'Buka halaman tambah cerita baru',
            url: '/#/add',
            icons: [{ src: 'icons/icon-192.png', sizes: '192x192' }]
          }
        ],
        screenshots: [
          {
            src: 'icons/screenshot-desktop.png',
            sizes: '1280x800',
            type: 'image/png',
            label: 'Tampilan Desktop'
          },
          {
            src: 'icons/screenshot-mobile.png',
            sizes: '375x667',
            type: 'image/png',
            label: 'Tampilan Mobile'
          }
        ]
      },
      workbox: {
        navigateFallback: '/index.html',
        globPatterns: ['**/*.{js,css,html,png,svg,ico,json,webmanifest}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/story-api\.dicoding\.dev\/v1\/stories/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 86400
              }
            }
          }
        ]
      }
    })
  ]
});
