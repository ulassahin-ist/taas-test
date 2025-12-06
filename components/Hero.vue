<!-- components/Header.vue -->
<template>
  <section class="hero">
    <div class="main-wrapper wide-container flex center">
      <div class="img-wrapper disabled grow flex center">
        <img clas src="/icons/left.svg" alt="Left" />
      </div>
      <!-- inner-wrapper could be a component itself(HeroItem.vue) but i lack data so i am skipping -->
      <div class="inner-wrapper container flex center">
        <div class="column-2 flex center">
          <div class="text-wrapper flex column">
            <h4>NATURALS BY WATSONS</h4>
            <h2>The new 2021 collection</h2>
            <p class="text-margin">
              Known as "the miracle plant", Aloe Vera helps to nourish,
              moisturize and keep the hair looking smooth. Let your hair be
              flexible and fresh.
            </p>
            <button class="btn-primary text-margin">SHOP NOW</button>
            <div class="pagination gap-8 flex">
              <img src="/icons/dotactive.svg" alt="Right" />
              <img src="/icons/dot.svg" alt="Right" />
              <img src="/icons/dot.svg" alt="Right" />
            </div>
          </div>
        </div>
        <div class="column-2">
          <img src="/hero-right.png" alt="Hero Image" />
        </div>
      </div>
      <div class="img-wrapper grow flex center">
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
}

.main-wrapper {
  height: 100%;
  justify-content: space-around !important;
}

.img-wrapper {
  width: 48px;
  height: 48px;
  padding: 0;
  cursor: pointer;
}

.inner-wrapper {
  margin: 0;
}

.column-2 {
  flex: 0 0 50%;
}

.column-2 img {
  width: 100%;
}

.text-wrapper {
  font-size: 14px;
  line-height: 16px;
}

.text-wrapper h4 {
  color: var(--gray);
  font-weight: 700;
}

.text-wrapper h2 {
  font-family: Rubik, sans-serif;
  font-weight: 700;
  font-size: 34px;
  line-height: 48px;
  color: var(--coal);
}

.text-wrapper p {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--graphene);
}

.btn-primary {
  width: fit-content;
}

.text-margin {
  margin-top: 16px;
}

.pagination {
  margin-top: 40px;
}

.pagination img {
  height: 6px;
  width: 6px;
  cursor: pointer;
}
</style>
