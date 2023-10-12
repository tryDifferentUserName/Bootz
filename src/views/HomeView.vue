<script setup>
import MobileCarousel from '@/components/MobileCarousel.vue'
import { ProductsStore } from '@/stores/products.js'
import { computed } from 'vue'

const productsStore = ProductsStore()

const productImages = computed(() => productsStore.products[0]?.images || [])
</script>

<template>
  <main>
    <section class="carousel-image-wrapper">
      <MobileCarousel :images="productImages" />
    </section>
  </main>
</template>
<style scoped></style>
