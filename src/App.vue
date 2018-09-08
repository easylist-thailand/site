<template lang="pug">
	#app
		Nav(:repoLink='repoLink') EasyList Thailand
		Home
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Nav from '@/components/Nav.vue';
import Home from '@/views/Home.vue';

@Component({
	components: {
		Home,
		Nav
	}
})
export default class App extends Vue {
	repoLink = 'https://github.com/easylist-thailand/easylist-thailand';
}
</script>

<style lang="scss">
#app {
	.navbar .navbar-brand {
		font-family: 'Courgette', cursive;
	}
}
</style>
