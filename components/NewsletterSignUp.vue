<!-- components/Header.vue -->
<template>
  <section class="newsletter-signup">
    <div class="newsletter-content flex center">
      <div class="newsletter-text-content grow flex column column-2">
        <div class="newsletter-text-title">Sign up to our newsletter</div>
        <div class="newsletter-text-subtitle">
          Be the first to hear about the latest offers.
        </div>
      </div>
      <div class="newsletter-form gap-16 grow flex column-2">
        <input type="text" placeholder="Your email address" />
        <!-- This button is overflowing to outer container -->
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
.column-2 {
  padding: 0 2px;
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
  padding: 1px;
  justify-content: flex-end;
}
.newsletter-form input {
  max-width: 412px;
  width: 100%;
  height: 48px;
  padding: 16px 16px 16px 17px;
}

.btn-primary {
  padding: 16px 29px;
  /* the reason is button overflow to outer container */
  transform: translateX(3px);
}
@media (max-width: 768px) {
  .newsletter-content {
    align-items: flex-start;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
  }
  .column-2 {
    padding: 0;
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
  .btn-primary {
    padding: 8px 16px;
    transform: translateX(0);
  }
}
</style>
