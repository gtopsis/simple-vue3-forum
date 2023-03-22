<script lang="ts" setup>
import type { User } from '@/interfaces'

const props = defineProps<{ user: User }>()
</script>
<template>
  <v-card loading variant="tonal">
    <v-card-title>
      <v-row justify="center">
        <v-col cols="auto">
          <v-avatar :image="props.user.avatar" size="60"></v-avatar>
        </v-col>
      </v-row>
    </v-card-title>

    <v-card-subtitle>
      <v-row justify="center">
        <v-col cols="auto">
          <span class="text-center">{{ props.user.name }}</span>
        </v-col>
      </v-row>
    </v-card-subtitle>

    <v-card-text>
      <span class="text-center">
        {{ props.user.bio }}
      </span>
    </v-card-text>

    <v-card-actions>
      <v-row justify="center">
        <v-col cols="auto">
          <v-btn>Edit profile</v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<style scoped></style>
