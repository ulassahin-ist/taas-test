<script setup>
defineProps({
  category: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="item">
    <div class="img-wrapper">
      <img :src="category.thumb" alt="thumb" />
    </div>
    <div class="body flex column gap-8">
      <div class="heading">
        {{ category.title }}
      </div>
      <div class="text">
        {{ category.description }}
      </div>
      <button class="btn-sc">BROWSE</button>
    </div>
  </div>
</template>

<style scoped>
.item {
  position: relative;
  flex: 1;
  padding: 64px;
  border-radius: var(--radius-md);
  border: 1px solid var(--smoke);
  overflow: hidden;
  box-shadow: 0px 1px 8px 0px #0000000a;
}
.img-wrapper {
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
.body {
  padding: 16px;
  border-radius: var(--radius-md);

  background: #ffffffe5;
}
.heading {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
}
.text {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: var(--graphene);
}
.btn-sc {
  width: fit-content;
  margin: 0 auto;
}
</style>
