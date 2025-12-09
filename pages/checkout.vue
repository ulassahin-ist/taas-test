<template>
  <main class="checkout-section">
    <div class="checkout-breadcrumb w-full">
      <div class="breadcrumb-text-wrapper container flex column w-full">
        <div class="breadcrumb-text-label flex gap-8">
          Homepage<img src="/icons/right-breadcrumb.svg" alt="&gt;" /> Shopping
          Cart<img src="/icons/right-breadcrumb.svg" alt="&gt;" />
          <span class="checkout-text-label-highlight">Checkout</span>
        </div>
        <div class="breadcrumb-checkout-title">Checkout</div>
      </div>
    </div>

    <div class="checkout-content container flex">
      <div class="checkout-form-column">
        <form class="checkout-form flex column" novalidate>
          <ShippingDetails />
          <PaymentDetails class="payment-details" />
          <!-- Why is here a second required fields here 
           i don't know but keeping it to match pixel perfect -->
          <span class="payment-form-note desktop">* Required fields</span>
          <div class="checkout-button-wrapper flex w-full">
            <button class="btn-primary disabled">PAY NOW</button>
          </div>
        </form>
      </div>

      <aside class="checkout-summary-column flex">
        <CheckoutCart />
      </aside>
    </div>
  </main>
  <div class="divider"></div>
</template>

<style scoped>
.divider {
  height: 1px;
  width: 100%;
  background: var(--smoke);
}
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
.checkout-form {
  gap: 32px;
}

.payment-details {
  height: auto;
}
.payment-form-note {
  color: var(--gray);
  font-size: 14px;
  line-height: 20px;
}
.btn-primary {
  width: 100%;
  max-width: 360px;
}
@media (max-width: 1060px) {
  .checkout-content,
  .checkout-breadcrumb {
    padding: 32px 32px;
  }
  .checkout-content {
    width: 100%;
    flex-direction: column-reverse;
    align-items: center;
  }
  .btn-primary {
    max-width: none;
  }
}
@media (max-width: 768px) {
  .checkout-content,
  .checkout-breadcrumb {
    padding: 16px 16px;
  }
}
@media (max-width: 480px) {
  .desktop {
    display: none;
  }
  .checkout-section {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  .checkout-content,
  .checkout-breadcrumb {
    padding: 0;
  }
  .breadcrumb-text-label {
    padding: 0;
  }
  .breadcrumb-text-wrapper {
    padding: 16px;
    gap: 16px;
  }
  .breadcrumb-checkout-title {
    padding: 0;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.2px;
  }
  .checkout-form {
    gap: 0;
  }
  .checkout-content {
    padding: 0;
    gap: 0;
  }
  .checkout-button-wrapper {
    padding: 0 16px 16px 16px;
  }
}
</style>
