<script setup>
defineProps({
  category: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <article class="category-card">
    <div class="category-card-image-wrapper">
      <img :src="category.thumb" alt="thumb" />
    </div>
    <div class="category-card-content flex column">
      <div class="category-card-title">
        {{ category.title }}
      </div>
      <div class="category-card-description">
        {{ category.description }}
      </div>
      <button class="btn-secondary">BROWSE</button>
    </div>
  </article>
</template>

<style scoped>
.category-card {
  position: relative;
  flex: 1;
  padding: 64px;
  border-radius: var(--radius-md);
  outline: 1px solid var(--smoke-50);
  overflow: hidden;
  box-shadow: 0px 1px 8px 0px #0000000a;
  transition: all 0.15s ease-in-out;
  /* box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3); */
}
.category-card-image-wrapper {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}
.category-card-image-wrapper::before {
  content: "";
  position: absolute;
  inset: 0;
  box-sizing: border-box;
  z-index: 1;
  background: var(--smoke-50);
  opacity: 0.15;
  pointer-events: none;
}
.category-card-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  position: relative;
  z-index: 0;
  /* Cant figure out what effects are on the figma */
  filter: contrast(1.05) saturate(0.9) brightness(1.05);
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
}

.category-card-content {
  padding: 16px;
  border-radius: var(--radius-md);
  background: #ffffffe5;
  transition: all 0.15s ease-in-out;
  gap: 8px;
}
.category-card-title {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
}
.category-card-description {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: var(--graphene);
}
.btn-secondary {
  width: fit-content;
  margin: 0 auto;
}
.category-card:hover {
  outline: 1px solid var(--smoke-50);
  box-shadow: 0px 1px 8px 0px #0000000a, 0px 24px 24px 0px #0000000f,
    0px -6px 30px 0px #0000000f;
}
.category-card:hover .category-card-content {
  background: var(--white);
}
@media (max-width: 579px) {
  .category-card {
    padding: 40px;
  }
}
</style>
