<template>
  <section class="hero">
    <div class="main-wrapper wide-container flex">
      <!-- Styling error!! Left button is 64px from the center container and right is 80px -->
      <div class="nav-button-wrapper desktop disabled flex center">
        <img class="nav-button.left" src="/icons/left-light.svg" alt="Left" />
      </div>
      <!-- inner-wrapper could be a component itself(HeroItem.vue) but i lack data so i am skipping -->
      <div class="inner-wrapper container flex center">
        <div class="hero-text-content column-2 flex column">
          <div class="hero-text-label">NATURALS BY WATSONS</div>
          <div class="hero-text-title">The new 2021 collection</div>
          <div class="hero-text-body gap">
            Known as "the miracle plant", Aloe Vera helps to nourish, moisturize
            and keep the hair looking smooth. Let your hair be flexible and
            fresh.
          </div>
          <button class="btn-primary gap">SHOP NOW</button>
          <div class="hero-pagination gap-8 flex">
            <img class="active" src="/icons/dotactive.svg" alt="Right" />
            <img src="/icons/dot.svg" alt="Right" />
            <img src="/icons/dot.svg" alt="Right" />
          </div>
        </div>
        <div class="hero-image-wrapper column-2 flex center">
          <picture>
            <source media="(max-width: 768px)" srcset="/hero-mobile.png" />
            <img src="/hero.png" alt="Hero Image" />
          </picture>
        </div>
      </div>
      <div class="nav-button-wrapper desktop flex center">
        <img class="nav-button" src="/icons/right.svg" alt="Right" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  width: 100%;
  background: var(--titan-gradient);
  height: 400px;
  overflow: hidden;
}

.main-wrapper {
  height: 100%;
  justify-content: space-around;
  align-items: center;
}

.nav-button-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.15s ease;
}

.nav-button-wrapper:hover:not(.disabled) {
  background: #ececec;
}

.nav-button-wrapper:first-child {
  transform: translateX(15px);
}
.inner-wrapper {
  margin: 0;
  max-height: 100%;
  height: 100%;
}

.column-2 {
  flex: 0 0 50%;
}
.hero-image-wrapper {
  width: 100%;
  max-height: 295px;
}
.hero-image-wrapper img {
  width: 100%;
}

.hero-text-label {
  color: var(--gray);
  font-weight: 600;
  font-family: Roboto;
  font-size: 14px;
  line-height: 16px;
}

.hero-text-title {
  font-family: Rubik, sans-serif;
  font-weight: 700;
  font-size: 34px;
  line-height: 48px;
  color: var(--coal);
}

.hero-text-body {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--graphene);
}

.btn-primary {
  width: fit-content;
}

.gap {
  margin-top: 16px;
}

.hero-pagination {
  margin-top: 40px;
  max-height: 8px;
  align-items: center;
}
.hero-pagination img.active {
  height: 8px;
  width: 8px;
}
.hero-pagination img {
  height: 6px;
  width: 6px;
  cursor: pointer;
}
@media (max-width: 768px) {
  .desktop {
    display: none;
  }
  .hero {
    height: auto;
    background: var(--titan-light-gradient);
  }
  .inner-wrapper {
    margin: 0;
    flex-direction: column-reverse;
  }
  .column-2 {
    padding: 16px;
  }
  .hero-image-wrapper img {
    width: auto;
    height: 100%;
  }
  .gap {
    margin-top: 16px;
  }

  .hero-text-label {
    font-size: 12px;
    line-height: 16px;
  }

  .hero-text-title {
    font-size: 24px !important;
    line-height: 32px;
    letter-spacing: -0.2px;
  }

  .hero-text-body {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--graphene);
  }
  .btn-primary {
    width: 100%;
  }
  .hero-pagination {
    margin-top: 24px;
    justify-content: center;
  }
}
@media (max-width: 340px) {
  .hero-image-wrapper img {
    width: 100%;
    height: auto;
  }
}
</style>
