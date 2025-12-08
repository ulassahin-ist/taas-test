<!-- components/Header.vue -->
<template>
  <section class="newsletter-signup">
    <div class="newsletter-content flex center">
      <div class="newsletter-text-content grow flex column">
        <div class="newsletter-text-title">Sign up to our newsletter</div>
        <div class="newsletter-text-subtitle">
          Be the first to hear about the latest offers.
        </div>
      </div>
      <div class="newsletter-form gap-16 grow flex">
        <input type="text" placeholder="Your email address" />
        <button class="btn-primary">SUBSCRIBE</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.newsletter-signup {
  width: 100%;
  background: var(--titan-white);
}
.newsletter-content {
  margin: 0 auto;
  max-width: 1240px;
  padding: 40px;
}
.newsletter-text-content {
  max-width: 600px;
  gap: 16px;
}
.newsletter-text-title {
  font-family: Roboto;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0px;
  color: var(--coal);
}
.newsletter-text-subtitle {
  font-family: Roboto;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0px;
  color: #2a2a4899;
}
.newsletter-form {
  max-width: 560px;
  gap: 16px;
}
.newsletter-form input {
  width: 100%;
  height: 42px;
  border: none;
  background: var(--white);
  font-size: 14px;
  padding: 16px;
  border-radius: var(--radius-sm);
  border: 1px solid #ececec;

  font-family: Roboto;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
  vertical-align: middle;
}

.newsletter-form input:focus {
  outline: 1px solid var(--gray);
}

.btn-primary {
  padding: 16px 29px;
}
@media (max-width: 768px) {
  .newsletter-content {
    align-items: flex-start;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
  }
  .newsletter-text-content {
    gap: 8px;
  }
  .newsletter-text-title {
    font-size: 20px;
    line-height: 24px;
  }

  .newsletter-text-subtitle {
    font-size: 14px;
    line-height: 16px;
  }
  .newsletter-form {
    width: 100%;
    max-width: none;
  }
  .newsletter-form input {
    height: 48px;
  }
}
</style>
