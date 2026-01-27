// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://vivre-a-tours.fr',

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
    },
  },

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/draft/'),
      changefreq: 'weekly',
      priority: 0.7,
      serialize(item) {
        // Priorités personnalisées selon CLAUDE.md
        if (item.url === 'https://vivre-a-tours.fr/') {
          item.priority = 1.0;
        }
        if (item.url.includes('/quartiers/') || item.url.includes('/que-faire/')) {
          item.priority = 0.9;
        }
        if (item.url.includes('/bien-etre/') || item.url.includes('/manger/')) {
          item.priority = 0.8;
        }
        return item;
      },
    }),
    compress({
      CSS: true,
      HTML: true,
      JavaScript: true,
      Image: true,
      SVG: true,
    }),
  ],

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
