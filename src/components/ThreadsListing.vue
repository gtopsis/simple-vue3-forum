<script setup lang="ts">
import ThreadItem from '@/components/ThreadItem.vue'

interface Thread {
  contributors: string[]
  firstPostId: string
  forumId: string
  lastPostAt: number
  lastPostId: string
  posts: string[]
  publishedAt: number
  slug: string
  title: string
  userId: string
  id: string
}

const props = defineProps<{
  threads: Thread[]
}>()
</script>

<template>
  <v-container fluid class="threads">
    <ThreadItem v-for="thread in props.threads" :key="thread.id" :thread="thread"></ThreadItem>
  </v-container>
</template>

<style scoped></style>
