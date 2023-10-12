<script setup>
import { ref, computed } from 'vue'
import IconNext from '@/components/icons/IconNext.vue'
import IconPrevious from '@/components/icons/IconPrevious.vue'

const props = defineProps(['images'])

const currentIndex = ref(0)

const productImages = computed(() => props.images || [])

const totalImages = computed(() => productImages.value.length)

function prevImage() {
  currentIndex.value = (currentIndex.value - 1 + totalImages.value) % totalImages.value
}

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % totalImages.value
}
</script>
<template>
  <div class="carousel">
    <img
      :src="image.src"
      :alt="image.alt"
      v-for="(image, index) in productImages"
      :key="index"
      :style="{ transform: `translateX(${-100 * currentIndex}%)` }"
    />

    <IconPrevious @click="prevImage" class="carousel-arrow left" />
    <IconNext @click="nextImage" class="carousel-arrow right" />
  </div>
</template>
<style scoped>
img {
  object-fit: cover;
  transition: transform 300ms ease-in-out;
  flex-shrink: 0;
  flex-grow: 0;
}
.carousel {
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.carousel-arrow {
  position: absolute;
}
.left {
  left: 1rem;
}
.right {
  right: 1rem;
}
</style>
