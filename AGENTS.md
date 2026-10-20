# AGENTS.md

## Project

EasyList Thailand's home page — a single-page **Thai-language** site that promotes the
[EasyList Thailand](https://github.com/easylist-thailand/easylist-thailand) ad-blocking
filter list and explains how to subscribe to it in Adblock Plus / uBlock Origin.

- Published at https://easylist-thailand.github.io/ (GitHub Pages).
- Displays Thai copy and install instructions, and offers an `abp:subscribe` button.

## Stack

- **Nuxt 4** with the `app/` directory structure (`app/app.vue`, `app/pages/`,
  `app/components/`, `app/composables/`, `app/plugins/`, `app/assets/scss/`). For Nuxt
  APIs, directory conventions, and config options, read the official docs at
  https://nuxt.com/docs rather than relying on memory.
- **Vue 3** SFCs using `<script setup lang="ts">` (Composition API). For Vue API and
  Composition API guidance, read the official docs at https://vuejs.org/.
- **Yarn 4** (Berry, `nodeLinker: node-modules` in `.yarnrc.yml`). Use `yarn`, not `npm`.
  Requires Node >= 20.19 (see `engines` in `package.json`).
- **UI:** [Buefy](https://buefy.org/) v3 (Vue 3 compatible, built on Bulma), registered
  globally in `app/plugins/buefy.ts` — see *UI & theming* below.
- **SCSS** for styling; global entries are wired through `css` in `nuxt.config.ts`.
- **Linting:** ESLint flat config (`eslint.config.js`) — XO base (extended to `.vue`),
  `eslint-plugin-vue` `flat/recommended`, TypeScript parser, and Prettier run through
  the `prettier/prettier` rule (options reset so it reads `@gluons/prettier-config`
  from `package.json`).
- Type-checking via `vue-tsc` (`yarn typecheck`).

## Commands

- `yarn install` — install dependencies (runs `nuxt prepare` via postinstall)
- `yarn dev` — Nuxt dev server at http://localhost:3000
- `yarn build` — production build (Nitro server output)
- `yarn generate` — static site generation (SSG) into `.output/public` — this is what
  GitHub Pages deployment uses
- `yarn preview` — preview the production build
- `yarn lint` / `yarn lint:fix` — ESLint (also runs Prettier via `prettier/prettier`)
- `yarn typecheck` — `nuxt typecheck` (vue-tsc)
- `yarn format` — Prettier write-all

There is no test script yet.

## Conventions

- Indentation: **tabs** (width 4) per `.editorconfig`; **2 spaces** for YAML and
  `package.json`.
- Formatting is **Prettier** (`@gluons/prettier-config`, default formatter in
  `.vscode/settings.json`; `.vue` files use **Volar**). Run `yarn lint` (and
  `yarn typecheck`) before committing — CI-style checks agents should keep green.
- Prefer Composition API SFCs with `<script setup lang="ts">`.
- Style with **SCSS** — use `<style lang="scss">` in SFCs and keep the global entries
  in `app/assets/scss/`. This is what allows theming Buefy/Bulma via Sass variables
  rather than overriding compiled CSS.
- Keep user-facing strings in **Thai**.

## UI & theming (Buefy + dark mode)

- Use **Buefy** components (`b-navbar`, `b-tooltip`, `b-button`, …) instead of
  hand-rolled markup. See https://buefy.org/documentation/start for setup and component
  APIs.
- Theme Buefy through its **SCSS/Sass integration** in `app/assets/scss/main.scss`,
  overriding Bulma variables via `@use 'bulma/sass' with (...)` before Buefy is
  imported — see https://buefy.org/documentation/sass. Do **not** import Buefy's
  precompiled CSS alongside this.
- **Dark mode is required.** Implemented in `app/composables/useTheme.ts`: a
  `data-theme="light|dark"` attribute on `<html>`, CSS custom properties for colors,
  persisted in `localStorage` under the `theme` key, defaulting to the OS
  `prefers-color-scheme`. An inline script in `nuxt.config.ts`'s `app.head` applies the
  persisted theme before first paint (no FOUC in the static build). Theme Buefy/Bulma
  to match via its CSS variables
  (https://buefy.org/documentation/css-variables) instead of hardcoding colors.
- Brand primary color is `#a333c8`.
- **Fonts:** use **Taviraj** (serif, Thai subset) as the primary/body family, and
  **Courgette** (cursive) for the site title in the navbar/brand.

## Gotchas

- **SSR/SSG safety:** Nuxt renders on the server during `nuxt generate`. Guard browser
  APIs (`localStorage`, `window`, `matchMedia`) with `import.meta.client` or run them in
  `onMounted` — never at module scope. See `app/composables/useTheme.ts` for the
  established pattern.
- Create Buefy **programmatic** components (`useToast`, dialogs) lazily inside event
  handlers, not during setup, so they only run client-side.
- Site metadata (`lang="th"`, Thai meta description, OG tags, Taviraj/Courgette Google
  Fonts, theme-init script) lives in `app.head` in `nuxt.config.ts` — update it there,
  not in a separate layout.
- Subscription link:
  `https://raw.githubusercontent.com/easylist-thailand/easylist-thailand/master/subscription/easylist-thailand.txt`.
  The "add now" button uses the `abp:subscribe?location=<url>&title=<title>` protocol.

## Reference

- Repository: https://github.com/easylist-thailand/site
- Filter list: https://github.com/easylist-thailand/easylist-thailand
