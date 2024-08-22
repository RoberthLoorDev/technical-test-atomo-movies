<template>
  <q-layout view="hHh lpR fFf">
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
.footer {
  height: 100px;
  background-color: #1c1d2d;
  padding: 0 100px;
}

.text-footer-container {
  display: flex;
  gap: 45px;
  font-size: 12px;
}

a {
  color: white;
  text-decoration: none;
}
</style>
