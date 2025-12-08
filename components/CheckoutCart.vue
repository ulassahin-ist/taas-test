<template>
  <section class="checkout-cart-section grow flex column">
    <h2 class="checkout-title">Shopping cart summary</h2>

    <div class="checkout-cart flex column">
      <div class="checkout-cart-list flex column">
        <!-- Again could be a component(ShoppingCartItem.vue) 
         but skipped due to lacking data -->
        <div class="checkout-cart-item">
          <div class="checkout-cart-image-wrapper">
            <img
              src="/checkout-1.png"
              alt="Herbal Science Boom Butter Hair Care Oil 190ml"
            />
          </div>

          <div class="checkout-cart-item-content flex column">
            <div class="checkout-cart-item-title">
              Herbal Science Boom Butter Hair Care Oil 190ml
            </div>
            <div class="flex flex-between">
              <div class="checkout-cart-item-price flex center">44,95 TL</div>
              <div class="checkout-cart-qty flex gap-8">
                <button type="button" class="checkout-cart-qty-btn">
                  <img src="/icons/plus.svg" alt="" />
                </button>
                <span class="checkout-cart-qty-value">1</span>
                <button type="button" class="checkout-cart-qty-btn">
                  <img src="/icons/minus.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="checkout-cart-item">
          <div class="checkout-cart-image-wrapper">
            <img
              src="/checkout-2.png"
              alt="Ashley Joy Strengthening Shampoo 400ml"
            />
          </div>

          <div class="checkout-cart-item-content flex column">
            <div class="checkout-cart-item-title">
              Ashley Joy Strengthening Shampoo 400ml
            </div>
            <div class="flex flex-between">
              <div class="checkout-cart-item-price flex center">29,45 TL</div>
              <div class="checkout-cart-qty flex gap-8">
                <button type="button" class="checkout-cart-qty-btn">
                  <img src="/icons/plus.svg" alt="" />
                </button>
                <span class="checkout-cart-qty-value">1</span>
                <button type="button" class="checkout-cart-qty-btn">
                  <img src="/icons/minus.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="checkout-cart-discount">
        <input
          class="checkout-form-input"
          type="text"
          placeholder="Discount code"
        />
      </div>

      <div class="checkout-cart-summary flex column">
        <div class="summary-row flex flex-between">
          <span class="summary-row-label">Subtotal</span>
          <span class="summary-row-amount">74,40 TL</span>
        </div>
        <div class="summary-row flex flex-between">
          <span class="summary-row-label">Shipping</span>
          <span class="summary-row-amount">10,50 TL</span>
        </div>
        <div class="divider"></div>
        <div class="summary-row flex flex-between">
          <span class="summary-row-total">Total</span>
          <span class="summary-row-total">84,90 TL</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.checkout-cart-section {
  gap: 34px;
}
.checkout-title {
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  padding: 4px 0 2px;
}

.checkout-cart {
  outline: 1.5px solid var(--smoke);
  box-shadow: 0px 4px 16px 0px #2a2a480a;
  width: 360px;
  /* 
  height: 465; */
  padding: 24px;
  gap: 24px;
  border-radius: var(--radius-md);
}
.checkout-cart-list {
  gap: inherit;
}

.checkout-cart-item {
  display: flex;
  align-items: center;
  /* width: 312; */
  height: 96px;
  border-radius: 6px;
  box-shadow: 0px 1px 2px 0px #37415114;
}

.checkout-cart-image-wrapper {
  width: 116px;
  height: 100%;
  background: var(--smoke-16);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-right: 1px solid var(--smoke);
}

.checkout-cart-image-wrapper img {
  max-width: 100%;
  object-fit: contain;
}

.checkout-cart-item-content {
  flex: 1;
  gap: 8px;
  padding: 8px;
}

.checkout-cart-item-title {
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
}

.checkout-cart-item-price {
  font-size: 14px;
  line-height: 24px;
  color: var(--graphene);
}

/* Quantity control */
.checkout-cart-qty {
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: var(--graphene);
}

.checkout-cart-qty-btn {
  width: 24px;
  height: 24px;
  cursor: pointer;
  border: 1px solid var(--smoke);
  background: var(--smoke-30);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkout-cart-discount input {
  width: 100%;
  height: 48px;
  padding: 15px 18px 17px 14px;
}

.checkout-cart-summary {
  gap: 16px;
}
.summary-row {
  color: var(--graphene);
}
.summary-row-label {
  font-size: 16px;
  line-height: 16px;
}
.summary-row-amount {
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
}
.divider {
  width: 100%;
  height: 1px;
  background: var(--smoke);
}
.summary-row-total {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
}
.summary-row-total {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
}
@media (max-width: 1500px) {
}
</style>
