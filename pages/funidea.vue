<template>
  <main class="hub">
    <section v-if="isMobile" class="hub-mobile">
      <h1 class="hub-mobile-title">Project screens</h1>
      <p class="hub-mobile-subtitle">
        Open each screen directly on your device.
      </p>

      <div class="hub-mobile-buttons">
        <NuxtLink to="/home" class="hub-mobile-button">
          Go to Homepage
        </NuxtLink>

        <NuxtLink
          to="/bonus"
          class="hub-mobile-button hub-mobile-button--secondary"
        >
          Go to Bonus Screen
        </NuxtLink>
      </div>
    </section>

    <section v-else class="hub-phones">
      <NuxtLink to="/homepage" class="hub-phone-card">
        <div class="hub-phone-label">
          <span class="dot dot--primary"></span>
          <span>Homepage</span>
        </div>

        <div class="hub-phone-frame">
          <div class="hub-phone-screen">
            <iframe
              src="/homepage"
              class="phone-iframe"
              title="Homepage preview"
            ></iframe>
          </div>
        </div>

        <div class="hub-phone-footer">
          <span>Open homepage screen</span>
          <img src="/icons/right.svg" alt="Go" class="hub-phone-arrow" />
        </div>
      </NuxtLink>

      <NuxtLink to="/homepage" class="hub-phone-card">
        <div class="hub-phone-label">
          <span class="dot dot--secondary"></span>
          <span>Bonus Screen</span>
        </div>

        <div class="hub-phone-frame">
          <div class="hub-phone-screen">
            <iframe
              src="/bonus"
              class="phone-iframe"
              title="Bonus preview"
            ></iframe>
          </div>
        </div>

        <div class="hub-phone-footer">
          <span>Open bonus flow</span>
          <img src="/icons/right.svg" alt="Go" class="hub-phone-arrow" />
        </div>
      </NuxtLink>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isMobile = ref(false);

function updateIsMobile() {
  if (typeof window === "undefined") return;
  isMobile.value = window.innerWidth <= 768;
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
  padding: 48px 16px 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hub-mobile {
  max-width: 480px;
  width: 100%;
  text-align: center;
}

.hub-mobile-title {
  font-family: Rubik, sans-serif;
  font-size: 28px;
  line-height: 34px;
  font-weight: 700;
  color: var(--coal);
  margin-bottom: 8px;
}

.hub-mobile-subtitle {
  font-size: 14px;
  line-height: 22px;
  color: var(--graphene);
  margin-bottom: 24px;
}

.hub-mobile-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.hub-mobile-button {
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

.hub-mobile-button--secondary {
  background: var(--secondary);
}

.hub-mobile-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.16);
}

.hub-phones {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 420px));
  gap: 32px;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
}

.hub-phone-card {
  display: flex;
  flex-direction: column;
  padding: 16px 16px 20px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.12);
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.hub-phone-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 26px 60px rgba(15, 23, 42, 0.18);
  background: #ffffff;
}

.hub-phone-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 500;
  color: var(--graphene);
  margin-bottom: 12px;
}

.dot {
  height: 8px;
  width: 8px;
  border-radius: 50%;
}

.dot--primary {
  background: var(--primary);
}

.dot--secondary {
  background: var(--secondary);
}

.hub-phone-frame {
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

.hub-phone-screen {
  width: 100%;
  height: 100%;
  border-radius: 26px;
  overflow: hidden;
  background: #ffffff;
}

.phone-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.hub-phone-footer {
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  color: var(--gray);
}

.hub-phone-arrow {
  width: 16px;
  height: 16px;
}

@media (max-width: 900px) {
  .hub-phones {
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;
  }

  .hub-phone-frame {
    width: 340px;
    height: calc(340px * 667 / 375);
  }
}
</style>
