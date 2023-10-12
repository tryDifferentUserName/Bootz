<script setup>
import MobileCarousel from '@/components/MobileCarousel.vue'
import ProductCardBody from '@/components/ProductCardBody.vue'
import { ProductsStore } from '@/stores/products.js'
import { computed } from 'vue'

const productsStore = ProductsStore()

const productImages = computed(() => productsStore.products[0]?.images || [])
const productContent = computed(() => productsStore.products[0])
</script>

<template>
  <main>
    <section class="carousel-image-wrapper">
      <MobileCarousel :images="productImages" />
      <ProductCardBody v-if="productContent" :content="productContent" />
    </section>
  </main>
</template>
<style scoped></style>
