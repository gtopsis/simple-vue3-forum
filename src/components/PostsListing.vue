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

let newPostText = ''
function createNewPost() {
  props.posts.push({
    text: newPostText,
    edited: {
      at: Date.now(),
      by: 'me',
      moderated: false
    },
    publishedAt: Date.now(),
    threadId: posts[0].threadId,
    userId: posts[0].userId,
    id: '1'
  })
  newPostText = ''
}
</script>

<template>
  <v-container fluid>
    <v-row class="posts">
      <PostItem v-for="post in posts" :key="post.id" :post="post"></PostItem>
    </v-row>
    <v-row>
      <v-sheet width="100%" class="mx-auto">
        <v-form @submit.prevent="createNewPost()">
          <v-textarea v-model="newPostText" label="New post"></v-textarea>
          <v-btn type="submit" block class="mt-2" theme="dark">Create new post</v-btn>
        </v-form>
      </v-sheet>
    </v-row>
  </v-container>
</template>

<style scoped></style>
