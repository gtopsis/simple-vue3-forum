<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth'
import { usePostsStore } from '@/stores/posts'
import PostsListing from '@/components/PostsListing.vue'

const authStore = useAuthStore()
const postsStore = usePostsStore()

const user = authStore.getLoggedInUser()
const userPosts = postsStore.getPostsByUserId(user?.id)
</script>
<template>
  <v-container class="mt-3 px-2 py-1">
    <v-row>
      <v-col cols="5">
        <v-row align-center justify-center>
          <v-col cols="auto">
            <v-avatar :image="user?.avatar" size="60"></v-avatar>
          </v-col>
          <v-col cols="auto">
            <h3>{{ user?.name }}</h3>
          </v-col>
          <v-col cols="auto">
            <p class="text-grey">{{ user?.bio }}</p>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="7">
        <h4>User activity</h4>

        <PostsListing :posts="userPosts"></PostsListing>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
