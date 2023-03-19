<script setup lang="ts">
import appData from '@/data.json'
import { ref } from 'vue'

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
const { post } = defineProps<{ post: Post }>()

const users = ref(appData.users)

function getUserById(userId: string | undefined) {
  return users.value.find((u) => u.id === userId)
}
</script>

<template>
  <v-card class="post mx-auto mb-2" color="#26c6da" theme="dark" max-width="800">
    <template v-slot:prepend>
      <v-icon size="x-large"></v-icon>
    </template>

    <v-card-text class="post-text line-clamp text-h6 py-2">
      {{ post.text }}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="w-100">
        <template v-slot:prepend>
          <v-avatar color="grey-darken-3" :image="getUserById(post?.userId)?.avatar"></v-avatar>
        </template>

        <v-list-item-title>{{ getUserById(post?.userId)?.name }}</v-list-item-title>

        <v-list-item-subtitle>{{ getUserById(post?.userId)?.username }}</v-list-item-subtitle>

        <!-- <template v-slot:append>
                  <div class="justify-self-end">
                    <v-icon class="me-1" icon="mdi-heart"></v-icon>
                    <span class="subheading me-2">256</span>
                    <span class="me-1">·</span>
                    <v-icon class="me-1" icon="mdi-share-variant"></v-icon>
                    <span class="subheading">45</span>
                  </div>
                </template> -->
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.post {
  width: 100%;
}
</style>
