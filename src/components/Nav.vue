<template lang="pug">
nav.navbar.is-primary(role='navigation'): .container
	.navbar-brand
		a.navbar-item.title(href='/'): slot
	.navbar-menu
		.navbar-end
			a.navbar-item(:href='repoLink' target='_blank')
				b-icon(
					pack='fab'
					icon='github'
					size='is-medium'
				)
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
	name: 'Nav'
})
export default class Nav extends Vue {
	@Prop({ type: String, required: true }) repoLink!: string;
}
</script>
