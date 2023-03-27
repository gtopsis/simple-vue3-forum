<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth'
import { usePostsStore } from '@/stores/posts'
import { useUsersStore } from '@/stores/users'
import PostsListing from '@/components/PostsListing.vue'
import UserCard from '@/components/UserCard.vue'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const postsStore = usePostsStore()

const authUserId = useAuthStore().getAuthUserId
const { getUserById } = storeToRefs(useUsersStore())
const user = computed(() => getUserById.value(authUserId))

const userPosts = postsStore.getPostsByUserId(user.value?.id!)
</script>
<template>
  <v-container class="mt-3 px-2 py-1">
    <v-row>
      <v-col lg="3" md="4" sm="12">
        <UserCard :user="user"></UserCard>
      </v-col>
      <v-spacer></v-spacer>
      <v-col lg="8" md="7" sm="12">
        <h4>User activity</h4>

        <PostsListing :posts="userPosts"></PostsListing>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
