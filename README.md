# Protect Ethical Prosecutors — website

Built with [Astro](https://astro.build). Static output: every page is plain HTML at build time. No client framework yet; React can be added per component later (e.g. Stories filtering) without touching the rest.

## Run it

```
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # writes the site to /dist
```

## Where things live

```
src/
  layouts/Base.astro        head, fonts, icons, menu, header, footer — every page uses this
  components/
    Header.astro            site nav (Menu=Closed)
    Menu.astro              scroll hamburger + slide-down panel (Menu=Open)
    Footer.astro            footer (Figma "Footer" component)
    Arrow.astro / Icons.astro
    home/                   one component per homepage section
  data/
    site.js                 nav, donate, footer columns — change once, every page updates
    home.js                 homepage copy, stats, stages, stories. Phase 2: Sanity supplies these at build time.
  illustrations/*.svg       temporary stage art until Kelsey supplies per-stage imagery
  scripts/                  menu, slider, stat-card behaviour (plain JS, bundled by Astro)
  styles/global.css         every token from the Figma Dev Handoff page (colors, type scale, spacing, breakpoints)
public/
  assets/                   images, logo, wordmark, social icons — exported from Figma
  fonts/                    licensed GT Standard files (see the FONTS note at the top of global.css)
```

## Deploy

Render static site: build `npm ci && npm run build`, publish `dist` (see `render.yaml`). Pushes to `main` auto-deploy.

## Rules

- Copy comes from the approved wireframe and the Figma file. Don't invent content; leave placeholders and flag.
- Don't redraw Figma assets. Token values in `global.css` come from Figma; change them there, not per component.
