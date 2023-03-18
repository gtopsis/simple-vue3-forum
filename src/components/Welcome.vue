<script setup lang="ts">
import appData from '@/data.json'
import { ref }   from "vue";

defineProps<{
  msg: string
}>()

const categories = ref(appData.categories)
const forums = ref(appData.forums)
const stats = ref(appData.stats)
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
  </div>

  <div>
    <h2>Categories</h2>
    <ul>
      <li v-for="category in categories">
        <span>{{ category.name }}</span>
      </li>
    </ul>
    <h2>Stats</h2>
    <ul>
      <li v-for="stat in stats">
        <span>{{ stat }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
