<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue'
import CartModal from './components/modals/card-modal/CartModal.vue'
import SneakersList from './components/SneakersList.vue'
</script>

<template>
  <div class="wrapper">
    <HeaderComponent />
    <main class="py-12">
      <section>
        <div class="container">
          <h2 class="mb-10 text-4xl font-bold">Все кроссовки</h2>
          <SneakersList />
        </div>
      </section>
    </main>
    <CartModal />
  </div>
</template>
