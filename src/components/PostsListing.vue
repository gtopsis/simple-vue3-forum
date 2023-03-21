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

let props = defineProps<{
  posts: Post[]
}>()
</script>

<template>
  <v-container fluid>
    <v-row class="posts">
      <PostItem v-for="post in props.posts" :key="post.id" :post="post"></PostItem>
    </v-row>
  </v-container>
</template>

<style scoped></style>
