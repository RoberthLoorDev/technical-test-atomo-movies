<template>
  <q-layout view="hHh lpR fFf">
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
            <span style="font-size: 14px">Wednesday, June 2018 • 12:06</span>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="text-white row | footer">
      <q-toolbar class="">
        <q-toolbar-title class="row items-center justify-between">
          <a href="/" style="width: 131px">
            <q-img
              src="../assets/icon-page.png"
              style="max-height: 34px; max-width: 131px"
              alt="Atom movies"
            />
          </a>

          <div class="text-footer-container">
            <a
              href="https://github.com/RoberthLoorDev"
              target="_blank"
              class="text-white"
              >GITHUB</a
            >
            <a
              href="https://www.linkedin.com/in/roberth-loor-837744227/"
              target="_blank"
              >LINKEDIN
            </a>
            <a href="https://portfolio-roberth.vercel.app/" target="_blank"
              >PROJECTS</a
            >
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup></script>

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
