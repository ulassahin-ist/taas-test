<!-- components/Header.vue -->
<template>
  <section class="hero">
    <div class="main-wrapper wide-container flex">
      <div class="img-wrapper desktop disabled grow flex center">
        <img clas src="/icons/left.svg" alt="Left" />
      </div>
      <!-- inner-wrapper could be a component itself(HeroItem.vue) but i lack data so i am skipping -->
      <div class="inner-wrapper container flex center">
        <div class="text-wrapper column-2 flex column">
          <div class="light-head-text">NATURALS BY WATSONS</div>
          <div class="head-text">The new 2021 collection</div>
          <div class="text gap">
            Known as "the miracle plant", Aloe Vera helps to nourish, moisturize
            and keep the hair looking smooth. Let your hair be flexible and
            fresh.
          </div>
          <button class="btn-primary gap">SHOP NOW</button>
          <div class="pagination gap-8 flex">
            <img class="active" src="/icons/dotactive.svg" alt="Right" />
            <img src="/icons/dot.svg" alt="Right" />
            <img src="/icons/dot.svg" alt="Right" />
          </div>
        </div>
        <div class="banner-wrapper column-2 flex center">
          <!-- Used vue v-if here and repositioning in Banner.vue -->
          <img v-if="isMobile" src="/hero-mobile.png" alt="Hero Image" />
          <img v-else src="/hero.png" alt="Hero Image" />
        </div>
      </div>
      <div class="img-wrapper desktop grow flex center">
        <img src="/icons/right.svg" alt="Right" />
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

.img-wrapper {
  width: 48px;
  height: 48px;
  padding: 0;
  cursor: pointer;
}

.inner-wrapper {
  margin: 0;
  max-height: 100%;
  height: 100%;
}

.column-2 {
  flex: 0 0 50%;
}
.banner-wrapper {
  width: 100%;
  max-height: 295px;
}
.banner-wrapper img {
  width: 100%;
}

.light-head-text {
  color: var(--gray);
  font-weight: 600;
  font-family: Roboto;
  font-size: 14px;
  line-height: 16px;
}

.head-text {
  font-family: Rubik, sans-serif;
  font-weight: 700;
  font-size: 34px;
  line-height: 48px;
  color: var(--coal);
}

.text {
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

.pagination {
  margin-top: 40px;
  max-height: 8px;
  align-items: center;
}
.pagination img.active {
  height: 8px;
  width: 8px;
}
.pagination img {
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
  .banner-wrapper img {
    width: auto;
    height: 100%;
  }
  .gap {
    margin-top: 16px;
  }

  .light-head-text {
    font-size: 12px;
    line-height: 16px;
  }

  .head-text {
    font-size: 24px !important;
    line-height: 32px;
    letter-spacing: -0.2px;
  }

  .text {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--graphene);
  }
  .btn-primary {
    width: 100%;
  }
  .pagination {
    margin-top: 24px;
    justify-content: center;
  }
}
</style>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isMobile = ref(false);

function updateSize() {
  isMobile.value = window.innerWidth <= 768;
}

onMounted(() => {
  updateSize();
  window.addEventListener("resize", updateSize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateSize);
});
</script>
