<template>
  <section class="details-container">
    <div class="date-age-container row justify-between">
      <span class="text-body2 col">{{ movieDetailsForShow.date }}</span>
      <div class="age-border">
        <span>{{ movieDetailsForShow.language }}</span>
      </div>
      <div class="age-border q-ml-md">
        <span>HD</span>
      </div>
    </div>

    <h2 class="q-mt-lg text-weight-bold">{{ movieDetailsForShow.title }}</h2>
    <p class="q-mt-lg text-body1 | description-details-movie">
      {{ movieDetailsForShow.description }}
    </p>

    <div class="row justify-between | info-duration-match-movie">
      <span class="text-weight-bold">{{
        `${movieDetailsForShow.match}% Match`
      }}</span>
      <span>{{ movieDetailsForShow.duration }}</span>
    </div>

    <div class="q-mt-lg row | buttons-container">
      <q-btn
        outline
        color="white"
        label="TRAILER"
        padding="8px 20px"
        @click="goToTrailer"
      />
      <q-btn
        class="row"
        color="white"
        text-color="WATCH NOW"
        padding="8px 20px"
        @click="goToSeeMovie"
      >
        <q-img class="q-mr-md" src="../assets/play-black.png" width="20px" />
        <span class="text-black">WATCH NOW</span>
      </q-btn>
    </div>

    <!-- background image -->

    <q-img
      class="background-details-image"
      :src="movieDetailsForShow.image"
      width="1100px"
    />

    <!--  -->
  </section>
</template>

<script setup>
import { useMovies } from "src/composables/useMovies";
import {
  formattDateForEachMovie,
  formattMovieDuration,
  formattUrlPosterMovie,
  getYouTubeLink,
} from "src/utils/utils";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const movieId = ref(null);
const movieDetailsForShow = ref({
  date: null,
  language: null,
  title: null,
  description: null,
  match: null,
  duration: null,
  image: null,
  trailerLink: null,
  providerLink: null,
});

const {
  fetchMovieDetails,
  movieDetails,
  fetchMovieVideos,
  videoTrailer,
  fetchProviders,
  providersMovie,
} = useMovies();

onMounted(async () => {
  movieId.value = route.params.id;

  await fetchMovieDetails(movieId.value);
  await fetchMovieVideos(movieId.value);
  await fetchProviders(movieId.value);

  movieDetailsForShow.value = {
    date: formattDateForEachMovie(movieDetails.value.release_date),
    title: movieDetails.value.original_title,
    description: movieDetails.value.overview,
    duration: formattMovieDuration(movieDetails.value.runtime),
    image: formattUrlPosterMovie(movieDetails.value.backdrop_path, "w1280"),
    language: movieDetails.value.original_language,
    match: movieDetails.value.vote_average * 10,
    trailerLink: getYouTubeLink(videoTrailer.value),
  };
});

const goToTrailer = () => {
  window.open(movieDetailsForShow.value.trailerLink, "_blank");
};

const goToSeeMovie = () => {
  window.open(providersMovie.value, "_blank");
};
</script>

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
