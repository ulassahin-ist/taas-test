<!-- app.vue -->

<!-- ##NOTE## 
        Normally i would wrap some elements like icons and images in wrappers but 
        figma already gives a fixed size so i skip some -->
<template>
  <div>
    <Header v-if="route.path !== '/'" />
    <NuxtPage />
    <Footer v-if="route.path !== '/'" />
  </div>
</template>

<script setup>
const route = useRoute();
</script>

<style></style>
