<script setup>
import CategoryCard from "./CategoryCard.vue";

const fetchedCategories = {
  1: {
    id: 1,
    title: "Personal Care",
    description: "Lorem ipsum dolor sit amet consectetu elit aliquam",
    thumb: "/ft-1.png",
  },
  2: {
    id: 2,
    title: "Skin Care",
    description: "Lorem ipsum dolor sit amet consectetu elit aliquam",
    thumb: "/ft-2.png",
  },
  3: {
    id: 3,
    title: "Make-Up",
    description: "Lorem ipsum dolor sit amet consectetu elit aliquam",
    thumb: "/ft-3.png",
  },
  4: {
    id: 4,
    title: "Mother & Baby",
    description: "Lorem ipsum dolor sit amet consectetu elit aliquam",
    thumb: "/ft-4.png",
  },
};
</script>
<template>
  <div class="container flex column">
    <div class="feature-title-wrapper">
      <div class="feature-title">Featured categories</div>
    </div>
    <div class="categories flex gap-40">
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
.categories {
  width: 100%;
  flex-wrap: wrap;
}
.category {
  flex: 1 0 40%;
}
</style>
