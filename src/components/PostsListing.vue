<script setup lang="ts">
import PostItem from '@/components/PostItem.vue'
import type { Post } from '@/interfaces'

let props = defineProps<{
  posts: Post[]
}>()
</script>

<template>
  <v-container fluid>
    <v-row class="posts">
      <PostItem v-for="post in posts" :key="post.id" :post="post"></PostItem>
    </v-row>
  </v-container>
</template>

<style scoped></style>
