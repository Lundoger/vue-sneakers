<script setup lang="ts">
defineProps<{
  imageUrl: string
  title: string
  price: string
  isLiked: boolean
  isAdded: boolean
  onClickAdd: () => void
  onClickFavorite: () => void
}>()
</script>

<template>
  <li
    class="basic-transition relative top-0 flex flex-col gap-4 rounded-xl border border-slate-100 px-8 py-5 hover:-top-2 hover:shadow-xl"
  >
    <button
      type="button"
      class="absolute left-5 top-6 z-10 h-10 w-10 rounded-xl border border-slate-100"
      @click="onClickFavorite"
    >
      <img
        :src="isLiked ? '/like-2.svg' : '/like-1.svg'"
        class="absolute left-0 top-0 h-full w-full object-contain"
        alt="Favorite"
      />
    </button>
    <div class="relative pb-[70%]">
      <img :src="imageUrl" alt="title" class="absolute left-0 top-0 h-full w-full object-contain" />
    </div>
    <h3 class="name">{{ title }}</h3>
    <div class="flex justify-between gap-3">
      <div class="flex flex-col gap-2 leading-[1]">
        <span class="text-primaryGray">Цена:</span>
        <span class="font-bold">{{ price }} грн.</span>
      </div>
      <button
        @click="onClickAdd"
        type="button"
        class="relative h-10 w-10 rounded-xl border border-slate-100"
      >
        <img
          :src="isAdded ? '/checked.svg' : '/plus.svg'"
          class="absolute left-0 top-0 h-full w-full"
          alt="Plus"
        />
      </button>
    </div>
  </li>
</template>
