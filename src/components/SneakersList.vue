<script setup lang="ts">
import SneakerCard from './SneakerCard.vue'

defineProps<{
  items: any[]
}>()

const onCLickAdd = () => {
  alert(111)
}
const onCLickFavorite = () => {
  alert(222)
}
</script>

<template>
  <ul class="grid grid-cols-4 gap-6">
    <SneakerCard
      v-for="item in items"
      :key="item.id"
      :image-url="item.imageUrl"
      :title="item.title"
      :price="item.price"
      :is-added="false"
      :is-liked="true"
      v-on:click-add="onCLickAdd"
      v-on:click-favorite="onCLickFavorite"
    />
  </ul>
</template>
