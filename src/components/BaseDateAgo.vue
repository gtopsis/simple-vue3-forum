<script setup lang="ts">
import { computed } from 'vue'
import * as dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const props = defineProps<{ timestamp: number }>()
const dateAgo = computed(() => dayjs(props.timestamp).fromNow())
</script>

<template>
  <span>{{ dateAgo }}</span>
</template>
<style scoped></style>
