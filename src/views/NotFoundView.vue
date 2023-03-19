<script setup lang="ts">
import ThreadsListing from '../components/ThreadsListing.vue'
import appData from '@/data.json'
import { ref } from 'vue'
const threads = ref(appData.threads) || []
</script>

<template>
  <main class="full-width px-2">
    <h2 class="green">Not found!</h2>
    <RouterLink :to="{ name: 'home' }">View all threads</RouterLink>
  </main>
</template>

<style scoped>
main {
  width: 100%;
}
</style>
