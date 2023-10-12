<script setup>
import IconCart from '@/components/icons/IconCart.vue'
import IconMinus from '@/components/icons/IconMinus.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
defineProps(['content'])
</script>
<template>
  <div class="card-body-wrapper">
    <div class="card-body flex">
      <div class="card-section-brand bold">
        <p>{{ content.brand }}</p>
      </div>
      <div class="card-section-title bold">
        <h2>{{ content.name }}</h2>
      </div>
      <div class="card-section-description">
        <div v-html="content.description"></div>
      </div>
      <div class="card-section-price flex">
        <div class="flex">
          <h2 class="bold">${{ content.price * (content.discount / 100) }}</h2>
          <p class="card-section-discount">{{ content.discount }}%</p>
        </div>
        <p class="card-section-old-price">${{ content.price }}</p>
      </div>
      <div class="card-section-amount flex">
        <IconMinus />
        <input type="number" />
        <IconPlus />
      </div>
      <div class="card-section-button">
        <button class="flex">
          <span><IconCart /></span>Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card-body {
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  padding: 1rem;
  gap: 1rem;
}

.card-section-brand {
  text-transform: uppercase;
  color: var(--clr-orange);
}

.card-section-description {
  color: var(--clr-dark-grayish-blue);
}
.card-section-price {
  align-items: center;
  width: 100%;
  justify-content: space-between;
}
.card-section-price div {
  gap: 1rem;
}
.card-section-discount {
  color: var(--clr-orange);
  background-color: var(--clr-pale-orange);
  padding: 5px;
  border-radius: 20%;
}
.card-section-old-price {
  text-decoration: line-through;
  color: var(--clr-dark-grayish-blue);
}

.card-section-button button {
  width: 100%;
  background-color: var(--clr-orange);
  border: none;
  border-radius: 1rem;
  padding: 1rem 0;
  justify-content: center;
  color: var(--clr-white);
  box-shadow: 0px 77px 58px -12px rgba(245, 168, 80, 0.33);
}
.card-section-button button:hover {
  background-color: var(--clr-pale-orange);
}
.card-section-amount {
  width: 100%;
  background-color: var(--clr-light-grayish-blue);
  border-radius: 1rem;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0;
}
input {
  all: unset;
  text-align: center;
}
</style>
