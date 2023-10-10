import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', () => {
  const products = ref([])
  
  return { products }
})
