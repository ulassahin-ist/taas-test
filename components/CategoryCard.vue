<script setup>
defineProps({
  category: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="category-card">
    <div class="category-card-image-wrapper">
      <img :src="category.thumb" alt="thumb" />
    </div>
    <div class="category-card-content flex column gap-8">
      <div class="category-card-title">
        {{ category.title }}
      </div>
      <div class="category-card-description">
        {{ category.description }}
      </div>
      <button class="btn-secondary">BROWSE</button>
    </div>
  </div>
</template>

<style scoped>
.category-card {
  position: relative;
  flex: 1;
  padding: 64px;
  border-radius: var(--radius-md);
  border: 1px solid var(--smoke);
  overflow: hidden;
  box-shadow: 0px 1px 8px 0px #0000000a;
  transition: all 0.15s ease-in-out;
}
.category-card-image-wrapper {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
.category-card-content {
  padding: 16px;
  border-radius: var(--radius-md);
  background: #ffffffe5;
  transition: all 0.15s ease-in-out;
}
.category-card-title {
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
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
  border: 1px solid var(--smoke);
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
