<script setup lang="ts">
import appData from '@/data.json'
import { ref } from 'vue'
import PostsListing from '@/components/PostsListing.vue'

const props = defineProps<{
  id: string
}>()

const threads = ref(appData.threads)
const posts = ref(appData.posts)
const users = ref(appData.users)

const thread = threads.value.find((t) => t.id === props.id)

function getPostsByThreadId(threadId: string | undefined) {
  return posts.value.filter((p) => p.threadId === threadId)
}
</script>

<template>
  <div class="ma-2 pa-2 rounded bg-purple">
    <h3 class="thread-title text-white mb-1">Thread: {{ thread?.title }}</h3>
    <small class="text-white">{{ thread?.posts.length }} posts</small>
  </div>

  <PostsListing :posts="getPostsByThreadId(thread?.id)"></PostsListing>
</template>

<style scoped>
main {
  width: 100%;
}
</style>
