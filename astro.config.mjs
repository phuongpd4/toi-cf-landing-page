// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://phuongpd4.github.io', /* Cần thay bằng username github của bạn */
  base: '/toi-cf-landing-page', /* Tên chính xác của Repository trên GitHub */

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});