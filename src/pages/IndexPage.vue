<template>
  <q-page>
    <HeaderHome />
    <MoviesSection />
  </q-page>
</template>

<script setup>
import HeaderHome from "src/sections/HeaderHomeSection.vue";
import MoviesSection from "src/sections/MoviesSection.vue";

defineOptions({
  name: "IndexPage",
});
</script>
