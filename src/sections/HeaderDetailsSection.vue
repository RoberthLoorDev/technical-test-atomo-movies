<template>
  <section class="details-container">
    <div class="date-age-container row justify-between">
      <span class="text-body2 col">15, July 2022</span>
      <div class="age-border">
        <span>+16</span>
      </div>
      <div class="age-border q-ml-md">
        <span>HD</span>
      </div>
    </div>

    <h2 class="q-mt-lg text-weight-bold">Inception</h2>
    <p class="q-mt-lg text-body1 | description-details-movie">
      Dom Cobb es un ladrón con una extraña habilidad para entrar a los sueños
      de la gente y robarles los secretos de sus subconscientes. Su habilidad lo
      ha vuelto muy popular en el mundo del espionaje corporativo, pero ha
      tenido un gran costo en la gente que ama. Cobb obtiene la oportunidad de
      redimirse.
    </p>

    <div class="row justify-between | info-duration-match-movie">
      <span class="text-weight-bold">83% Match</span>
      <span>1:46h</span>
    </div>

    <div class="q-mt-lg row | buttons-container">
      <q-btn outline color="white" label="TRAILER" padding="8px 20px" />
      <q-btn
        class="row"
        color="white"
        text-color="WATCH NOW"
        padding="8px 20px"
      >
        <q-img class="q-mr-md" src="../assets/play-black.png" width="20px" />
        <span class="text-black">WATCH NOW</span>
      </q-btn>
    </div>

    <!-- background image -->

    <q-img
      class="background-details-image"
      src="../assets/background-details-image.png"
      width="1100px"
    />

    <!--  -->
  </section>
</template>

<style>
.details-container {
  margin: 90px 0 0 120px;
  color: white;
}

.date-age-container {
  width: 250px;
}

.age-border {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 33px;
  height: 20px;
  border-radius: 2px;
  border: 1px solid #8c8e9e;
}

.description-details-movie {
  width: 616px;
}

.info-duration-match-movie {
  width: 324px;
}

.info-duration-match-movie::before {
  content: " ";
  height: 2px;
  width: 616px;
  background-color: #1c1d2d;
  margin: 16px 0;
}

.buttons-container {
  gap: 22px;
}

.background-details-image {
  position: absolute;
  top: -200px;
  right: 0;
  z-index: -20;
  opacity: 0.8;
  mask-image: linear-gradient(transparent, black 50%, transparent),
    linear-gradient(90deg, transparent, black 50%, transparent),
    linear-gradient(transparent, black 50%, transparent),
    linear-gradient(90deg, transparent, black 50%, transparent);
  mask-composite: intersect;
  object-fit: cover;
  object-position: center;
}
</style>
