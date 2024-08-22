<template>
  <!-- header -->
  <section class="home-header q-px-xl row justify-between items-center">
    <div>
      <span class="text-white text-weight-light">Trending de la semana:</span>

      <h2 class="text-h2 text-white text-weight-bold q-mt-lg">Interestelar</h2>
      <div class="text-body1 text-grey-7 text-weight-bold q-mt-sm">
        <span> IMDb 8,72 </span>
        <span>2 h 42 min</span>
        <span>2014</span>
        <span class="">+16</span>
      </div>

      <p class="text-white text-weight-medium text-body1 q-mt-sm">
        Ciencia ficción · Aventura · Pesimista · Emotiva
      </p>
    </div>

    <!-- icon play -->
    <div class="button-play">
      <q-img src="../assets/play-icon.png" width="103px" />
    </div>

    <!-- background image -->
    <q-img
      src="../assets/banner-image-home.png"
      class="background-header-image"
    />
  </section>
</template>

<style>
.home-header {
  position: relative;
  height: 668px;
}

.button-play {
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-play::before {
  content: "";
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  opacity: 0.5;
}

.background-header-image {
  position: absolute;
  top: -10rem;
  left: 0;
  z-index: -10;
  opacity: 0.5;

  mask-image: linear-gradient(transparent, black 65%, transparent);
}
</style>
