<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="product-card">
    <div class="product-card-image-wrapper flex center w-full">
      <img :src="product.thumbnail" :alt="product.title" />
      <div class="product-card-hover-actions flex center desktop">
        <button class="gap-8 flex center">
          <img src="/icons/view.svg" alt="View" />Quick View
        </button>
        <div class="divider-vertical"></div>
        <button class="gap-8 flex center">
          <img src="/icons/basket-white.svg" alt="Basket" />Add
        </button>
      </div>
    </div>

    <div class="product-card-content flex column">
      <div class="product-card-price w-full">
        {{ parseInt(product.price * 42) }},99 TL
      </div>
      <p class="product-card-title w-full">
        <!-- {{ product.brand }} -->
        {{ product.description.slice(0, 47) }}...
      </p>
    </div>
    <div class="product-card-mobile-action mobile">
      <button class="btn-primary w-full flex center gap-8">
        <img src="/icons/basket-white.svg" alt="View" />ADD
      </button>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  border-radius: var(--radius-md);
  border: 1px solid var(--smoke);
  box-shadow: 0px 1px 8px 0px #0000000a;
  display: flex;
  flex-direction: column;
}

.product-card-hover-actions {
  position: absolute;
  width: 100%;
  height: 48px;
  opacity: 0;
  gap: 8px;
  bottom: -48px;
  transition: all 0.15s ease-in-out;
  background: var(--overlay-dark);
}
.product-card:hover .product-card-hover-actions {
  opacity: 1;
  bottom: 0;
}
.product-card-hover-actions button {
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  color: var(--white);
  padding: 0 16px;
  border-radius: var(--radius-sm);
  transition: background 0.15s ease-in-out;
}
.product-card-hover-actions button:hover {
  background: var(--overlay-light);
}
.product-card-image-wrapper {
  padding: 16px;
  width: 100%;
  height: 184px;
  overflow: hidden;
  position: relative;
  background: #ececec29;
}
.product-card-image-wrapper img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  display: block;
}

.product-card-content {
  padding: 32px;
  gap: 8px;
  flex: 1;
}

.product-card-price {
  font-weight: 600;
  font-size: 19px;
  line-height: 24px;
  color: var(--coal);
}

.product-card-title {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--graphene);
}
.mobile {
  display: none;
}
.product-card-mobile-action {
  border-top: 1px solid var(--smoke);
  padding: 16px;
}

@media (max-width: 768px) {
  .desktop {
    display: none;
  }
  .product-card-content {
    padding: 16px;
  }
  .product-card-image-wrapper {
    height: 206px;
  }
  .product-card-price {
    font-size: 16px;
    line-height: 14px;
  }
  .product-card-title {
    font-size: 14px;
    line-height: 24px;
  }
  .mobile {
    display: block;
  }
}
</style>
