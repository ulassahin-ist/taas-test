<script setup>
const { getProducts } = useProducts();
const products = await getProducts(4);
</script>

<template>
  <div class="container flex column">
    <div class="feature-title-wrapper">
      <div class="feature-title">Featured products</div>
    </div>

    <div class="products gap-40">
      <ProductCard v-for="p in products" :key="p.id" :product="p" />
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-bottom: 40px;
}
.products {
  width: 100%;
  display: flex;
  align-items: stretch;
  height: 328px;
}
</style>
