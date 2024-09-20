<script setup lang="ts">
import SneakerCard from './SneakerCard.vue'
</script>

<template>
  <section>
    <div class="container">
      <h2 class="mb-10 text-4xl font-bold">Все кроссовки</h2>
      <ul class="grid grid-cols-5 gap-6">
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
      </ul>
    </div>
  </section>
</template>
