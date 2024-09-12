<script setup lang="ts"></script>

<template>
  <header class="border-b border-gray-200 py-8">
    <div class="container flex items-center justify-between gap-5">
      <div class="inline-flex items-center gap-4">
        <img class="w-14" src="/logo.png" alt="logo" />
        <div class="logo-content">
          <h3 class="text-xl font-bold">Vue Sneakers</h3>
          <p class="text-primaryGray">Магазин лучших кроссовок</p>
        </div>
      </div>
      <div class="flex flex-wrap items-center gap-4">
        <button class="flex items-center gap-2">
          <img class="h-[18px] w-[18px]" src="/cart.svg" alt="cart" />
          <span class="text-textGray text-sm">3333 грн</span>
        </button>
        <button class="flex items-center gap-2">
          <img class="h-[18px] w-[18px]" src="/heart.svg" alt="favorite" />
          <span class="text-textGray text-sm">Закладки</span>
        </button>
      </div>
    </div>
  </header>
</template>
