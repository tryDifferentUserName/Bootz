import { ref } from 'vue'
import { defineStore } from 'pinia'

export const ProductsStore = defineStore('products', () => {
  const products = ref([])


  return { products }
})
