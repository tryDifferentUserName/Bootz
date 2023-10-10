<script setup>
import { ref } from 'vue'
import { isMobileView } from '@/services/isMobileView.js'

const menuLinks = ref(['Collection', 'Men', 'Women', 'About', 'Contact'])
</script>

<template>
  <header>
    <div class="navigation-wrapper">
      <div>
        <img src="@/assets/images/icon-menu.svg" alt="" v-if="isMobileView" />
        <RouterLink to="/"><img src="@/assets/images/logo.svg" alt="" /></RouterLink>
      </div>
      <nav v-if="!isMobileView">
        <RouterLink to="/" v-for="link in menuLinks" :key="link">{{ link }}</RouterLink>
      </nav>
      <div>
        <RouterLink to="/cart"><img src="@/assets/images/icon-cart.svg" alt="" /></RouterLink>
        <img src="@/assets/images/image-avatar.png" alt="" />
      </div>
    </div>
  </header>
</template>

<style scoped>
.navigation-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
