<!-- components/Header.vue -->
<template>
  <section class="banner flex center">
    <!-- Used repositioning here instead of static images -->
    <img class="banner-image-left" src="/banner-1.png" alt="Brand" />
    <div class="banner-content flex column">
      <div class="banner-text-group w-full">
        <!-- I could not get why these texts were half Turkish but kept it for pixel perfect's sake -->
        <div class="banner-text-label w-full">EN SEVDİĞİNİZ ÜRÜNLER</div>
        <div class="banner-text-title w-full">TEK TIKLA KAPINIZDA!</div>
      </div>
      <div class="banner-text-group w-full">
        <div class="banner-text-huge w-full">60 %</div>
        <div class="banner-text-large w-full">DISCOUNT</div>
      </div>
      <div class="w-full">
        <button class="btn-secondary">SHOP NOW</button>
      </div>
    </div>
    <img class="banner-image-right" src="/banner-2.png" alt="Brand" />
  </section>
</template>

<style scoped>
/* IMPORTANT: 
Here is a figma error by 5px that items collide with each other,
to match by pixel i had to crop the error height from 400px to 395px*/
.banner {
  position: relative;
  width: 100%;
  background: var(--teal-gradient);
  height: 395px;
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
.banner-content {
  position: absolute;
  background: var(--white);
  bottom: 103px;
  padding: 32px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  z-index: 3;
  transform: translateX(-9px);
  gap: 10px;
}
.banner-text-huge {
  font-family: Rubik;
  font-weight: 700;
  font-size: 48px;
  line-height: 46px;
}

.banner-text-large {
  font-family: Rubik;
  font-weight: 700;
  font-size: 34px;
  line-height: 38px;
}

.banner-text-title {
  font-family: Roboto;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  margin-top: 1px;
}

.banner-text-label {
  font-family: Roboto;
  font-weight: 400;
  font-size: 16px;
  line-height: 14px;
}
img {
  z-index: 4;
}
.banner-image-left {
  position: absolute;
  bottom: 33px;
  transform: translateX(-270px);
}
.banner-image-right {
  position: absolute;
  bottom: 55px;
  transform: translateX(228px);
}
@media (max-width: 790px) {
  .banner {
    height: 514px;
    flex-direction: column-reverse;
  }
  .banner-content {
    width: 242px;
    top: auto;
    bottom: 32px;
    padding: 32px;
    gap: 12px;
    transform: translateX(-12.5px);
  }
  .banner-image-left {
    top: auto;
    /* near half width of .banner-content for always being attached to center */
    transform: translateX(96px);
    height: 141px;
    bottom: 17px;
    margin: 0 auto;
  }
  .banner-image-right {
    top: 16px;
    transform: translateX(-9px);
    width: 250px;
  }
  .banner-text-huge {
    font-size: 34px;
    line-height: 48px;
  }

  .banner-text-large {
    font-size: 24px;
    line-height: 32px;
    width: 178px;
  }

  .banner-text-title {
    font-size: 16px;
    line-height: 16px;
  }

  .banner-text-label {
    font-size: 14px;
    line-height: 22px;
  }
}
</style>
