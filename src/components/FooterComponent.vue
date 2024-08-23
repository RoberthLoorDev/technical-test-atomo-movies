<template>
  <q-footer class="text-white row | footer footer-style">
    <q-toolbar class="">
      <q-toolbar-title class="row items-center justify-between">
        <a href="/" style="width: 131px" class="icon-footer">
          <q-img
            src="../assets/icon-page.png"
            style="max-height: 34px; max-width: 111px"
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
</template>

<style>
.footer {
  position: relative;
  height: 80px;
  background-color: #1c1d2d;
  padding: 0 100px;
}
.icon-footer {
  display: none;
}

.text-footer-container {
  display: flex;
  gap: 45px;
  font-size: 12px;
}

@media (min-width: 768px) {
  .icon-footer {
    display: flex;
  }
}
</style>
