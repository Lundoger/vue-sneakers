<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue'
import SneakersList from './components/sneakers-list/SneakersList.vue'
</script>

<template>
  <div class="wrapper">
    <HeaderComponent />
    <main class="py-12">
      <SneakersList />
    </main>
  </div>
</template>

<style scoped></style>
