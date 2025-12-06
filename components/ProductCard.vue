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
      <div class="hover-buttons flex center">
        <button class="gap-8 flex center">
          <img src="/icons/view.svg" alt="View" />Quick View
        </button>
        <div class="divider-vertical"></div>
        <button class="gap-8 flex center">
          <img src="/icons/basket.svg" alt="Basket" />Add
        </button>
      </div>
    </div>

    <div class="text-wrapper">
      <div class="price w-full">{{ parseInt(product.price * 42) }}.99 TL</div>
      <p class="product-name w-full">{{ product.brand }} {{ product.title }}</p>
    </div>
  </div>
</template>

<style scoped>
.item {
  border-radius: 6px;
  border: 1px solid var(--smoke);
  box-shadow: 0px 1px 8px 0px #0000000a;
  flex: 1 1 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.img-wrapper {
  padding: 16px;
  width: 100%;
  height: 184px;
  overflow: hidden;
  position: relative;
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
.divider-vertical {
  width: 24px;
  height: 0.5px;
  transform: rotate(90deg);
  background: #ececec;
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
  border-radius: 4px;
  transition: background 0.15s ease-in-out;
}
.hover-buttons button:hover {
  background: var(--overlay-light);
}
.img-wrapper img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
}

.text-wrapper {
  padding: 32px;
  gap: 8px;
  width: 100%;
  flex: 0 0 auto;
}

.price {
  font-family: Roboto;
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: start;
  color: var(--coal);
}

.product-name {
  font-family: Roboto;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0px;
  color: var(--graphene);
}
</style>
