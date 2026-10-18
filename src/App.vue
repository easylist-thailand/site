<script setup lang="ts">
import Nav from './components/Nav.vue';
import Home from './views/Home.vue';

const repoLink = 'https://github.com/easylist-thailand/easylist-thailand';
</script>

<template>
	<Nav :repo-link="repoLink">EasyList Thailand</Nav>
	<Home />
</template>
