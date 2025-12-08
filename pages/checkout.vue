<template>
  <main class="checkout-section">
    <div class="checkout-breadcrumb w-full">
      <div class="breadcrumb-text-wrapper container flex column w-full">
        <div class="breadcrumb-text-label flex gap-8">
          Homepage<img src="/icons/right-breadcrumb.svg" alt="&gt;" /> Shopping
          Cart<img src="/icons/right-breadcrumb.svg" alt="&gt;" />
          <span class="checkout-text-label-highlight">Checkout</span>
        </div>
        <h1 class="breadcrumb-checkout-title">Checkout</h1>
      </div>
    </div>

    <div class="checkout-content container flex">
      <div class="checkout-form-column">
        <form class="checkout-form" novalidate>
          <ShippingDetails />
        </form>
      </div>

      <aside class="checkout-summary-column flex">
        <CheckoutCart />
      </aside>
    </div>
  </main>
</template>

<style scoped>
.checkout-section {
  background: #ffffff;
}
.checkout-breadcrumb {
  background: var(--smoke-30);
}
.breadcrumb-text-wrapper {
  padding: 24px 0;
  gap: 16px;
}
.breadcrumb-text-label {
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 16px;
  color: var(--gray);
}
.checkout-text-label-highlight {
  color: var(--secondary);
}
.breadcrumb-checkout-title {
  font-family: Rubik;
  font-weight: 500;
  font-size: 34px;
  line-height: 48px;
}
.checkout-content {
  padding: 32px 0;
  gap: 40px;
}
.checkout-form-column {
  flex: 1;
}
.checkout-summary-column {
}
</style>
