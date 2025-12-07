<!-- components/Header.vue -->
<template>
  <section class="newsletter-su">
    <div class="main-wrapper flex center">
      <div class="text-wrapper grow flex column">
        <div class="head-text">Sign up to our newsletter</div>
        <div class="small-text">
          Be the first to hear about the latest offers.
        </div>
      </div>
      <div class="subscribe gap-16 grow flex">
        <input type="text" placeholder="Your email address" />
        <button class="btn-primary">SUBSCRIBE</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.newsletter-su {
  width: 100%;
  background: var(--titan-white);
}
.main-wrapper {
  margin: 0 auto;
  max-width: 1240px;
  padding: 40px;
}
.text-wrapper {
  max-width: 600px;
  gap: 16px;
}
.head-text {
  font-family: Roboto;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0px;
  color: var(--coal);
}
.small-text {
  font-family: Roboto;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0px;
  color: #2a2a4899;
}
.subscribe {
  max-width: 560px;
  gap: 16px;
}
.subscribe input {
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

.subscribe input:focus {
  outline: 1px solid var(--gray);
}

.btn-primary {
  padding: 16px 29px;
}
@media (max-width: 768px) {
  .main-wrapper {
    align-items: flex-start;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
  }
  .text-wrapper {
    gap: 8px;
  }
  .head-text {
    font-size: 20px;
    line-height: 24px;
  }

  .small-text {
    font-size: 14px;
    line-height: 16px;
  }
  .subscribe {
    width: 100%;
    max-width: none;
  }
  .subscribe input {
    height: 48px;
  }
}
</style>
