<script setup lang="ts">
defineProps<{
  onClose: () => void
}>()
</script>

<template>
  <div
    @click="onClose"
    class="fixed left-0 top-0 z-10 h-full w-full cursor-pointer bg-black opacity-70"
  ></div>
  <div class="fixed right-0 top-0 z-20 flex h-full w-[30vw] flex-col gap-8 bg-bgWhite p-8">
    <div class="flex items-center gap-3">
      <button @click="onClose" type="button" class="rotate-180 p-3">
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 7H14.7143"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.71436 1L14.7144 7L8.71436 13"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <h2 class="text-3xl font-bold">Корзина</h2>
    </div>
    <div class="basis-full"></div>
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-3">
        <div class="flex gap-2">
          <p class="text-xl leading-[1]">Итого:</p>
          <span class="basis-full border-b border-dashed"></span>
          <p class="font-bold leading-[1]">99999</p>
        </div>
        <div class="flex gap-2">
          <p class="text-xl leading-[1]">Итого:</p>
          <span class="basis-full border-b border-dashed"></span>
          <p class="whitespace-nowrap text-xl font-bold leading-[1]">99999 uah.</p>
        </div>
      </div>
      <button
        type="button"
        class="basic-transition flex items-center justify-center gap-6 rounded-xl bg-lime-500 py-4 text-bgWhite hover:bg-lime-600"
      >
        <span class="text-xl font-medium">Оформить заказ</span>
        <!-- <div class="relative h-3 w-5">
          <img src="/arrow-next.svg" class="absolute left-0 top-0 h-full w-full" alt="arrow next" />
        </div> -->
      </button>
    </div>
  </div>
</template>
