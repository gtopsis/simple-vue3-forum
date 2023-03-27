<script setup lang="ts">
import { ref, computed, toRef } from 'vue'
import type { Post } from '@/interfaces'

const props = defineProps<{ dialogEnabled: boolean }>()
const emits = defineEmits<{
  (e: 'save-post', post: Pick<Post, 'text'>): void
  (e: 'cancel'): void
}>()

let newPostText = ref('')
let isNewPostTextEmpty = computed(() => !newPostText.value.trim())

const dialog = toRef(props, 'dialogEnabled')

const save = () => {
  if (isNewPostTextEmpty.value) return
  const post: Pick<Post, 'text'> = {
    text: newPostText.value
  }

  emits('save-post', post)

  newPostText.value = ''
}

const cancel = () => {
  emits('cancel')
}
</script>

<template>
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
        <v-btn color="blue-darken-1" variant="text" @click="cancel"> Close </v-btn>
        <v-btn color="blue-darken-1" variant="text" :disabled="isNewPostTextEmpty" @click="save">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped></style>
