<template>
  <main class="hub">
    <section v-if="isMobile" class="mobile-view">
      <div class="mobile-intro">
        <h1 class="title">The Taas Company Case</h1>
        <p class="description">
          <br /><br />
          You can click on buttons to view the
          <strong>pages</strong>.<br /><br />

          If you'd like to switch between pages afterward, you can use the
          Header controls, the logo <strong>(</strong
          ><img class="inline-logo" src="/logo.png" alt="Logo" /><strong
            >)</strong
          >
          takes you back to the homepage, and the basket <strong>(</strong
          ><img class="inline-basket" src="/basket.png" alt="Basket" /><strong
            >)</strong
          >
          opens the checkout screen.<br /><br />

          <strong class="thank-you">
            Thank you for taking the time to look through the project, I hope
            the result is satisfying. Have a great one!
            <br />
            <br /><br />
          </strong>
        </p>
        <div class="buttons">
          <button class="btn-primary" @click="navigateTo('/homepage')">
            Go to Homepage
          </button>
          <button class="btn-secondary" @click="navigateTo('/checkout')">
            Go to Checkout
          </button>
        </div>
      </div>
    </section>

    <section v-else class="desktop-view">
      <div class="intro">
        <h1 class="title">The Taas Company Case</h1>
        <p class="description">
          <br />
          You can click on <em>either phone</em> to view the
          <strong>full page</strong>, or you can navigate
          <em>directly inside</em> the phones for a
          <strong>mobile view</strong>.<br /><br />
          <span class="desktop">
            If you'd like to switch between pages afterward, you can use the
            Header controls, the logo <strong>(</strong
            ><img class="inline-logo" src="/logo.png" alt="Logo" /><strong
              >)</strong
            >
            takes you back to the homepage, and the basket <strong>(</strong
            ><img class="inline-basket" src="/basket.png" alt="Basket" /><strong
              >)</strong
            >
            opens the checkout screen.<br /><br />
          </span>
          <strong class="thank-you">
            Thank you for taking the time to look through the project, I hope
            the result is satisfying. Have a great one!
          </strong>
        </p>
      </div>

      <NuxtLink to="/homepage" class="phone-card">
        <div class="label">
          <span class="dot primary"></span>
          <span>Homepage</span>
        </div>

        <div class="phone-frame">
          <div class="phone-screen">
            <iframe
              :src="baseURL + 'homepage'"
              class="iframe"
              title="Homepage preview"
            ></iframe>
          </div>
        </div>

        <div class="footer">
          <span class="centered-text">Click Here</span>
        </div>
      </NuxtLink>

      <NuxtLink to="/checkout" class="phone-card">
        <div class="label">
          <span class="dot secondary"></span>
          <span>Bonus Checkout Screen</span>
        </div>

        <div class="phone-frame">
          <div class="phone-screen">
            <iframe
              :src="baseURL + 'checkout'"
              class="iframe"
              title="Bonus preview"
            ></iframe>
          </div>
        </div>

        <div class="footer">
          <span class="centered-text">Click Here</span>
        </div>
      </NuxtLink>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const config = useRuntimeConfig();
const baseURL = config.app.baseURL;

const isMobile = ref(false);

function updateIsMobile() {
  if (typeof window === "undefined") return;
  isMobile.value = window.innerWidth <= 810;
}

onMounted(() => {
  updateIsMobile();
  window.addEventListener("resize", updateIsMobile);
});

onBeforeUnmount(() => {
  if (typeof window === "undefined") return;
  window.removeEventListener("resize", updateIsMobile);
});
</script>

<style scoped>
.hub {
  min-height: 100vh;
  background: var(--titan-gradient);
  padding: 98px 16px 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mobile-view {
  margin: auto;
  max-width: 480px;
  width: 100%;
  text-align: center;
}
.title {
  font-size: 28px;
  line-height: 30px;
}
.description {
  letter-spacing: 0.5px;
  line-height: 20px;
  font-size: 14px;
}

.inline-logo {
  height: 12px;
}

.inline-basket {
  height: 24px;
}

.thank-you {
  font-size: 15px;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  background: var(--primary);
  color: var(--white);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
}

.button.secondary {
  background: var(--secondary);
}

.button:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.16);
}

.desktop-view {
  display: flex;
  gap: 32px;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  align-items: flex-start;
  position: relative;
}

.intro {
  margin-top: 30px;
  border-radius: 24px;
  background: var(--snow);
  padding: 24px;
  box-shadow: 0px 4px 16px 0px #2a2a480a;
}
.mobile-intro {
  border-radius: 24px;
  background: #fafcff99;
  padding: 24px;
  box-shadow: 0px 4px 16px 0px #2a2a480a;
}

.phone-card {
  display: flex;
  flex-direction: column;
  padding: 16px 16px 20px;
  border-radius: 24px;
  background: rgba(20, 20, 20, 0.95);
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.12);
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.phone-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 26px 60px rgba(15, 23, 42, 0.18);
  background: rgba(20, 20, 20, 0.838);
}

.label {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 10px;
  font-size: 13px;
  font-weight: 500;
  color: var(--snow);
  margin-bottom: 12px;
}

.dot {
  height: 8px;
  width: 8px;
  border-radius: 50%;
}

.dot.primary {
  background: var(--primary);
}

.dot.secondary {
  background: var(--secondary);
}

.phone-frame {
  position: relative;
  width: 375px;
  height: 667px;
  margin: 0 auto;
  border-radius: 32px;
  background: #000;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.phone-screen {
  width: 100%;
  height: 100%;
  border-radius: 26px;
  overflow: hidden;
  background: #ffffff;
}

.iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.footer {
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 600;
  color: var(--snow);
}

.centered-text {
  width: 100%;
  text-align: center;
}

@media (max-width: 1220px) {
  .desktop {
    display: none !important;
  }
  .hub {
    padding: 180px 10px 10px;
  }
  .intro {
    margin: 0 2px;
    width: 100%;
    position: fixed;
    z-index: 10;
    top: 2px;
  }
  .phone-card {
    padding: 8px 8px 10px;
  }
  .phone-frame {
    width: 375px;
    height: 630px;
  }
  .desktop-view {
    height: 100%;
    width: 100%;
    align-items: end;
  }
}
@media (max-width: 500px) {
  .mobile-view {
    margin: 0;
    padding: 0;
    max-width: none;
    width: 100%;
    height: 100%;
  }
  .mobile-intro {
    position: fixed;
    height: 100%;
    width: 100%;
    inset: 0;
    max-width: none;
    padding: 50px 16px;
  }
}
</style>
