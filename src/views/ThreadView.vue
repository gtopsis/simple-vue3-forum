<script setup lang="ts">
import { useRoute } from 'vue-router'
import Threads from '../components/ThreadsListing.vue'
import appData from '@/data.json'
import { ref } from 'vue'

const props = defineProps<{
  id: string
}>()

const threads = ref(appData.threads)
const posts = ref(appData.posts)
const users = ref(appData.users)

const thread = threads.value.find((t) => t.id === props.id)

function getPostById(postId: string | undefined) {
  return posts.value.find((p) => p.id === postId)
}

function getUserById(userId: string | undefined) {
  return users.value.find((u) => u.id === userId)
}
</script>

<template>
  <main>
    <div class="mb-2">
      <h2 class="thread-title center green mb-1">{{ thread?.title }}</h2>
      <span class="subtitle green">{{ thread?.posts.length }} posts</span>
    </div>

    <v-card
      v-for="postId in thread?.posts"
      :key="postId"
      class="mx-auto mb-2"
      color="#26c6da"
      theme="dark"
      max-width="400"
      prepend-icon="mdi-twitter"
    >
      <template v-slot:prepend>
        <v-icon size="x-large"></v-icon>
      </template>

      <v-card-text class="post-text line-clamp text-h6 py-2">
        {{ getPostById(postId)?.text }}
      </v-card-text>

      <v-card-actions>
        <v-list-item class="w-100">
          <template v-slot:prepend>
            <v-avatar
              color="grey-darken-3"
              :image="getUserById(getPostById(postId)?.userId)?.avatar"
            ></v-avatar>
          </template>

          <v-list-item-title>{{
            getUserById(getPostById(postId)?.userId)?.name
          }}</v-list-item-title>

          <v-list-item-subtitle>{{
            getUserById(getPostById(postId)?.userId)?.username
          }}</v-list-item-subtitle>

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
  </main>
</template>

<style scoped>
.main {
  background-color: black;
}
</style>
