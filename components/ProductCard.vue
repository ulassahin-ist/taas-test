<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="item">
    <div class="img-wrapper flex center w-full">
      <img :src="product.thumbnail" :alt="product.title" />
      <div class="hover-buttons flex center desktop">
        <button class="gap-8 flex center">
          <img src="/icons/view.svg" alt="View" />Quick View
        </button>
        <div class="divider-vertical"></div>
        <button class="gap-8 flex center">
          <img src="/icons/basket.svg" alt="Basket" />Add
        </button>
      </div>
    </div>

    <div class="text-wrapper flex column">
      <div class="price w-full">{{ parseInt(product.price * 42) }},99 TL</div>
      <p class="product-name w-full">
        {{ product.brand }}<br />{{ product.title }}
      </p>
    </div>
    <div class="mobile-button mobile">
      <button class="btn-primary w-full flex center gap-8">
        <img src="/icons/basket.svg" alt="View" />ADD
      </button>
    </div>
  </div>
</template>

<style scoped>
.item {
  border-radius: var(--radius-md);
  border: 1px solid var(--smoke);
  box-shadow: 0px 1px 8px 0px #0000000a;
  display: flex;
  flex-direction: column;
}

.hover-buttons {
  position: absolute;
  width: 100%;
  height: 48px;
  opacity: 0;
  bottom: -48px;
  transition: all 0.15s ease-in-out;
  background: var(--overlay-dark);
}
.item:hover .hover-buttons {
  opacity: 1;
  bottom: 0;
}
.hover-buttons button {
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
.hover-buttons button:hover {
  background: var(--overlay-light);
}
.img-wrapper {
  padding: 16px;
  width: 100%;
  height: 184px;
  overflow: hidden;
  position: relative;
  background: #ececec29;
}
.img-wrapper img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  display: block;
}

.text-wrapper {
  padding: 32px;
  gap: 8px;
  flex: 1;
}

.price {
  font-weight: 600;
  font-size: 19px;
  line-height: 24px;
  color: var(--coal);
}

.product-name {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--graphene);
}
.mobile {
  display: none;
}
.mobile-button {
  border-top: 1px solid var(--smoke);
  padding: 16px;
}

@media (max-width: 768px) {
  .desktop {
    display: none;
  }
  .text-wrapper {
    padding: 16px;
  }
  .img-wrapper {
    height: 206px;
  }
  .price {
    font-size: 16px;
    line-height: 14px;
  }
  .product-name {
    font-size: 14px;
    line-height: 24px;
  }
  .mobile {
    display: block;
  }
}
</style>
