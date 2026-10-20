<template>
	<div id="home">
		<section class="hero is-warning is-bold">
			<div class="hero-body">
				<div class="container has-text-centered is-size-3">
					<p>
						รายการตัวกรอง <strong>EasyList</strong> สำหรับประเทศไทย
					</p>
					<p>ช่วยคุณปิดกั้นโฆษณาทั้งหลายในเว็บต่างๆของประเทศไทย</p>
				</div>
			</div>
		</section>
		<section class="section">
			<div class="container">
				<h1 class="title">การติดตั้ง</h1>
				<div class="is-size-4">
					<!-- A div, not a p: Buefy's b-tooltip renders a <div> root,
					     which the HTML parser cannot nest inside a <p> (it would
					     break SSR hydration). Keep the paragraph spacing via CSS. -->
					<div class="install-line">
						ติดตั้ง
						<b-tooltip
							:label="abpIntro"
							type="is-dark"
							multilined
							size="is-large"
						>
							<a :href="abpUrl" target="_blank" rel="noopener"
								>Adblock Plus</a
							>
						</b-tooltip>
						หรือ
						<b-tooltip
							:label="uBlockOriginIntro"
							type="is-dark"
							multilined
							size="is-large"
						>
							<a
								:href="uBlockOriginUrl"
								target="_blank"
								rel="noopener"
								>uBlock Origin</a
							>
						</b-tooltip>
					</div>
					<p>
						จากนั้นก็เพิ่มไฟล์ Subscription
						<a
							:href="subscriptionUrl"
							target="_blank"
							rel="noopener"
							@click.prevent="copySubscription"
						>
							easylist-thailand.txt
						</a>
						เข้าสู่ Adblock Plus หรือ uBlock Origin ของท่าน
					</p>
					<p class="subscription has-text-centered">
						หรือ
						<SubscribeButton
							:url="subscriptionUrl"
							title="EasyList Thailand"
						>
							กดที่นี่
						</SubscribeButton>
						เพื่อเพิ่มทันที
					</p>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { useToast } from 'buefy';

const abpUrl = 'https://adblockplus.org/';
const uBlockOriginUrl = 'https://github.com/gorhill/uBlock/#installation';
const subscriptionUrl =
	'https://raw.githubusercontent.com/easylist-thailand/easylist-thailand/master/subscription/easylist-thailand.txt';

const abpIntro = 'Surf the web with no annoying ads.';
const uBlockOriginIntro =
	'A CPU and memory-efficient wide-spectrum content blocker.';

// useToast() must run during setup (it uses inject()); only .open() is
// triggered from the click handler, which never runs on the server.
const toast = useToast();

async function copySubscription() {
	await navigator.clipboard.writeText(subscriptionUrl);
	toast.open('ลิงค์ไฟล์ Subscription ถูกคัดลอกแล้ว');
}
</script>

<style lang="scss" scoped>
.install-line {
	/* Match the user-agent paragraph margin the original <p> had. */
	margin-block-end: 1em;
}

.subscription {
	margin: 1em 0;
}

/* Bulma colors <strong> with the global strong color, which becomes a light
 * gray in dark mode — unreadable on the yellow warning hero. Inherit the
 * hero's dark text color instead. */
.hero {
	strong {
		color: inherit;
	}
}
</style>
