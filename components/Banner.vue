<!-- components/Header.vue -->
<template>
  <section class="banner flex center">
    <img class="img1" src="/banner-1.png" alt="Brand" />
    <div class="body flex column">
      <div class="top-texts full">
        <div class="t4 full">EN SEVDİĞİNİZ ÜRÜNLER</div>
        <div class="t3 full">TEK TIKLA KAPINIZDA!</div>
      </div>
      <div class="bottom-texts full">
        <div class="t2 full">60%</div>
        <div class="t1 full">DISCOUNT</div>
      </div>
      <div class="full">
        <button class="btn-sc">SHOP NOW</button>
      </div>
    </div>
    <img class="img2" src="/banner-2.png" alt="Brand" />
  </section>
</template>

<style scoped>
.full {
  width: 100%;
}
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
  gap: 12px;
  top: 51px;
  /* margin: 0 auto; */
  padding: 32px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  z-index: 3;
}
.t4 {
  font-family: Roboto;
  font-weight: 400;
  font-size: 16px;
  line-height: 14px;
  letter-spacing: 0px;
}
.t3 {
  font-family: Roboto;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0px;
}
.t2 {
  font-family: Rubik;
  font-weight: 700;
  font-size: 48px;
  line-height: 46px;
  letter-spacing: 0px;
}
.t1 {
  font-family: Rubik;
  font-weight: 700;
  font-size: 34px;
  line-height: 38px;
  letter-spacing: 0px;
}
img {
  z-index: 4;
}
.img1 {
  position: absolute;
  top: 75px;
  transform: translateX(-50%);
}
.img2 {
  position: absolute;
  top: 51px;
  transform: translateX(75%);
}
</style>
