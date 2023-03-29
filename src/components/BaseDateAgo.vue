<script setup lang="ts">
import { computed } from 'vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const props = defineProps<{ timestamp: number }>()
const dateAgo = computed(() => dayjs(props.timestamp).fromNow())
</script>

<template>
  <span>{{ dateAgo }}</span>
</template>
<style scoped></style>
