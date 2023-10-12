import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {getJson} from '@/services/getJson.js'
import {ProductsStore} from "@/stores/products.js"
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(createPinia())

const products = ProductsStore()

getJson((data) => {
	products.products = data;
}, 'products')

app.provide('products', products)


app.mount('#app')
