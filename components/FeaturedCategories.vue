<script setup>
import CategoryCard from "./CategoryCard.vue";

const config = useRuntimeConfig();
const baseURL = config.app.baseURL;

const fetchedCategories = {
  1: {
    id: 1,
    title: "Personal Care",
    description: "Lorem ipsum dolor sit amet consectetu elit aliquam",
    thumb: `${baseURL}ft-1.png`,
  },
  2: {
    id: 2,
    title: "Skin Care",
    description: "Lorem ipsum dolor sit amet consectetu elit aliquam",
    thumb: `${baseURL}ft-2.png`,
  },
  3: {
    id: 3,
    title: "Make - Up",
    description: "Lorem ipsum dolor sit amet consectetu elit aliquam",
    thumb: `${baseURL}ft-3.png`,
  },
  4: {
    id: 4,
    title: "Mother & Baby",
    description: "Lorem ipsum dolor sit amet consectetu elit aliquam",
    thumb: `${baseURL}ft-4.png`,
  },
};
</script>
<template>
  <div class="container flex column">
    <div class="feature-title-wrapper">
      <div class="title-back-line"></div>
      <div class="feature-title">Featured categories</div>
    </div>
    <div class="categories flex">
      <CategoryCard
        class="category"
        v-for="c in fetchedCategories"
        :key="c.id"
        :category="c"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 760px;
  padding-bottom: 40px;
}

.feature-title-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 0;
}
.title-back-line {
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

.categories {
  width: 100%;
  flex-wrap: wrap;
  gap: 40px;
}

.category {
  flex: 1 0 40%;
}
@media (max-width: 579px) {
  .container {
    padding-bottom: 0;
  }
  .categories {
    width: 100%;
    gap: 16px;
    padding: 0 16px 16px 16px;
  }
  .category {
    flex: 1 1 100%;
  }
  .feature-title-wrapper {
    padding: 16px;
  }
  .feature-title {
    font-size: 20px;
    line-height: 24px;
  }
}
</style>
