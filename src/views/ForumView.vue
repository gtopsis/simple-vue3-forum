<script setup lang="ts">
import ThreadsListing from '@/components/ThreadsListing.vue'
import { useForumsStore } from '@/stores/forums'
import { useThreadsStore } from '@/stores/threads'

const props = defineProps<{
  forumId: string
}>()

const threadsStore = useThreadsStore()
const forumsStore = useForumsStore()
const forum = forumsStore.getForumById(props.forumId)
const threads = threadsStore.getThreadsByForumId(forum?.id!)

const breadcumbItems = [
  {
    title: 'Home',
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
