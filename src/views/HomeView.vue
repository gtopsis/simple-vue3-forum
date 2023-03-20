<script setup lang="ts">
import ThreadsListing from '../components/ThreadsListing.vue'
import appData from '@/data.json'
import { ref } from 'vue'
const threads = ref(appData.threads) || []
</script>

<template>
  <div class="px-2">
    <v-container class="threads-section mt-3 pa-1" fluid>
      <v-row no-gutters>
        <v-col cols="auto">
          <h3 class="threads-heading mb-0">Threads</h3>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="auto">
          <span class="threads-counter text-right">{{ threads.length }} threads</span>
        </v-col>
      </v-row>
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
