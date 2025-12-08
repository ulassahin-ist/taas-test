<template>
  <section class="shipping-details-section flex column">
    <div class="shipping-details-title flex gap-16">
      <div class="title-img-wrapper flex center">
        <img src="/icons/shipping.svg" alt="shipping" />
      </div>
      <h2 class="checkout-title">Shipping details</h2>
    </div>
    <div class="shipping-details-content">
      <div class="shipping-details-group">
        <label class="shipping-details-label" for="firstName">
          First Name *
        </label>
        <input
          name="firstName"
          type="text"
          class="shipping-details-input"
          required
        />
      </div>
      <div class="shipping-details-group">
        <label class="shipping-details-label" for="lastName">
          Last Name *
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          class="shipping-details-input"
          required
        />
      </div>

      <div class="shipping-details-group">
        <label class="shipping-details-label" for="email">
          Email Address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          class="shipping-details-input"
          required
        />
      </div>

      <div class="shipping-details-group">
        <label class="shipping-details-label" for="phone">
          Phone Number *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          class="shipping-details-input"
          placeholder="+90 (5 _ _ ) _ _ _  _ _  _ _"
          required
        />
      </div>

      <div class="shipping-details-group">
        <label class="shipping-details-label" for="city">City *</label>
        <div class="select-field">
          <select name="city" class="select-field-input">
            <option value="" selected>Please select</option>
          </select>
          <img src="/icons/down.svg" alt="" class="select-field-icon" />
        </div>
      </div>

      <div class="shipping-details-group">
        <label class="shipping-details-label" for="district">
          District *
        </label>
        <div class="select-field">
          <select disabled name="district" class="select-field-input">
            <option value="" selected>Please select</option>
          </select>
          <img src="/icons/down.svg" alt="" class="select-field-icon" />
        </div>
      </div>

      <div class="shipping-details-group">
        <label class="shipping-details-label" for="address"> Address * </label>
        <textarea
          name="address"
          class="shipping-details-textarea"
          placeholder="Enter neighborhood, street, avenue and other information"
          required
        ></textarea>
      </div>
    </div>
  </section>
</template>

<style scoped>
.shipping-details-section {
  gap: 32px;
}
.shipping-details-title {
  align-items: center;
}
.title-img-wrapper {
  background: var(--smoke-30);
  outline: 1px solid var(--smoke);
  width: 32px;
  height: 32px;
  border-radius: var(--radius-sm);
}
.shipping-details-content {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}
.shipping-details-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  /* half of irregular gapping of 40px in figma */
  flex: 0 0 calc(50% - 20px);
}
.shipping-details-group:last-child {
  flex: 0 0 100%;
}

.shipping-details-label {
  font-size: 14px;
  line-height: 24px;
}

.shipping-details-input {
  height: 48px;
  padding: 15px 16px 17px;
}

.select-field {
  position: relative;
  display: inline-flex;
  width: 100%;
}

.select-field-input {
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid var(--coal-60);
  background: #ffffff;
  font-size: 16px;
  line-height: 24px;
  color: var(--graphene);
  font-family: inherit;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-color: #e0e0e0;
  box-shadow: 0 0 0 1px #f3f4f6;
}

.select-field-input:has(option[value=""]:checked) {
  color: var(--gray);
}

.select-field-input:hover {
  color: var(--coal);
}

.select-field-input:active {
  border-color: #d2d6dc;
  box-shadow: 0 0 0 1px #e5e7eb;
}

.select-field-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px #bfdbfe;
}

.select-field-input:disabled {
  background: #f9f9f9;
  border-color: #f0f0f0;
  color: #c1c7d0;
  cursor: not-allowed;
  opacity: 1;
}

.select-field-input:disabled + .select-field-icon {
  opacity: 0.4;
}

.select-field-input:disabled:hover,
.select-field-input:disabled:focus {
  border-color: #f0f0f0;
  box-shadow: none;
}

.select-field-icon {
  position: absolute;
  right: 20px;
  top: 50%;
  width: 14px;
  height: 14px;
  transform: translateY(-50%);
  pointer-events: none;
}
.shipping-details-textarea {
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  color: var(--coal-60);
  padding: 16px;
  height: 123px;
}
</style>
