<template>
	<b-navbar type="is-primary" wrapper-class="container">
		<template #brand>
			<b-navbar-item href="/" class="title brand-title">
				<slot>EasyList Thailand</slot>
			</b-navbar-item>
		</template>
		<template #end>
			<b-navbar-item tag="div">
				<b-button
					:icon-left="isLight ? 'moon' : 'sun'"
					icon-pack="fas"
					rounded
					:aria-label="
						isLight ? 'สลับเป็นโหมดมืด' : 'สลับเป็นโหมดสว่าง'
					"
					@click="toggleTheme"
				/>
			</b-navbar-item>
			<b-navbar-item :href="repoLink" target="_blank" rel="noopener">
				<b-icon pack="fab" icon="github" size="is-medium" />
			</b-navbar-item>
		</template>
	</b-navbar>
</template>

<script setup lang="ts">
import { useTheme } from '../composables/useTheme';

defineProps<{
	repoLink: string;
}>();

const { isLight, toggleTheme } = useTheme();
</script>

<style lang="scss" scoped>
.brand-title {
	font-family: 'Courgette', cursive;

	/* Bulma's `.title` carries a 24px margin-block-end that breaks the
	 * vertical centering inside the navbar item — remove it. */
	margin-block-end: 0;
}

/* Bulma colors .navbar-burger with the global `link` color, which clashes with
 * the primary navbar background in dark mode (light lavender on purple).
 * Restore the color from the per-color `burger-h/s/l` vars Bulma registers on
 * `.navbar.is-primary` — these resolve to the primary-invert color (white). */
:deep(.navbar-burger) {
	color: hsl(
		var(--bulma-burger-h),
		var(--bulma-burger-s),
		var(--bulma-burger-l)
	);
}
</style>
