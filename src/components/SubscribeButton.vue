<template lang="pug">
a.button.is-success.is-rounded(:href='fullUrl')
	b-icon(
		pack='fas'
		icon='plus-circle'
	)
	span: slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
	name: 'SubscribeButton'
})
export default class SubscribeButton extends Vue {
	@Prop({
		type: String,
		required: true
	})
	url!: string;

	@Prop(String)
	title!: string;

	public get fullUrl() : string {
		const url = encodeURIComponent(this.url);
		const title = encodeURIComponent(this.title);
		let finalUrl = `abp:subscribe?location=${url}`;

		if (this.title) {
			finalUrl += `&title=${title}`;
		}

		return finalUrl;
	}

}
</script>
