<script setup lang="ts">
import type { Post } from '@/interfaces'
import BaseDateAgo from './BaseDateAgo.vue'
import { useUsersStore } from '@/stores/users'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const props = defineProps<{ post: Post }>()

const { getUserById } = storeToRefs(useUsersStore())
const user = computed(() => getUserById.value(props.post?.userId))
</script>

<template>
  <v-card class="post mx-auto mb-2" loading>
    <v-card-text class="post-text py-2">
      <span class="text-black">{{ post.text }}</span>
    </v-card-text>

    <v-card-actions>
      <v-list-item class="w-100 pa-0">
        <template v-slot:prepend>
          <v-row align="center" no-gutters>
            <v-col cols="auto" class="mr-2">
              <v-avatar color="grey-darken-3" :image="user?.avatar" size="30"></v-avatar>
            </v-col>
            <v-col cols="auto">
              <p class="mb-0">
                <small>{{ user?.name }}</small>
                <v-icon v-if="user?.isModerator" icon="mdi-eye-check-outline"></v-icon>
              </p>
              <p>
                <small class="text-grey-darken-2">
                  {{ user?.username }}
                </small>
              </p>
            </v-col>
          </v-row>
        </template>

        <v-list-item-title class="text-black"> </v-list-item-title>

        <v-list-item-subtitle class=""></v-list-item-subtitle>

        <template v-slot:append>
          <v-row no-gutters>
            <v-col class="pa-0" cols="12">
              <small
                >Created
                <BaseDateAgo :timestamp="post.publishedAt"></BaseDateAgo>
              </small>
            </v-col>
            <v-col class="pa-0" cols="12">
              <small
                >Last edited
                <BaseDateAgo :timestamp="post.edited?.at"></BaseDateAgo>
              </small>
            </v-col>
          </v-row>
          <div class="justify-self-end"></div>
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
