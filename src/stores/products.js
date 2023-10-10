import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {
  const products = ref([])

  async function fetchProducts() {
    const response = await fetch('/assets/products.json')
    const productsData = await response.json()
    products.value = productsData
  }

  return { products, fetchProducts }
})
