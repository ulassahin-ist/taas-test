<template>
  <main class="hub">
    <section class="hub-hero">
      <div class="hub-tagline">PROJECT SCREENS</div>
      <h1 class="hub-title">Pick a screen to explore</h1>
      <p class="hub-subtitle">
        Preview each flow inside a phone mockup, or tap to open the full screen.
      </p>
    </section>

    <section class="hub-phones">
      <!-- PHONE 1: HOMEPAGE -->
      <NuxtLink to="/home" class="hub-phone-card">
        <div class="hub-phone-label">
          <span class="dot dot--primary"></span>
          <span>Homepage</span>
        </div>

        <div class="hub-phone-frame">
          <!-- Phone PNG frame -->
          <img
            src="/phone-frame.png"
            alt="Phone frame"
            class="hub-phone-image"
          />

          <!-- Screen area where component is rendered -->
          <div class="hub-phone-screen">
            <!-- Keep this as a lightweight visual preview -->
            <HomePage />
          </div>
        </div>

        <div class="hub-phone-footer">
          <span>Open homepage screen</span>
          <img src="/icons/right.svg" alt="Go" class="hub-phone-arrow" />
        </div>
      </NuxtLink>

      <!-- PHONE 2: BONUS -->
      <NuxtLink to="/bonus" class="hub-phone-card">
        <div class="hub-phone-label">
          <span class="dot dot--secondary"></span>
          <span>Bonus Screen</span>
        </div>

        <div class="hub-phone-frame">
          <img
            src="/phone-frame.png"
            alt="Phone frame"
            class="hub-phone-image"
          />

          <div class="hub-phone-screen">
            <BonusPage />
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
import HomePage from "~/components/HomePage.vue";
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

/* HERO TEXT */
.hub-hero {
  text-align: center;
  max-width: 640px;
  margin-bottom: 40px;
}

.hub-tagline {
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gray);
  margin-bottom: 8px;
}

.hub-title {
  font-family: Rubik, sans-serif;
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  color: var(--coal);
  margin-bottom: 8px;
}

.hub-subtitle {
  font-size: 14px;
  line-height: 22px;
  color: var(--graphene);
}

/* PHONES GRID */
.hub-phones {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 320px));
  gap: 32px;
  justify-content: center;
  width: 100%;
  max-width: 900px;
}

/* CARD AROUND EACH PHONE */
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

/* CARD HEADER LABEL */
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

/* PHONE MOCKUP */
.hub-phone-frame {
  position: relative;
  width: 100%;
  max-width: 280px;
  margin: 0 auto;
  aspect-ratio: 9 / 19.5; /* approximate phone ratio */
}

.hub-phone-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none;
}

/* Where the component is rendered inside the phone */
.hub-phone-screen {
  position: absolute;
  /* tweak these to match your PNG's actual screen area */
  top: 6%;
  left: 8%;
  right: 8%;
  bottom: 6%;
  border-radius: 24px;
  overflow: hidden;
  background: #ffffff;
}

/* Ensure embedded components shrink nicely */
.hub-phone-screen > * {
  width: 100%;
  height: 100%;
  display: block;
}

/* CARD FOOTER */
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

/* RESPONSIVE */
@media (max-width: 768px) {
  .hub {
    padding: 32px 16px 48px;
  }

  .hub-title {
    font-size: 24px;
    line-height: 32px;
  }

  .hub-phones {
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;
  }

  .hub-phone-frame {
    max-width: 260px;
  }
}
</style>
