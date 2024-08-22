<template>
  <q-layout view="hHh lpR fFf" class="main-layout">
    <NavbarComponent />

    <q-page-container>
      <router-view />
    </q-page-container>

    <FooterComponent />
  </q-layout>
</template>

<script setup>
import FooterComponent from "src/components/FooterComponent.vue";
import NavbarComponent from "src/components/NavbarComponent.vue";
</script>

<style>
a {
  color: white;
  text-decoration: none;
}

.main-layout {
  width: 100%;
}
</style>
