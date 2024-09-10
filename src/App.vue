<template>
	<main class="flex items-center justify-center min-h-screen">
		<Phone :token="firstToken" />
		<Phone :token="secondToken" />
	</main>
</template>

<script setup lang="ts">
import Phone from './components/Phone.vue'
import { computed } from 'vue'

const firstToken = computed(() => import.meta.env.VITE_USER1_TOKEN)
const secondToken = computed(() => import.meta.env.VITE_USER2_TOKEN)
</script>
