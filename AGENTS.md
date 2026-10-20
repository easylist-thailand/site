# AGENTS.md

## Project

EasyList Thailand's home page — a single-page **Thai-language** site that promotes the
[EasyList Thailand](https://github.com/easylist-thailand/easylist-thailand) ad-blocking
filter list and explains how to subscribe to it in Adblock Plus / uBlock Origin.

- Published at https://easylist-thailand.github.io/ (GitHub Pages).
- This `nuxt` branch is a **Nuxt 4 rewrite** of the original Vite-based site that still
  lives on the `master` branch — read `master` (`src/views/Home.vue`,
  `src/composables/useTheme.ts`, `src/scss/main.scss`) for the reference behavior,
  copy, and theming to port.

## Stack

- **Nuxt 4** with the `app/` directory structure (`app/app.vue`, `app/pages/`,
  `app/components/`, `app/composables/`, `app/assets/`). For Nuxt APIs, directory
  conventions, and config options, read the official docs at https://nuxt.com/docs
  rather than relying on memory.
- **Vue 3** SFCs using `<script setup lang="ts">` (Composition API). For Vue API and
  Composition API guidance, read the official docs at https://vuejs.org/.
- **Yarn 4** (Berry, `nodeLinker: node-modules` in `.yarnrc.yml`). Use `yarn`, not `npm`.
- **UI:** [Buefy](https://buefy.org/) v3 (Vue 3 compatible, built on Bulma) — see
  *UI & theming* below.
- **SCSS** for styling (add the `sass` dev dependency if not present).

## Commands

- `yarn install` — install dependencies (runs `nuxt prepare` via postinstall)
- `yarn dev` — Nuxt dev server at http://localhost:3000
- `yarn build` — production build (Nitro server output)
- `yarn generate` — static site generation (SSG) into `.output/public` — this is what
  GitHub Pages deployment should use
- `yarn preview` — preview the production build

There is no test or lint script yet.

## Conventions

- Indentation: **tabs** (width 4) per `.editorconfig`; **2 spaces** for YAML and
  `package.json`.
- Formatting is **Prettier** (default formatter in `.vscode/settings.json`); `.vue`
  files use **Volar** as the formatter. Format before committing.
- Prefer Composition API SFCs with `<script setup lang="ts">`.
- Style with **SCSS** — use `<style lang="scss">` in SFCs and keep a global SCSS entry.
  This is what allows theming Buefy/Bulma via Sass variables rather than overriding
  compiled CSS.
- Keep user-facing strings in **Thai**.

## UI & theming (Buefy + dark mode)

- Use **Buefy** components (`b-navbar`, `b-tooltip`, `b-button`, …) instead of
  hand-rolled markup. See https://buefy.org/documentation/start for setup and component
  APIs.
- Theme Buefy through its **SCSS/Sass integration**, overriding Bulma variables (colors,
  typography, spacing) before the framework is imported — see
  https://buefy.org/documentation/sass. When using Sass customization, do **not** also
  import Buefy's precompiled CSS.
- **Dark mode is required.** Follow the pattern from `master`'s
  `src/composables/useTheme.ts`: a `data-theme="light|dark"` attribute on
  `<html>`, CSS custom properties for colors, persisted in `localStorage` under the
  `theme` key, defaulting to the OS `prefers-color-scheme`. Theme Buefy/Bulma to match
  via its CSS variables (https://buefy.org/documentation/css-variables) instead of
  hardcoding colors.
- Brand primary color is `#a333c8`.
- **Fonts:** use **Taviraj** (serif, Thai subset) as the primary/body family, and
  **Courgette** (cursive) for the site title in the navbar/brand.

## Gotchas

- **SSR/SSG safety:** Nuxt renders on the server during `nuxt generate`. Guard browser
  APIs (`localStorage`, `window`, `matchMedia`) with `import.meta.client` or run them in
  `onMounted` — never at module scope. `master`'s `useTheme.ts` touches `localStorage`
  at module scope and must be adapted, not copied verbatim.
- Create Buefy **programmatic** components (`useToast`, dialogs) lazily inside event
  handlers, not during setup, so they only run client-side.
- The deploy workflow (`.github/workflows/deploy.yml`) still publishes `./dist` from the
  Vite build. `nuxt generate` outputs to `.output/public` — either point Nitro at
  `dist/` or update the workflow's `publish_dir` before deploying.
- Subscription link:
  `https://raw.githubusercontent.com/easylist-thailand/easylist-thailand/master/subscription/easylist-thailand.txt`.
  The "add now" button uses the `abp:subscribe?location=<url>&title=<title>` protocol.

## Reference

- Repository: https://github.com/easylist-thailand/site
- Filter list: https://github.com/easylist-thailand/easylist-thailand
