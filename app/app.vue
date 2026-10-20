<template>
	<div>
		<NuxtRouteAnnouncer />
		<Nav :repo-link="repoLink">EasyList Thailand</Nav>
		<NuxtPage />
	</div>
</template>

<script setup lang="ts">
const repoLink = 'https://github.com/easylist-thailand/easylist-thailand';
</script>
