import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// GitHub Pages project site: https://nullpunkt-labs.github.io/quantum-saccharose-engine
export default defineConfig({
  site: 'https://nullpunkt-labs.github.io',
  base: '/quantum-saccharose-engine',
  output: 'static',
  integrations: [tailwind(), sitemap()],
});
