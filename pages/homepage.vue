<template>
  <Hero />
  <FeaturedProducts />
  <div class="divider w-full" style="height: 1px; background: white"></div>
  <NewsletterSignUp />
  <Banner />
  <FeaturedCategories />
  <div class="divider w-full" style="height: 4px; background: white"></div>
</template>

<style scoped>
@media (max-width: 480px) {
  .divider {
    display: none;
  }
}
</style>
