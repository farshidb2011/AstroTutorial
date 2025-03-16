// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4321/',
  integrations: [vue({
    appEntrypoint: '/src/vue_main.js'
  })],
  vite: {
    resolve: {
        alias: {
            '@vcom' : '/src/components/vue/',
            '@': 'src/'
        }
    }
  }
});