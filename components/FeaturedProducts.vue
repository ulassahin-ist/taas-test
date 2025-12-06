<script setup>
const { getProducts } = useProducts();
const products = await getProducts(4);
</script>

<template>
  <div class="container flex column">
    <div class="title-wrapper">
      <div class="title">Featured products</div>
    </div>

    <div class="products">
      <ProductCard v-for="p in products" :key="p.id" :product="p" />
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-bottom: 40px;
}
.title-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 0;
}

.title {
  position: relative;
  font-family: Roboto;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: var(--secondary);

  padding: 0 32px;
  background: white;
  z-index: 1;
}

.title-wrapper::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 100%;
  height: 1px;
  background: rgba(0, 153, 168, 0.1);
  transform: translateY(-50%);
  z-index: 0;
}

.products {
  width: 100%;
  display: flex;
  gap: 40px;
  align-items: stretch;
  height: 328px;
}
</style>
