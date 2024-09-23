<!-- <script setup lang="ts"></script>

<template>
  <article class="flex gap-3 rounded-xl border border-slate-100 p-5">
    <div class="relative h-[150px] w-[150px]">
      <img
        class="absolute left-0 top-0 h-full w-full object-contain"
        src="/sneakers/sneakers-10.jpg"
        alt="title"
      />
    </div>
  </article>
</template> -->

<script setup lang="ts">
defineProps<{
  imgUrl: string
  title: string
  price: string
  onClickDelete?: () => void
}>()
</script>

<template>
  <li class="relative flex w-full gap-4 rounded-xl border-2 border-slate-200 p-4">
    <img :src="imgUrl" class="w-[25%] object-contain" :alt="title" />
    <div class="flex w-full flex-col">
      <p>{{ title }}</p>
      <div class="mt-5 flex justify-between">
        <span class="font-bold">{{ price }} uah.</span>
        <img
          class="cursor-pointer opacity-30 transition hover:opacity-100"
          src="/close.svg"
          alt="Close"
        />
      </div>
    </div>
  </li>
</template>
