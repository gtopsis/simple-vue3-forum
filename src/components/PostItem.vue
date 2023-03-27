<script setup lang="ts">
import type { Post } from '@/interfaces'
import BaseDateAgo from './BaseDateAgo.vue'
import { useUsersStore } from '@/stores/users'
import { storeToRefs } from 'pinia'

const props = defineProps<{ post: Post }>()
const { getUserById } = storeToRefs(useUsersStore())

const user = getUserById.value(props.post?.userId)
</script>

<template>
  <v-card class="post mx-auto mb-2" loading color="#437a9d">
    <v-card-text class="post-text py-2">
      <span class="text-black">{{ props.post.text }}</span>
    </v-card-text>

    <v-card-actions>
      <v-list-item class="w-100 pa-0">
        <template v-slot:prepend>
          <v-avatar color="grey-darken-3" :image="user?.avatar"></v-avatar>
        </template>

        <v-list-item-title class="text-orange">
          <span>{{ user?.name }}</span>

          <v-icon v-if="user?.isModerator" icon="mdi-eye-check-outline"></v-icon>
        </v-list-item-title>

        <v-list-item-subtitle class="">{{ user?.username }}</v-list-item-subtitle>

        <template v-slot:append>
          <div class="justify-self-end">
            <!-- <v-icon class="me-1" icon="mdi-heart"></v-icon>
            <span class="subheading me-2">256</span>
            <span class="me-1">·</span>
            <v-icon class="me-1" icon="mdi-share-variant"></v-icon>
            <span class="subheading">45</span> -->

            <BaseDateAgo class="ml-2" :timestamp="props.post.publishedAt"></BaseDateAgo>
          </div>
        </template>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.post {
  width: 100%;
}
</style>
