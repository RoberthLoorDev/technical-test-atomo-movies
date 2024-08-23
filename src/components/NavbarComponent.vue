<template>
  <!-- navbar -->
  <q-header class="text-white q-py-lg q-px-xl | navbar-style">
    <q-toolbar class="">
      <q-toolbar-title class="row items-center | icon-date-container">
        <a
          href="/"
          style="width: 131px"
          class="q-mb-md q-show-md q-show-lg q-show-xl q-mt-xs"
        >
          <q-img
            src="../assets/icon-page.png"
            style="max-height: 34px; max-width: 131px"
            alt="Atom movies"
          />
        </a>

        <div class="date-container">
          <span class="q-mr-md" style="opacity: 0.3"> | </span>
          <span style="font-size: 14px">{{ date }}</span>
        </div>
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { formattDateToNavbar } from "src/utils/utils";

const currentDate = new Date();
const date = formattDateToNavbar(currentDate);
</script>

<style>
.navbar-style {
  position: relative;
  display: flex;
  justify-content: center;
  background-color: transparent;
}

.icon-date-container {
  display: flex;
  justify-content: center;
}

.date-container {
  display: none;
}

@media (min-width: 768px) {
  .date-container {
    display: flex;
  }
  .icon-date-container {
    justify-content: space-between;
  }
}
</style>
