import { ref } from 'vue';

type Theme = 'light' | 'dark';

// Module-level ref so all components share one reactive state
const isLight = ref(
	localStorage.getItem('theme') === 'light' ||
		(!localStorage.getItem('theme') &&
			!window.matchMedia('(prefers-color-scheme: dark)').matches)
);

function setTheme(theme: Theme): void {
	isLight.value = theme === 'light';
	localStorage.setItem('theme', theme);
	// Suppress transitions so the switch is instant, not a slow cross-fade
	document.documentElement.classList.add('no-transition');
	document.documentElement.setAttribute('data-theme', theme);
	requestAnimationFrame(() =>
		requestAnimationFrame(() => {
			document.documentElement.classList.remove('no-transition');
		})
	);
}

function toggleTheme(): void {
	setTheme(isLight.value ? 'dark' : 'light');
}

// Apply the persisted theme (if any) on load; otherwise Bulma follows the OS preference.
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'light' || storedTheme === 'dark') {
	document.documentElement.setAttribute('data-theme', storedTheme);
}

export function useTheme() {
	return { isLight, setTheme, toggleTheme };
}
