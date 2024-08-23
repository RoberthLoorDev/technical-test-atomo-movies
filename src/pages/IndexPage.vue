<template>
  <q-page>
    <HeaderHome />
    <MoviesSection :movie-list="movies" />
  </q-page>
</template>

<script setup>
import HeaderHome from "src/sections/HeaderHomeSection.vue";
import MoviesSection from "src/sections/MoviesSection.vue";
import { ref, onMounted } from "vue";

import { useMovieApi } from "src/composables/useMovies";

const { movies, loading, error, getPopularMovies } = useMovieApi();

onMounted(() => {
  getPopularMovies();
});

defineOptions({
  name: "IndexPage",
});
</script>
