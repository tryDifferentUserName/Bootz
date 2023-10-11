<script setup>
import boot1 from '@/assets/images/image-product-1.jpg'
import boot2 from '@/assets/images/image-product-2.jpg'
import boot3 from '@/assets/images/image-product-3.jpg'
import boot4 from '@/assets/images/image-product-4.jpg'
import MobileCarousel from '@/components/MobileCarousel.vue'

const bootImages = [boot1, boot2, boot3, boot4]
</script>

<template>
  <main>
    <section class="carousel-image-wrapper">
      <MobileCarousel :imageSrc="image" v-for="(image, index) in bootImages" :key="index" />
    </section>
  </main>
</template>
<style scoped>
.carousel-image-wrapper {
  display: flex;
  overflow: hidden;
  scroll-snap-type: x mandatory;
}
</style>
