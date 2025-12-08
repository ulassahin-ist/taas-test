<script setup>
const { getProducts } = useProducts();
const products = await getProducts(4, 3);
</script>

<template>
  <div class="container flex column">
    <div class="feature-title-wrapper">
      <div class="featured-title-line"></div>
      <div class="feature-title">Featured products</div>
    </div>

    <div class="featured-products-grid">
      <div
        v-if="products.length < 1"
        class="featured-products-loading"
        v-for="i in 4"
        :key="i"
      ></div>
      <ProductCard
        v-else
        class="featured-product-item"
        v-for="p in products"
        :key="p.id"
        :product="p"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 40px 0;
  gap: 40px;
}
.featured-products-grid {
  width: 100%;
  display: flex;
  min-height: 328px;
  gap: 40px;
}
.featured-product-item {
  flex: 1 1 0;
}
.feature-title-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
}
.feature-title {
  position: relative;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  color: var(--secondary);
  padding: 0 32px;
  background: var(--white);
  z-index: 1;
}

.featured-title-line {
  position: absolute;
  width: 100%;
  height: 1px;
  background: #0099a81a;
  left: 0;
  right: 0;
  height: 1.5px;
  top: 50%;
  transform: translateY(-50%);
}

.featured-products-loading {
  flex: 1;
  border: 1px solid var(--smoke);
  border-radius: var(--radius-md);
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

@media (max-width: 1100px) {
  .featured-products-grid {
    flex-wrap: wrap;
    gap: 16px;
  }
  .featured-product-item {
    flex: 1 0 calc(50% - 16px);
  }
}
@media (max-width: 768px) {
  .container {
    padding: 16px;
    gap: 16px;
  }
  .feature-title {
    font-size: 20px;
    line-height: 24px;
  }
}
</style>
