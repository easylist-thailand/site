<template lang="pug">
#home
	section.hero.is-warning.is-bold: .hero-body: .container.has-text-centered.is-size-3
		p รายการตัวกรอง #[strong EasyList] สำหรับประเทศไทย
		p ช่วยคุณปิดกั้นโฆษณาทั้งหลายในเว็บต่างๆของประเทศไทย
	section.section: .container
		h1.title การติดตั้ง
		.is-size-4
			p
				| ติดตั้ง
				|
				b-tooltip(
					:label='abpIntro'
					type='is-dark'
					multilined
					size='is-large'
				)
					a(:href='abpUrl', target='_blank') Adblock Plus
				|
				| หรือ
				|
				b-tooltip(
					:label='uBlockOriginIntro'
					type='is-dark'
					multilined
					size='is-large'
				)
					a(:href='uBlockOriginUrl', target='_blank') uBlock Origin
			p
				| จากนั้นก็เพิ่มไฟล์ Subscription
				|
				a(
					:href='subscriptionUrl',
					target='_blank'
					@click.prevent='copySubscription'
				) easylist-thailand.txt
				|
				| เข้าสู่ Adblock Plus หรือ uBlock Origin ของท่าน
			p.subscription.has-text-centered หรือ #[SubscribeButton(:url='subscriptionUrl', title='EasyList Thailand') กดที่นี่] เพื่อเพิ่มทันที
</template>

<script lang="ts">
import copy from 'clipboard-copy';
import { Component, Vue } from 'vue-property-decorator';

import SubscribeButton from '@/components/SubscribeButton.vue';

@Component({
	name: 'Home',
	components: {
		SubscribeButton
	}
})
export default class Home extends Vue {
	abpUrl = 'https://adblockplus.org/';
	uBlockOriginUrl = 'https://github.com/gorhill/uBlock/#installation';
	subscriptionUrl = 'https://raw.githubusercontent.com/easylist-thailand/easylist-thailand/master/subscription/easylist-thailand.txt';

	abpIntro = 'Surf the web without annoying ads!';
	uBlockOriginIntro = 'Finally, an efficient blocker. Easy on CPU and memory.';

	async copySubscription() {
		await copy(this.subscriptionUrl);
		this.$toast.open('ลิงค์ไฟล์ Subscription ถูกคักลอกแล้ว');
	}
}
</script>

<style lang="scss" scoped>
.subscription {
	margin: 1em 0;
}
</style>
