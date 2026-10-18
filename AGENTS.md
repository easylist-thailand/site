# AGENTS.md

## Project

EasyList Thailand's home page — a single-page **Thai-language** site that promotes the
[EasyList Thailand](https://github.com/easylist-thailand/easylist-thailand) ad-blocking
filter list and explains how to subscribe to it in Adblock Plus / uBlock Origin.

- Published at https://easylist-thailand.github.io/ (GitHub Pages).
- Displays Thai copy and install instructions, and offers an `abp:subscribe` button.

## Stack

- **Vue 3** SFCs using `<script setup lang="ts">` (Composition API).
- **Vite 8** tooling via `@vitejs/plugin-vue`.
- **Yarn 4** (Berry, `nodeLinker: node-modules`). Use `yarn`, not `npm`.
- **UI:** [Buefy](https://buefy.org/) (built on Bulma) — see *UI & theming* below.
- Type-checking via `vue-tsc`.

## Commands

- `yarn install` — install dependencies
- `yarn dev` — Vite dev server with HMR
- `yarn build` — type-check + production build (`vue-tsc -b && vite build`)
- `yarn preview` — preview the production build

There is no test or lint script yet.

## Conventions

- Formatting is **Prettier** (`@gluons/prettier-config`), wired as the default formatter in
  `.vscode/settings.json`. Format before committing.
- Indentation: **tabs** (width 4) per `.editorconfig`; **2 spaces** for YAML and `package.json`.
- TypeScript has `noUnusedLocals`, `noUnusedParameters`, and `erasableSyntaxOnly` enabled —
  no `enum`, `namespace`, or constructor parameter properties. Use `import type` for
  type-only imports (`verbatimModuleSyntax` in the node config).
- Prefer Composition API SFCs with `<script setup lang="ts">`.

## UI & theming (Buefy + dark mode)

- Use **Buefy** (v3+, which fully supports Vue 3 and requires Vue 3.4+) components instead of
  hand-rolled markup. See https://buefy.org/documentation/start for setup and component APIs.
- **Dark mode is required.** `src/style.css` already uses CSS custom properties with a
  `prefers-color-scheme: dark` block — extend that token approach and theme Buefy/Bulma to
  match rather than hardcoding colors. Buefy's CSS variables and theme-switching support are
  the counterpart for component styling (https://buefy.org/documentation/css-variables,
  https://buefy.org/documentation/theme-switching).
- Brand primary color is `#a333c8`.
- **Fonts:** use **Taviraj** (serif, Thai subset) as the primary/body family, and
  **Courgette** (cursive) for the site title in the navbar/brand.

## Gotchas

- Keep user-facing strings in **Thai**.
- Subscription link:
  `https://raw.githubusercontent.com/easylist-thailand/easylist-thailand/master/subscription/easylist-thailand.txt`.
  The "add now" button uses the `abp:subscribe?location=<url>&title=<title>` protocol.

## Reference

- Repository: https://github.com/easylist-thailand/site
- Filter list: https://github.com/easylist-thailand/easylist-thailand
