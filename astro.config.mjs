// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Static site: every page is built to plain HTML in /dist at build time.
  output: 'static',
  build: { inlineStylesheets: 'never' },
});
