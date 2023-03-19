<script setup lang="ts">
import ThreadsListing from '../components/ThreadsListing.vue'
import appData from '@/data.json'
import { ref } from 'vue'
const threads = ref(appData.threads) || []
</script>

<template>
  <div class="px-2">
    <div class="threads-section rounded-br-xl mt-1 pa-1">
      <h3 class="white mb-0">Threads</h3>
    </div>
    <ThreadsListing :threads="threads"></ThreadsListing>
  </div>
</template>

<style scoped>
.threads-section {
  background-color: blueviolet;
}
</style>
