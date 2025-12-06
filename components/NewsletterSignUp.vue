<!-- components/Header.vue -->
<template>
  <section class="newsletter-su">
    <div class="main-wrapper container flex center">
      <div class="text-wrapper grow flex column">
        <h2>Sign up to our newsletter</h2>
        <p>Be the first to hear about the latest offers.</p>
      </div>
      <div class="subscribe grow flex center">
        <input type="text" placeholder="Your email address" />
        <button>SUBSCRIBE</button>
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
  padding: 40px 0;
}
.text-wrapper {
  max-width: 600px;
  gap: 16px;
}
.text-wrapper h2 {
  font-family: Roboto;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0px;
  color: var(--coal);
}
.text-wrapper p {
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
  border-radius: 4px;
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

.subscribe button {
  border-radius: 4px;
  padding: 16px;
  background: var(--primary);
  color: var(--white);
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: center;
}
.subscribe button:hover {
  background-color: var(--primary-dark);
}
</style>
