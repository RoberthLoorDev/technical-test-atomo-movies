<template>
  <q-header class="text-white q-pa-xl" style="background-color: #030416">
    <q-toolbar class="">
      <q-toolbar-title class="row items-center justify-between">
        <a
          href="/"
          style="width: 131px"
          class="q-mb-md q-show-md q-show-lg q-show-xl"
        >
          <q-img
            src="../assets/icon-page.png"
            style="max-height: 34px; max-width: 131px"
            alt="Atom movies"
          />
        </a>

        <div class="q-hidden-md-and-up">
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
