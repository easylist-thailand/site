<template>
	<a class="button is-success is-rounded" :href="fullUrl">
		<slot />
	</a>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
	url: string;
	title?: string;
}>();

const fullUrl = computed(() => {
	const url = encodeURIComponent(props.url);
	let finalUrl = `abp:subscribe?location=${url}`;

	if (props.title) {
		finalUrl += `&title=${encodeURIComponent(props.title)}`;
	}

	return finalUrl;
});
</script>
