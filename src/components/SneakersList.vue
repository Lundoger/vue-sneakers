<script setup lang="ts">
import SneakerCard from './SneakerCard.vue'

const onCLickAdd = () => {
  alert(111)
}
const onCLickFavorite = () => {
  alert(222)
}
</script>

<template>
  <ul class="grid grid-cols-5 gap-6">
    <SneakerCard
      image-url="/sneakers/sneakers-11.jpg"
      title="Krossivki top"
      price="9999 uah"
      :is-added="false"
      :is-liked="true"
      v-on:click-add="onCLickAdd"
      v-on:click-favorite="onCLickFavorite"
    />
  </ul>
</template>
