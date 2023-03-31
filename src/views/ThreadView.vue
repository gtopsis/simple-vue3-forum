<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import PostsListing from '@/components/PostsListing.vue'
import TheBreadcrumb from '@/components/TheBreadcrumb.vue'
import type { Post } from '@/interfaces'
import { useAuthStore } from '@/stores/auth'
import { useThreadsStore } from '@/stores/threads'
import { usePostsStore } from '@/stores/posts'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const PostEditorModal = defineAsyncComponent(() => import('@/components/PostEditorModal.vue'))

const props = defineProps<{
  forumId: string
  threadId: string
}>()

const postsStore = usePostsStore()

let dialog = ref(false)

const { getThreadById } = storeToRefs(useThreadsStore())
const thread = computed(() => getThreadById.value(props.threadId))

const { getPostsByThreadId } = storeToRefs(postsStore)
const postsOfThread = computed(() => getPostsByThreadId.value(thread.value.id))

const createNewPost = (post: Pick<Post, 'text'>) => {
  postsStore.addPost({ ...post, threadId: thread.value?.id, userId: useAuthStore().getAuthUserId })
  dialog.value = false
}

const openModal = () => {
  dialog.value = true
}
</script>

<template>
  <v-container class="mt-3 pa-1 mb-4">
    <v-row class="" no-gutters>
      <v-col cols="auto">
        <TheBreadcrumb></TheBreadcrumb>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto" align-self="center">
        <span class="posts-counter text-white text-right">{{ thread?.posts.length }} posts</span>
      </v-col>
    </v-row>

    <v-row class="my-2" justify="space-between">
      <v-col cols="auto">
        <h2 class="text-white">{{ thread?.title }}</h2>
      </v-col>
      <v-col cols="auto">
        <v-btn color="primary" @click="openModal"> Create new post </v-btn>
      </v-col>
    </v-row>

    <v-row justify="center"> </v-row>

    <PostsListing :posts="postsOfThread"></PostsListing>
    <PostEditorModal
      :dialogEnabled="dialog"
      @save-post="createNewPost"
      @cancel="dialog = false"
      v-if="dialog"
    ></PostEditorModal>
  </v-container>
</template>

<style scoped>
.posts-counter {
  color: #2c3e50;
}
</style>
