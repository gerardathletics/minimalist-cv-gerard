import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

const LIVE_URL = 'https://gerardathletics.github.io/';

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    site: LIVE_URL,
    base: '/minimalist-cv-gerard',
    output: 'static',
});
