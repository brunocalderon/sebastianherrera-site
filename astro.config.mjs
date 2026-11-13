// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Used for canonical URLs and absolute og:image paths. Update when using a custom domain.
  site: "https://brunocalderon.github.io/sebastianherrera-site",
  vite: {
    plugins: [tailwindcss()],
  },
});