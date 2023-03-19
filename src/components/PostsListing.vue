<script setup lang="ts">
import PostItem from '@/components/PostItem.vue'

interface Post {
  edited: {
    at: number
    by: string
    moderated: boolean
  }
  publishedAt: number
  text: string
  threadId: string
  userId: string
  id: string
  reactions?: undefined
}

const { posts } = defineProps<{
  posts: Post[]
}>()
</script>

<template>
  <v-container fluid class="posts">
    <PostItem v-for="post in posts" :key="post.id" :post="post"></PostItem>
  </v-container>
</template>

<style scoped></style>
