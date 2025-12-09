<template>
  <section class="container flex column">
    <div class="feature-title-wrapper">
      <div class="featured-title-line"></div>
      <div class="feature-title">Featured categories</div>
    </div>
    <div class="featured-categories flex">
      <CategoryCard
        class="featured-category-item"
        v-for="c in fetchedCategories"
        :key="c.id"
        :category="c"
      />
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 760px;
  padding: 40px 0;
  gap: 40px;
}

.feature-title-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
}
.featured-title-line {
  position: absolute;
  width: 100%;
  height: 1px;
  background: #0099a81a;
  left: 0;
  right: 0;
  height: 1.5px;
  top: 50%;
  transform: translateY(-50%);
}
.feature-title {
  position: relative;
  font-family: Roboto;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: var(--secondary);
  padding: 0 32px;
  background: white;
  z-index: 1;
}

.featured-categories {
  width: 100%;
  flex-wrap: wrap;
  gap: 40px;
}

.featured-category-item {
  flex: 1 0 40%;
}
@media (max-width: 800px) {
  .container {
    padding: 24px;
    gap: 24px;
  }
  .featured-categories {
    gap: 24px;
  }
}
@media (max-width: 579px) {
  .container {
    padding: 16px;
    gap: 16px;
  }
  .featured-categories {
    width: 100%;
    gap: 16px;
  }
  .featured-category-item {
    flex: 1 1 100%;
    max-height: 232px;
  }
  .feature-title {
    font-size: 20px;
    line-height: 24px;
  }
}
</style>

<script setup>
import CategoryCard from "./CategoryCard.vue";

const config = useRuntimeConfig();
const baseURL = config.app.baseURL;

const fetchedCategories = [
  {
    id: 1,
    title: "Personal Care",
    description: "Lorem ipsum dolor sit amet consectetu elit aliquam",
    thumb: `${baseURL}ft-1.png`,
  },
  {
    id: 2,
    title: "Skin Care",
    description: "Lorem ipsum dolor sit amet consectetu elit aliquam",
    thumb: `${baseURL}ft-2.png`,
  },
  {
    id: 3,
    title: "Make - Up",
    description: "Lorem ipsum dolor sit amet consectetu elit aliquam",
    thumb: `${baseURL}ft-3.png`,
  },
  {
    id: 4,
    title: "Mother & Baby",
    description: "Lorem ipsum dolor sit amet consectetu elit aliquam",
    thumb: `${baseURL}ft-4.png`,
  },
];
</script>
