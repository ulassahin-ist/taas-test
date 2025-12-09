<template>
  <section class="payment-details-section flex column">
    <div class="payment-details-title flex gap-16">
      <div class="title-img-wrapper flex center">
        <img src="/icons/payment.svg" alt="payment" />
      </div>
      <h2 class="checkout-title">Payment details</h2>
    </div>
    <div class="payment-details-content">
      <div class="payment-details-form">
        <div class="payment-details-group">
          <label class="payment-details-label" for="cardHolderName">
            Card Holder Name *
          </label>
          <input
            name="cardHolderName"
            type="text"
            class="payment-details-input"
            required
          />
          <span class="payment-details-note">Full name on card</span>
        </div>
        <div class="payment-details-group">
          <label class="payment-details-label" for="cardNumber">
            Card Number *
          </label>
          <input
            name="cardNumber"
            type="text"
            class="payment-details-input"
            required
          />
          <span class="payment-details-note">Enter digits without spaces</span>
        </div>

        <div class="payment-details-group">
          <label class="payment-details-label" for="expiryDate">
            Expiry Date *
          </label>
          <input
            name="expiryDate"
            type="text"
            class="payment-details-input"
            placeholder="MM / YY"
            required
          />
        </div>

        <div class="payment-details-group">
          <label class="payment-details-label" for="cvv"> CVV * </label>
          <input
            name="cvv"
            type="text"
            class="payment-details-input"
            required
          />
          <img src="/icons/question.svg" alt="" class="input-field-icon" />
        </div>

        <span class="payment-form-note">* Required fields</span>
      </div>
      <div class="payment-details-image">
        <picture>
          <source media="(max-width: 768px)" srcset="/payment-mobile.png" />
          <img src="/payment-dekstop.png" alt="Bank Card" />
        </picture>
      </div>
    </div>
  </section>
</template>

<style scoped>
.payment-details-section {
  gap: 32px;
  flex: 1;
}
.payment-details-title {
  align-items: center;
}
.title-img-wrapper {
  background: var(--smoke-30);
  outline: 1px solid var(--smoke);
  width: 32px;
  height: 32px;
  border-radius: var(--radius-sm);
}
.payment-details-content {
  display: flex;
  gap: 40px;
}
.payment-details-form {
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  max-height: 360px;
}
.payment-details-group {
  display: flex;
  flex-direction: column;
  gap: 7.5px;
  justify-content: center;
  width: 100%;
  position: relative;
}
.payment-details-group:nth-child(3),
.payment-details-group:nth-child(4) {
  width: calc(50% - 20px);
}

.payment-details-label {
  font-size: 14px;
  line-height: 24px;
}

.payment-details-input {
  height: 48px;
  padding: 15px 16px 17px;
}
.input-field-icon {
  position: absolute;
  right: 21px;
  bottom: 15px;
  width: 14px;
  height: 14px;
  pointer-events: none;
}
.payment-details-note {
  font-size: 12px;
  line-height: 16px;
  color: var(--coal-60);
}
.payment-form-note {
  color: var(--gray);
  font-size: 14px;
  line-height: 26px;
}

.payment-details-image {
  flex: 0 1 360px;
  max-width: 360px;
}
.payment-details-image img {
  width: 100%;
}
@media (max-width: 768px) {
  .payment-details-image {
    flex: 1 1 0;
  }
}
@media (max-width: 480px) {
  .payment-details {
    gap: 0;
  }
  .payment-details-title {
    padding: 16px;
    background: var(--smoke-30);
  }
  .payment-details-content {
    padding: 16px;
    flex-wrap: nowrap;
    flex-direction: column-reverse;
    gap: 17px;
  }
  .payment-details-image {
    max-width: none;
    width: 100%;
    flex-shrink: 1;
    max-height: 215px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
