<!-- components/Header.vue -->
<template>
  <section class="banner flex center">
    <img class="img1" src="/banner-1.png" alt="Brand" />
    <div class="body gap-12 flex column">
      <div class="top-texts w-full">
        <div class="text-sm w-full">EN SEVDİĞİNİZ ÜRÜNLER</div>
        <div class="heading-md w-full">TEK TIKLA KAPINIZDA!</div>
      </div>
      <div class="bottom-texts w-full">
        <div class="heading-xl w-full">60%</div>
        <div class="heading-lg w-full">DISCOUNT</div>
      </div>
      <div class="w-full">
        <button class="btn-sc">SHOP NOW</button>
      </div>
    </div>
    <img class="img2" src="/banner-2.png" alt="Brand" />
  </section>
</template>

<style scoped>
.banner {
  position: relative;
  width: 100%;
  background: var(--teal-gradient);
  height: 400px;
  overflow: hidden;
  z-index: 1;
  color: #00106b;
}
.banner::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("/banner-bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.6;
  pointer-events: none;
  z-index: 2;
}
.body {
  position: absolute;
  background: var(--white);
  top: 51px;
  padding: 32px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  z-index: 3;
}

img {
  z-index: 4;
}
.img1 {
  position: absolute;
  top: 75px;
  transform: translateX(-100%);
}
.img2 {
  position: absolute;
  top: 51px;
  transform: translateX(80%);
}
</style>
