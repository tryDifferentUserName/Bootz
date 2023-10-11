<script setup>
defineProps(['imageSrc'])
</script>
<template>
  <img :src="imageSrc" />
</template>
<style scoped>
img {
  object-fit: cover;
}
</style>
