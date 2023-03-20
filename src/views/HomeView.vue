<script setup lang="ts">
import ThreadsListing from '../components/ThreadsListing.vue'
import appData from '@/data.json'
import { ref } from 'vue'
const threads = ref(appData.threads) || []
</script>

<template>
  <div class="px-2">
    <v-container class="threads-section mt-3 pa-1">
      <v-layout row>
        <v-flex>
          <h3 class="threads-heading mb-0">Threads</h3>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex>
          <span class="threads-counter">{{ threads.length }} threads</span>
        </v-flex>
      </v-layout>
    </v-container>

    <ThreadsListing :threads="threads"></ThreadsListing>
  </div>
</template>

<style scoped>
.threads-section {
  border-bottom: 1px solid var(--vt-c-divider-light-1);
}

.threads-heading {
  color: #2c3e50;
}
.threads-counter {
  color: #2c3e50;
}
</style>
