<!-- Hub Page Component -->

<template>
  <!-- I made this page pretty fast dont judge me here :D -->
  <main class="hub">
    <!-- Mobile intro -->
    <section v-if="isMobile" class="mobile-view">
      <div class="mobile-intro">
        <h1 class="title">The Taas Company Case</h1>
        <p class="description">
          <br /><br />
          You can click on buttons to view the <strong>pages</strong>.
          <br /><br />
          If you'd like to switch between pages afterward, you can use the
          Header controls — the logo
          <strong>(</strong
          ><img class="inline-logo" src="/logo.png" alt="Logo" /><strong
            >)</strong
          >
          returns to the homepage, and the basket
          <strong>(</strong
          ><img class="inline-basket" src="/basket.png" alt="Basket" /><strong
            >)</strong
          >
          opens checkout.
          <br /><br />

          <strong class="thank-you">
            Thank you for taking the time to look through the project. Have a
            great one!
            <br /><br /><br />
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

    <!-- Desktop preview mode -->
    <section v-else class="desktop-view">
      <div class="intro">
        <h1 class="title">The Taas Company Case</h1>

        <p class="description">
          <br />
          You can click on <em>either phone</em> to view the
          <strong>full page</strong>, or navigate inside them for a
          <strong>mobile view</strong>.
          <br />

          <span class="desktop">
            <br />
            Header controls allow switching between pages — the logo
            <strong>(</strong
            ><img class="inline-logo" src="/logo.png" alt="Logo" /><strong
              >)</strong
            >
            goes to homepage, and the basket
            <strong>(</strong
            ><img class="inline-basket" src="/basket.png" alt="Basket" /><strong
              >)</strong
            >
            opens checkout.
            <br /><br />
          </span>

          <strong class="thank-you">
            Thank you for taking the time to look through the project.
          </strong>
        </p>
      </div>

      <!-- Phone preview: homepage -->
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

      <!-- Phone preview: checkout -->
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

<style scoped>
.hub {
  max-height: 100dvh;
  padding: 10px;
  height: 100dvh;
  overflow: auto;
  display: flex;
  background: var(--titan-gradient);
}

/* Mobile */
.mobile-view {
  margin: auto;
  max-width: 480px;
  width: 100%;
  text-align: center;
}

.mobile-intro {
  border-radius: 24px;
  background: #fafcff99;
  padding: 24px;
  box-shadow: 0px 4px 16px 0px #2a2a480a;
}

.title {
  font-size: 28px;
  line-height: 30px;
}

.description {
  letter-spacing: 0.5px;
  line-height: 20px;
  font-size: 14px;
  color: var(--gray);
}

strong {
  color: var(--graphene);
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

/* Desktop layout */
.desktop-view {
  margin: auto;
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

/* Phone preview cards */
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
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  color: var(--snow);
}

/* Responsive tweaks */
@media (max-width: 1220px) {
  .desktop {
    display: none !important;
  }

  .hub {
    padding: 137px 10px 10px;
  }

  .intro {
    margin: 0;
    width: 100%;
    position: fixed;
    z-index: 10;
    top: 0;
    padding: 18px 24px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .phone-card {
    padding: 8px 8px 10px;
  }

  .phone-frame {
    width: 375px;
    height: 630px;
  }

  .desktop-view {
    align-items: end;
  }
}

@media (max-width: 500px), (max-height: 850px) {
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
    padding: 50px 16px;
    border-radius: 0;
    overflow: auto;
  }
}

@media (max-width: 950px) and (max-height: 650px) {
  .hub {
    padding: 0;
  }
  .mobile-intro {
    border-radius: 0;
    padding: 10px;
  }
}
</style>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const config = useRuntimeConfig();
const baseURL = config.app.baseURL;

const isMobile = ref(false);

function updateIsMobile() {
  if (typeof window === "undefined") return;

  const w = window.innerWidth;
  const h = window.innerHeight;

  const isPhone = (w <= 810 && h <= 1200) || (w <= 1200 && h <= 600);

  isMobile.value = isPhone;
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
