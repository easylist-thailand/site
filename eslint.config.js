import xo from 'eslint-config-xo';
import pluginVue from 'eslint-plugin-vue';
import pluginPrettier from 'eslint-plugin-prettier';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';

const eslintConfig = [
	{
		name: 'app/ignores',
		ignores: [
			'**/node_modules/**',
			'**/.nuxt/**',
			'**/.output/**',
			'**/dist/**',
			'**/.yarn/**'
		]
	},
	// XO (base JS + TypeScript rules). Extend the base block to also lint `.vue` files.
	...xo({
		// Site code runs in the browser
		browser: true,
		// Run Prettier through ESLint (prettier/prettier rule)
		prettier: true,
		// Respect .gitignore
		gitignore: import.meta.url
	}).map(config =>
		config.name === 'xo/base'
			? { ...config, files: [...config.files, '**/*.vue'] }
			: config
	),
	// Vue 3 rules (scoped to .vue files — the plugin's flat configs otherwise
	// apply its parser/rules to every file, clashing with the JSON language configs)
	...pluginVue.configs['flat/recommended'].map(config => ({
		...config,
		files: ['**/*.vue']
	})),
	{
		name: 'app/vue-typescript',
		files: ['**/*.vue'],
		languageOptions: {
			parserOptions: {
				parser: tsParser,
				extraFileExtensions: ['.vue']
			}
		}
	},
	{
		name: 'app/nuxt-conventions',
		files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts,vue}'],
		rules: {
			// Nuxt's file-based routing/components use single-word names
			// (pages/index.vue, components/Nav.vue)
			'vue/multi-word-component-names': 'off',
			// Nuxt uses PascalCase components (Nav.vue) and camelCase composables
			// (useTheme.ts) instead of kebab-case filenames
			'unicorn/filename-case': [
				'error',
				{
					cases: {
						kebabCase: true,
						camelCase: true,
						pascalCase: true
					}
				}
			],
			// Nuxt uses bundler-style extensionless imports
			'n/file-extension-in-import': 'off'
		}
	},
	{
		name: 'app/framework-entry-points',
		files: ['nuxt.config.ts', 'app/plugins/**'],
		rules: {
			// Calling defineNuxtConfig()/defineNuxtPlugin() in the default export
			// is the idiomatic Nuxt pattern
			'unicorn/no-top-level-side-effects': 'off'
		}
	},
	{
		name: 'app/package-json-conventions',
		files: ['package.json'],
		rules: {
			// Keep the project's traditional field order instead of the canonical one
			'package-json/sort-properties': 'off'
		}
	},
	{
		name: 'app/prettier-config',
		files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts,vue}'],
		plugins: {
			prettier: pluginPrettier
		},
		rules: {
			// XO's `prettier: true` hardcodes its own Prettier options, which differ
			// from @gluons/prettier-config. Reset the options (empty object) so the
			// rule resolves the config from the package.json "prettier" field
			// instead, keeping `yarn lint` and `yarn format` in sync.
			'prettier/prettier': ['error', {}, { usePrettierrc: true }]
		}
	},
	// Disable stylistic rules that conflict with Prettier (Prettier runs separately).
	// Must come last so it also covers the Vue stylistic rules enabled above.
	eslintConfigPrettier
];

export default eslintConfig;
