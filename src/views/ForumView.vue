<script setup lang="ts">
import appData from '@/data.json'
import { ref } from 'vue'
import ThreadsListing from '@/components/ThreadsListing.vue'

const props = defineProps<{
  forumId: string
}>()

const forums = ref(appData.forums)
const forum = forums.value.find((f) => f.id === props.forumId)
const threads = appData.threads.filter((t) => {
  return t.forumId === props.forumId
})
const breadcumbItems = [
  {
    title: 'Forums',
    to: { name: 'home' }
  },
  forum?.name
]
</script>

<template>
  <v-container class="posts-section mt-3 pa-1 mb-4">
    <v-row class="posts-section-heading" no-gutters>
      <v-col cols="auto">
        <v-breadcrumbs :items="breadcumbItems"></v-breadcrumbs>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto" align-self="center">
        <!-- <span class="posts-counter text-right">{{ forum?.threads.length }} posts</span> -->
      </v-col>
    </v-row>

    <ThreadsListing :threads="threads"></ThreadsListing>
  </v-container>
</template>

<style scoped>
.posts-section-heading {
  border-bottom: 1px solid var(--vt-c-divider-light-1);
}
</style>
