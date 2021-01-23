<template>
  <div class="card">
    <img
      v-if="product.images.length" :src="'https://078b52aae179.ngrok.io/' + product.images[0].image"
      alt="product_image"
    />
    <div class="card-body">
      <p class="card-title">{{ product.name }}</p>
      <p class="card-text">{{ product.price.toLocaleString() }}₫</p>
    </div>
    <router-link
      :to="{ path: '/product/' + product.name }"
      class="stretched-link"
    />
  </div>
</template>

<script>
export default {
  name: "item-product",
  props: {
    product: Object,
  },
  created() {
  },
};
</script>

<style scoped>
.card {
  border: none;
}
.card:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
.card img {
  height: 260px;
  object-fit: cover;
  padding: 14px;
  padding-top: 0px;
}
.card-body {
  padding: 0px;
  padding-bottom: 10px;
}
.card-title {
  margin-bottom: 6px;
}
.card-text {
  font-size: 16px;
  font-weight: 600;
}
</style>
