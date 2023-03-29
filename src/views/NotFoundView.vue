<script setup lang="ts"></script>

<template>
  <main class="full-width px-2">
    <v-row no-gutters align="center" justify="center" class="pa-4">
      <v-col class="page-content">
        <v-col cols="auto">
          <h2 class="text-white">Opps! The dog ate the page you're looking for.</h2>
          <RouterLink :to="{ name: 'home' }">View all categories instead</RouterLink>
        </v-col>
        <v-col cols="auto">
          <img src="@/assets/404_Dog_Ate.png" alt="" width="400" />
        </v-col>
      </v-col>
    </v-row>
  </main>
</template>

<style scoped>
main {
  width: 100%;
}

.page-content {
  max-width: 600px;
}
</style>
