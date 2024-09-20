<script setup lang="ts"></script>

<template>
  <li
    class="basic-transition relative top-0 flex flex-col gap-4 rounded-xl border border-slate-100 px-8 py-5 hover:-top-2 hover:shadow-xl"
  >
    <button
      type="button"
      class="absolute left-5 top-6 z-10 h-10 w-10 rounded-xl border border-slate-100"
    >
      <!-- :src="isLiked ? '/like-1.svg' : '/like-2.svg'" -->
      <img
        src="/like-1.svg"
        class="absolute left-0 top-0 h-full w-full object-contain"
        alt="Favorite"
      />
    </button>
    <div class="relative pb-[70%]">
      <img
        src="/sneakers/sneakers-1.jpg"
        alt="title"
        class="absolute left-0 top-0 h-full w-full object-contain"
      />
    </div>
    <h3 class="name">sneakers name</h3>
    <div class="flex justify-between gap-3">
      <div class="flex flex-col gap-2 leading-[1]">
        <span class="text-primaryGray">Цена:</span>
        <span class="font-bold">99999</span>
      </div>
      <button type="button" class="relative h-10 w-10 rounded-xl border border-slate-100">
        <img src="/plus.svg" class="absolute left-0 top-0 h-full w-full" alt="Plus" />
      </button>
    </div>
  </li>
</template>
