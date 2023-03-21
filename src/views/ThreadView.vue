<script setup lang="ts">
import appData from '@/data.json'
import { ref } from 'vue'
import PostsListing from '@/components/PostsListing.vue'
import PostEditorModal from '@/components/PostEditorModal.vue'

const props = defineProps<{
  id: string
}>()

const threads = ref(appData.threads)
const posts = ref(appData.posts)
let dialog = ref(false)
const thread = threads.value.find((t) => t.id === props.id)

const breadcumbItems = [
  {
    title: 'Threads',
    to: { name: 'home' }
  },

  thread?.title
]

const getPostsByThreadId = (threadId: string | undefined) => {
  return posts.value.filter((p) => p.threadId === threadId)
}

const createNewPost = (post) => {
  post.threadId = thread?.id
  post.userId = 'random user id'
  posts.value.push(post)
  dialog.value = false
}

const openModal = () => {
  dialog.value = true
}
</script>

<template>
  <v-container class="posts-section mt-3 pa-1 mb-4">
    <v-row class="posts-section-heading" no-gutters>
      <v-col cols="auto">
        <v-breadcrumbs :items="breadcumbItems"></v-breadcrumbs>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto" align-self="center">
        <span class="posts-counter text-right">{{ thread?.posts.length }} posts</span>
      </v-col>
    </v-row>

    <v-row class="my-2">
      <v-col>
        <v-btn color="primary" @click="openModal"> Create new post </v-btn>
      </v-col>
    </v-row>

    <v-row justify="center"> </v-row>

    <PostsListing :posts="getPostsByThreadId(thread?.id)"></PostsListing>
    <PostEditorModal
      :dialogEnabled="dialog"
      @save-post="createNewPost"
      @cancel="dialog = false"
    ></PostEditorModal>
  </v-container>
</template>

<style scoped>
.posts-section-heading {
  border-bottom: 1px solid var(--vt-c-divider-light-1);
}

.posts-counter {
  color: #2c3e50;
}
</style>
