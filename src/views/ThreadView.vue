<script setup lang="ts">
import appData from '@/data.json'
import { ref, computed } from 'vue'
import PostsListing from '@/components/PostsListing.vue'

const props = defineProps<{
  id: string
}>()

const threads = ref(appData.threads)
const posts = ref(appData.posts)
const dialog = ref(false)
let newPostText = ref('')
const thread = threads.value.find((t) => t.id === props.id)

let isNewPostTextEmpty = computed(() => !newPostText.value.trim())
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

const createNewPost = () => {
  if (isNewPostTextEmpty.value) return

  posts.value.push({
    edited: {
      at: 1,
      by: 'string',
      moderated: false
    },
    publishedAt: Math.floor(Date.now() / 1000),
    text: newPostText.value,
    threadId: thread?.id!,
    userId: thread?.userId!,
    id: 'string',
    reactions: undefined
  })
  newPostText.value = ''
  dialog.value = false
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
        <v-btn color="primary" @click="dialog = !dialog"> Create new post </v-btn>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-dialog v-model="dialog" persistent width="600">
        <v-card>
          <v-card-title>
            <span class="text-h5">New post</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-textarea v-model="newPostText" required></v-textarea>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-darken-1" variant="text" @click="dialog = false"> Close </v-btn>
            <v-btn
              color="blue-darken-1"
              variant="text"
              :disabled="isNewPostTextEmpty"
              @click="createNewPost"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <PostsListing :posts="getPostsByThreadId(thread?.id)"></PostsListing>
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
