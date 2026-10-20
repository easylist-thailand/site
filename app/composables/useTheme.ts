import { ref } from 'vue';

type Theme = 'light' | 'dark';

// Module-level ref so all components share one reactive state.
// SSR-safe: only touch browser APIs on the client (master's version did this at
// module scope, which breaks `nuxt generate`).
const isLight = ref(true);

function setTheme(theme: Theme): void {
	isLight.value = theme === 'light';
	localStorage.setItem('theme', theme);
	// Suppress transitions so the switch is instant, not a slow cross-fade
	document.documentElement.classList.add('no-transition');
	document.documentElement.dataset.theme = theme;
	requestAnimationFrame(() => {
		requestAnimationFrame(() => {
			document.documentElement.classList.remove('no-transition');
		});
	});
}

function toggleTheme(): void {
	setTheme(isLight.value ? 'dark' : 'light');
}

if (import.meta.client) {
	// Apply the persisted theme (if any) on load; otherwise Bulma follows the OS preference.
	const storedTheme = localStorage.getItem('theme');
	if (storedTheme === 'light' || storedTheme === 'dark') {
		document.documentElement.dataset.theme = storedTheme;
	}

	isLight.value =
		storedTheme === 'light' ||
		(storedTheme === null &&
			!globalThis.matchMedia('(prefers-color-scheme: dark)').matches);
}

export function useTheme() {
	return { isLight, setTheme, toggleTheme };
}
