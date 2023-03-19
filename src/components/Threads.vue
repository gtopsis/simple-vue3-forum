<script setup lang="ts">
import appData from '@/data.json'
import { ref } from 'vue'

const categories = ref(appData.categories)
const users = ref(appData.users)
const posts = ref(appData.posts)
const threads = ref(appData.threads)

function getPostById(postId: string | undefined) {
  return posts.value.find((t) => t.id === postId)
}

function getUserById(userId: string | undefined) {
  return users.value.find((u) => u.id === userId)
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">Threads</h1>
  </div>

  <div>
    <div class="container">
      <div class="threads">
        <div class="thread mt-3" v-for="thread in threads" :key="thread.id">
          <h2 class="thread-title center green">{{ thread.title }}</h2>

          <v-card
            v-for="postId in thread.posts"
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
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
