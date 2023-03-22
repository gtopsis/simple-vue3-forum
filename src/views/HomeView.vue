<script setup lang="ts">
import ForumsListing from '../components/ForumsListing.vue'
import appData from '@/data.json'
import { ref } from 'vue'
const forums = ref(appData.forums) || []
const breadcumbItems = ['Forums']
</script>

<template>
  <div class="px-2">
    <v-container class="threads-section mt-3 pa-1">
      <v-row class="threads-section-heading" no-gutters>
        <v-col cols="auto">
          <v-breadcrumbs :items="breadcumbItems"></v-breadcrumbs>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>

      <ForumsListing :forums="forums"></ForumsListing>
    </v-container>
  </div>
</template>

<style scoped>
.threads-section-heading {
  border-bottom: 1px solid var(--vt-c-divider-light-1);
}
</style>
